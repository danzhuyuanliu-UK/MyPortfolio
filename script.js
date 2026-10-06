const viewer=document.querySelector('#viewer');
const full=viewer.querySelector('img');
const caption=viewer.querySelector('p');
let opener;
document.querySelectorAll('.zoom').forEach(button=>button.addEventListener('click',()=>{
 opener=button; full.src=button.dataset.full;full.alt=button.querySelector('img').alt;caption.textContent=full.alt;viewer.showModal();
}));
viewer.querySelector('.close').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close()});
viewer.addEventListener('close',()=>{full.removeAttribute('src');opener?.focus()});
