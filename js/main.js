// Bangladesh Dream Tour — main.js

// Navbar
const nb=document.getElementById('navbar');
if(nb) window.addEventListener('scroll',()=>nb.classList.toggle('scrolled',scrollY>50));

// Hamburger
const hb=document.getElementById('hamburger'),nl=document.querySelector('.nav-links');
if(hb) hb.addEventListener('click',()=>nl.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nl.classList.remove('open')));

// ── Tour Data — exact Bangladesh spot photos ──
const TOURS=[
  {id:1,name:"Cox's Bazar",region:"Chittagong",location:"Cox's Bazar, Chittagong",duration:"3 Days",price:3999,rating:4.9,reviews:680,badge:"Most Popular",category:"beach",
   img:"https://images.unsplash.com/photo-1619177383949-f03975e50b19?w=700&q=80",
   desc:"World's longest natural sandy sea beach — 120km of golden sands, sunsets, and seafood."},
  {id:2,name:"Sundarbans",region:"Khulna",location:"Khulna Division",duration:"4 Days",price:5999,rating:4.9,reviews:412,badge:"UNESCO Site",category:"wildlife",
   img:"https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=700&q=80",
   desc:"World's largest mangrove forest — Royal Bengal Tigers, river dolphins, mystical waterways."},
  {id:3,name:"Sajek Valley",region:"Chittagong",location:"Rangamati, CHT",duration:"3 Days",price:2999,rating:4.8,reviews:534,badge:"Best View",category:"hill",
   img:"https://images.unsplash.com/photo-1596901835927-c8d0e3c9e700?w=700&q=80",
   desc:"Sea of clouds above the hills — wake up in the mist at the Roof of Rangamati."},
  {id:4,name:"Sreemangal Tea Tour",region:"Sylhet",location:"Moulvibazar, Sylhet",duration:"2 Days",price:1999,rating:4.8,reviews:398,badge:"Tea Capital",category:"hill",
   img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700&q=80",
   desc:"Endless emerald tea gardens, seven-layer tea, and the Lawachara rainforest."},
  {id:5,name:"Paharpur Vihara",region:"Rajshahi",location:"Naogaon, Rajshahi",duration:"2 Days",price:1499,rating:4.7,reviews:215,badge:"UNESCO Heritage",category:"heritage",
   img:"https://images.unsplash.com/photo-1567604130959-7ef8b2777b78?w=700&q=80",
   desc:"8th century Buddhist monastery — Bangladesh's most ancient UNESCO World Heritage Site."},
  {id:6,name:"Bandarban Hills",region:"Chittagong",location:"Bandarban, CHT",duration:"4 Days",price:4999,rating:4.9,reviews:467,badge:"Adventure",category:"hill",
   img:"https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=700&q=80",
   desc:"Bangladesh's highest peaks — trek to Keokradong, waterfalls, and tribal villages."},
  {id:7,name:"Kuakata Sunrise",region:"Barisal",location:"Patuakhali, Barisal",duration:"3 Days",price:3499,rating:4.7,reviews:289,badge:"Sunrise & Sunset",category:"beach",
   img:"https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=700&q=80",
   desc:"The 'Daughter of the Sea' — see both sunrise and sunset from this magical beach."},
  {id:8,name:"Tanguar Haor",region:"Sylhet",location:"Sunamganj, Sylhet",duration:"2 Days",price:2499,rating:4.8,reviews:321,badge:"Ramsar Site",category:"river",
   img:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=80",
   desc:"Vast Ramsar wetland — boat through endless waters with migratory birds and haor life."},
  {id:9,name:"Lalbagh Fort",region:"Dhaka",location:"Old Dhaka",duration:"1 Day",price:799,rating:4.6,reviews:510,badge:"City Heritage",category:"heritage",
   img:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80",
   desc:"17th century Mughal fort in Old Dhaka — history, architecture, and riverside charm."},
  {id:10,name:"Mahasthangarh",region:"Rajshahi",location:"Bogura, Rajshahi",duration:"2 Days",price:1299,rating:4.6,reviews:178,badge:"Ancient City",category:"heritage",
   img:"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=700&q=80",
   desc:"Bangladesh's oldest site — 2,500-year-old city ruins and archaeological museum."},
  {id:11,name:"Ratargul Forest",region:"Sylhet",location:"Gowainghat, Sylhet",duration:"1 Day",price:999,rating:4.8,reviews:402,badge:"Hidden Gem",category:"wildlife",
   img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80",
   desc:"Bangladesh's only freshwater swamp forest — boat under treetops in a flooded jungle."},
  {id:12,name:"Rangamati Lake",region:"Chittagong",location:"Rangamati, CHT",duration:"3 Days",price:3299,rating:4.7,reviews:356,badge:"Lake Paradise",category:"river",
   img:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=700&q=80",
   desc:"Kaptai Lake — Asia's largest man-made lake circled by green hills and tribal culture."}
];

// ── Render Cards ──
function renderTours(tours,cid='tours-grid'){
  const g=document.getElementById(cid);
  if(!g) return;
  g.innerHTML='';
  if(!tours.length){g.innerHTML='<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:3rem;">No tours found.</p>';return;}
  tours.forEach((t,i)=>{
    const c=document.createElement('div');
    c.className='tour-card fade-up';
    c.dataset.category=t.category;
    c.style.transitionDelay=(i%3*0.1)+'s';
    c.innerHTML=`
      <div class="tour-img">
        <img src="${t.img}" alt="${t.name}" loading="lazy"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80'"/>
        <span class="tour-badge">${t.badge}</span>
        <span class="tour-rating">⭐ ${t.rating}</span>
        <div class="tour-region-label">📍 ${t.location}</div>
      </div>
      <div class="tour-body">
        <h3>${t.name}</h3>
        <div class="tour-meta"><span>🗺️ ${t.region}</span><span>🕐 ${t.duration}</span><span>👥 ${t.reviews} reviews</span></div>
        <p class="tour-desc">${t.desc}</p>
        <div class="tour-footer">
          <div class="tour-price"><small>From</small>৳${t.price.toLocaleString()}</div>
          <a href="booking.html?tour=${t.id}" class="btn-primary">Book Now</a>
        </div>
      </div>`;
    g.appendChild(c);
  });
  observeFadeUps();
}

const hg=document.getElementById('tours-grid');
if(hg&&!document.querySelector('.filter-bar')) renderTours(TOURS.slice(0,6));

function filterByRegion(r){window.location.href=`tours.html?region=${r}`;}

function observeFadeUps(){
  const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible');}),{threshold:0.1});
  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
}
observeFadeUps();
