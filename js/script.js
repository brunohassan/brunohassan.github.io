$(document).ready(function() {
    $('.mobile-menu-icon').css('margin-top', $('.mobile-menu-slices').height() / 2);
    // $('.site-main').css('margin-top', window.innerHeight - $('.main-nav').height()); // trecho para add navbar fixa no top
    adjustChapterSize();
    $(window).resize(function() { adjustChapterSize() });
});

var language = {
    EN: {
        header_title: 'Developer &amp; Data Analyst',
        header_im: "Hi, I'm",
        nav_about: "About",
        nav_work: "Work",
        nav_skills: "Skills",
        nav_contact: "Contact",
        about_head: "I am a data analyst and developer living in São Paulo, Brazil.",
        about_life: "Passionate for the unpredictability of life and trying to look on its bright side. Apart from work, I enjoy my time praticing sports, listening to music and knowing new places.",
        about_trampo_title: "My path until now...",
        about_trampo_description: `Always intriged by math and other sciences, I seeked a bachelor degree in automation and control engineering in UNICAMP, which is a magnificent place to be part of.<br/> Since I found out about programming, i love using it as a tool
        to automate and make everything more practical. Integrating it with mathematical models has been and amazing adventure on designing plans to optimize companies' processes.`,
        about_projects: "Some of my personal projects include house automation, illustrations and investments. <br/> Meanwhile, some of my interests are data science and internet of things.",
        about_datasci: "Data Science",
        about_iot: "Internet of Things",
        about_bigdata: "Big Data",
        about_cloud: "Cloud Computing",
        work_estag: "Intern",
        work_estag_period: "May 2019 - May 2021",
        work_estag_desc: `- Web development using Python (Flask and Django) aiming the automation and optimization of heavy workflows;<br/> - Bash development (Powershell) to automate bureaucratic companies processess.`,
        work_analista: "Data Analyst",
        work_analista_period: "Jun 2021 - Today",
        work_analista_desc: `- Extracting analysis and creating visualizations from data to identify tendencies;<br/> - Statistical modeling aiming agility and processes improvement.`,
        skill_educacao: "Education",
        skill_curso: "Automation and Control Engineering",
        skill_curso_data: "Feb 2015 - Dec 2021",
        skill_skill: "Skills",
        skill_prog: "Programming and Tools",
        lang: "Languages",
        pt: "Portuguese",
        en: "English",
        fr: "French (basic)",
    },
    PT: {
        header_title: 'Desenvolvedor &amp; Analista de Dados',
        header_im: "Olá, eu sou",
        nav_about: "Sobre",
        nav_work: "Trabalho",
        nav_skills: "Competências",
        nav_contact: "Contato",
        about_head: "Sou um analista de dados atualmente vivendo em São Paulo, Brasil.",
        about_life: "Apaixonado pela impresibilidade da vida e sempre tentando vê-la pelo lado otimista. Além do trabalho, aproveito meu tempo praticando esportes, escutando diversos gêneros de músicas e conhecendo novos lugares.",
        about_trampo_title: "Meu caminho até aqui...",
        about_trampo_description: `Sempre intrigado por matemática e outras ciências, busquei uma formação em engenharia de controle e automação na UNICAMP.<br/> Desde que aprendi programação, adoro usá-la como ferramenta
        para automatizar e facilitar diversos fatores da vida. Unindo isso a modelos matemáticos tem sido empolgante para o desenvolvimento de planos para a otimização de processos em empresas.`,
        about_projects: "Alguns de meus projetos pessoais incluem automações residenciais, o estudo de ilustrações e investimentos. <br/> Enquanto alguns dos meus interesses técnicos são ciência de dados e internet das coisas.",
        about_datasci: "Ciência de dados",
        about_iot: "Internet das Coisas",
        about_bigdata: "Big Data",
        about_cloud: "Computação em Cloud",
        work_estag: "Estagiário",
        work_estag_period: "Mai 2019 - Mai 2021",
        work_estag_desc: `- Desenvolvimento Web em frameworks Python (Flask e Django) com o objetivo de automatizar e otimizar fluxos de trabalhos custosos aos colaboradores;<br/> - Desenvolvimento bash (Powershell) para a automatização
        de processos internos burocráticos.`,
        work_analista: "Analista de Suporte de TI Jr.",
        work_analista_period: "Jun 2021 - Hoje",
        work_analista_desc: `- Criação de análises e visualizações de dados para a identificação de tendências;<br/> - Aplicação de modelos estatísticos sobre dados para análise de modo a auxiliar na modernização e melhoria de processos.`,
        skill_educacao: "Educação",
        skill_curso: "Engenharia de Controle e Automação",
        skill_curso_data: "Fev 2015 - Dez 2021",
        skill_skill: "Competências",
        skill_prog: "Programação e Ferramentas",
        lang: "Idiomas",
        pt: "Português",
        en: "Inglês",
        fr: "Francês (básico)",
    }
};
// var navLinks = ['about', 'work', 'skills', 'contact'];

// function capitalize(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

function setLanguage(languageName) {
    $('[data-lang]').each(function() {
        this.innerHTML = language[languageName][this.dataset["lang"]];
    });
    $('#language')[0].innerText = languageName;
}

$('.main-nav a').click(function(e) {
    e.preventDefault();
    var idx = $(this).attr('href'),
        targetOffset = $(idx).offset().top;
    $("html,body").animate({
        scrollTop: targetOffset
    }, 500);
});

function adjustChapterSize() {
    if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 991) {
        $('section[data-id]').each(function() {
            $(this).css('height', $(this).find('.chapter__content').height())
        });
    }
}