// =====================================
//  AUTH — auth.js
// =====================================

const loginForm = document.getElementById('login-form');
const loginMsg  = document.getElementById('login-msg');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = loginForm.querySelector('button[type="submit"]');
    btn.textContent = 'Signing in...'; btn.disabled = true;
    try {
      const res  = await fetch('php/login.php', { method: 'POST', body: new FormData(loginForm) });
      const data = await res.json();
      loginMsg.className = 'form-msg ' + (data.success ? 'success' : 'error');
      loginMsg.textContent = data.message;
      if (data.success) setTimeout(() => { window.location.href = 'dashboard.html'; }, 1200);
    } catch {
      loginMsg.className = 'form-msg error';
      loginMsg.textContent = 'Connection error. Please try again.';
    }
    btn.textContent = 'Sign In →'; btn.disabled = false;
  });
}
