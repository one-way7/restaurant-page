import './contactStyles.css';

function renderContact() {
    const divContent = document.querySelector('#content');

    const contactSection = `
        <section class="contact-section">
            <div class="contact-container">
                <h2 class="conctact-header">Contact Us</h2>
                <div class="conctacts">
                    <p class="chef-conctacts">
                        Chef 555-555-5554 totallyRealEmail@notFake.com
                    </p>
                    <p class="manager-conctacts">
                        Manager 555-555-5555 perfectlyRealEmail@notFake.com
                    </p>
                    <p class="waiter-contacts">
                        Waiter 555-555-5556 totallyRealEmail@notFake.com
                    </p>
                </div>
            </div>
        </section>
        `;

    divContent.insertAdjacentHTML('beforeend', contactSection);
}

export default renderContact;
