document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let valid = true;

    // Clear previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    let rules = document.querySelectorAll('#passwordRules li');
    rules.forEach(rule => rule.style.color = '');

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Email inválido.';
        valid = false;
    }

    // Validate password
    if (!validatePassword(password)) {
        valid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'As senhas não são iguais.';
        rules[3].style.color = 'red';
        valid = false;
    } else {
        rules[3].style.color = 'green';
    }

    if (valid) {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode adicionar o código para enviar o formulário
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|com\.br)$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    let valid = true;
    let rules = document.querySelectorAll('#passwordRules li');

    // Minimum 8 characters
    if (password.length < 8) {
        rules[0].style.color = 'red';
        valid = false;
    } else {
        rules[0].style.color = 'green';
    }

    // At least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        rules[1].style.color = 'red';
        valid = false;
    } else {
        rules[1].style.color = 'green';
    }

    // At least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        rules[2].style.color = 'red';
        valid = false;
    } else {
        rules[2].style.color = 'green';
    }

    return valid;
}

function togglePassword(fieldId) {
    let field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}

function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('darkModeIcon');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.src = './img/sun_icon.png';
        icon.alt = 'Toggle Light Mode';
    } else {
        icon.src = './img/moon_icon.png';
        icon.alt = 'Toggle Dark Mode';
    }
}