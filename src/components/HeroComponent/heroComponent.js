import './heroStyles.css';

function renderHero() {
    const divContent = document.querySelector('#content');

    const heroSection = `
            <section class="hero-section">
                <div class="left-side">
                    <div class="left-side_content">
                        <h2 class="sublogo">Discover your taste</h2>
                        <h1>Eat healthy and Natural Food</h1>
                        <button class="btn">
                            <a href="#">Discover Menu</a>
                        </button>
                    </div>
                </div>
                <div class="right-side"></div>
            </section>
        `;

    divContent.insertAdjacentHTML('beforeend', heroSection);
}

export default renderHero;
