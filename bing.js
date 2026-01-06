// script for bing
(function () {
    function nuke() {
	// hide copilot icon
        document.querySelectorAll('.cdxCopilotIconBg').forEach(e => {
            e.style.display = 'none';
        });
	// hide ai generator buttons
        document.querySelectorAll('.btnstyle.aitools').forEach(e => {
            e.style.display = 'none';
        });
	// hide copilot tab
        const a = document.getElementById('codex');
        if (a) a.style.display = 'none';
	// hide copilot serach
        document.querySelectorAll('.b_results_eml').forEach(e => {
            e.style.display = 'none';
        });
	// hide copilot tab in search results
        const b = document.getElementById('b-scopeListItem-copilotsearch');
        if (b) b.style.display = 'none';
    }

    nuke();

    new MutationObserver(nuke).observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
