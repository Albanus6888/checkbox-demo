// Checkbox interactivity
const termsCheckbox = document.getElementById('terms-checkbox');
const environmentCheckbox = document.getElementById('environment-checkbox');

termsCheckbox.addEventListener('change', () => {
    if (termsCheckbox.checked) {
        alert("Thank you for agreeing to the terms and conditions.");
    }
});

environmentCheckbox.addEventListener('change', () => {
    if (environmentCheckbox.checked) {
        alert("We're glad you're enjoying the environment!");
    }
});

// Radio button interactivity
const genderRadios = document.getElementsByName('gender');
genderRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        alert(`You selected: ${radio.value}`);
    });
});
