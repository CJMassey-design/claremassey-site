(()=>{const lb=document.querySelector('.lb');if(!lb)return;const im=lb.querySelector('img'),cap=lb.querySelector('.lb-c'),x=lb.querySelector('.lb-x');
const links=[...document.querySelectorAll('a.z')];let i=0,last;
function show(n){i=(n+links.length)%links.length;const a=links[i],t=a.querySelector('img');im.src=a.href;im.alt=t.alt;const fc=a.parentElement.querySelector('figcaption');cap.textContent=fc?fc.textContent:'';}
links.forEach((a,n)=>a.addEventListener('click',e=>{e.preventDefault();last=a;show(n);lb.hidden=false;x.focus();}));
function close(){lb.hidden=true;im.src='';last&&last.focus();}
x.onclick=close;lb.addEventListener('click',e=>{if(e.target===lb)close();});
document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')show(i+1);if(e.key==='ArrowLeft')show(i-1);});})();
