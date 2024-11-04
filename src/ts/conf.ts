const config = {
    selectors: {
        codeExamples:
            '.example-contents .phpcode code span span, #usernotes .note .text .phpcode code span.html span',
        searchQuery: '.search-query.tt-query',
        targetForCodeExamples: '.example-contents > .phpcode',
        copyCodeButton: '.php-revival-copy-button',
        playCodeButton: '.php-revival-play-button',
        bread: {
            next: '#breadcrumbs-inner .next',
            prev: '#breadcrumbs-inner .prev',
        },
        docs: {
            classMethods: '.partintro .classsynopsis .methodname .methodname',
            contributeModal: 'body.docs .contribute',
            contributeModalLinks: 'body.docs .contribute .edit-bug',
            layoutContent: '#layout-content',
        },
        home: {
            hero: 'body.home .hero',
            logo: 'body.home img.hero-logo',
            rightSidebar: 'body.home .tips',
        },
    },
    sandboxURL: 'https://onlinephp.io/',
    events: {
        videoTagSelected: 'SNwx9SHZLRdGXnx',
    },
}

export default config
