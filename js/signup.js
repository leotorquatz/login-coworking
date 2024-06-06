function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    const loginErrorMessage = document.getElementById('login-error-message');

    if (users[username] && users[username] === password) {
        alert('Login successful');
        loginErrorMessage.style.display = 'none';
    } else {
        loginErrorMessage.style.display = 'block';
    }
}

function createAccount() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    const signupErrorMessage = document.getElementById('signup-error-message');
    const signupSuccessMessage = document.getElementById('signup-success-message');

    if (username && password && !users[username]) {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        signupSuccessMessage.style.display = 'block';
        signupErrorMessage.style.display = 'none';
    } else {
        signupErrorMessage.style.display = 'block';
        signupSuccessMessage.style.display = 'none';
    }
}
