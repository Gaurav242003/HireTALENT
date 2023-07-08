document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform validation (you can customize the logic)
    if (username === 'your_username' && password === 'your_password') {
      // Successful login
      alert('Login successful!');
      // Redirect to another page
      window.location.href = '../search/index.html';
    } else {
      // Failed login
      alert('Invalid username or password!');
    }
  });