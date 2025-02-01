document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    function validateUsername(username) {
        return username.length >= 3;
    }

    function validateEmail(email) {
        return email.includes('@') && email.includes('.');
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function getFormValues() {
        return {
            username: document.getElementById('username').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value.trim()
        };
    }

    function validateForm(formValues) {
        const messages = [];
        let isValid = true;

        if (!validateUsername(formValues.username)) {
            isValid = false;
            messages.push('Username must be at least 3 characters long');
        }

        if (!validateEmail(formValues.email)) {
            isValid = false;
            messages.push('Please enter a valid email address');
        }

        if (!validatePassword(formValues.password)) {
            isValid = false;
            messages.push('Password must be at least 8 characters long');
        }

        return { isValid, messages };
    }

    function displayFeedback(isValid, messages) {
        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda';
            form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.backgroundColor = '#f8d7da';
        }
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formValues = getFormValues();
        const { isValid, messages } = validateForm(formValues);
        displayFeedback(isValid, messages);
    });
});
