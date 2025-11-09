const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

const formData = {
    email: "",
    message: "",
}

const savedData = JSON.parse(localStorage.getItem(localStorageKey));

if (savedData) {
  formData.email = savedData.email ?? "";
  formData.message = savedData.message ?? "";
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener("input", (evt) => {
    const { name, value } = evt.target;
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("«Fill please all fields»");
        return;
    }
    
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();

    formData.email = "";
    formData.message = "";
});