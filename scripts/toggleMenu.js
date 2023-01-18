const toggleButton = document.querySelector('#menu-open-btn');
const menu = document.querySelector('.menu');
let isOpen = false;

toggleButton.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
        toggleButton.classList.add('openMenuButton');
        menu.classList.add('openMenu');
        toggleButton.classList.remove('closeMenuButton');
        menu.classList.remove('closeMenu');
    } else {
        toggleButton.classList.add('closeMenuButton');
        menu.classList.add('closeMenu');
        toggleButton.classList.remove('openMenuButton');
        menu.classList.remove('openMenu');
    }
});