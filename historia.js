const paths={menu:'M4 6h16M4 12h16M4 18h16',heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',bag:'M5 7h14l2 14H3L5 7ZM8 8V6a4 4 0 0 1 8 0v2',search:'M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',filter:'M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M9 15v6',arrow:'M4 12h16M14 6l6 6-6 6',pin:'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',award:'M8 3h8v5a4 4 0 0 1-8 0V3ZM8 5H4v3a4 4 0 0 0 5 4M16 5h4v3a4 4 0 0 1-5 4M12 12v7M8 21h8M8 19h8',home:'M3 10l9-7 9 7v11h-6v-7H9v7H3V10Z',grid:'M3 3h7v7H3ZM14 3h7v7h-7ZM3 14h7v7H3ZM14 14h7v7h-7Z'};
const icon=n=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[n]||paths.grid}"/></svg>`;
function icons(){document.querySelectorAll('[data-icon]').forEach(e=>e.innerHTML=icon(e.dataset.icon))}icons();
function updateCount(){let count=0;try{const cart=JSON.parse(localStorage.getItem('bbb-cart')||'{}');for(const [id,n] of Object.entries(cart))if(/^\d+$/.test(id)&&Number.isInteger(n)&&n>0&&n<=99)count+=n}catch{}document.querySelectorAll('.count').forEach(e=>e.textContent=count)}
updateCount();window.addEventListener('storage',updateCount);window.addEventListener('pageshow',updateCount);
const parkingVideo=document.getElementById('parking-video');
const parkingToggle=document.getElementById('parking-toggle');
if(parkingVideo&&parkingToggle){
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const syncPlayback=()=>{parkingToggle.setAttribute('aria-label',parkingVideo.paused?'Reproduzir vídeo':'Pausar vídeo');parkingToggle.innerHTML=parkingVideo.paused?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 10 7-10 7Z"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>'};
 parkingVideo.muted=true;
 if(motion.matches){parkingVideo.autoplay=false;parkingVideo.pause()}else parkingVideo.play().catch(syncPlayback);
 parkingToggle.addEventListener('click',()=>{if(parkingVideo.paused)parkingVideo.play().catch(syncPlayback);else parkingVideo.pause()});
 parkingVideo.addEventListener('play',syncPlayback);parkingVideo.addEventListener('pause',syncPlayback);motion.addEventListener('change',e=>{if(e.matches)parkingVideo.pause()});syncPlayback();
}
