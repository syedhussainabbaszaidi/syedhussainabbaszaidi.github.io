(function(){
  if(!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion) return;

  const intro = gsap.timeline({defaults:{ease:'power3.out'}});
  intro.to('.first',{yPercent:-100,duration:1.05,delay:.15})
    .from('.header_logo',{y:-18,opacity:0,duration:.55},'-=.35')
    .from('.header_nav li',{y:-12,opacity:0,duration:.45,stagger:.07},'-=.3')
    .from('.col1_left > *',{y:34,opacity:0,duration:.75,stagger:.12},'-=.2')
    .from('.col1_right',{scale:.88,opacity:0,duration:.8},'-=.65');

  gsap.utils.toArray('.col3,.col2').forEach(section=>{
    const heading=section.querySelector('h2');
    if(heading) gsap.from(heading,{y:45,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:section,start:'top 78%',once:true}});
  });
  gsap.utils.toArray('.col3_box').forEach((card,i)=>{
    gsap.from(card,{y:55,opacity:0,scale:.97,duration:.75,delay:(i%3)*.08,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 88%',once:true}});
  });
  gsap.utils.toArray('.col2_box').forEach((skill,i)=>{
    gsap.from(skill,{y:24,opacity:0,duration:.55,delay:(i%6)*.06,ease:'power2.out',scrollTrigger:{trigger:skill,start:'top 92%',once:true}});
  });

  document.querySelectorAll('.col3_box img').forEach(img=>{img.loading='lazy';img.decoding='async';});
  document.querySelectorAll('a[target="_blank"]').forEach(a=>a.rel='noopener noreferrer');
  window.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
})();