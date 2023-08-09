// Add this JavaScript code to your script.js file

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

$(document).ready(function() {
  var nav = $('nav');
  var navOffset = nav.offset().top;

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= navOffset) {
      nav.addClass('sticky');
    } else {
      nav.removeClass('sticky');
    }
  });
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Create a data object
  var data = {
    name: name,
    email: email,
    message: message
  };

  // Here, you can make an AJAX request or send the data to a server-side script to handle email sending

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  // Display a success message or perform any other desired action
  alert('Message sent successfully!');
});
