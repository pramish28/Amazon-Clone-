function loginUser(event) {
  event.preventDefault();

  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  
  if (username === '' || password === '') {
      alert('Please enter both username and password');
      return;
  }

  
  if (username === 'pramish' && password === 'sharma') {
     window.location.href = 'amazon.html';
     
  } else {
      alert('Invalid username or password');
  }
}
