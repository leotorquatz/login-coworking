const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Carregar usuários
const loadUsers = () => {
    const data = fs.readFileSync('users.json');
    return JSON.parse(data);
};

// Salvar usuários
const saveUsers = (users) => {
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
};

// Rota de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();

    if (users[username] && users[username] === password) {
        res.status(200).send({ message: 'Login successful' });
    } else {
        res.status(401).send({ message: 'Invalid username or password' });
    }
});

// Rota de criação de conta
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();

    if (users[username]) {
        res.status(400).send({ message: 'Username already exists' });
    } else {
        users[username] = password;
        saveUsers(users);
        res.status(201).send({ message: 'Account created successfully' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
