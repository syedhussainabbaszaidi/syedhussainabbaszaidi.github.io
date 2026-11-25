(()=>{const icon=document.querySelector('link[rel~="icon"]');if(!icon){const link=document.createElement('link');link.rel='icon';link.type='image/svg+xml';link.href='/favicon.svg';document.head.appendChild(link)}const sharedShellLoaded=!!document.querySelector('script[src="/js/service-page.js"]'),P=window.portfolioProjects||[],q=s=>document.querySelector(s),reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const applySocialMeta=()=>{const canonical=document.querySelector('link[rel="canonical"]')?.href||location.href;const description=document.querySelector('meta[name="description"]')?.content||document.querySelector('meta[property="og:description"]')?.content||'';const image=document.querySelector('#caseImage')?.src||'https://syedhussainabbaszaidi.github.io/webImages/background-image.webp';const title=document.title;const set=(attr,key,value)=>{let el=document.head.querySelector('meta['+attr+'="'+key+'"]');if(!el){el=document.createElement('meta');el.setAttribute(attr,key);document.head.appendChild(el)}el.content=value};set('property','og:type','website');set('property','og:title',title);set('property','og:description',description);set('property','og:url',canonical);set('property','og:image',image);set('property','og:image:alt',title+' — portfolio preview');set('name','twitter:card','summary_large_image');set('name','twitter:title',title);set('name','twitter:description',description);set('name','twitter:image',image)};applySocialMeta();
const phone='923148069163',msg=encodeURIComponent('Hello Hussain, I would like to discuss a website development project.'),wa='https://wa.me/'+phone+'?text='+msg;
const header=q('.header');if(!sharedShellLoaded&&header&&!q('#globalToggle')){header.innerHTML='<div class="wrap nav"><a class="logo" href="/" aria-label="Home"><img src="/webImages/hussain-logo.webp" alt="Hussain — Software Engineer" class="shaz-brand-img" width="2048" height="371" fetchpriority="high" decoding="async"></a><nav class="links"><a href="/#about">About</a><a href="/services/">Services</a><a href="/industries/">Industries</a><a href="/projects/">Portfolio</a><a href="/resume/">Resume</a><a class="nav-cta" href="/contact/">Let’s talk ↗</a></nav><button class="toggle" id="globalToggle" aria-label="Open navigation menu" aria-expanded="false"><span></span><span></span></button></div>';if(!q('#globalDrawer'))header.insertAdjacentHTML('afterend','<aside class="global-drawer" id="globalDrawer" aria-hidden="true"><div class="drawer-top"><a class="logo" href="/"><img src="/webImages/hussain-logo.webp" alt="Hussain — Software Engineer" class="shaz-brand-img" width="2048" height="371" fetchpriority="high" decoding="async"></a><button type="button" id="globalClose" aria-label="Close navigation">×</button></div><nav class="drawer-nav"><a href="/#about">About <i>01</i></a><a href="/services/">Services <i>02</i></a><a href="/industries/">Industries <i>03</i></a><a href="/projects/">Portfolio <i>04</i></a><a href="/resume/">Resume <i>04</i></a><a href="/contact/">Contact <i>05</i></a></nav><div class="drawer-bottom"><span>Let’s create something meaningful.</span><a href="https://wa.me/923148069163" target="_blank" rel="noopener">Chat on WhatsApp ↗</a></div></aside>');}
const footer=q('.footer');if(!sharedShellLoaded&&footer&&footer.querySelector('.footer-row'))footer.innerHTML="<div class=\"wrap\"><div class=\"footer-top\"><a class=\"footer-brand\" href=\"/\"><img src="/webImages/hussain-logo.webp" alt="Hussain — Software Engineer" class="shaz-brand-img" width="2048" height="371" fetchpriority="high" decoding="async"></a><p>Thoughtful websites.<br>Purposeful digital experiences.</p><a class=\"back-top\" href=\"/\">Back to home ↑</a></div><div class=\"footer-service-links\"><div><small>EXPLORE</small><a href=\"/about/\">About</a><a href=\"/services/\">Services</a><a href=\"/expertise/\">Expertise</a><a href=\"/industries/\">Industries</a><a href=\"/projects/\">Portfolio</a><a href=\"/resume/\">Resume</a><a href=\"/contact/\">Contact</a></div><div><small>WEBSITES & CMS</small><a href=\"/services/shopify-development/\">Shopify Development</a><a href=\"/services/wordpress-development/\">WordPress Development</a><a href=\"/services/nextjs-development/\">Next.js & React</a><a href=\"/services/cms-website-development/\">CMS Websites</a><a href=\"/services/digital-marketing/\">Digital Marketing</a><a href=\"/services/digital-marketing/seo-services/\">SEO</a></div><div><small>CUSTOM SOFTWARE & AI</small><a href=\"/services/aspnet-development/\">ASP.NET Development</a><a href=\"/services/php-laravel-development/\">PHP & Laravel</a><a href=\"/services/erp-software-development/\">ERP Software</a><a href=\"/services/gaming-software-development/\">Gaming Software</a><a href=\"/services/finance-software-development/\">Finance Software</a><a href=\"/services/ai-development/\">AI Services</a><a href=\"/services/ai-development/ai-agent-development/\">AI Agent Development</a></div></div><div class=\"footer-bottom\"><span>© <span id=\"year\"></span> Syed Hussain Abbas Zaidi</span><div><a href=\"https://www.linkedin.com/in/s-hussainabbaszaidi/\" target=\"_blank\" rel=\"noopener\">LinkedIn ↗</a><a href=\"https://www.fiverr.com/syedhussain610\" target=\"_blank\" rel=\"noopener\">Fiverr ↗</a><a href=\"https://www.facebook.com/Hussainsoftwareengineer/\" target=\"_blank\" rel=\"noopener\">Facebook ↗</a></div><span>Designed & developed with care.</span></div></div>";else if(!sharedShellLoaded&&footer&&!footer.querySelector('.footer-top'))footer.innerHTML='<div class="wrap"><div class="footer-top"><a class="footer-brand" href="/"><img src="/webImages/hussain-logo.webp" alt="Hussain — Software Engineer" class="shaz-brand-img" decoding="async"></a><p>Thoughtful websites.<br>Purposeful digital experiences.</p><a class="back-top" href="/">Back to home ↑</a></div><div class="footer-bottom"><span>© '+new Date().getFullYear()+' Syed Hussain Abbas Zaidi</span><div><a href="https://www.linkedin.com/in/s-hussainabbaszaidi/" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://www.fiverr.com/syedhussain610" target="_blank" rel="noopener">Fiverr ↗</a><a href="https://www.facebook.com/Hussainsoftwareengineer/" target="_blank" rel="noopener">Facebook ↗</a></div><span>Designed & developed with care.</span></div></div>';
const drawer=q('#globalDrawer'),toggle=q('#globalToggle'),closeBtn=q('#globalClose');
const close=()=>{if(!drawer||!toggle)return;toggle.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');const done=()=>{drawer.classList.remove('is-open');drawer.setAttribute('aria-hidden','true')};if(window.gsap&&!reduce)gsap.to(drawer,{yPercent:-105,duration:.4,ease:'power3.inOut',overwrite:true,onComplete:done});else{drawer.style.transform='translateY(-105%)';done()}};
if(!sharedShellLoaded&&toggle&&drawer){toggle.addEventListener('click',()=>{if(toggle.getAttribute('aria-expanded')==='true'){close();return}drawer.classList.add('is-open');drawer.setAttribute('aria-hidden','false');toggle.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');if(window.gsap&&!reduce)gsap.to(drawer,{yPercent:0,duration:.55,ease:'power4.out',overwrite:true});else drawer.style.transform='translateY(0)'});if(closeBtn)closeBtn.addEventListener('click',close);drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));drawer.addEventListener('click',e=>{if(e.target===drawer)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}
const project=P.find(p=>p.slug===document.body.dataset.project);if(project){document.title=project.name+' Website Project | Syed Hussain Abbas Zaidi';const description=project.name+' is featured in the website portfolio of Syed Hussain Abbas Zaidi. Explore the original project preview, platform category and live website.';let meta=q('meta[name="description"]');if(meta)meta.content=description;let og=q('meta[property="og:title"]');if(og)og.content=project.name+' | Website Project';let ogd=q('meta[property="og:description"]');if(ogd)ogd.content=description;let canonical=q('link[rel="canonical"]');if(canonical)canonical.href='https://syedhussainabbaszaidi.github.io/projects/'+project.slug+'/';
const setMeta=(key,value,property=false)=>{let node=q((property?'meta[property="':'meta[name="')+key+'"]');if(!node){node=document.createElement('meta');node.setAttribute(property?'property':'name',key);document.head.appendChild(node)}node.content=value};
setMeta('og:type','article',true);setMeta('og:title',project.name+' | Website Project',true);setMeta('og:description',description,true);setMeta('og:url','https://syedhussainabbaszaidi.github.io/projects/'+project.slug+'/',true);setMeta('og:image','https://syedhussainabbaszaidi.github.io/'+project.image,true);setMeta('twitter:card','summary_large_image');setMeta('twitter:title',project.name+' | Website Project');setMeta('twitter:description',description);const name=q('#caseName'),tech=q('#caseTech'),url=q('#caseUrl'),image=q('#caseImage'),live=q('#liveLink');if(name)name.textContent=project.name;if(tech)tech.textContent=project.tech;if(url){url.textContent=project.url;url.href=project.url;url.target='_blank';url.rel='noopener noreferrer'}if(image){image.src='/'+project.image;image.alt=project.name+' website preview from the original portfolio archive';image.loading='eager';image.decoding='async'}if(live){live.href=project.url;live.target='_blank';live.rel='noopener noreferrer'}const note=q('.case-note');if(note)note.innerHTML='<div class="eyebrow">PROJECT OVERVIEW</div><h2>A closer look at '+project.name+'.</h2><p>This website is included in my portfolio archive with its original project preview, platform category and public website link. This page brings those references together in a dedicated project view.</p><p>For more information about the specific brief, development scope or individual implementation details, feel free to get in touch. I’m happy to discuss the project and my experience.</p><a class="under-link" href="'+project.url+'" target="_blank" rel="noopener noreferrer">Explore the live website <b>↗</b></a>';const ld=document.createElement('script');ld.type='application/ld+json';ld.textContent=JSON.stringify({'@context':'https://schema.org','@type':'CreativeWork','name':project.name,'url':'https://syedhussainabbaszaidi.github.io/projects/'+project.slug+'/','image':'https://syedhussainabbaszaidi.github.io/'+project.image,'creator':{'@type':'Person','name':'Syed Hussain Abbas Zaidi'},'about':project.tech});document.head.appendChild(ld)}
if(!q('.whatsapp-float'))document.body.insertAdjacentHTML('beforeend','<a class="whatsapp-float" href="'+wa+'" target="_blank" rel="noopener noreferrer" aria-label="Connect with us on WhatsApp"><span class="contact-float-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 11.5a7.5 7.5 0 0 1-11.1 6.6L4 19l.9-4.5A7.5 7.5 0 1 1 20 11.5Z"/><path d="M9 9.2c.3 1.9 1.8 3.4 3.7 3.8"/></svg></span><span class="contact-float-copy"><strong>Connect with Us</strong><small>Need help? Let’s talk</small></span><span class="contact-float-arrow" aria-hidden="true">↗</span></a>');
if(q('#year'))q('#year').textContent=new Date().getFullYear();
if(window.gsap&&window.ScrollTrigger&&!reduce){
gsap.registerPlugin(ScrollTrigger);
const heroItems=gsap.utils.toArray('.case-hero h1,.case-hero p,.resume-premium-hero .eyebrow,.resume-premium-hero .resume-overline,.resume-premium-hero h1,.resume-premium-hero .resume-lead,.resume-premium-hero .resume-links,.resume-identity-card,.contact-hero .eyebrow,.contact-hero h1,.contact-hero p,.contact-hero .contact-hero-actions');
if(heroItems.length)gsap.fromTo(heroItems,{autoAlpha:0,y:32},{autoAlpha:1,y:0,duration:.8,stagger:.1,ease:'power3.out',clearProps:'transform'});
const reveal=(selector,trigger)=>{const items=gsap.utils.toArray(selector);items.forEach((el,i)=>gsap.fromTo(el,{autoAlpha:0,y:24},{autoAlpha:1,y:0,duration:.65,delay:(i%3)*.05,ease:'power3.out',clearProps:'transform',scrollTrigger:{trigger:trigger||el,start:'top 88%',once:true}}));};
reveal('.resume-highlight-grid>div','.resume-highlights');
reveal('.premium-resume-block');
reveal('.resume-skill-groups article,.education-list article,.resume-contact-grid a');
reveal('.resume-cta-inner>*','.resume-cta');
reveal('.case-img');
reveal('.contact-method-card,.contact-detail-row,.contact-note-card');
reveal('.footer-service-links>div','.footer-service-links');

ScrollTrigger.refresh();
}
document.querySelectorAll('a[target="_blank"]').forEach(a=>a.rel='noopener noreferrer');


;(()=>{if(sharedShellLoaded)return;const h=document.querySelector(".header");if(!h)return;const s=[["All Services","/services/"],["Shopify Development","/services/shopify-development/"],["WordPress Development","/services/wordpress-development/"],["Next.js & React","/services/nextjs-development/"],["CMS Website Development","/services/cms-website-development/"],["Digital Marketing","/services/digital-marketing/"],["SEO Services","/services/digital-marketing/seo-services/"],["ASP.NET Development","/services/aspnet-development/"],["PHP & Laravel","/services/php-laravel-development/"],["ERP Software","/services/erp-software-development/"],["AI Development","/services/ai-development/"],["AI Agent Development","/services/ai-development/ai-agent-development/"],["Finance Software","/services/finance-software-development/"],["Gaming Software","/services/gaming-software-development/"]],sl=s.map(x=>'<a href="'+x[1]+'">'+x[0]+'</a>').join("");
h.innerHTML='<div class="wrap nav"><a class="logo" href="/" aria-label="Home"><img src="/webImages/hussain-logo.webp" alt="Hussain — Software Engineer" class="shaz-brand-img" width="2048" height="371" fetchpriority="high" decoding="async"></a><nav class="links" aria-label="Main navigation"><a href="/about/">About</a><div class="nav-dropdown"><button class="nav-dropdown-trigger" type="button" aria-expanded="false">Services <i class="nav-chevron"></i></button><div class="nav-mega"><div class="nav-mega-heading"><small>BUILD · AUTOMATE · GROW</small><strong>Services that move business forward</strong><p>Websites, software, AI and digital growth solutions.</p><a href="/services/">Explore all services ↗︎</a></div><div class="nav-mega-links">'+sl+'</div></div></div><a href="/expertise/">Expertise</a><a href="/industries/">Industries</a><a href="/projects/">Portfolio</a><a href="/resume/">Resume</a><a class="nav-cta" href="/contact/">Let’s talk <span>↗︎</span></a></nav><button class="toggle" id="globalToggle" type="button" aria-label="Open navigation menu" aria-expanded="false"><span></span><span></span></button></div>';
let d=document.querySelector("#globalDrawer");if(!d){d=document.createElement("aside");d.id="globalDrawer";h.insertAdjacentElement("afterend",d)}d.className="global-drawer";d.setAttribute("aria-hidden","true");d.innerHTML='<div class="drawer-top"><a class="logo" href="/"><img src="/webImages/hussain-logo.webp" alt="Hussain — Software Engineer" class="shaz-brand-img" width="2048" height="371" fetchpriority="high" decoding="async"></a><button type="button" id="globalClose" aria-label="Close navigation">×</button></div><div class="drawer-main-view"><nav class="drawer-nav"><a href="/about/">About</a><a href="/expertise/">Expertise</a><button class="drawer-services-open" type="button">Services <span>↗</span></button><a href="/industries/">Industries</a><a href="/projects/">Portfolio</a><a href="/resume/">Resume</a><a href="/contact/">Contact</a></nav></div><section class="drawer-services-panel" aria-hidden="true"><div class="drawer-services-panel-top"><button type="button" class="drawer-back-menu">← Back to menu</button><span>EXPLORE SERVICES</span></div><div class="drawer-services-links">'+s.map((x,i)=>'<a href="'+x[1]+'" class="drawer-service-tile"><span class="drawer-service-icon" aria-hidden="true">'+["◈","▦","✳","▤","⌘","✺","▥","✦","⚙","◎","✧","↗","▣","◉"][i]+'</span><span class="drawer-service-name">'+x[0]+'</span><span class="drawer-service-arrow">↗</span></a>').join("")+'</div><a class="drawer-all-services" href="/services/">View all services ↗</a></section><div class="drawer-bottom"><span>Let’s create something meaningful.</span><a href="https://wa.me/923148069163" target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗︎</a></div>';
const t=h.querySelector("#globalToggle"),cl=d.querySelector("#globalClose"),drop=h.querySelector(".nav-dropdown"),db=h.querySelector(".nav-dropdown-trigger"),servicesOpen=d.querySelector(".drawer-services-open"),servicesBack=d.querySelector(".drawer-back-menu"),servicesPanel=d.querySelector(".drawer-services-panel"),shut=()=>{t.setAttribute("aria-expanded","false");d.classList.remove("is-open","services-view");d.setAttribute("aria-hidden","true");servicesPanel?.setAttribute("aria-hidden","true");document.body.classList.remove("menu-open")};
const openDrawer=()=>{t.setAttribute("aria-expanded","true");d.classList.add("is-open");d.setAttribute("aria-hidden","false");document.body.classList.add("menu-open");if(window.gsap&&!reduce)gsap.fromTo(d,{xPercent:105},{xPercent:0,duration:.62,ease:"power4.out",overwrite:true});else d.style.transform="translateX(0)"};
t.addEventListener("click",()=>t.getAttribute("aria-expanded")==="true"?shut():openDrawer());cl.addEventListener("click",shut);d.addEventListener("click",e=>{if(e.target===d)shut()});d.querySelectorAll(".drawer-nav a,.drawer-services-links a,.drawer-all-services,.drawer-bottom a").forEach(a=>a.addEventListener("click",shut));
servicesOpen?.addEventListener("click",()=>{d.classList.add("services-view");servicesPanel?.setAttribute("aria-hidden","false");if(window.gsap&&!reduce){gsap.fromTo(".drawer-services-panel",{xPercent:35,opacity:0},{xPercent:0,opacity:1,duration:.48,ease:"power3.out",overwrite:true});gsap.from(".drawer-service-tile",{y:18,opacity:0,duration:.42,stagger:.035,ease:"power3.out",delay:.08})}});
servicesBack?.addEventListener("click",()=>{d.classList.remove("services-view");servicesPanel?.setAttribute("aria-hidden","true");if(window.gsap&&!reduce)gsap.fromTo(".drawer-main-view",{x:-18,opacity:.65},{x:0,opacity:1,duration:.32,ease:"power2.out",clearProps:"transform"})});
db.addEventListener("click",()=>{const o=!drop.classList.contains("is-open");drop.classList.toggle("is-open",o);db.setAttribute("aria-expanded",String(o))});document.addEventListener("click",e=>{if(!drop.contains(e.target)){drop.classList.remove("is-open");db.setAttribute("aria-expanded","false")}});document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(d.classList.contains("services-view"))servicesBack?.click();else shut()}});const f=document.querySelector(".footer");if(f)f.innerHTML='<div class="wrap"><div class="footer-top"><a class="footer-brand" href="/"><img src="/webImages/hussain-logo.webp" alt="Hussain — Software Engineer" class="shaz-brand-img" decoding="async"></a><p>Thoughtful websites.<br>Purposeful digital experiences.</p><a class="back-top" href="#top">Back to top ↑︎</a></div><div class="footer-service-links"><div><small>EXPLORE</small><a href="/about/">About</a><a href="/expertise/">Expertise</a><a href="/services/">All services</a><a href="/industries/">Industries</a><a href="/projects/">Portfolio</a><a href="/resume/">Resume</a><a href="/contact/">Contact</a></div><div><small>WEB & GROWTH</small><a href="/services/shopify-development/">Shopify Development</a><a href="/services/wordpress-development/">WordPress Development</a><a href="/services/nextjs-development/">Next.js & React</a><a href="/services/cms-website-development/">CMS Website Development</a><a href="/services/digital-marketing/">Digital Marketing</a><a href="/services/digital-marketing/seo-services/">SEO Services</a></div><div><small>SOFTWARE & AI</small><a href="/services/aspnet-development/">ASP.NET</a><a href="/services/php-laravel-development/">PHP & Laravel</a><a href="/services/erp-software-development/">ERP Software</a><a href="/services/ai-development/">AI Development</a><a href="/services/ai-development/ai-agent-development/">AI Agents</a><a href="/services/finance-software-development/">Finance Software</a><a href="/services/gaming-software-development/">Gaming Software</a></div></div><div class="footer-bottom"><span>© '+new Date().getFullYear()+' Syed Hussain Abbas Zaidi</span><div><a href="https://www.linkedin.com/in/s-hussainabbaszaidi/" target="_blank" rel="noopener">LinkedIn ↗︎</a><a href="https://www.fiverr.com/syedhussain610" target="_blank" rel="noopener">Fiverr ↗︎</a></div><span>Designed & developed with care.</span></div></div>';
})();const arrowWalker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let arrowNode;while(arrowNode=arrowWalker.nextNode())arrowNode.nodeValue=arrowNode.nodeValue.replace(/↗(?!︎)/g,"↗︎").replace(/↑(?!︎)/g,"↑︎").replace(/↓(?!︎)/g,"↓︎").replace(/→(?!︎)/g,"→︎");})();

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
