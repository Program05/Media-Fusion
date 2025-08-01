document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get('mode');

  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');
  const signInTab = document.getElementById('signInTab');
  const signUpTab = document.getElementById('signUpTab');

  const signInFormElement = document.getElementById('formSignIn');
  const signUpFormElement = document.getElementById('formSignUp');

  function showSignIn() {
    signInForm.hidden = false;
    signUpForm.hidden = true;
    signInTab.classList.add('active');
    signUpTab.classList.remove('active');

    signInFormElement.classList.add('active');
    signUpFormElement.classList.remove('active');
  }

  function showSignUp() {
    signInForm.hidden = true;
    signUpForm.hidden = false;
    signInTab.classList.remove('active');
    signUpTab.classList.add('active');

    signInFormElement.classList.remove('active');
    signUpFormElement.classList.add('active');
  }

  signInTab.addEventListener('click', showSignIn);
  signUpTab.addEventListener('click', showSignUp);

  if (mode === 'signup') {
    showSignUp();
  } else {
    showSignIn();
  }
});
