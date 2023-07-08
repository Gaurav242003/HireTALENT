// JavaScript code for your recruitment solution app

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      // console.log("hke");
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    console.log("hke");
    const nameInput = document.querySelector('input[type="text"]').value;
    const emailInput = document.querySelector('input[type="email"]').value;
    const messageInput = document.querySelector('textarea').value;
  
    // Perform form validation
    if (nameInput === '' || emailInput === '' || messageInput === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // TODO: Send the form data to the server or perform any desired action
    
    // Clear form inputs after submission
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('textarea').value = '';
  
    alert('Form submitted successfully!');
  });
  