-- ==========================================
--  BANGLADESH DREAM TOUR — DATABASE SCHEMA
--  database/bd_dreamtour_db.sql
-- ==========================================

CREATE DATABASE IF NOT EXISTS bd_dreamtour_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE bd_dreamtour_db;

-- USERS
CREATE TABLE IF NOT EXISTS users (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    name          VARCHAR(100) NOT NULL,
    email         VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    phone         VARCHAR(20),
    role          ENUM('user','admin') DEFAULT 'user',
    created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT IGNORE INTO users (name, email, password_hash, role) VALUES
('Admin',       'admin@bdreamtour.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin'),
('Rahim Hossain','rahim@example.com',  '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'user');

-- TOURS
CREATE TABLE IF NOT EXISTS tours (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    name         VARCHAR(150) NOT NULL,
    region       VARCHAR(100) NOT NULL,
    location     VARCHAR(200) NOT NULL,
    duration     VARCHAR(50)  NOT NULL,
    price        DECIMAL(10,2) NOT NULL,
    rating       DECIMAL(3,1) DEFAULT 0.0,
    total_reviews INT DEFAULT 0,
    category     ENUM('beach','hill','heritage','wildlife','river') NOT NULL,
    badge        VARCHAR(60),
    description  TEXT,
    img_url      VARCHAR(500),
    is_active    TINYINT(1) DEFAULT 1,
    created_at   DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tours (name, region, location, duration, price, rating, total_reviews, category, badge, description, img_url) VALUES
("Cox's Bazar",           'Chittagong', "Cox's Bazar, Chittagong Division", '3 Days',  3999.00, 4.9, 680, 'beach',    'Most Popular',   'World''s longest natural sandy sea beach.',              'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80'),
('Sundarbans',            'Khulna',     'Khulna Division',                  '4 Days',  5999.00, 4.9, 412, 'wildlife', 'UNESCO Site',    'World''s largest mangrove forest. Tiger territory.',      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80'),
('Sajek Valley',          'Chittagong', 'Rangamati, CHT',                   '3 Days',  2999.00, 4.8, 534, 'hill',     'Best View',      'Sea of clouds above the hills of CHT.',                   'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80'),
('Sreemangal Tea Tour',   'Sylhet',     'Moulvibazar, Sylhet',              '2 Days',  1999.00, 4.8, 398, 'hill',     'Tea Capital',    'Endless emerald tea gardens and seven-layer tea.',        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'),
('Paharpur Heritage',     'Rajshahi',   'Naogaon, Rajshahi',                '2 Days',  1499.00, 4.7, 215, 'heritage', 'UNESCO Heritage','8th century Buddhist monastery ruins.',                   'https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=600&q=80'),
('Bandarban Hills',       'Chittagong', 'Bandarban, CHT',                   '4 Days',  4999.00, 4.9, 467, 'hill',     'Adventure',      'Highest peaks, waterfalls and indigenous culture.',        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80'),
('Kuakata Sunrise',       'Barisal',    'Patuakhali, Barisal',              '3 Days',  3499.00, 4.7, 289, 'beach',    'Sunrise & Sunset','See both sunrise and sunset from one beach.',            'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80'),
('Tanguar Haor',          'Sylhet',     'Sunamganj, Sylhet',                '2 Days',  2499.00, 4.8, 321, 'river',    'Ramsar Site',    'Vast wetland with migratory birds and haor life.',         'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=600&q=80'),
('Lalbagh Fort',          'Dhaka',      'Old Dhaka',                        '1 Day',    799.00, 4.6, 510, 'heritage', 'City Heritage',  '17th century Mughal fort with rich history.',              'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80'),
('Ratargul Swamp Forest', 'Sylhet',     'Gowainghat, Sylhet',               '1 Day',    999.00, 4.8, 402, 'wildlife', 'Hidden Gem',     'Bangladesh''s only freshwater swamp forest.',            'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80'),
('Rangamati Lake',        'Chittagong', 'Rangamati, CHT',                   '3 Days',  3299.00, 4.7, 356, 'river',    'Lake Paradise',  'Kaptai Lake — Asia''s largest man-made lake.',           'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80'),
('Mahasthangarh',         'Rajshahi',   'Bogura, Rajshahi',                 '2 Days',  1299.00, 4.6, 178, 'heritage', 'Ancient City',   '2,500-year-old archaeological site.',                     'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80');

-- BOOKINGS
CREATE TABLE IF NOT EXISTS bookings (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    booking_id      VARCHAR(20) NOT NULL UNIQUE,
    user_id         INT,
    name            VARCHAR(100) NOT NULL,
    email           VARCHAR(150) NOT NULL,
    phone           VARCHAR(20)  NOT NULL,
    travelers       VARCHAR(10)  NOT NULL,
    tour            VARCHAR(100) NOT NULL,
    travel_date     DATE         NOT NULL,
    special_requests TEXT,
    payment_method  VARCHAR(50),
    status          ENUM('pending','confirmed','cancelled','completed') DEFAULT 'pending',
    total_amount    DECIMAL(10,2),
    created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

INSERT IGNORE INTO bookings (booking_id, name, email, phone, travelers, tour, travel_date, payment_method, status, total_amount) VALUES
('BDT-2001', 'Rahim Hossain', 'rahim@example.com',   '01700000001', '3', 'sundarbans', '2025-08-18', 'bkash', 'confirmed', 17997.00),
('BDT-2002', 'Sumaiya Khan',  'sumaiya@example.com', '01700000002', '2', 'bandarban',  '2025-10-10', 'nagad', 'pending',    9998.00),
('BDT-1988', 'Nafis Ahmed',   'nafis@example.com',   '01700000003', '4', 'coxsbazar',  '2025-02-14', 'card',  'completed', 15996.00);

-- CONTACT MESSAGES
CREATE TABLE IF NOT EXISTS contact_messages (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(100) NOT NULL,
    email      VARCHAR(150) NOT NULL,
    subject    VARCHAR(255) NOT NULL,
    message    TEXT         NOT NULL,
    is_read    TINYINT(1) DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- NEWSLETTER
CREATE TABLE IF NOT EXISTS newsletter (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    email         VARCHAR(150) NOT NULL UNIQUE,
    subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- REVIEWS
CREATE TABLE IF NOT EXISTS reviews (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    tour_id    INT NOT NULL,
    user_id    INT,
    name       VARCHAR(100) NOT NULL,
    rating     TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment    TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);
