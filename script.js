const btnMenu = document.getElementById('menu-toggle');
const ladoMenu = document.getElementById('lado-menu');
const links = document.querySelectorAll('.side-menu a');

ladoMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        btnMenu.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (!btnMenu.contains(e.target) && !ladoMenu.contains(e.target)) {
        btnMenu.classList.remove('open');
    }
});

btnMenu.addEventListener('click', () => {
    ladoMenu.classList.toggle('open');
});

const btnTema = document.getElementById('tema-toggle');
const body = document.body;

btnTema.addEventListener('click', () => {
    body.classList.toggle('modo-claro');
    const icone = btnTema.querySelector('i');
    
    if (body.classList.contains('modo-claro')) {
        icone.classList.replace('fa-sun', 'fa-moon');
    } else {
        icone.classList.replace('fa-moon', 'fa-sun');
    }
});


document.querySelectorAll('.lado-menu a').forEach(link => {
    link.addEventListener('click', () => ladoMenu.classList.remove('open'));
});