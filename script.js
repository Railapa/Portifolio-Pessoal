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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 }); 


document.querySelectorAll('.formacao-card, .hard-skills-card, .projeto').forEach((el) => {
    el.classList.add('reveal'); 
    observer.observe(el);      
});

const imgProjeto = document.querySelectorAll('.projeto-area-img img')

const cardsProjetos = document.querySelectorAll('.projeto');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.closeModal');

const modalImg = document.querySelector('.modalImg');
const modalTitulo = document.querySelector('.modalTitulo');
const modalProjetoDesc = document.querySelector('.modalProjetoDesc');
const modalOQueFiz = document.querySelector('.modalOQueFiz');
const modalStacksContainer = document.querySelector('.modalStacks');
const modalLink = document.querySelector('.btn-modal-link');
const modalLinkRepositorio = document.querySelector('.btn-modal-linkRepositorio');

const detalhesProjetos = {
    "tlp": {
        titulo: "TLP Tech (Projeto Colaborativo)",
        projetoDesc: "Website institucional moderno e dinâmico desenvolvido em parceria com outros dois desenvolvedores. O projeto foi concebido como a plataforma oficial de uma agência voltada à criação de sites e presença digital para empresas.",
        oQueFiz: "Atuei no co-desenvolvimento do front-end, aplicando conceitos de trabalho em equipe para divisão de tarefas e integração de código. Fui responsável por estruturar seções chave da interface de forma totalmente responsiva e por implementar animações de scroll e interatividades usando JavaScript puro. O projeto foi excelente para consolidar minhas habilidades com controle de versão (Git/GitHub), organização de fluxo de trabalho conjunto e resolução de conflitos de código.",
        stacks: ["HTML5", "CSS3", "JavaScript", "Trabalho em Equipe", "Git / GitHub", "Responsividade"],
        link: "https://tlp-tech-git-master-rai-lapas-projects.vercel.app/",
        linkRepositorio: "https://github.com/Railapa/TLP-TECH.git"
    },

    "tz": {
        titulo: "TZ Consultoria (Projeto Real / Freelance)",
        projetoDesc: "Landing page corporativa e profissional desenvolvida para uma consultoria financeira real especializada em Open Banking. O projeto foi desenvolvido em equipe, onde atuei como o desenvolvedor front-end responsável por toda a implementação técnica do site.",
        oQueFiz: "Fiquei encarregado exclusivamente do desenvolvimento front-end, transformando a ideia e os requisitos do cliente em uma interface funcional e otimizada. Implementei o código utilizando HTML5 semântico, CSS3 para garantir uma experiência 100% responsiva em qualquer dispositivo e JavaScript para validações e interações. O projeto exigiu alinhamento constante com a equipe para garantir que a entrega final atendesse perfeitamente às expectativas de negócio do cliente.",
        stacks: ["HTML5", "CSS3", "JavaScript", "Trabalho em Equipe", "Freelance", "Responsividade"],
        link: "https://tzopenbanking.com.br/",
        linkRepositorio: "https://github.com/G4br13l-P4lm31r4/TZConsultoria.git"
    },

    "costs": {
        titulo: "Costs (Projeto Pessoal)",
        projetoDesc: "Sistema completo de gerenciamento de projetos e controle de verbas. A aplicação permite que o usuário crie projetos, defina um orçamento total e adicione serviços a cada projeto, monitorando os custos em tempo real para evitar que o limite financeiro seja ultrapassado.",
        oQueFiz: "Desenvolvi a aplicação SPA (Single Page Application) utilizando React, aplicando conceitos sólidos de componentização e reutilização de código. Implementei a comunicação com uma API (simulada via JSON Server) para persistência de dados e realizei operações completas de CRUD. Utilizei CSS Modules para garantir estilos isolados e escopados por componente, além de gerenciar estados dinâmicos com hooks (useState, useEffect) para calcular o saldo restante do projeto à medida que novos custos eram inseridos ou removidos.",
        stacks: ["React", "CSS Modules", "Fetch API", "CRUD Logic", "JavaScript (JSX)", "JSON Server"],
        link: "https://react-costs-git-main-rai-lapas-projects.vercel.app/",
        linkRepositorio: "https://github.com/Railapa/React-Costs.git"
    },

    "taskFlow": {
        titulo: "TaskFlow (Projeto Pessoal)",
        projetoDesc: "Gerenciador de tarefas (To-Do List) robusto projetado para otimizar a organização diária, contando com controle individual de acessos e persistência de dados em tempo real na nuvem.",
        oQueFiz: "Desenvolvi toda a aplicação utilizando JavaScript puro para a lógica de programação e manipulação dinâmica do DOM. Integrei o Firebase Auth para criar um sistema seguro de login, cadastro e logout, garantindo que cada usuário visualize apenas as suas próprias tarefas. Utilizei o Firebase Firestore para armazenar, editar e excluir os dados em tempo real, além de implementar lógica de busca textual e filtros dinâmicos por categorias (Trabalho, Estudos, Pessoal), datas e níveis de prioridade.",
        stacks: ["HTML5", "CSS3", "JavaScript (ES6+)", "Firebase Authentication", "Firebase Firestore", "Programação Assíncrona"],
        link: "https://task-flow-phi-mauve.vercel.app/",
        linkRepositorio: "https://github.com/Railapa/TaskFlow.git"
    },

    "starbucks": {
        titulo: "Starbucks Landing Page (Projeto Conceitual)",
        projetoDesc: "Releitura da página inicial da Starbucks, focando em fidelidade visual, transições suaves e interações dinâmicas ao selecionar diferentes produtos.",
        oQueFiz: "Aproveitei este projeto para consolidar conceitos de posicionamento avançado com CSS (Flexbox) e manipulação dinâmica do DOM via JavaScript. Desenvolvi a lógica que altera a imagem do produto em destaque e o círculo de fundo correspondente de forma sutil quando o usuário clica nos diferentes sabores de bebidas, garantindo um feedback visual fluido. Também estruturei a interface para manter a harmonia do layout em diferentes tamanhos de tela.",
        stacks: ["HTML5", "CSS3", "JavaScript (Vanilla)", "Manipulação do DOM", "Flexbox", "Responsividade"],
        link: "https://landing-page-starbucks-vert.vercel.app/",
        linkRepositorio: "https://github.com/Railapa/Landing-Page-Starbucks.git"
    },

    "rumo": {
        titulo: "Agência Rumo (Projeto Pessoal)",
        projetoDesc: "Landing page corporativa moderna desenvolvida para apresentar os serviços, portfólio e diferenciais de uma empresa de engenharia e projetos, focada em um design limpo e de alta legibilidade.",
        oQueFiz: "Estruturei a aplicação utilizando boas práticas de HTML5 semântico e CSS3 para garantir consistência visual. Desenvolvi e configurei do zero o menu lateral responsivo (estilo hambúrguer), aplicando lógica de programação assíncrona ou manipulação de classes no JavaScript para criar efeitos de abertura e fechamento fluidos ao clicar no ícone de menu ou fora dele. Foquei em criar uma navegação otimizada para guiar o visitante em uma jornada lógica pelas seções de serviços e cases.",
        stacks: ["HTML5", "CSS3", "JavaScript (ES6+)", "Flexbox", "Layout Responsivo", "Menu Interativo"],
        link: "https://agencia-rumo.vercel.app/",
        linkRepositorio: "https://github.com/Railapa/Agencia-Rumo.git"
    },
};

cardsProjetos.forEach((card) => {
    card.addEventListener('click', () => {
        const idProjeto = card.getAttribute('data-projeto');
        const dados = detalhesProjetos[idProjeto];
        
        if (dados) {
           
            const srcImagem = card.querySelector('img').getAttribute('src');
            
            modalImg.src = srcImagem;
            modalImg.alt = `Screenshot do projeto ${dados.titulo}`;
            modalTitulo.textContent = dados.titulo;
            modalProjetoDesc.textContent = dados.projetoDesc;
            modalOQueFiz.textContent = dados.oQueFiz;
            modalLink.href = dados.link;
            modalLinkRepositorio.href = dados.linkRepositorio;

            modalStacksContainer.innerHTML = '';
            dados.stacks.forEach(stack => {
                const span = document.createElement('span');
                span.classList.add('tech-tag');
                span.textContent = stack;
                modalStacksContainer.appendChild(span);
            });

            modal.showModal();
        }
    });
});

btnCloseModal.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});