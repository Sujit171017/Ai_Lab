// =====================================
//  TOURS PAGE — tours.js
// =====================================

let currentFilter = 'all';
let currentSort   = 'default';

function applyFilters() {
  let list = [...TOURS];

  // URL params
  const params = new URLSearchParams(window.location.search);
  const regionParam = params.get('region');
  const destParam   = params.get('destination');
  if (regionParam) {
    list = list.filter(t => t.region.toLowerCase().includes(regionParam.toLowerCase()));
  }
  if (destParam) {
    list = list.filter(t =>
      t.name.toLowerCase().includes(destParam.toLowerCase()) ||
      t.location.toLowerCase().includes(destParam.toLowerCase())
    );
  }

  // Category filter button
  if (currentFilter !== 'all') list = list.filter(t => t.category === currentFilter);

  // Sort
  if (currentSort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (currentSort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (currentSort === 'rating')     list.sort((a, b) => b.rating - a.rating);

  renderTours(list);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilters();
  });
});

const sortSel = document.getElementById('sort-select');
if (sortSel) sortSel.addEventListener('change', () => { currentSort = sortSel.value; applyFilters(); });

applyFilters();
