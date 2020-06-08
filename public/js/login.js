const form = document.querySelector('form.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = document.querySelector('.login-form input');

  const data = new FormData(form);
  const username = data.get('username');
  const password = data.get('password');
  console.log(password);
});
