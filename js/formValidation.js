//llamar espacio del form que solicita nombre y mensaje
const nombre = document.querySelector('#contactUs_inputName');
const message = document.querySelector('#contactUs_inputMessage');


//data-type name y message
console.log(`${nombre} y ${message}`);
//errorType in the form
const errorType = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

//customErrormessage
const errorMessage = {
    name: {
        valueMissing: "Este campo no puede estar vacío"
    },
    message: {
        valueMissing: "Este campo no puede estar vacío"
    }
}

