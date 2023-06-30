$(document).ready(function () {
    const form = $('#form');
    const password1El = $('#password1');
    const password2El = $('#password2');
    const messageContainer = $('.message-container');
    const message = $('#message');

    let isValid = false;
    let passwordMatch = false;

    function validateForm() {
        isValid = form.is(':visible');
        if (!isValid) {
            message.text('Please fill out all fields');
            message.css('color', '#FF0000');
            messageContainer.css('border-color', '#FF0000');
            return;
        }
        if (password1El.val() === password2El.val()) {
            passwordMatch = true;
            password1El.css('border-color', '#28AE89');
            password2El.css('border-color', '#28AE89');
        } else {
            passwordMatch = false;
            message.text('Passwords do not match');
            message.css('color', '#FF0000');
            messageContainer.css('border-color', '#FF0000');
            password1El.css('border-color', '#FF0000');
            password2El.css('border-color', '#FF0000');
            return;
        }
        if (isValid && passwordMatch) {
            message.text('Successfully Registered!');
            message.css('color', '#28AE89');
            messageContainer.css('border-color', '#28AE89');
        }
    }

    function storeFormData() {
        const user = {
            name: form.find('#name').val(),
            phone: form.find('#phone').val(),
            email: form.find('#email').val(),
            website: form.find('#website').val(),
            password: form.find('#password').val()
        };
        console.log(user);
    }

    function processFormData(e) {
        e.preventDefault();
        validateForm();
        if (isValid && passwordMatch) {
            storeFormData();
        }
    }

    form.on('submit', processFormData);
});  