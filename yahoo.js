// script for yahoo
(function () {
    function nuke() {
	// hide ai chat button
        document.querySelectorAll('li.mr-2.fl-l:nth-of-type(2)').forEach(e => {
            e.style.display = 'none';
        });
    }

    nuke();

    new MutationObserver(nuke).observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
