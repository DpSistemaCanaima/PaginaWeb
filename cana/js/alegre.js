const openMoral = document.querySelector('.hero');
const moral = document.querySelector('.moral');
const closeMoral = document.querySelector('.moral__close');

openMoral.addEventListener('click', (e)=>{
    e.preventDefault();
    moral.classList.add('moral--show');
});

closeMoral.addEventListener('click', (e)=>{
    e.preventDefault();
    moral.classList.remove('moral--show');
});