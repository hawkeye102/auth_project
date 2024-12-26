
const baseUrl = 'http://localhost:3000/api/auth'; // Replace with your backend URL

// #handles signup
document.getElementById('submission-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('Form submitted');

  const email = document.getElementById('signupemail').value;
  const password = document.getElementById('signuppassword').value;

  try {
    const res = await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(`Signup successful: ${data.user.email}`);
    } else {
      alert(`Signup failed: ${data.error || 'Unknown error'}`);
    }
  } catch (err) {
    console.error('Error during signup:', err);
    alert('Something went wrong during signup');
  }
});

// #handles login
const loginform = document.getElementById('loginform');
if (loginform) {
  loginform.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('loginemail').value;
    const password = document.getElementById('loginpassword').value;

    try {
      const res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(`Login successful: ${data.user.email}`);
      } else {
        alert(`Login failed: ${data.error || 'Invalid credentials'}`);
      }
    } catch (err) {
      console.error('Error during login:', err);
      alert('Something went wrong during login');
    }
  });
}
