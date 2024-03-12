const mockUserData = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
 
];

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const user = mockUserData.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
    
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('calculator-container').style.display = 'block';
    } else {

        alert('Chybné uživatelské jméno nebo heslo');
    }
}

function pridat(value) {
    document.getElementById('display').value += value;
}

function vymazat() {
    document.getElementById('display').value = '';
}

function vypocitat() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function pridatPercenta() {
    const currentValue = document.getElementById('display').value;
    const percentValue = parseFloat(currentValue) / 100;
    document.getElementById('display').value = percentValue;
}

function pridatDesetinnouCislu() {
    const currentValue = document.getElementById('display').value;

    if (!currentValue.includes('.')) {
        document.getElementById('display').value += '.';
    }
}
