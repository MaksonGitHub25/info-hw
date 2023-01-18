const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]'),
    modalSubmit = document.querySelector('[data-submit]');

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        openModal();
    });
});


modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
    }
});

function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll);


// ---------------------------------------------

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
});

modalSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('[data-input]');
    const checkbox = document.querySelector('[data-checkbox]');

    let isValid = true;
    inputs.forEach((input) => {
        if (input.value === '' || !checkbox.checked) {
            isValid = false;
        }
    });

    if (!isValid) {
        alert("Щоб надіслати запит, ви повинні заповнити всі дані та погодитися з нашими умовами користування");
    } else {
        showThanksModal();
    }
});

function showThanksModal() {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">Дякую за довіру</div>
        </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal();
    }, 4000);
}
