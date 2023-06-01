const openDocente = document.querySelector('.docente_1');
const docente = document.querySelector('.docente');
const closeDocente = document.querySelector('.docente__close');

openDocente.addEventListener('click', (e)=>{
    e.preventDefault();
    docente.classList.add('docente--show');
});

closeDocente.addEventListener('click', (e)=>{
    e.preventDefault();
    docente.classList.remove('docente--show');
});