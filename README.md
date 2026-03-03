## Restaurant  Website

This is a simple, modern, responsive restaurant website built with , **HTML5**, **CSS3**, and **Bootstrap** (via CDN). It is designed to run easily on XAMPP.

### Features

- **Home page** with hero section and call to action
- **Menu page** listing food categories and items
- **About page** describing the restaurant
- **Contact page** with contact info and a form
- **Reservation form** with basic server-side validation and success page
- Shared **header/footer** layout and styles

### Requirements

- PHP 7.4+ (recommended: PHP 8+)
- Web server such as Apache (XAMPP on Windows works great)

### Getting Started (XAMPP)

1. Place this project folder in your XAMPP `htdocs` directory:
   - `C:\xampp\htdocs\Restaurant`
2. Start **Apache** in the XAMPP Control Panel.
3. Open your browser and go to:
   - `http://localhost/Restaurant/`

### Project Structure

- `index.php` – Home page
- `menu.php` – Menu listing
- `about.php` – About the restaurant
- `contact.php` – Contact info and form
- `reservation.php` – Reservation form and confirmation
- `partials/header.php` – Shared `<head>` and navigation
- `partials/footer.php` – Shared footer and JS includes
- `assets/css/styles.css` – Custom styling
- `assets/js/main.js` – Simple interactive behaviors

### Customization

- Update restaurant name, address, and contact details in:
  - `partials/header.php`
  - `partials/footer.php`
  - `contact.php`
- Modify menu items in `menu.php`.
- Adjust colors, fonts, and spacing in `assets/css/styles.css`.

### Notes

- This demo does **not** use a database. Reservation and contact forms only simulate handling and show a confirmation message.
- For production, you should:
  - Add proper form handling (email or database storage)
  - Implement stronger validation and security
  - Configure HTTPS and environment-specific settings

