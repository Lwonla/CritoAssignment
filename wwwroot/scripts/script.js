function validateText(event) {
    const nameInput = event.target;
    const nameError = document.getElementById("nameError");
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameInput.value.match(nameRegex)) {
        nameError.textContent = "Please enter a valid name (letters and spaces only).";
    } else {
        nameError.textContent = "";
    }
}


/* const validateText = (event) => {
    if (event.target.value.length > 2) {
        document.querySelector(`[data-valmsg-for="${event.target.id}"]`).innerHTML = ""
    }
    else {
        document.querySelector(`[data-valmsg-for="${event.target.id}"]`).innerHTML = "Invalid length"
    }
} */