const form = document.querySelector(".login-form ");

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;

    const password = event.currentTarget.elements.password.value;

    console.log(email, password);


    const formData = {
  email,
  password,};

    form.reset();

    console.log(formData);
}
