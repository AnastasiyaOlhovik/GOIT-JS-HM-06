// створення зміної та пошук.

const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

// input + callback

nameInput.addEventListener(`input`, handlerOutputText);

// створення функції handlerOutputText для тексту  nameOutput в nameInput.

function handlerOutputText(nameInput) {

    if (nameInput.currentTarget.value === "") {

        nameOutput.textContent = "Anonymous";

    } else {

        nameOutput.textContent = nameInput.currentTarget.value;

    }

}