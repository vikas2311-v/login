document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailValid = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    var passworValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if (!emailValid.test(email)) {
        document.getElementById('error').innerText = 'Invalid email format';
        return;
    }

    if (!passworValid.test(password)) {
        document.getElementById('error-message').innerText = 'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.';
        return;
    }

    window.location.href = 'welcome.html';
});