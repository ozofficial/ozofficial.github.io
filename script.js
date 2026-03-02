
function filterApps(category){
  document.querySelectorAll('.app').forEach(app=>{
    if(category==='all' || app.dataset.category===category){
      app.style.display='block';
    } else {
      app.style.display='none';
    }
  });
}

// Scroll animation
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity=1;
      entry.target.style.transform='translateY(0)';
    }
  });
},{threshold:0.15});

document.querySelectorAll('.app').forEach(el=>{
  el.style.opacity=0;
  el.style.transform='translateY(60px)';
  observer.observe(el);
});

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js');
}
