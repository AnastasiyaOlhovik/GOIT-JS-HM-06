// створення зміної

const validationInput = document.querySelector("#validation-input");

//blur до validationInput

validationInput.addEventListener(`blur`, handlerValidationBlur);


// валідація в інпуті

function handlerValidationBlur(event) {
    if (
        event.target.value.length===Number(event.currentTarget.dataset.length)
    ) {

        validationInput.classList.remove("invalid");

        validationInput.classList.add("valid");

    } else {

        validationInput.classList.add("invalid");

        validationInput.classList.remove("valid");

    }

}
