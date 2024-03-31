(function() {
    function getMenu() {
        return window.document.getElementById('MENU_AS_CONTAINER');
    }

    function getMenuToggle() {
        return window.document.getElementById('MENU_AS_CONTAINER_TOGGLE');
    }

    function openMenu() {
        let menu = getMenu();
        menu.style.display = 'block';
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
        getMenuToggle().style.zIndex = 'var(--above-all-z-index)';
    }

    function hideMenu() {
        let menu = getMenu();
        menu.style.display = 'none';
        menu.style.visibility = 'hidden';
        menu.style.opacity = '0';
        getMenuToggle().style.zIndex = 'var(--above-all-in-container)';
    }
    let isOpen = false;
    function toggleMenu() {
        if (isOpen)
        {
            hideMenu();
            isOpen = !isOpen;
        }
        else {
            openMenu();
            isOpen = !isOpen;
        }
    }
    addEventListener("DOMContentLoaded", function () 
    {
        getMenuToggle().addEventListener('click', toggleMenu);
    });
})();