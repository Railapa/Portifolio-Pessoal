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

    "ChronosPomodoro": {
        titulo: "Chronos Pomodoro (Projeto Pessoal)",
        projetoDesc: "Aplicação web completa de produtividade baseada na técnica Pomodoro, desenvolvida para auxiliar na gestão de tempo e foco. O Chronos permite que o usuário gerencie ciclos de trabalho e descanso, personalize durações, alterne temas visuais e acompanhe o histórico detalhado de suas tarefas em uma interface moderna e intuitiva.",
        oQueFiz: "Desenvolvi toda a aplicação do zero em React com TypeScript, garantindo tipagem estática e um código limpo e de fácil manutenção. Implementei a lógica do temporizador regressivo com suporte a ciclos de foco, descanso curto e descanso longo, além do controle de estados para início, interrupção e conclusão de tarefas. Criei um painel de ajustes onde o usuário pode customizar os minutos de cada etapa do ciclo conforme sua necessidade e uma página de histórico que exibe o status de cada tarefa (concluída, interrompida ou abandonada), tipo de ciclo, data e duração, incluindo funcionalidade para limpar registros e persistência de dados no LocalStorage. Além disso, implementei a alternância entre Tema Claro e Escuro (Light/Dark Mode), notificações estilo toast para feedback das ações do usuário e uma interface 100% responsiva.",
        stacks: ["React", "TypeScript", "HTML5" ,"CSS modules", "LocalStorage", 'Responsividade'],
        link: "https://chronos-plum-ten.vercel.app/",
        linkRepositorio: "https://github.com/Railapa/Chronos.git"
    },
    
    "FutFeed": {
        titulo: "Fut Feed (Projeto Pessoal)",
        projetoDesc: "Dashboard moderno e interativo de notícias e estatísticas de futebol em tempo real. A aplicação centraliza feeds categorizados de notícias esportivas, tabelas de classificação completas das principais ligas do mundo (Brasileirão Série A, Premier League, La Liga e Champions League) e acompanhamento dedicado de clubes favoritos com exibição de próximas partidas e horários de jogos.",
        oQueFiz: "Desenvolvi a aplicação SPA utilizando React e Tailwind CSS, focando em uma experiência fluida com temas dinâmicos e gradientes que se adaptam visualmente às cores oficiais de cada competição selecionada. Integrei e orquestrei o consumo de múltiplas APIs REST (Football-Data e GNews), implementando tratamento de erros, estados de carregamento (skeleton loading) e fallbacks resilientes. Construí a lógica de persistência de dados no LocalStorage para salvar o time favorito de cada torneio de forma independente e gerenciar notícias salvas. Além disso, configurei proxies nativos no Vite e Vercel Rewrites para eliminar problemas de CORS e garantir requisições seguras e de alta performance em produção.",
        stacks: ['React', 'Tailwind CSS', 'JavaScript (JSX)', 'REST APIs', 'Vite', 'LocalStorage', 'Vercel Rewrites'],
        link: "https://fut-feed.vercel.app/",
        linkRepositorio: "https://github.com/Railapa/FutFeed"
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