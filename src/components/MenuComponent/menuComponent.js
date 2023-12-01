import './menuStyles.css';

function renderMenu() {
    const divContent = document.querySelector('#content');

    const menuSection = `
            <section class="menu-section">
                <div class="menu-container">
                    <h2 class="menu-header">Our Menu</h2>
                    <div class="menu-content">
                        <div class="starters">
                            <h2 class="dish-type-header">STARTERS</h2>
                            <div class="dish-container">
                                <div class="dish-content">
                                    <h3 class="dish-header">
                                        CARPRESE BRUSCHETTA
                                    </h3>
                                    <span class="price">$5.00</span>
                                    <p class="dish-text">
                                        Lorem ispum dolor sit amet.
                                    </p>
                                </div>
                                <div class="dish-content">
                                    <h3 class="dish-header">CAESAR SALAD</h3>
                                    <span class="price">$5.00</span>
                                    <p class="dish-text">
                                        Lorem ipsum dolor sit amet,
                                        constectetuer adpiscing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="main-dishes">
                            <h2 class="dish-type-header">MAIN DISHES</h2>
                            <div class="dish-container">
                                <div class="dish-content">
                                    <h3 class="dish-header">
                                        PUTTANESCA PASTA
                                    </h3>
                                    <span class="price">$25.00</span>
                                    <p class="dish-text">
                                        Lorem ispum dolor sit amet constectetuer
                                        adpiscing.
                                    </p>
                                </div>
                                <div class="dish-content">
                                    <h3 class="dish-header">CARBONARA PASTA</h3>
                                    <span class="price">$25.00</span>
                                    <p class="dish-text">
                                        Lorem ipsum dolor sit amet,
                                        constectetuer adpiscing, dolor sit amet.
                                    </p>
                                </div>
                                <div class="dish-content">
                                    <h3 class="dish-header">
                                        MARGHERITA PIZZA
                                    </h3>
                                    <span class="price">$25.00</span>
                                    <p class="dish-text">
                                        Lorem ipsum dolor sit amet,
                                        constectetuer adpiscing, dolor sit amet.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="dessert">
                            <h2 class="dish-type-header">DESSERT</h2>
                            <div class="dish-container">
                                <div class="dish-content">
                                    <h3 class="dish-header">
                                        MATCHA ICE CREAM
                                    </h3>
                                    <span class="price">$15.00</span>
                                    <p class="dish-text">
                                        Lorem ispum dolor sit amet constectetuer
                                        adpiscing.
                                    </p>
                                </div>
                                <div class="dish-content">
                                    <h3 class="dish-header">CHOCOLATE CAKE</h3>
                                    <span class="price">$12.00</span>
                                    <p class="dish-text">
                                        Lorem ipsum dolor sit amet,
                                        constectetuer adpiscing, dolor sit amet.
                                    </p>
                                </div>
                                <div class="dish-content">
                                    <h3 class="dish-header">CREAMY CAKE</h3>
                                    <span class="price">$15.00</span>
                                    <p class="dish-text">
                                        Lorem ipsum dolor sit amet,
                                        constectetuer adpiscing, dolor sit amet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

    divContent.insertAdjacentHTML('beforeend', menuSection);
}

export default renderMenu;
