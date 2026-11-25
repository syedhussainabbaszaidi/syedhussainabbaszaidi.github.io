(()=>{const icon=document.querySelector('link[rel~="icon"]');if(!icon){const link=document.createElement('link');link.rel='icon';link.type='image/svg+xml';link.href='/favicon.svg';document.head.appendChild(link)}const q=s=>document.querySelector(s),drawer=q("#globalDrawer"),toggle=q("#globalToggle"),close=q("#globalClose"),reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const applySocialMeta=()=>{const canonical=document.querySelector('link[rel="canonical"]')?.href||location.href;const description=document.querySelector('meta[name="description"]')?.content||document.querySelector('meta[property="og:description"]')?.content||'';const image=document.querySelector('#caseImage')?.src||document.querySelector('meta[property="og:image"]')?.content||'https://syedhussainabbaszaidi.github.io/webImages/hussain-logo.webp';const title=document.title;const set=(attr,key,value)=>{let el=document.head.querySelector('meta['+attr+'="'+key+'"]');if(!el){el=document.createElement('meta');el.setAttribute(attr,key);document.head.appendChild(el)}el.content=value};set('property','og:type','website');set('property','og:title',title);set('property','og:description',description);set('property','og:url',canonical);set('property','og:image',image);set('property','og:image:alt',title+' — portfolio preview');set('name','twitter:card','summary_large_image');set('name','twitter:title',title);set('name','twitter:description',description);set('name','twitter:image',image)};applySocialMeta();
const services=[["All Services","/services/"],["Shopify Development","/services/shopify-development/"],["WordPress Development","/services/wordpress-development/"],["Next.js & React","/services/nextjs-development/"],["CMS Website Development","/services/cms-website-development/"],["Digital Marketing","/services/digital-marketing/"],["SEO Services","/services/digital-marketing/seo-services/"],["ASP.NET Development","/services/aspnet-development/"],["PHP & Laravel","/services/php-laravel-development/"],["ERP Software","/services/erp-software-development/"],["AI Development","/services/ai-development/"],["AI Agent Development","/services/ai-development/ai-agent-development/"],["Finance Software","/services/finance-software-development/"],["Gaming Software","/services/gaming-software-development/"]];
const links=services.map(x=>'<a href="'+x[1]+'">'+x[0]+'</a>').join("");
const header=q(".header");if(header){header.innerHTML='<div class="wrap nav"><a class="logo" href="/" aria-label="Home"><img src="/webImages/hussain-logo.webp" alt="Hussain — Software Engineer" class="shaz-brand-img" width="2048" height="371" fetchpriority="high" decoding="async"></a><nav class="links" aria-label="Main navigation"><a href="/about/">About</a><div class="nav-dropdown"><button class="nav-dropdown-trigger" type="button" aria-expanded="false">Services <i class="nav-chevron"></i></button><div class="nav-mega"><div class="nav-mega-heading"><small>BUILD · AUTOMATE · GROW</small><strong>Services that move business forward</strong><p>Websites, software, AI and digital growth solutions.</p><a href="/services/">Explore all services ↗</a></div><div class="nav-mega-links">'+links+'</div></div></div><a href="/expertise/">Expertise</a><a href="/industries/">Industries</a><a href="/projects/">Portfolio</a><a href="/resume/">Resume</a><a class="nav-cta" href="/contact/">Let’s talk <span>↗</span></a></nav><button class="toggle" id="globalToggle" type="button" aria-label="Open navigation menu" aria-expanded="false"><span></span><span></span></button></div>';}
let d=q("#globalDrawer");if(!d){d=document.createElement("aside");d.id="globalDrawer";header?.insertAdjacentElement("afterend",d)}if(d){d.className="global-drawer";d.setAttribute("aria-hidden","true");d.innerHTML='<div class="drawer-top"><a class="logo" href="/"><img src="/webImages/hussain-logo.webp" alt="Hussain — Software Engineer" class="shaz-brand-img" width="2048" height="371" fetchpriority="high" decoding="async"></a><button type="button" id="globalClose" aria-label="Close navigation">×</button></div><div class="drawer-main-view"><nav class="drawer-nav"><a href="/about/">About</a><a href="/expertise/">Expertise</a><button class="drawer-services-open" type="button">Services <span>↗</span></button><a href="/industries/">Industries</a><a href="/projects/">Portfolio</a><a href="/resume/">Resume</a><a href="/contact/">Contact</a></nav></div><section class="drawer-services-panel" aria-hidden="true"><div class="drawer-services-panel-top"><button type="button" class="drawer-back-menu">← Back to menu</button><span>EXPLORE SERVICES</span></div><div class="drawer-services-links">'+services.map((x,i)=>'<a href="'+x[1]+'" class="drawer-service-tile"><span class="drawer-service-icon" aria-hidden="true">'+["◈","▦","✳","▤","⌘","✺","▥","✦","⚙","◎","✧","↗","▣","◉"][i]+'</span><span class="drawer-service-name">'+x[0]+'</span><span class="drawer-service-arrow">↗</span></a>').join("")+'</div><a class="drawer-all-services" href="/services/">View all services ↗</a></section><div class="drawer-bottom"><span>Let’s create something meaningful.</span><a href="https://wa.me/923148069163" target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a></div>';}
const t=q("#globalToggle"),cl=q("#globalClose"),servicesOpen=d?.querySelector(".drawer-services-open"),servicesBack=d?.querySelector(".drawer-back-menu"),servicesPanel=d?.querySelector(".drawer-services-panel");const shut=()=>{if(!d||!t)return;t.setAttribute("aria-expanded","false");d.classList.remove("is-open","services-view");d.setAttribute("aria-hidden","true");servicesPanel?.setAttribute("aria-hidden","true");document.body.classList.remove("menu-open")};
const openDrawer=()=>{if(!d||!t)return;t.setAttribute("aria-expanded","true");d.classList.add("is-open");d.setAttribute("aria-hidden","false");document.body.classList.add("menu-open");if(window.gsap&&!reduce)gsap.fromTo(d,{xPercent:105},{xPercent:0,duration:.62,ease:"power4.out",overwrite:true});else d.style.transform="translateX(0)"};
t?.addEventListener("click",()=>t.getAttribute("aria-expanded")==="true"?shut():openDrawer());cl?.addEventListener("click",shut);d?.addEventListener("click",e=>{if(e.target===d)shut()});d?.querySelectorAll(".drawer-nav a,.drawer-services-links a,.drawer-all-services,.drawer-bottom a").forEach(a=>a.addEventListener("click",shut));
servicesOpen?.addEventListener("click",()=>{d.classList.add("services-view");servicesPanel?.setAttribute("aria-hidden","false");if(window.gsap&&!reduce){gsap.fromTo(servicesPanel,{xPercent:35,opacity:0},{xPercent:0,opacity:1,duration:.48,ease:"power3.out",overwrite:true});gsap.from(servicesPanel.querySelectorAll(".drawer-service-tile"),{y:18,opacity:0,duration:.42,stagger:.035,ease:"power3.out",delay:.08})}});
servicesBack?.addEventListener("click",()=>{d.classList.remove("services-view");servicesPanel?.setAttribute("aria-hidden","true");if(window.gsap&&!reduce)gsap.fromTo(d.querySelector(".drawer-main-view"),{x:-18,opacity:.65},{x:0,opacity:1,duration:.32,ease:"power2.out",clearProps:"transform"})});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(d?.classList.contains("services-view"))servicesBack?.click();else shut()}});const dropdown=q(".nav-dropdown"),db=q(".nav-dropdown-trigger");db?.addEventListener("click",()=>{const open=!dropdown.classList.contains("is-open");dropdown.classList.toggle("is-open",open);db.setAttribute("aria-expanded",String(open))});document.addEventListener("click",e=>{if(dropdown&&!dropdown.contains(e.target)){dropdown.classList.remove("is-open");db?.setAttribute("aria-expanded","false")}});
const footer=q(".footer");if(footer)footer.innerHTML='<div class="wrap"><div class="footer-top"><a class="footer-brand" href="/"><img src="/webImages/hussain-logo.webp" alt="Hussain — Software Engineer" class="shaz-brand-img" decoding="async"></a><p>Thoughtful websites.<br>Purposeful digital experiences.</p><a class="back-top" href="#top">Back to top ↑</a></div><div class="footer-service-links"><div><small>EXPLORE</small><a href="/about/">About</a><a href="/services/">Services</a><a href="/expertise/">Expertise</a><a href="/industries/">Industries</a><a href="/projects/">Portfolio</a><a href="/resume/">Resume</a><a href="/contact/">Contact</a></div><div><small>WEB & GROWTH</small><a href="/services/shopify-development/">Shopify Development</a><a href="/services/wordpress-development/">WordPress Development</a><a href="/services/nextjs-development/">Next.js & React</a><a href="/services/cms-website-development/">CMS Website Development</a><a href="/services/digital-marketing/">Digital Marketing</a><a href="/services/digital-marketing/seo-services/">SEO Services</a></div><div><small>SOFTWARE & AI</small><a href="/services/aspnet-development/">ASP.NET</a><a href="/services/php-laravel-development/">PHP & Laravel</a><a href="/services/erp-software-development/">ERP Software</a><a href="/services/ai-development/">AI Development</a><a href="/services/ai-development/ai-agent-development/">AI Agents</a><a href="/services/finance-software-development/">Finance Software</a><a href="/services/gaming-software-development/">Gaming Software</a></div></div><div class="footer-bottom"><span>© '+new Date().getFullYear()+' Syed Hussain Abbas Zaidi</span><div><a href="https://www.linkedin.com/in/s-hussainabbaszaidi/" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://www.fiverr.com/syedhussain610" target="_blank" rel="noopener">Fiverr ↗</a><a href="https://www.facebook.com/Hussainsoftwareengineer/" target="_blank" rel="noopener">Facebook ↗</a></div><span>Designed & developed with care.</span></div></div>';
if(!q(".whatsapp-float"))document.body.insertAdjacentHTML("beforeend",'<a class="whatsapp-float" href="https://wa.me/923148069163?text=Hello%20Hussain%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" aria-label="Connect with us on WhatsApp"><span class="contact-float-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 11.5a7.5 7.5 0 0 1-11.1 6.6L4 19l.9-4.5A7.5 7.5 0 1 1 20 11.5Z"/><path d="M9 9.2c.3 1.9 1.8 3.4 3.7 3.8"/></svg></span><span class="contact-float-copy"><strong>Connect with Us</strong><small>Need help? Let’s talk</small></span><span class="contact-float-arrow" aria-hidden="true">↗</span></a>');
document.querySelectorAll('a[target="_blank"]').forEach(a=>a.rel="noopener noreferrer");
if(window.gsap&&window.ScrollTrigger&&!reduce){gsap.registerPlugin(ScrollTrigger);const hero=gsap.timeline({defaults:{ease:"power3.out"}});hero.from(".editorial-hero .eyebrow",{y:18,opacity:0,duration:.6}).from(".editorial-title",{y:75,opacity:0,duration:1,stagger:.08},"-=.25").from(".editorial-hero-bottom>*",{y:28,opacity:0,duration:.75,stagger:.14},"-=.45");gsap.utils.toArray(".section-kicker,.editorial-statement,.editorial-copy-grid,.principle-row,.capability-panel,.expertise-lead-grid,.expertise-item,.process-grid>*").forEach((el,i)=>gsap.from(el,{y:36,opacity:0,duration:.72,ease:"power3.out",delay:el.classList.contains("capability-panel")?(i%3)*.07:0,scrollTrigger:{trigger:el,start:"top 87%",once:true}}));gsap.from(".editorial-cta-inner>*",{y:30,opacity:0,duration:.8,stagger:.14,scrollTrigger:{trigger:".editorial-cta",start:"top 80%",once:true}});window.addEventListener("load",()=>ScrollTrigger.refresh(),{once:true});}
const arrowWalker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let arrowNode;while(arrowNode=arrowWalker.nextNode())arrowNode.nodeValue=arrowNode.nodeValue.replace(/↗(?!︎)/g,"↗︎").replace(/↑(?!︎)/g,"↑︎").replace(/↓(?!︎)/g,"↓︎").replace(/→(?!︎)/g,"→︎");})();

/* Keep every generated or static footer social link pointed to Facebook. */
(()=>{const facebookUrl='https://www.facebook.com/Hussainsoftwareengineer/';const fixFooterLinks=()=>{document.querySelectorAll('footer a,.footer a').forEach(a=>{if(/github\.com/i.test(a.getAttribute('href')||'')||/github/i.test(a.textContent||'')){a.href=facebookUrl;a.textContent='Facebook ↗';a.target='_blank';a.rel='noopener noreferrer';}});};fixFooterLinks();if(window.MutationObserver&&document.documentElement){const observer=new MutationObserver(fixFooterLinks);observer.observe(document.documentElement,{childList:true,subtree:true});}})();


/* Single-instance brand logos and a minimum-three-second, fail-safe loader */
(()=> {
  if (window.__shazBrandInit) return;
  window.__shazBrandInit = true;

  const logoSrc = '/webImages/hussain-logo.webp';
  const makeLogo = (className, alt) => {
    const img = document.createElement('img');
    img.src = logoSrc;
    img.alt = alt;
    img.className = className;
    img.decoding = 'async';
    img.loading = 'eager';
    return img;
  };

  document.querySelectorAll('.header .logo,.drawer-top .logo,.footer-brand').forEach(link => {
    link.replaceChildren(makeLogo('shaz-brand-img', 'Hussain — Software Engineer'));
    link.setAttribute('aria-label', 'Hussain — Software Engineer');
  });

  if (!document.getElementById('shaz-brand-styles')) {
    const style = document.createElement('style');
    style.id = 'shaz-brand-styles';
    style.textContent = `
      .header .logo,.drawer-top .logo,.footer-brand{display:flex!important;align-items:center;justify-content:flex-start;width:auto!important;height:auto!important;min-width:0!important;padding:0!important;border:0!important;background:none!important;border-radius:0!important;overflow:visible}
      .shaz-brand-img{display:block!important;width:clamp(125px,13vw,185px)!important;height:auto!important;max-height:38px!important;object-fit:contain!important}
      .footer-brand .shaz-brand-img{width:clamp(150px,18vw,215px)!important;max-height:44px!important}
      .drawer-top .shaz-brand-img{width:145px!important;max-height:34px!important}
      .shaz-preloader{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;background:#050706;opacity:1;visibility:visible;pointer-events:auto;transition:opacity .25s ease,visibility .25s ease;overflow:hidden}
      .shaz-preloader.is-leaving{opacity:0;visibility:hidden;pointer-events:none}
      .shaz-loader-orbit{position:absolute;width:min(68vw,500px);aspect-ratio:1;border:1px solid rgba(190,235,92,.16);border-radius:50%;animation:shaz-orbit 5s linear infinite}
      .shaz-loader-orbit:after{content:"";position:absolute;inset:12%;border:1px solid rgba(190,235,92,.18);border-radius:50%}
      .shaz-loader-content{position:relative;z-index:1;width:min(74vw,340px);text-align:center}
      .shaz-loader-logo{display:block;width:100%;height:auto;filter:drop-shadow(0 0 20px rgba(185,243,107,.12));animation:shaz-logo-in .65s ease both}
      .shaz-loader-track{height:3px;width:68%;margin:22px auto 0;background:rgba(255,255,255,.16);border-radius:9px;overflow:hidden}
      .shaz-loader-track span{display:block;width:35%;height:100%;border-radius:9px;background:#c8f36a;animation:shaz-progress 1.15s ease-in-out infinite}
      .shaz-loader-caption{display:block;margin-top:12px;color:#b7c99a;font:500 10px/1.5 Poppins,Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase}
      @keyframes shaz-progress{0%{transform:translateX(-110%)}100%{transform:translateX(310%)}}
      @keyframes shaz-orbit{to{transform:rotate(360deg)}}
      @keyframes shaz-logo-in{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}
      @media(max-width:600px){.header .shaz-brand-img{width:125px!important;max-height:30px!important}.shaz-loader-content{width:min(82vw,290px)}}
      @media(prefers-reduced-motion:reduce){.shaz-loader-orbit,.shaz-loader-logo,.shaz-loader-track span{animation:none!important}.shaz-preloader{transition:opacity .2s ease,visibility .2s ease}}
    `;
    document.head.appendChild(style);
  }

  let showInitialLoader = false;
  try {
    showInitialLoader = sessionStorage.getItem('shaz_initial_loader_seen') !== '1';
    if (showInitialLoader) sessionStorage.setItem('shaz_initial_loader_seen', '1');
  } catch (error) {
    showInitialLoader = !window.__shazInitialLoaderSeen;
    window.__shazInitialLoaderSeen = true;
  }

  if (showInitialLoader && !document.getElementById('shaz-preloader') && document.body) {
    const loader = document.createElement('div');
    loader.className = 'shaz-preloader';
    loader.id = 'shaz-preloader';
    loader.setAttribute('role', 'status');
    loader.setAttribute('aria-label', 'Loading website');
    loader.innerHTML = '<div class="shaz-loader-orbit" aria-hidden="true"></div><div class="shaz-loader-content"><img class="shaz-loader-logo" src="' + logoSrc + '" alt="Hussain — Software Engineer" width="2048" height="371" decoding="async"><div class="shaz-loader-track" aria-hidden="true"><span></span></div><span class="shaz-loader-caption">Getting things ready</span></div>';
    document.body.prepend(loader);

    const minimumVisibleMs = 1250;
    const maximumVisibleMs = 2500;
    const startedAt = Date.now();
    let pageLoaded = document.readyState === 'complete';
    let dismissed = false;
    let minTimer;
    let maxTimer;

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      loader.classList.add('is-leaving');
      window.setTimeout(() => loader.remove(), 500);
    };

    const tryDismiss = () => {
      if (dismissed) return;
      const remaining = Math.max(0, minimumVisibleMs - (Date.now() - startedAt));
      clearTimeout(minTimer);
      minTimer = window.setTimeout(dismiss, remaining);
    };

    if (!pageLoaded) {
      window.addEventListener('load', () => {
        pageLoaded = true;
        tryDismiss();
      }, { once: true });
    }
    tryDismiss();

    // Safety net: never leave the page covered if a third-party resource hangs.
    maxTimer = window.setTimeout(dismiss, maximumVisibleMs);
    window.addEventListener('pageshow', event => {
      if (event.persisted) dismiss();
    }, { once: true });
  }
})();

/* Enforce the single canonical logo asset site-wide, including old hard-coded references. */
(()=> {
  const canonical='/webImages/hussain-logo.webp';
  const isOldLogo=value=>typeof value==='string'&&/(?:\/)?(?:webImages\/)?hussain-logo\.png|SHAZ_navbar_logo\.(?:png|svg)/i.test(value);
  const normalize=()=>{
    document.querySelectorAll('img,source,link').forEach(el=>{
      for(const attr of ['src','srcset','href']){
        const value=el.getAttribute(attr);
        if(isOldLogo(value)) el.setAttribute(attr,value.replace(/(?:\/)?(?:webImages\/)?hussain-logo\.png|SHAZ_navbar_logo\.(?:png|svg)/ig,canonical));
      }
    });
    document.querySelectorAll('[style*="hussain-logo.png"],[style*="SHAZ_navbar_logo"]').forEach(el=>{
      const value=el.getAttribute('style');
      el.setAttribute('style',value.replace(/(?:\/)?(?:webImages\/)?hussain-logo\.png|SHAZ_navbar_logo\.(?:png|svg)/ig,canonical));
    });
  };
  normalize();
  if(!window.__shazLogoNormalizeObserver&&document.documentElement){
    window.__shazLogoNormalizeObserver=new MutationObserver(normalize);
    window.__shazLogoNormalizeObserver.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['src','srcset','href','style']});
  }
})();

/* Industry pages: GSAP hero, content reveals and staggered sector cards. */
(()=> {
  const root=document.querySelector('.service-detail-page');
  if(!root||!window.gsap||!window.ScrollTrigger||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const hero=root.querySelector('.detail-service-hero');
  if(hero){
    const tl=gsap.timeline({defaults:{ease:'power3.out'}});
    tl.from(hero.querySelector('.eyebrow'),{y:18,opacity:0,duration:.55})
      .from(hero.querySelector('h1'),{y:58,opacity:0,duration:.95},'-=.2')
      .from(hero.querySelector('p'),{y:24,opacity:0,duration:.7},'-=.5')
      .from(hero.querySelectorAll('.service-hero-actions>*'),{y:18,opacity:0,duration:.55,stagger:.12},'-=.35');
  }
  const reveal=(selector,vars={})=>gsap.utils.toArray(selector).forEach((el,i)=>gsap.from(el,{y:34,opacity:0,duration:.75,ease:'power3.out',...vars,scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
  reveal('.service-intro-grid');
  reveal('.service-features-heading');
  gsap.utils.toArray('.service-feature').forEach((el,i)=>gsap.from(el,{x:34,opacity:0,duration:.7,delay:(i%2)*.05,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
  gsap.utils.toArray('.industry-use-card').forEach((el,i)=>gsap.from(el,{y:42,rotateX:5,opacity:0,duration:.75,delay:(i%4)*.08,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
  gsap.utils.toArray('.industry-outcome-item').forEach((el,i)=>gsap.from(el,{x:28,opacity:0,duration:.7,delay:i*.08,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
  reveal('.service-outcome-card');
  reveal('.service-faq-grid');
  window.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
})();

/* Industries directory: animated introduction and staggered industry navigation cards. */
(()=> {
  const root=document.querySelector('.services-page');
  if(!root||!location.pathname.startsWith('/industries/')||document.querySelector('.service-detail-page')||!window.gsap||!window.ScrollTrigger||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const hero=root.querySelector('.service-hero');
  if(hero){
    const tl=gsap.timeline({defaults:{ease:'power3.out'}});
    tl.from(hero.querySelector('.eyebrow'),{y:18,opacity:0,duration:.55})
      .from(hero.querySelector('h1'),{y:58,opacity:0,duration:.9},'-=.2')
      .from(hero.querySelector('p'),{y:24,opacity:0,duration:.7},'-=.48')
      .from(hero.querySelectorAll('.service-hero-meta>*'),{y:16,opacity:0,duration:.5,stagger:.1},'-=.3');
  }
  gsap.from('.services-heading>*',{y:30,opacity:0,duration:.7,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:'.services-heading',start:'top 86%',once:true}});
  gsap.utils.toArray('.services-grid .service-card').forEach((el,i)=>gsap.from(el,{y:42,opacity:0,duration:.7,delay:(i%3)*.07,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 91%',once:true}}));
  gsap.from('.service-faq-grid>*',{y:28,opacity:0,duration:.7,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:'.service-faq',start:'top 85%',once:true}});
  gsap.from('.service-cta-inner>*',{y:26,opacity:0,duration:.7,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:'.service-cta',start:'top 85%',once:true}});
})();

/* CMS service page GSAP choreography. */
(()=> {
 const root=document.querySelector('.cms-page');
 if(!root||!window.gsap||!window.ScrollTrigger||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 gsap.registerPlugin(ScrollTrigger);
 const hero=root.querySelector('.cms-hero');
 if(hero){const tl=gsap.timeline({defaults:{ease:'power3.out'}});tl.from(hero.querySelector('.eyebrow'),{y:18,opacity:0,duration:.55}).from(hero.querySelector('h1'),{y:55,opacity:0,duration:.9},'-.2').from(hero.querySelector('p'),{y:22,opacity:0,duration:.7},'-.45').from(hero.querySelectorAll('.service-hero-actions>*'),{y:18,opacity:0,duration:.5,stagger:.1},'-.3').from(hero.querySelector('.cms-hero-orbit'),{scale:.75,opacity:0,duration:1},'-.65');}
 const reveal=(selector,trigger=selector)=>gsap.utils.toArray(selector,root).forEach(el=>gsap.from(el,{y:34,opacity:0,duration:.72,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
 reveal('.cms-intro-grid');reveal('.cms-stat-row>div');reveal('.cms-capability-grid article');reveal('.cms-platform-list article');reveal('.cms-process-grid article');reveal('.cms-seo-grid>*');reveal('.cms-project-card');reveal('.cms-faq .service-faq-grid>*');reveal('.cms-cta .service-outcome-card');
 window.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
})();
