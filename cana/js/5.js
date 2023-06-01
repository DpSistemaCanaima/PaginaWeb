const openMo = document.querySelector('.h_5');
const mo = document.querySelector('.mo');
const closeMo = document.querySelector('.mo__close');

openMo.addEventListener('click', (e)=>{
    e.preventDefault();
    mo.classList.add('mo--show');
});

closeMo.addEventListener('click', (e)=>{
    e.preventDefault();
    mo.classList.remove('mo--show');
});