// script for duckduckgo
(function () {
    function nuke() {
	// hide duck.ai button
        document.querySelectorAll('.header_hasSearchbox__ttBRw.header_isResponsive__okaHv.header_headerWrapDesktop__9M19L > .header_header__w2BOs > .header_headerContent__LYxh6 > .header_headerSection___XMRI.header_headerRight__P6Z40 > .button_size-xs__kck8r.button_ghost___IPIW.button_button__GGtY1.header_aiChatButton__e_9yJ').forEach(e => {
            e.style.display = 'none';
        });
	// hide search assist responses
        document.querySelectorAll('li.L6fj2A3X2mfJl5kE8caF:nth-of-type(5)').forEach(e => {
            e.style.display = 'none';
        });
	// hide the other duck.ai button
        document.querySelectorAll('a[href*="ia=chat"]').forEach(e => {
            e.style.display = 'none';
        });
	// hide the search assist button
        document.querySelectorAll('.GnLX_jUB3Jn3idluie7R.vcOFkrrvuSYp7xsAur2Y.ffON2NH02oMAcqyoh2UU.d3n3IVqx1558EtMlZV_g').forEach(e => {
            e.style.display = 'none';
        });
    }

    nuke();

    new MutationObserver(nuke).observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
