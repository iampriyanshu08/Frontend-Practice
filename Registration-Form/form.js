const showPass = () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (
      !isValidUsername(username) ||
      !isValidEmail(email) ||
      !isValidPassword(password, confirmPassword)
    ) {
      formMessage.textContent = "Please fill in all fields correctly.";
    } else {
      formMessage.textContent = "Registration successful!";
    }
  });

  function isValidUsername(username) {
    return username.length >= 3;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password, confirmPassword) {
    return password.length >= 8 && password === confirmPassword;
  }
});
