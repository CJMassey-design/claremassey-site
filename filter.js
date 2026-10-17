(()=>{const bs=[...document.querySelectorAll('.filter button')];if(!bs.length)return;
const figs=[...document.querySelectorAll('.grid figure')];
bs.forEach(b=>b.addEventListener('click',()=>{const c=b.dataset.c;bs.forEach(x=>x.setAttribute('aria-pressed',x===b));
figs.forEach(f=>f.hidden=!!c&&!f.classList.contains('c-'+c));}));})();
