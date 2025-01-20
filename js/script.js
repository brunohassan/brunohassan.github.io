import SITE_CONFIG from './config.js';

$(document).ready(function() {
    initializePage();
});

function initializePage() {
    adjustMenuIcon();
    adjustChapterSize();
    setupEventListeners();
    setDefaultLanguage();
}

function adjustMenuIcon() {
    $('.mobile-menu-icon').css('margin-top', $('.mobile-menu-slices').height() / 2);
}

function setupEventListeners() {
    $(window).resize(() => adjustChapterSize());
    
    $('.main-nav a').click(handleNavClick);
}

function setDefaultLanguage() {
    // Get user's browser language or stored preference
    const userLang = navigator.language || navigator.userLanguage;
    const defaultLang = userLang.startsWith('pt') ? 'PT' : 'EN';
    setLanguage(defaultLang);
}

function setLanguage(languageCode) {
    const language = SITE_CONFIG.languages[languageCode];
    if (!language) return;

    $('[data-lang]').each(function() {
        const path = this.dataset.lang.split('.');
        let content = language.content;
        
        // Navigate through the content object using the path
        for (const key of path) {
            if (content[key] === undefined) return;
            content = content[key];
        }

        // Handle arrays (like lists) specially
        if (Array.isArray(content)) {
            this.innerHTML = content.map(item => `<li>${item}</li>`).join('');
        } else {
            this.innerHTML = content;
        }
    });

    $('#programming-list').parent().html(
        createColumnizedList(language.content.skills.sections.programmingList)
    );
    
    $('#tools-list').parent().html(
        createColumnizedList(language.content.skills.sections.toolsList)
    );

    $('#architecture-list').parent().html(
        createColumnizedList(language.content.skills.sections.architectureList)
    );  

    $('#db-list').parent().html(
        createColumnizedList(language.content.skills.sections.dbList)
    );

    $('#language').text(languageCode);
}

function handleNavClick(e) {
    e.preventDefault();
    const targetId = $(this).attr('href');
    const targetOffset = $(targetId).offset().top;
    
    $("html,body").animate({
        scrollTop: targetOffset
    }, 500);
}

function adjustChapterSize() {
    const isDesktop = window.innerWidth > 991;
    if (!isDesktop) return;

    $('section[data-id]').each(function() {
        $(this).css('height', $(this).find('.chapter__content').height());
    });
}

function createColumnizedList(items) {
    const rowsPerColumn = 4;
    const columns = Math.ceil(items.length / rowsPerColumn);
    let html = '';

    for (let col = 0; col < columns; col++) {
        html += '<ul class="skills-list">';
        for (let row = 0; row < rowsPerColumn; row++) {
            const index = col * rowsPerColumn + row;
            if (index < items.length) {
                html += `<li>${items[index]}</li>`;
            }
        }
        html += '</ul>';
    }
    return html;
}