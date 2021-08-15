document.getElementById('login-button').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check email & password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.innerText = "The password & email that you've entered is incorrect";
        errorMsg.style.color = 'red';
        emailField.value = "";
        passwordField.value = "";
    }
})