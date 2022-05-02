import throttle from 'lodash.throttle';

const refs = {
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
    form: document.querySelector('.feedback-form'),
}
const STORAGE_KEY = 'feedback-form-state';
const formData = localStorage.getItem(STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(STORAGE_KEY))
    : {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle((e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500))

populateImput()

function onFormSubmit(e) {
    e.preventDefault();

    const {
        elements: { email, message }
    } = e.currentTarget;

    if (email.value === "" || message.value === "") {
        alert('All fields must be filled!!!');
    } else {
        const formDataLog = new FormData(e.currentTarget);
        const loginFormData = {};

        formDataLog.forEach((value, name) => {
            loginFormData[name] = value;
        });
        
        console.log(loginFormData);

        delete formData.message;
        delete formData.email;
        e.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    }
}

function populateImput() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parseData = JSON.parse(savedData);
    
    if (parseData === null) {
        return;
    }
    if (parseData.email) {
        refs.input.value = parseData.email;
    }
    if (parseData.message) {
        refs.textarea.value = parseData.message;
    }
}