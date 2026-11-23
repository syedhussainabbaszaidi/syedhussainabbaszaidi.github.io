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
  document.body.insertAdjacentHTML('beforeend','<a class="whatsapp-float" href="'+whatsapp+'" target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp"><span aria-hidden="true" style="font-size:27px;font-weight:700">◉</span></a>');
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