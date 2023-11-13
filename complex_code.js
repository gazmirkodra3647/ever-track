/* 
   Filename: complex_code.js
   Description: This complex code showcases a customizable interactive form with various fields, validations, and dynamic UI updates.
*/

// Define an array to store user data
const users = [];

// Generate a unique ID for each user
function generateUserID() {
  let id = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 10;

  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return id;
}

// Validate email address format
function isValidEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}

// Validate phone number format
function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

// Add user to the users array
function addUser(user) {
  users.push(user);
}

// Show a success message on form submission
function showSuccessMessage() {
  const successMessage = document.getElementById("success-message");
  successMessage.innerText = "Form submitted successfully!";
  successMessage.style.display = "block";
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form field values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone-number").value;

  // Validate form fields
  if (!firstName || !lastName || !email || !phoneNumber) {
    alert("Please fill in all fields");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Invalid email address");
    return;
  }

  if (!isValidPhoneNumber(phoneNumber)) {
    alert("Invalid phone number");
    return;
  }

  // Create user object with form data
  const user = {
    id: generateUserID(),
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
  };

  // Add user to the array
  addUser(user);

  // Reset form fields
  document.getElementById("registration-form").reset();

  // Show success message
  showSuccessMessage();

  // Perform additional actions with user data if required
  // ...
}

// Initialize the form
function initForm() {
  const registrationForm = document.getElementById("registration-form");
  registrationForm.addEventListener("submit", handleSubmit);
}

window.addEventListener("DOMContentLoaded", initForm);