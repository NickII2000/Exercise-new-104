function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (showModalByScroll) {
        clearInterval(modalTimerId);
    }

    window.removeEventListener('scroll', showModalByScroll);
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector) {
    // Modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        prevModalDialog = document.querySelector('.modal__dialog');

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    modalTrigger.forEach(btn => btn.addEventListener('click', () => openModal(modalSelector)));

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);
}

export default modal;
export { openModal };
export { closeModal };