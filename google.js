// script for google
(function () {
    function nuke() {
	// hide ai overveiw
        const a = document.getElementById('Odp5De');
        if (a) a.style.display = 'none';
	// hide ai mode button on google homepage
        document.querySelectorAll('.plR5qb').forEach(e => {
            e.style.display = 'none';
        });
	// hide ai mode tab
        document.querySelectorAll('.C6AK7c.XVMlrc > .mXwfNd > .mVH5Fc > .R1QWuf').forEach(e => {
            e.style.display = 'none';
        });
    }

    nuke();

    new MutationObserver(nuke).observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();