const openDocen = document.querySelector('.docen_3');
const docen = document.querySelector('.docen');
const closeDocen = document.querySelector('.docen__close');

openDocen.addEventListener('click', (e)=>{
    e.preventDefault();
    docen.classList.add('docen--show');
});

closeDocen.addEventListener('click', (e)=>{
    e.preventDefault();
    docen.classList.remove('docen--show');
});