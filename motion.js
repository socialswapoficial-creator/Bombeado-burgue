/* Progressive enhancement: content stays visible if observers are unavailable. */
(() => {
 const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(preference.matches||!('IntersectionObserver' in window))return;
 const targets='.hero-copy>.eyebrow,.hero-copy>h1,.hero-copy>p:not(.eyebrow),.hero-actions,.founders-heading,.founders-content>*,.history-visit-heading,.parking-media,.store-info,.combo-banner>div>*,.footer-identity,.footer-info-grid>*,.footer-legal,.section-heading,.product';
 let observer,productsObserver,stopped=false;
 const reveal=element=>{
  element.classList.remove('reveal-pending');
  observer?.unobserve(element);
  window.setTimeout(()=>element.style.removeProperty('--reveal-delay'),850);
 };
 const revealAll=()=>{
  document.querySelectorAll('.reveal-pending').forEach(reveal);
  observer?.disconnect();productsObserver?.disconnect();stopped=true;
 };
 const prepare=elements=>{
  if(stopped||preference.matches)return;
  elements.forEach((element,index)=>{
   if(element.classList.contains('reveal-item'))return;
   element.style.setProperty('--reveal-delay',(index%3)*55+'ms');
   element.classList.add('reveal-item','reveal-pending');
   observer.observe(element);
  });
 };
 try{
  observer=new IntersectionObserver(entries=>{
   for(const entry of entries)if(entry.isIntersecting)reveal(entry.target);
  },{threshold:0.06,rootMargin:'0px 0px -20px 0px'});
  prepare(Array.from(document.querySelectorAll(targets)));
  const products=document.getElementById('products');
  if(products&&'MutationObserver' in window){
   productsObserver=new MutationObserver(records=>{
    for(const record of records)for(const removed of record.removedNodes)if(removed.nodeType===1)observer.unobserve(removed);
    prepare(Array.from(products.querySelectorAll('.product')));
   });
   productsObserver.observe(products,{childList:true});
  }
  document.addEventListener('focusin',event=>{
   const element=event.target.closest('.reveal-pending');if(element)reveal(element);
  });
  preference.addEventListener('change',event=>{if(event.matches)revealAll()});
  window.addEventListener('pagehide',revealAll,{once:true});
 }catch{revealAll()}
})();
