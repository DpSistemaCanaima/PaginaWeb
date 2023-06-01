const openMora = document.querySelector('.he');
const mora = document.querySelector('.mora');
const closeMora = document.querySelector('.mora__close');

openMora.addEventListener('click', (e)=>{
    e.preventDefault();
    mora.classList.add('mora--show');
});

closeMora.addEventListener('click', (e)=>{
    e.preventDefault();
    mora.classList.remove('mora--show');
});