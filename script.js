const formBtnEl = document.querySelector('.btn-cta');
const emailEl = document.querySelector('.cta-input');
const errorEl = document.querySelector('.cta-form-error')

formBtnEl.addEventListener('click', function (e) {
    e.preventDefault();
    if (!emailEl.checkValidity()) {
        errorEl.style.display = 'block';
    } else {
        errorEl.style.display = 'none';
        emailEl.value = '';
        emailEl.blur();
    }
});
