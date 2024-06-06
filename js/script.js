async function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    const loginErrorMessage = document.getElementById('login-error-message');

    if (response.status === 200) {
        alert('Login successful');
        loginErrorMessage.style.display = 'none';
    } else {
        loginErrorMessage.style.display = 'block';
        loginErrorMessage.textContent = result.message;
    }
}

async function createAccount() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    const signupErrorMessage = document.getElementById('signup-error-message');
    const signupSuccessMessage = document.getElementById('signup-success-message');

    if (response.status === 201) {
        signupSuccessMessage.style.display = 'block';
        signupErrorMessage.style.display = 'none';
    } else {
        signupErrorMessage.style.display = 'block';
        signupErrorMessage.textContent = result.message;
        signupSuccessMessage.style.display = 'none';
    }
}
