#!/usr/bin/env python3
"""Convert site raster assets to WebP and re-compress oversized WebP previews."""
from pathlib import Path
from PIL import Image, ImageOps
import io

ROOT = Path(".")
TEXT_SUFFIXES = {".html", ".htm", ".css", ".js", ".mjs", ".json", ".xml", ".md", ".txt", ".yml", ".yaml", ".webmanifest"}
SOURCE_SUFFIXES = {".png", ".jpg", ".jpeg"}
MAX_WIDTH = 1440
QUALITY = 80

def encode_webp(image, quality):
    output = io.BytesIO()
    image.save(output, format="WEBP", quality=quality, method=5, lossless=False)
    return output.getvalue()

def main():
    replacements = {}
    saved = 0
    converted = 0
    optimized = 0
    candidates = [p for p in ROOT.rglob("*") if p.is_file() and p.suffix.lower() in SOURCE_SUFFIXES | {".webp"} and ".git" not in p.parts]
    for path in candidates:
        try:
            with Image.open(path) as source:
                image = ImageOps.exif_transpose(source)
                if path.suffix.lower() == ".webp" and path.stat().st_size < 250_000:
                    continue
                if image.width > MAX_WIDTH:
                    height = round(image.height * MAX_WIDTH / image.width)
                    image = image.resize((MAX_WIDTH, height), Image.Resampling.LANCZOS)
                has_alpha = "A" in image.getbands() or "transparency" in image.info
                image = image.convert("RGBA" if has_alpha else "RGB")
                data = encode_webp(image, 88 if has_alpha else QUALITY)
            if path.suffix.lower() == ".webp":
                old_size = path.stat().st_size
                if len(data) >= old_size * 0.98:
                    continue
                path.write_bytes(data)
                optimized += 1
                saved += old_size - len(data)
                print(f"RECOMPRESS {path}: {old_size} -> {len(data)} bytes", flush=True)
            else:
                if len(data) >= path.stat().st_size * 0.98:
                    continue
                target = path.with_suffix(".webp")
                target.write_bytes(data)
                replacements[path.as_posix()] = target.as_posix()
                converted += 1
                saved += path.stat().st_size - len(data)
                print(f"CONVERT {path}: {path.stat().st_size} -> {len(data)} bytes", flush=True)
        except Exception as exc:
            print(f"SKIP {path}: {exc}", flush=True)
    rewritten = 0
    if replacements:
        for file in ROOT.rglob("*"):
            if not file.is_file() or file.suffix.lower() not in TEXT_SUFFIXES or ".git" in file.parts:
                continue
            try:
                original = file.read_text(encoding="utf-8")
            except (UnicodeDecodeError, OSError):
                continue
            updated = original
            for old, new in replacements.items():
                updated = updated.replace(old, new)
            if updated != original:
                file.write_text(updated, encoding="utf-8")
                rewritten += 1
                print(f"REWRITE {file}", flush=True)
        for old in replacements:
            Path(old).unlink()
    print(f"SUMMARY converted={converted} recompressed={optimized} rewritten_files={rewritten} saved_bytes={saved}", flush=True)

if __name__ == "__main__":
    main()
