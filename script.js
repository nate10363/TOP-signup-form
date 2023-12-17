const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password_confirm');

const create = document.querySelector('#create');

create.addEventListener('click', revisePassword);

function revisePassword() {
    if (password.value !== passwordConfirm.value) {
        passwordConfirm.style.borderColor = 'red';
        alert('password confirmation incorrect');
        passwordConfirm.value = '';
    }
}

