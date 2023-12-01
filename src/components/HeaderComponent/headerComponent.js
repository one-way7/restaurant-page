import './headerStyles.css';
import Logo from '../../assets/icons/logo-icon.svg';

function renderHeader() {
    const divContent = document.querySelector('#content');

    const header = `
        <header class="header">
            <nav class="nav">
                <ul>
                    <li>
                        <a href="#"
                            ><img
                                src=${Logo}
                                alt="logo"
                                width="50"
                                height="50"
                                data-tab="hero"
                        /></a>
                    </li>
                    <li><a href="#" data-tab="menu">Menu</a></li>
                    <li><a href="#" data-tab="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        `;

    divContent.insertAdjacentHTML('afterbegin', header);
}

export default renderHeader;
