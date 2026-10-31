(() => {
 const video=document.getElementById('hero-video');
 if(!video)return;
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 video.muted=true;
 if(motion.matches||document.getElementById('home-view')?.hidden){
  if(!motion.matches)video.dataset.resume='true';
  video.autoplay=false;video.pause();
 }else video.play().catch(()=>{});
 motion.addEventListener('change',e=>{if(e.matches)video.pause()});
})();
