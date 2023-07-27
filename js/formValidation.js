//llamar espacio del form que solicita datos al usuario
const allInputs = document.querySelectorAll('.inputValidate');

//por cada allinput al evento del input realizarle blur y seleccionarlo con target
allInputs.forEach( input => {
    input.addEventListener('blur', (event)=>{
        validate(event.target);
    })
});

function validate(input){ //ghost es validators
    const dataType = input.dataset.type;

    if(input.validity.valid){
        input.parentElement.classList.remove('input-message-error');
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        // input.parentElement.classList.add('errorAlert');
        input.parentElement.classList.add('input-message-error');
        
        input.parentElement.querySelector(".input-message-error").innerHTML = showErrorMessage(inputType, input);
    }
}
//data-type name y message

//errorType in the form
const errorType = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",//contraseñas
    "customError"//msg custom
]

//customErrormessage
const errorMessage = {
    name: {//pattern="[\s\S]{7,40}"
        valueMissing: "Este campo no puede estar vacío"
    },
    message: { //maxlength="100" minlength="10" 
        valueMissing: "Este campo no puede estar vacío",
        customError: "El mensaje es muy corto"
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es el correcto"
    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, una mayuscula y una minuscula y no debe contener caracteres especiales"
    },
}

function showErrorMessage(inputType, input){
    let message = "";

    errorType.forEach( error => {
        if(input.validity[error]){
            // console.log(inputType, error);
            // console.log(input.validity[error]);
            // console.log(errorMessage[inputType][error]);
            message = errorMessage[inputType][error]
        }
    });

    return message;
};



//para el CRUD con usuario 

//validar  correo

// function emailValidate(input){
//     const correctEmail = 'admin@kittycommerce.com';
//     if (input == correctEmail){
//         // pasarle acces
//         alert(`Bienvenido ${correctEmail}`)
//     } else {
//         console.log(errorMessage);
//     }
// }

// //valida contra

// function passwordValidate(input){
//     const correctPw = '12345';
//     if (input == correctPw){
//         // pasarle acces
//         alert(`Bienvenido ${correctPw}`)
//     } else {
//         console.log(errorMessage);
//     }
// }