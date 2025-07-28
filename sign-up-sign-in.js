document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get('mode');

  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');
  const signInTab = document.getElementById('signInTab');
  const signUpTab = document.getElementById('signUpTab');

  function showSignIn() {
    signInForm.hidden = false;
    signUpForm.hidden = true;
    signInTab.classList.add('active');
    signUpTab.classList.remove('active');
  }

  function showSignUp() {
    signInForm.hidden = true;
    signUpForm.hidden = false;
    signInTab.classList.remove('active');
    signUpTab.classList.add('active');
  }

  if (mode === 'signup') {
    showSignUp();
  } else {
    // Default to sign in if mode missing or 'signin'
    showSignIn();
  }
});
