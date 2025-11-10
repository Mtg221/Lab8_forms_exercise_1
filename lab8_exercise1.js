const form = document.getElementById('profileForm');
const resultDiv = document.getElementById('result');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('name_md').textContent = '';
  document.getElementById('email_md').textContent = '';
  document.getElementById('age_md').textContent = '';
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = parseInt(document.getElementById('age').value.trim());
  const bio = document.getElementById('bio').value.trim();
  const newsletter = document.getElementById('newsletter').checked;
  let valid = true;
  if (name.length < 3) {
    document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
    valid = false;
  }
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    valid = false;
  }
  if (isNaN(age) || age < 13 || age > 120) {
    document.getElementById('ageError').textContent = 'Age must be between 13 and 120.';
    valid = false;
  }
  if (!valid) return;
 resultDiv.innerHTML = `
    <div class="profile">
      <h3>Profile Created Successfully!</h3>
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
      ${bio ? `<p><strong>Bio:</strong> ${bio}</p>` : ''}
      <p><strong>Newsletter:</strong> ${newsletter ? 'Subscribed' : 'Not Subscribed'}</p>
    </div>
  `;
form.reset();
});
