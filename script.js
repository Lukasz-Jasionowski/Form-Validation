$(document).ready(function () {
    const form = $('#form');
    const password1El = $('#password1');
    const password2El = $('#password2');
    const messageContainer = $('.message-container');
    const message = $('#message');

    let isValid = false;

    function validateForm() {
        isValid = form.is(':visible');
        message.text('Please fill out all fields');
        message.css('color', '#FF0000');
        messageContainer.css('border-color', '#FF0000');
    }

    function processFormData(e) {
        e.preventDefault();
        validateForm();
    }

    form.on('submit', processFormData);
});  