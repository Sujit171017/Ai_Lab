# 🇧🇩 Bangladesh Dream Tour — Website

A complete Tour Management Website for **Bangladesh Tourist Spots** only.
Built with **HTML, CSS, JavaScript, and PHP**.

---

## 📁 Project Structure

```
bd_tour/
│
├── index.html        → Homepage (Hero, Regions, Featured Tours)
├── tours.html        → All Tours (Filter + Sort)
├── booking.html      → Booking Form
├── dashboard.html    → User Dashboard
├── login.html        → Login Page
├── register.html     → Register Page
├── contact.html      → Contact Page
│
├── css/
│   └── style.css     → Full stylesheet (Green+Gold theme)
│
├── js/
│   ├── main.js       → Tour data, card rendering, animations
│   ├── tours.js      → Filter & sort logic
│   ├── booking.js    → Live summary + form submit
│   ├── dashboard.js  → Table search
│   ├── auth.js       → Login form
│   └── contact.js    → Contact form
│
├── php/
│   ├── config.php    → DB connection + helpers
│   ├── booking.php   → Save bookings
│   ├── login.php     → Authenticate users
│   ├── register.php  → Register new users
│   ├── contact.php   → Save contact messages
│   └── newsletter.php→ Email subscriptions
│
└── database/
    └── bd_dreamtour_db.sql → Full MySQL schema + sample data
```

---

## 🏖️ Bangladesh Destinations Included

| Tour | Region | Category |
|------|--------|----------|
| Cox's Bazar | Chittagong | Beach |
| Sundarbans | Khulna | Wildlife |
| Sajek Valley | Chittagong (CHT) | Hill |
| Sreemangal Tea Gardens | Sylhet | Hill |
| Paharpur Vihara | Rajshahi | Heritage |
| Bandarban Hills | Chittagong (CHT) | Hill |
| Kuakata Beach | Barisal | Beach |
| Tanguar Haor | Sylhet | River |
| Lalbagh Fort | Dhaka | Heritage |
| Ratargul Swamp Forest | Sylhet | Wildlife |
| Rangamati Lake | Chittagong | River |
| Mahasthangarh | Rajshahi | Heritage |

---

## ⚙️ Setup Instructions

### Requirements
- PHP 7.4+
- MySQL 5.7+
- XAMPP / WAMP / LAMP

### Step 1 — Import Database
1. Open phpMyAdmin → http://localhost/phpmyadmin
2. Click **Import**
3. Select `database/bd_dreamtour_db.sql`
4. Click **Go**

### Step 2 — Configure DB
Edit `php/config.php`:
```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');       // your username
define('DB_PASS', '');           // your password
define('DB_NAME', 'bd_dreamtour_db');
```

### Step 3 — Run the Website
Copy `bd_tour/` folder to:
- **XAMPP**: `C:/xampp/htdocs/bd_tour/`
- **WAMP**: `C:/wamp64/www/bd_tour/`

Open: `http://localhost/bd_tour/`

---

## 🔑 Demo Login
| Email | Password |
|-------|----------|
| admin@bdreamtour.com | password |
| rahim@example.com | password |

---

## ✨ Features
- 🏖️ 12 Bangladesh destinations across all divisions
- 🔍 Filter by category (Beach, Hill, Heritage, Wildlife, River)
- 📅 Full booking system with live price summary
- 📱 bKash / Nagad / Rocket payment options
- 📊 User dashboard with booking history
- 🔐 Login & Register with PHP sessions
- 📬 Contact form
- 📱 Fully responsive (mobile, tablet, desktop)

---

## 🎨 Design
- **Theme**: Deep Forest Green + Warm Gold
- **Fonts**: Cormorant Garamond + Outfit
- **Style**: Elegant, nature-inspired, premium

---

*🇧🇩 Celebrating the beauty of Bangladesh*
