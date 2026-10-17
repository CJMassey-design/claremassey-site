(()=>{const lb=document.querySelector('.lb');if(!lb)return;const im=lb.querySelector('img'),cap=lb.querySelector('.lb-c'),x=lb.querySelector('.lb-x');
const prev=document.createElement('button'),next=document.createElement('button');
prev.className='lb-nav lb-p';prev.textContent='‹';prev.setAttribute('aria-label','Previous');
next.className='lb-nav lb-n';next.textContent='›';next.setAttribute('aria-label','Next');lb.append(prev,next);
const all=[...document.querySelectorAll('a.z')];let i=0,last;
const vis=()=>all.filter(a=>!a.closest('figure').hidden);
function unzoom(){lb.classList.remove('zoomed');}
function show(a){unzoom();last=a;im.src=a.href;im.alt=a.querySelector('img').alt;
const fc=a.parentElement.querySelector('figcaption');cap.innerHTML='';
if(fc){const pl=fc.querySelector('.place');const t=fc.cloneNode(true);t.querySelectorAll('.place').forEach(e=>e.remove());cap.textContent=t.textContent.trim()+(pl?' — '+pl.textContent:'');}}
function step(d){const v=vis();let k=v.indexOf(last);show(v[(k+d+v.length)%v.length]);}
all.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();show(a);lb.hidden=false;document.body.style.overflow='hidden';x.focus();}));
function close(){lb.hidden=true;unzoom();im.src='';document.body.style.overflow='';last&&last.focus();}
im.addEventListener('click',e=>{e.stopPropagation();if(lb.classList.contains('zoomed')){unzoom();return;}
const r=im.getBoundingClientRect(),fx=(e.clientX-r.left)/r.width,fy=(e.clientY-r.top)/r.height;
lb.classList.add('zoomed');requestAnimationFrame(()=>{lb.scrollLeft=fx*im.offsetWidth-innerWidth/2;lb.scrollTop=fy*im.offsetHeight-innerHeight/2;});});
x.onclick=close;prev.onclick=e=>{e.stopPropagation();step(-1)};next.onclick=e=>{e.stopPropagation();step(1)};
lb.addEventListener('click',e=>{if(e.target===lb)close();});
document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1);});})();
