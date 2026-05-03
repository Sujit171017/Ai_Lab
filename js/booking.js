// =====================================
//  BOOKING PAGE — booking.js
// =====================================

const PRICES = {
  coxsbazar:   { name: "Cox's Bazar Beach — 3 Days",       price: 3999 },
  sundarbans:  { name: "Sundarbans Safari — 4 Days",       price: 5999 },
  sajek:       { name: "Sajek Valley — 3 Days",            price: 2999 },
  sreemangal:  { name: "Sreemangal Tea Tour — 2 Days",     price: 1999 },
  paharpur:    { name: "Paharpur Heritage — 2 Days",       price: 1499 },
  bandarban:   { name: "Bandarban Hills — 4 Days",         price: 4999 },
  kuakata:     { name: "Kuakata Sunrise — 3 Days",         price: 3499 },
  tanguar:     { name: "Tanguar Haor — 2 Days",            price: 2499 },
};

const tourSel   = document.getElementById('tour-select');
const travSel   = document.querySelector('select[name="travelers"]');
const dateInput = document.querySelector('input[name="travel_date"]');

function updateSummary() {
  const key  = tourSel?.value || '';
  const trav = travSel?.value || '';
  const date = dateInput?.value || '';

  document.getElementById('sum-tour').textContent     = key && PRICES[key] ? PRICES[key].name : '—';
  document.getElementById('sum-date').textContent     = date ? new Date(date).toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' }) : '—';
  document.getElementById('sum-travelers').textContent = trav || '—';

  if (key && PRICES[key] && trav) {
    const num   = trav === '5+' ? 5 : parseInt(trav);
    const total = PRICES[key].price * num;
    document.getElementById('sum-price').textContent = '৳' + total.toLocaleString();
  } else {
    document.getElementById('sum-price').textContent = '—';
  }
}

if (tourSel)   tourSel.addEventListener('change', updateSummary);
if (travSel)   travSel.addEventListener('change', updateSummary);
if (dateInput) dateInput.addEventListener('change', updateSummary);

// Pre-fill from URL
const urlParams = new URLSearchParams(window.location.search);
const tourParam = urlParams.get('tour');
if (tourParam && tourSel) {
  const idMap = { 1:'coxsbazar', 2:'sundarbans', 3:'sajek', 4:'sreemangal', 5:'paharpur', 6:'bandarban', 7:'kuakata', 8:'tanguar' };
  if (idMap[tourParam]) { tourSel.value = idMap[tourParam]; updateSummary(); }
}

// Form submit
const bookingForm = document.getElementById('booking-form');
const bookingMsg  = document.getElementById('booking-msg');
if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = bookingForm.querySelector('button[type="submit"]');
    btn.textContent = 'Processing...'; btn.disabled = true;
    try {
      const res  = await fetch('php/booking.php', { method: 'POST', body: new FormData(bookingForm) });
      const data = await res.json();
      bookingMsg.className = 'form-msg ' + (data.success ? 'success' : 'error');
      bookingMsg.textContent = data.message;
      if (data.success) { bookingForm.reset(); updateSummary(); }
    } catch {
      bookingMsg.className = 'form-msg error';
      bookingMsg.textContent = 'Something went wrong. Please try again.';
    }
    btn.textContent = 'Confirm Booking →'; btn.disabled = false;
  });
}
