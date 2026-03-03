<?php
if (!isset($pageTitle)) {
    $pageTitle = 'Welcome';
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?> | ALFARERO CAKE SHOP</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
<nav class="navbar navbar-expand-lg cafe-navbar fixed-top shadow-sm">
    <div class="container">
        <a class="navbar-brand fw-bold d-flex align-items-center gap-2" href="index.php" data-i18n="brand_name">
            <img src="images/logo.jpg" alt="ALFARERO CAKE SHOP logo" class="brand-logo">
            <span>ALFARERO CAKE SHOP</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavbar">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                <li class="nav-item">
                    <a class="nav-link<?php if (($activePage ?? '') === 'home') echo ' active'; ?>" href="index.php" data-i18n="nav_home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link<?php if (($activePage ?? '') === 'menu') echo ' active'; ?>" href="menu.php" data-i18n="nav_menu">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link<?php if (($activePage ?? '') === 'about') echo ' active'; ?>" href="about.php" data-i18n="nav_about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link<?php if (($activePage ?? '') === 'contact') echo ' active'; ?>" href="contact.php" data-i18n="nav_contact">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-primary ms-lg-3" href="reservation.php" data-i18n="nav_reserve">Book a Table</a>
                </li>
                <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
                    <button class="btn btn-sm btn-outline-light" id="lang-toggle"
                            type="button"
                            data-lang="es"
                            aria-label="Toggle language">
                        <span data-i18n="lang_button">EN</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</nav>

<main class="page-content">

