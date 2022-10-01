const form = document.getElementById('form');
const Fisrt_Name = document.getElementById('Fisrt_Name');
const Last_Name = document.getElementById('Last_Name');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const cPassword = document.getElementById('cPassword');
const check = document.getElementById('check');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputcontrol = element.parseElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputcontrol = element.parseElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = Email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
}

const validateInputs = () =>{
    const First_NameValue = First_Name.value.trim();
    const Last_NameValue = Last_Name.value.trim();
    const EmailValue = Email.value.trim();
    const PasswordValue = Password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    if(First_NameValue === '') {
        setError(First_Name, 'First Name is required');
    } else if (First_Namevalue < 3){
        setError(First_Name, 'At least 3 characters');
    } else {
        setSuccess(Fisrt_Name);
    }

    if(Last_NameValue === '') {
        setError(Last_Name, 'Last Name is required');
    } else if (Last_Namevalue < 3){
        setError(Last_Name, 'At least 3 characters');
    } else {
        setSuccess(Last_Name);
    }

    if(EmailValue === '') {
        setError(Email, 'Email entered (not left blank)');
    } /*else if ({
        setError(Email, 'After last ., there should be at least be 2 characters');
    })*/else if((Emailvalue.include("@")) && (Emailvalue.include("."))) {
        setError(Email, 'Should contain ‘@’ and ‘.’');
    } /*else if ({
        setError(Email, 'First character cannot be @');
    })*/ else {
        setSuccess(Email);
    }

    if(PasswordValue === '') {
        setError(Password, 'Password is required');
    } else if(PasswordValue.length < 8) {
        setError(Password, 'At least 8 characters');
    } else if((Passwordvalue.include("@")) || (Passwordvalue.include("#")) || (Passwordvalue.include("$"))) {
        setError(Password, 'At least one special character used from [$, #, @]');
    } else if((Passwordvalue.include("0")) || (Passwordvalue.include("1")) || (Passwordvalue.include("2")) || (Passwordvalue.include("3")) || (Passwordvalue.include("4"))) {
        setError(Password, 'At least one number used from [0, 1, 2, 3, 4]');
    }else {
        setSuccess(Email);
    }

    if(cPasswordValue === '') {
        setError(Password, 'Password is required');
    } else if(cPasswordValue !== PasswordValue) {
        setError(Password, 'Should match Password');
    } else {
        setSuccess(cPassword);
    }

};
