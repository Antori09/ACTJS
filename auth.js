// MODO OSCURO
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Modo Claro';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀️ Modo Claro';
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙 Modo Oscuro';
    }
});

// TOGGLE PASSWORD VISIBILITY
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.parentElement.querySelector('.toggle-password');

    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}

// PASSWORD STRENGTH CHECKER
const passwordInput = document.getElementById('password');
if (passwordInput) {
    passwordInput.addEventListener('input', function () {
        const password = this.value;
        const strengthFill = document.getElementById('strengthFill');
        const strengthText = document.getElementById('strengthText');

        if (!password) {
            strengthFill.className = 'strength-fill';
            strengthFill.style.width = '0%';
            strengthText.textContent = 'Ingresa una contraseña';
            strengthText.style.color = 'var(--texto-general)';
            return;
        }

        let strength = 0;

        // Criterios de fortaleza
        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        // Aplicar clases según fortaleza
        strengthFill.className = 'strength-fill';

        if (strength <= 2) {
            strengthFill.classList.add('strength-weak');
            strengthText.textContent = '❌ Contraseña débil';
            strengthText.style.color = '#f56565';
        } else if (strength <= 4) {
            strengthFill.classList.add('strength-medium');
            strengthText.textContent = '⚠️ Contraseña media';
            strengthText.style.color = '#ed8936';
        } else {
            strengthFill.classList.add('strength-strong');
            strengthText.textContent = '✅ Contraseña fuerte';
            strengthText.style.color = '#48bb78';
        }
    });
}

// LOGIN FORM HANDLER
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        const messageDiv = document.getElementById('loginMessage');

        // Validación básica
        if (!email || !password) {
            showMessage(messageDiv, '⚠️ Por favor, completa todos los campos', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showMessage(messageDiv, '❌ Por favor, ingresa un correo válido', 'error');
            return;
        }

        // Simulación de login (aquí irías a tu backend)
        showMessage(messageDiv, '⏳ Iniciando sesión...', 'success');

        setTimeout(() => {
            // Guardar datos de sesión
            const userData = {
                email: email,
                rememberMe: rememberMe,
                loginTime: new Date().toISOString()
            };

            localStorage.setItem('user', JSON.stringify(userData));

            showMessage(messageDiv, '✅ ¡Bienvenido de vuelta! Redirigiendo...', 'success');

            // Redirigir después de 1.5 segundos
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }, 1000);
    });
}

// REGISTER FORM HANDLER
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const birthdate = document.getElementById('birthdate').value;
        const terms = document.getElementById('terms').checked;
        const messageDiv = document.getElementById('registerMessage');

        // Validaciones
        if (!firstName || !lastName || !username || !email || !password || !confirmPassword || !birthdate) {
            showMessage(messageDiv, '⚠️ Por favor, completa todos los campos obligatorios', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showMessage(messageDiv, '❌ Por favor, ingresa un correo válido', 'error');
            return;
        }

        if (password.length < 8) {
            showMessage(messageDiv, '❌ La contraseña debe tener al menos 8 caracteres', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showMessage(messageDiv, '❌ Las contraseñas no coinciden', 'error');
            return;
        }

        if (!terms) {
            showMessage(messageDiv, '⚠️ Debes aceptar los términos y condiciones', 'error');
            return;
        }

        // Validar edad (mayor de 13 años)
        const birthDate = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 13) {
            showMessage(messageDiv, '⚠️ Debes tener al menos 13 años para registrarte', 'error');
            return;
        }

        // Simulación de registro (aquí irías a tu backend)
        showMessage(messageDiv, '⏳ Creando tu cuenta...', 'success');

        setTimeout(() => {
            // Guardar datos del usuario
            const userData = {
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                birthdate: birthdate,
                registerTime: new Date().toISOString()
            };

            localStorage.setItem('user', JSON.stringify(userData));

            showMessage(messageDiv, '✅ ¡Cuenta creada exitosamente! Redirigiendo...', 'success');

            // Redirigir después de 2 segundos
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        }, 1500);
    });
}

// HELPER FUNCTIONS
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = 'auth-message show ' + type;

    // Auto-hide después de 5 segundos si es un error
    if (type === 'error') {
        setTimeout(() => {
            element.classList.remove('show');
        }, 5000);
    }
}

// SOCIAL LOGIN BUTTONS (simulación)
const googleBtn = document.querySelector('.google-btn');
const githubBtn = document.querySelector('.github-btn');

if (googleBtn) {
    googleBtn.addEventListener('click', function () {
        alert('🔄 Redirigiendo a Google para iniciar sesión...\n(Esto es una simulación)');
    });
}

if (githubBtn) {
    githubBtn.addEventListener('click', function () {
        alert('🔄 Redirigiendo a GitHub para iniciar sesión...\n(Esto es una simulación)');
    });
}

// FORGOT PASSWORD LINK
const forgotPasswordLink = document.querySelector('.forgot-password');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        const email = prompt('📧 Ingresa tu correo electrónico para recuperar tu contraseña:');

        if (email && validateEmail(email)) {
            alert('✅ Se ha enviado un enlace de recuperación a ' + email + '\n(Esto es una simulación)');
        } else if (email) {
            alert('❌ Por favor, ingresa un correo válido');
        }
    });
}