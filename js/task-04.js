// створення зміної та створення методу додавання та віднімання значення value.

const counterValue = {

    value: 0,
    decrement() {
        this.value-= 1;
    },
    increment() {
        this.value+= 1;
    }
}

// пошук

const decValueBtn = document.querySelector(`[data-action="decrement"]`);
const incValueBtn = document.querySelector(`[data-action="increment"]`);
const ValueAll = document.querySelector("#value");

// клік с калбеком.

decValueBtn.addEventListener("click",handlerClickDecrement);
incValueBtn.addEventListener("click",handleClickIncrement);

// Фукції decrement and incerement -  textContent.
// Оновлення новим значенням змінної counterValue.

function handlerClickDecrement() {
    counterValue.decrement();
    ValueAll.textContent = counterValue.value;

}

function handleClickIncrement() {
    counterValue.increment();
    ValueAll.textContent = counterValue.value;
}

