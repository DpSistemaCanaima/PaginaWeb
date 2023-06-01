const openDocent = document.querySelector('.docent_2');
const docent = document.querySelector('.docent');
const closeDocent = document.querySelector('.docent__close');

openDocent.addEventListener('click', (e)=>{
    e.preventDefault();
    docent.classList.add('docent--show');
});

closeDocent.addEventListener('click', (e)=>{
    e.preventDefault();
    docent.classList.remove('docent--show');
});