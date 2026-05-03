// =====================================
//  CONTACT — contact.js
// =====================================

const contactForm = document.getElementById('contact-form');
const contactMsg  = document.getElementById('contact-msg');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...'; btn.disabled = true;
    try {
      const res  = await fetch('php/contact.php', { method: 'POST', body: new FormData(contactForm) });
      const data = await res.json();
      contactMsg.className = 'form-msg ' + (data.success ? 'success' : 'error');
      contactMsg.textContent = data.message;
      if (data.success) contactForm.reset();
    } catch {
      contactMsg.className = 'form-msg error';
      contactMsg.textContent = 'Could not send message. Please try again.';
    }
    btn.textContent = 'Send Message →'; btn.disabled = false;
  });
}
