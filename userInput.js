let loggedIn = false;
let loginAttemptsRemaining = 3;

while(!loggedIn && loginAttemptsRemaining > 0) {
    let userName = prompt('Username');
    let password = prompt('Password');

    if (userName == 'samy123' && password == '12345') {
        alert('Welcome back, ' + userName);
    loggedIn = true;
    } else {
        loginAttemptsRemaining--;
        alert('Incorrect username or password.\n' + loginAttemptsRemaining + ' attempts remaining.');
        
    }

    if(loginAttemptsRemaining <= 0){
        alert('You have exceeded your number of attempts')
    }
}