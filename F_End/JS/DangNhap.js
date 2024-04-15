document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Getting the username and password from the form inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Predefined credentials
    const correctUsername = "admin";
    const correctPassword = "password123";

    // Checking if the entered credentials match the predefined ones
    if (username === correctUsername && password === correctPassword) {
    //   alert("Login successful!"); // Or you can redirect the user to another page
      window.location.href = "TrangChu.html"; // Redirect to another page upon success
    } else {
      alert("Invalid username or password. Please try again."); // Show error message
    }
  });
});
