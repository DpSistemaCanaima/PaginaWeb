const openMor = document.querySelector('.h');
const mor = document.querySelector('.mor');
const closeMor = document.querySelector('.mor__close');

openMor.addEventListener('click', (e)=>{
    e.preventDefault();
    mor.classList.add('mor--show');
});

closeMor.addEventListener('click', (e)=>{
    e.preventDefault();
    mor.classList.remove('mor--show');
});