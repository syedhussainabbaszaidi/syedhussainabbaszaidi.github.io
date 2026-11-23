(()=> {
 const projects=window.portfolioProjects||[];
 const $=s=>document.querySelector(s);
 const phone='923148069163';
 const message=encodeURIComponent('Hello Hussain, I would like to discuss a website development project.');
 const whatsapp='https://wa.me/'+phone+'?text='+message;
 const header=$('.header');
 if(header){
  header.innerHTML='<div class="wrap nav"><a class="logo" href="/" aria-label="Home">H</a><nav class="links" aria-label="Main navigation"><a href="/#about">About</a><a href="/projects/">Projects</a><a href="/#expertise">Expertise</a><a href="/resume/">Resume</a><a class="pill" href="'+whatsapp+'" target="_blank" rel="noopener">Let’s talk ↗</a></nav><button class="toggle" id="globalToggle" aria-label="Open navigation" aria-expanded="false">☰</button></div>';
  header.insertAdjacentHTML('afterend','<aside class="global-drawer" id="globalDrawer" aria-hidden="true"><div class="drawer-top"><a class="logo" href="/">H</a><button type="button" id="globalClose" aria-label="Close navigation">×</button></div><nav class="drawer-nav"><a href="/#about">About</a><a href="/projects/">Projects</a><a href="/#expertise">Expertise</a><a href="/resume/">Resume</a><a href="/#contact">Contact</a><a href="'+whatsapp+'" target="_blank" rel="noopener">WhatsApp ↗</a></nav></aside>');
 }
 const footer=$('.footer');
 if(footer) footer.innerHTML='<div class="wrap footer-row"><span>© '+new Date().getFullYear()+' Syed Hussain Abbas Zaidi</span><span>Shopify Expert · CMS & Web Developer</span><a href="/">Home ↑</a></div>';
 if(!$('.whatsapp-float')){
  document.body.insertAdjacentHTML('beforeend','<a class="whatsapp-float" href="'+whatsapp+'" target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44zM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.46 4.45-9.9 9.91-9.9 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7.01c0 5.46-4.45 9.9-9.92 9.9zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg></a>');
 }
 const toggle=$('#globalToggle'),drawer=$('#globalDrawer'),closeButton=$('#globalClose');
 if(toggle&&drawer){
  toggle.addEventListener('click',()=>{
   drawer.classList.add('is-open');drawer.setAttribute('aria-hidden','false');toggle.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';
   if(window.gsap&&!matchMedia('(prefers-reduced-motion: reduce)').matches) gsap.to(drawer,{yPercent:0,duration:.4,ease:'power3.out'});
   else drawer.style.transform='translateY(0)';
  });
  const close=()=>{
   document.body.style.overflow='';toggle.setAttribute('aria-expanded','false');
   if(window.gsap&&!matchMedia('(prefers-reduced-motion: reduce)').matches) gsap.to(drawer,{yPercent:-105,duration:.3,onComplete:()=>{drawer.classList.remove('is-open');drawer.setAttribute('aria-hidden','true')}});
   else{drawer.style.transform='translateY(-105%)';drawer.classList.remove('is-open');drawer.setAttribute('aria-hidden','true')}
  };
  if(closeButton)closeButton.addEventListener('click',close);
  drawer.addEventListener('click',event=>{if(event.target===drawer)close()});
 }
 const project=projects.find(item=>item.slug===document.body.dataset.project);
 if(!project)return;
 document.title=project.name+' | Project Case Study | Syed Hussain Abbas Zaidi';
 const setText=(selector,value)=>{const el=$(selector);if(el)el.textContent=value};
 setText('#caseName',project.name);setText('#caseTech',project.tech);setText('#caseUrl',project.url);
 const image=$('#caseImage');
 if(image){image.src='/'+project.image;image.alt=project.name+' original portfolio preview';image.loading='eager';image.decoding='async'}
 const live=$('#liveLink');
 if(live){live.href=project.url;live.target='_blank';live.rel='noopener noreferrer'}
 const description=$('meta[name="description"]');
 if(description)description.content=project.name+' project listed in the portfolio of Syed Hussain Abbas Zaidi. Original platform label: '+project.tech+'.';
 if(window.gsap&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.case-hero h1,.case-hero p',{y:30,opacity:0,duration:.7,stagger:.1});
  gsap.from('#caseImage',{clipPath:'inset(0 0 100% 0)',duration:1,scrollTrigger:{trigger:'#caseImage',start:'top 85%'}});
  gsap.from('.whatsapp-float',{scale:0,opacity:0,duration:.5,delay:.7,ease:'back.out(1.7)'});
 }
 document.querySelectorAll('a[target="_blank"]').forEach(link=>link.rel='noopener noreferrer');
})();