const myRegex = /[A-Z]/;
const form = document.getElementById('form-inputs');
form.addEventListener('submit', (event) => {
  const { email } = form.elements;
  const emailAddress = email.value;
  const errM = document.querySelector('#form-validate');
  if (myRegex.test(emailAddress) === true) {
    event.preventDefault();
    const message = 'Please ensure that all email input is in <strong> Lower case </strong>';
    errM.innerHTML = message;
  }
});
