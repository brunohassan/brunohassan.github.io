$(document).ready(function() {
    $('.mobile-menu-icon').css('margin-top', $('.mobile-menu-slices').height() / 2);
    // $('.site-main').css('margin-top', window.innerHeight - $('.main-nav').height()); // trecho para add navbar fixa no top
    adjustChapterSize();
    $(window).resize(function() { adjustChapterSize() });
});

var language = {
    EN: {
        header_title: 'Software Engineer &amp; Developer',
        header_im: "Hi, I'm",
        nav_about: "About",
        nav_work: "Work",
        nav_skills: "Skills",
        nav_contact: "Contact",
        about_head: "I am a software engineer and developer living in São Paulo, Brazil.",
        about_life: "Passionate for the unpredictability of life and always trying to look on its bright side. Apart from work, I enjoy my time praticing sports, listening to music and exploring new places.",
        about_trampo_title: "My path until now...",
        about_trampo_description: `Always intriged by math and other sciences, I seeked a bachelor degree in automation and control engineering in UNICAMP, which is a magnificent place to be part of.<br/> Since I found out about programming, i love using it as a tool
        to automate and make anything in my life more practical. Not only developing this new ideas, but doing it in the bes way possible is my main go, thus, I'm more and more interested in solutions architecture.`,
        about_projects: "Some of my personal projects include house automation, illustrations and investments. <br/> Meanwhile, some of my interests are:",
        about_web: "Backend Web Development",
        about_iot: "Internet of Things",
        about_architecture: "Software Architecture",
        about_cloud: "Cloud Computing",
        work_estag: "Intern",
        work_estag_period: "May 2019 - May 2021",
        work_estag_desc: `<li>Developing websites with Python frameworks (Flask and Django) to automate workflows;</li>
                                <li>Creating shell scripts for automating internal processes.</li>`,
        work_analista: "Data Analyst",
        work_analista_period: "Jun 2021 - Dec 2021",
        work_analista_desc: `<li>Analyzing data to spot trends and creating visualizations;</li>
                                <li>Using statistical modeling to improve processes;</li>`,
        work_developer: "Software Engineer",
        work_developer_period: "Jan 2022 - Today",
        work_developer_desc: `<li>Guided diverse technical teams, maintained industry standards, and ensured exceptional project delivery;</li>
                                            <li>Used DDD, BDD, and agile methodologies for collaborative technical discovery;</li>
                                            <li>Established efficient CI/CD pipelines with GitHub Actions for reliable software delivery.</li>
                                            <li>Integrated various AWS services for optimal architecture;</li>
                                            <li>Applied clean architecture principles for well-organized Python solutions.</li>`,
        skill_educacao: "Education",
        skill_curso: "Automation and Control Engineering",
        skill_curso_data: "Feb 2015 - Dec 2021",
        skill_skill: "Skills",
        skill_prog: "Programming and Frameworks",
        skill_tools: "Tools and Infrastructure",
        lang: "Languages",
        pt: "Portuguese",
        en: "English",
        fr: "French (basic)",
    },
    PT: {
        header_title: 'Engenheiro de Software &amp; Desenvolvedor',
        header_im: "Olá, eu sou",
        nav_about: "Sobre",
        nav_work: "Trabalho",
        nav_skills: "Competências",
        nav_contact: "Contato",
        about_head: "Sou um engenheiro de sotware atualmente morando em São Paulo, Brasil.",
        about_life: "Apaixonado pela imprevisibilidade da vida e sempre tentando vê-la pelo lado otimista. Além do trabalho, aproveito meu tempo praticando esportes, escutando diversos gêneros de músicas e conhecendo novos lugares.",
        about_trampo_title: "Meu caminho até aqui...",
        about_trampo_description: `Sempre intrigado por matemática e outras ciências, busquei uma formação em engenharia de controle e automação na UNICAMP.<br/> Desde que aprendi programação, adoro usá-la como ferramenta
        para automatizar e facilitar diversos fatores da vida. E ainda, não só desenvolver esses projetos, mas fazê-los da melhor maneira possível, dessa forma estou me interessando cada vez mais pela arquitetura de soluções.`,
        about_projects: "Alguns de meus projetos pessoais incluem automações residenciais, o estudo de ilustrações e investimentos. <br/> Enquanto alguns dos meus interesses técnicos são ciência de dados e internet das coisas.",
        about_web: "Desenvolvimento web",
        about_iot: "Internet das Coisas",
        about_architecture: "Arquitetura de software",
        about_cloud: "Computação em Cloud",
        work_estag: "Estagiário",
        work_estag_period: "Mai 2019 - Mai 2021",
        work_estag_desc: `<li>Desenvolvendo sites com frameworks em Python (Flask e Django) para automatizar fluxos de trabalho;</li>
                            <li>Criando scripts de shell para automatizar processos internos.</li>`,
        work_analista: "Analista de Dados Jr.",
        work_analista_period: "Jun 2021 - Dez 2021",
        work_analista_desc: `<li>Analisando dados para identificar tendências e criando visualizações;</li>
                                <li>Utilizando modelagem estatística para aprimorar processos;</li>`,
        work_developer: "Engenheiro de Software",
        work_developer_period: "Jan 2022 - Hoje",
        work_developer_desc: `<li>Orientei equipes técnicas diversas, mantive padrões da indústria e garanti entregas excepcionais de projetos;</li>
                                            <li>Utilizei metodologias DDD, BDD e ágeis para colaboração contínua em exercícios de descoberta técnica;</li>
                                            <li>Estabeleci pipelines eficientes de CI/CD com GitHub Actions para entrega confiável de software;</li>
                                            <li>Integrei várias serviços da AWS para uma arquitetura otimizada;</li>
                                            <li>Apliquei princípios de arquitetura limpa para soluções robustas em Python com código bem organizado.</li>`,
        skill_educacao: "Educação",
        skill_curso: "Engenharia de Controle e Automação",
        skill_curso_data: "Fev 2015 - Dez 2021",
        skill_skill: "Competências",
        skill_tools: "Ferramentas e Infraestrutura",
        skill_prog: "Programação e Frameworks",
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