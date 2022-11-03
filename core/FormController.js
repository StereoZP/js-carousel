export default class FormController {

    constructor() {
        //this.form = document.querySelector('.formWithValidation');
        //this.from = document.querySelector('.from');
        //this.password = document.querySelector('.password');
        //this.passwordConfirmation = document.querySelector('.passwordConfirmation');
       // this.fields = document.querySelectorAll('.field');
    }
    generateError(text){
        const error = document.createElement('div');

        error.className = 'error';
        error.style.color = 'red';
        error.innerHTML = text;
        return error;
    }
    removeValidation() {
        const errors = document.querySelectorAll('.error')

        for (let i = 0; i < errors.length; i++) {
            errors[i].remove()
        }
    }
    checkFieldsPresence() {
        let fields = document.querySelectorAll('.field');

        for (let i = 0; i < fields.length; i++) {
            if (!fields[i].value) {
                fields[i].classList.add('errorBorder');
                let error = this.generateError('Cant be blank');
                fields[i].parentElement.insertBefore(error, fields[i]);
            }

        }
    }
   /*checkValidPassword(){
        let password = document.querySelector('.password');
        // Validate lowercase letters
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]\d;

        if(!password.value.match(lowerCaseLetters) || !password.value.match(upperCaseLetters) || !password.value.match(numbers)) {
            password.classList.add('errorBorder');
        }

        // Validate length
        if(password.value.length < 8) {

        }
    }*/

    checkPassword() {
       let password = document.querySelector('.password');

        password.addEventListener('input',function(){
            console.log(this.value.length);});
        /*function myFunction() {
            if (this.value.length < 8) {
                let error = this.generateError('Password is not strong');
                password.parentElement.insertBefore(error, password);
            }
        }*/
    }


    checkPasswordMatch() {
        let password = document.querySelector('.password');
        let passwordConfirmation = document.querySelector('.passwordConfirmation');

        password.addEventListener('input',function(){
            console.log(this.value.length);});
        if (password.value !== passwordConfirmation.value) {
            let error = this.generateError('Password doesnt match');
            passwordConfirmation.parentElement.insertBefore(error, passwordConfirmation);
        }
        this.checkPassword();
    }
}