// =====================================
//  DASHBOARD — dashboard.js
// =====================================

const searchInput = document.getElementById('booking-search');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    document.querySelectorAll('#bookings-tbody tr').forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

function viewBooking(id) {
  alert(`Booking #${id}\n\nDetails would load from the server in production.\nThis opens a modal or detail page.`);
}
