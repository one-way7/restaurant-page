import renderHeader from './components/HeaderComponent/headerComponent';
import renderHero from './components/HeroComponent/heroComponent';
import renderMenu from './components/MenuComponent/menuComponent';
import renderContact from './components/contactComponent/contactComponent';

import './main.css';

(function render() {
    renderHeader();
    renderHero();
})();

function handleSwitchTabClick(e) {
    e.preventDefault();

    const dataTabContent = e.target.getAttribute('data-tab');
    const domEl = e.currentTarget.nextElementSibling;

    switch (dataTabContent) {
        case 'hero':
            domEl.remove();
            renderHero();
            break;
        case 'menu':
            domEl.remove();
            renderMenu();
            break;
        case 'contact':
            domEl.remove();
            renderContact();
            break;
    }
}

document
    .querySelector('.header')
    .addEventListener('click', handleSwitchTabClick);
