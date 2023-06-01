const openMola = document.querySelector('.hero1');
const mola = document.querySelector('.mola');
const closeMola = document.querySelector('.mola__close');

openMola.addEventListener('click', (e)=>{
    e.preventDefault();
    mola.classList.add('mola--show');
});

closeMola.addEventListener('click', (e)=>{
    e.preventDefault();
    mola.classList.remove('mola--show');
});