#!/usr/bin/env python3
"""Convert referenced PNG/JPEG site assets to smaller WebP files and rewrite references."""
from pathlib import Path
from PIL import Image, ImageOps
import io

ROOT = Path(".")
TEXT_SUFFIXES = {".html", ".htm", ".css", ".js", ".mjs", ".json", ".xml", ".md", ".txt", ".yml", ".yaml", ".webmanifest"}
IMAGE_SUFFIXES = {".png", ".jpg", ".jpeg"}
MAX_WIDTH = 1920
QUALITY = 84

def optimize(path: Path):
    try:
        with Image.open(path) as source:
            image = ImageOps.exif_transpose(source)
            if image.width > MAX_WIDTH:
                height = round(image.height * MAX_WIDTH / image.width)
                image = image.resize((MAX_WIDTH, height), Image.Resampling.LANCZOS)
            has_alpha = "A" in image.getbands() or "transparency" in image.info
            image = image.convert("RGBA" if has_alpha else "RGB")
            output = io.BytesIO()
            image.save(output, format="WEBP", quality=QUALITY, method=6, lossless=has_alpha)
            data = output.getvalue()
        if len(data) >= path.stat().st_size * 0.98:
            return None
        return data
    except Exception as exc:
        print(f"SKIP {path}: {exc}")
        return None

def main():
    candidates = [p for p in ROOT.rglob("*") if p.is_file() and p.suffix.lower() in IMAGE_SUFFIXES and ".git" not in p.parts]
    replacements = {}
    saved = 0
    converted = 0
    for path in candidates:
        data = optimize(path)
        if data is None:
            continue
        target = path.with_suffix(".webp")
        target.write_bytes(data)
        replacements[path.as_posix()] = target.as_posix()
        saved += path.stat().st_size - len(data)
        converted += 1
        print(f"CONVERT {path}: {path.stat().st_size} -> {len(data)} bytes")
    if not replacements:
        print("No raster images needed conversion.")
        return
    rewritten = 0
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
            print(f"REWRITE {file}")
    for old in replacements:
        Path(old).unlink()
    print(f"SUMMARY converted={converted} rewritten_files={rewritten} saved_bytes={saved}")

if __name__ == "__main__":
    main()
