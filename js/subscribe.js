// ger document id
document.addEventListener('DOMContentLoaded', () => {
    //set variable by id
    const form = document.getElementById('form');
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const date = document.getElementById('date');
    const gender = document.getElementById('gender');
    const terms = document.getElementById('terms');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm-password');
    const fnameError = document.getElementById('fnameError');
    const emailError = document.getElementById('emailError');
    const dateError = document.getElementById('dateError');
    const genderError = document.getElementById('genderError');
    const termsError = document.getElementById('termsError');
    const passwordError = document.getElementById('passwordError');
    const confirmError = document.getElementById('confirm-passwordError');

    //set event to submit validation 
    form.addEventListener('submit', (event) => {
        // declare valid is true
        let valid = true;

        //default event
        document.querySelectorAll('.error').forEach(function(element) {
            element.textContent = '';
        });
        event.preventDefault();

        // terms and condition check
        if (terms.checked === false) {
            termsError.textContent = 'You must agree to the terms and conditions.';
            valid = false;
        } else {
            termsError.textContent = '';
        }

        // fullname check
        if (fname.value.length < 2 || fname.value.trim() === ' ') {
            fnameError.textContent = 'Do not fill with your initial.';
            valid = false;
        } else {
            fnameError.textContent = '';
        }

        // email check
        if (email.value.length < 5 || !email.value.includes('@')) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // gender check
        if (gender.value === '') {
            genderError.textContent = 'Please select a gender.';
            valid = false;
        } else {
            genderError.textContent = '';
        }

        // date check
        if (date.value === '') {
            dateError.textContent = 'Please select a date.';
            valid = false;
        } else {
            dateError.textContent = '';
        }

        // password check
        if(!validPassword(password) || password.value.length < 8) {
            passwordError.textContent= "Password must contain numbers and characters, at least 8 characters";
            isValid = false;
        }
        else {
            passwordError.textContent = "";
        }

        // confirm password check
        if (confirm !== password){
            confirmError.textContent = "Confirmation fail";
            isValid = false;
        }
        else {
            confirmError.textContent = "";
        }

        // display response if valid
        if (valid) {
            document.getElementById('form').style.display = 'none';
            document.getElementById('response').style.display = 'block';
            form.submit();
        }
    });
});

// password validation function that request at least 8 characters with numbers and characters
function validPassword (password){
    let hasNumber = false;
    let hasLetter = false;
    let hasSymbol = false;

    for( let i =0; i <password.length; i++){
        const character = password[i];
        if (character >= 'A' && character <= 'z')
        {
            hasLetter = true;
        }
        else if (character >= '0' && character <= '9')
        {
            hasNumber = true;
        }   
        else {
            hasSymbol = true;
        }
    }
}