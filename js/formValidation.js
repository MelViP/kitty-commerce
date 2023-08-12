//llamar espacio del form que solicita datos al usuario
const allInputs = document.querySelectorAll('.inputValidate');

//por cada allinput al evento del input realizarle blur y seleccionarlo con target
allInputs.forEach( input => {
    input.addEventListener('blur', (event)=>{
        validate(event.target);
        console.log(event.target)
    })
});


function validate(input){ //ghost es validators
    const dataType = input.dataset.type;

    if(input.validity.valid){
        input.parentElement.classList.remove('input-message-error');
        allInputs.querySelector(".input-message-error").innerHTML = "";
    } else {
          // const alert = getElementById('')
        input.parentElement.classList.add('input-message-error');
        input.parentElement.querySelector(".input-message-error").innerHTML = showErrorMessage(dataType, input);
        input.classList.add('errorAlert');
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
