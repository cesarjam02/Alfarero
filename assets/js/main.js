document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.cafe-navbar');
    const langToggle = document.getElementById('lang-toggle');

    if (navbar) {
        function handleScroll() {
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    const cart = {
        items: [],
        add(name, price) {
            const existing = this.items.find(i => i.name === name);
            if (existing) {
                existing.qty += 1;
            } else {
                this.items.push({ name, price, qty: 1 });
            }
            this.render();
        },
        clear() {
            this.items = [];
            this.render();
        },
        get count() {
            return this.items.reduce((sum, i) => sum + i.qty, 0);
        },
        get total() {
            return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
        },
        render() {
            const countEl = document.getElementById('cart-count');
            const totalEl = document.getElementById('cart-total');
            if (countEl) {
                countEl.textContent = String(this.count);
            }
            if (totalEl) {
                totalEl.textContent = this.total.toFixed(2);
            }
        }
    };

    const translations = {
        en: {
            brand_name: 'ALFARERO CAKE SHOP',
            nav_home: 'Home',
            nav_menu: 'Menu',
            nav_about: 'About',
            nav_contact: 'Contact',
            nav_reserve: 'Book a Table',
            lang_button: 'ES',
            hero_subtitle: 'Sweet Coffee • Cakes • Breads',
            hero_title: 'Brighten your day at ALFARERO CAKE SHOP',
            hero_text: 'A colorful cake shop and café for handcrafted coffee, custom cakes, and sweet breaks.',
            hero_cta_primary: 'Reserve a Corner',
            hero_cta_secondary: 'Browse the Menu',
            hero_badge_label: 'Today’s pick',
            hero_badge_title: 'Caramel latte & strawberry cupcake',
            why_title: 'Why You’ll Love Our Cake Shop',
            why_text: 'Soft colors, great playlists, and friendly baristas make ALFARERO your perfect everyday escape.',
            why_card1_title: 'Craft Coffee',
            why_card1_text: 'Single-origin beans, slow pours, and signature lattes with pretty foam art.',
            why_card2_title: 'Colorful Space',
            why_card2_text: 'Pastel walls, bright cups, and plants everywhere for the perfect café mood.',
            why_card3_title: 'Fresh Bites',
            why_card3_text: 'Daily-baked pastries, hearty sandwiches, and light bowls to match your coffee.',
            section2_title: 'Your Everyday Cake & Coffee Hangout',
            section2_text: 'Pick your favorite slice from the display, order a drink, and settle into a bright, cozy corner.',
            section2_item1: '• Self-service cake and snack counters',
            section2_item2: '• Plug-friendly seats for laptops',
            section2_item3: '• Group tables for friends and study sessions',
            section2_cta: 'Reserve Your Table',
            menu_title: 'Cake & Café Menu',
            menu_subtitle: 'Colorful coffees, fresh slices, and sweet treats — mix and match your favorites.',
            menu_col1_title: 'Coffee & Sips',
            menu_col2_title: 'Cafeteria Plates',
            menu_col3_title: 'Breads & Sweets',
            about_title: 'About ALFARERO',
            about_subtitle: 'A colorful neighborhood cake shop where coffee, stories, and fresh bakes come together.',
            about_section1_title: 'A little pastel corner in the city',
            about_section1_text1: 'ALFARERO CAKE SHOP was imagined as a calm, pastel-colored pause button in the middle of busy days. We mix the warmth of a family bakery with the energy of a modern café: soft playlists, colorful mugs, and the smell of something just-out-of-the-oven.',
            about_section1_text2: 'Every detail, from the plates to the plants, is chosen so that you and your friends feel like staying “just 10 minutes more” — for one more coffee, one more slice, or one more conversation.',
            about_feature1_title: 'Handcrafted cakes',
            about_feature1_text: 'Colorful celebration cakes, tiny cupcakes, and seasonal specials made in small batches.',
            about_feature2_title: 'Friendly corners',
            about_feature2_text: 'Cozy corners for reading, big tables for study groups, and window seats for people-watching.',
            about_philosophy_title: 'Our sweet philosophy',
            about_philosophy_text: 'Simple recipes, bright colors, and a lot of care — everything designed to make your day a little softer.',
            about_philosophy_card1_title: 'Small-batch baking',
            about_philosophy_card1_text: 'We prefer baking smaller, more often, so that the display case always feels alive and changing.',
            about_philosophy_card2_title: 'Color that feels calm',
            about_philosophy_card2_text: 'Pastel tones on the walls, bright plates, and tiny details that make every photo feel warm.',
            about_philosophy_card3_title: 'Community-first',
            about_philosophy_card3_text: 'From quiet laptop mornings to birthday afternoons, we want ALFARERO to feel like “your” spot.',
            contact_title: 'Contact & Visit',
            contact_subtitle: 'Ask about custom cakes, group reservations, or just say hi — we’d love to hear from you.',
            contact_form_title: 'Send us a sweet message',
            contact_form_text: 'Share your ideas for a colorful cake, ask about today’s bakes, or plan a cozy celebration. Fill out the form and our team will reply with a smile as soon as possible.',
            contact_form_name_label: 'Name',
            contact_form_email_label: 'Email',
            contact_form_topic_label: 'What is this about?',
            contact_topic_custom: 'Custom cake order',
            contact_topic_table: 'Table reservation',
            contact_topic_event: 'Event or birthday',
            contact_topic_feedback: 'Feedback & suggestions',
            contact_topic_other: 'Something else',
            contact_form_message_label: 'Message',
            contact_form_message_placeholder: 'Tell us all the sweet details…',
            contact_form_button: 'Send message (demo only)',
            contact_form_note: 'This is a demo contact form for the design — hook it up to your backend or email service when you’re ready.',
            contact_whatsapp_button: 'Send message via WhatsApp',
            contact_visit_title: 'Find our pastel corner',
            contact_visit_address_title: 'Store address',
            contact_visit_address_text: 'Calle Dulce 123, Barrio Centro\nRiobamba, Ecuador',
            contact_visit_hours_title: 'Opening hours',
            contact_visit_hours_text: 'Monday – Friday: 08:00 – 20:00\nSaturday: 09:00 – 21:00\nSunday: Slow, cozy mornings only ☕',
            contact_visit_contact_title: 'Contact',
            contact_visit_contact_text: 'Phone: +593 000000000\nEmail: hello@alfarerocakeshop.demo',
            contact_map_title: 'Map placeholder',
            contact_map_text: 'Drop in your favorite map embed here later (Google Maps, OpenStreetMap, etc.).',
            cart_title: 'Your pastel cart',
            cart_subtitle: 'Add your favorite bites and drinks — this is a front-end demo cart (no checkout yet).',
            cart_items_label: 'Items:',
            cart_total_label: 'Total:',
            cart_clear: 'Clear cart',
            reservation_title: 'Book a cozy corner',
            reservation_subtitle: 'Reserve a pastel table for birthdays, study dates, or slow coffee afternoons.',
            reservation_form_title: 'Reservation details',
            reservation_form_text: 'Fill in your preferred date and time, and we’ll save a sweet spot for you. This form is a design demo — no real bookings are sent yet.',
            reservation_date_label: 'Date',
            reservation_time_label: 'Time',
            reservation_people_label: 'Number of people',
            reservation_occasion_label: 'Occasion',
            reservation_occasion_coffee: 'Coffee catch-up',
            reservation_occasion_birthday: 'Birthday',
            reservation_occasion_study: 'Study session',
            reservation_occasion_meeting: 'Small meeting',
            reservation_occasion_other: 'Something else',
            reservation_name_label: 'Your name',
            reservation_contact_label: 'Contact',
            reservation_notes_label: 'Notes',
            reservation_notes_placeholder: 'Cake preferences, allergies, or special decorations…',
            reservation_button: 'Send reservation (demo)',
            reservation_note: 'This is a front-end demo only. Connect this form to your booking system or email later.',
            reservation_side_title: 'Best times to visit',
            reservation_side_text1: 'Mornings are calm and bright for laptop work. Afternoons feel cozy with soft playlists and fresh bakes.',
            reservation_side_text2: 'For birthdays or group tables, we recommend booking at least 24 hours in advance so we can prepare something extra sweet.',
            reservation_side_highlight_title: 'Need a custom cake?',
            reservation_side_highlight_text: 'Mention your cake idea in the notes or combine this reservation with a message on the contact page for more detailed designs.',
            reservation_alert: 'Reservation sent (demo only). Connect this form to your backend later.',
            footer_name: 'ALFARERO CAKE SHOP',
            footer_name_inline: 'ALFARERO CAKE SHOP',
            footer_address: 'Riobamba, Ecuador',
            footer_phone: 'Phone: +593 000000000',
            footer_rights: 'All rights reserved. by: COCHEEEEEEEEEEEEEEEEEE',
            footer_tagline: 'Sweet moments, freshly baked every day.'
        },
        es: {
            brand_name: 'ALFARERO CAKE SHOP',
            nav_home: 'Inicio',
            nav_menu: 'Menú',
            nav_about: 'Sobre nosotros',
            nav_contact: 'Contacto',
            nav_reserve: 'Reservar mesa',
            lang_button: 'EN',
            hero_subtitle: 'Café dulce • Pan • Pasteles',
            hero_title: 'Ilumina tu día en ALFARERO CAKE SHOP',
            hero_text: 'Una pastelería y cafetería colorida para café de autor, tortas personalizadas y dulces momentos.',
            hero_cta_primary: 'Reservar una mesa',
            hero_cta_secondary: 'Ver el menú',
            hero_badge_label: 'Recomendación de hoy',
            hero_badge_title: 'Latte de caramelo y cupcake de fresa',
            why_title: 'Por qué te encantará nuestra pastelería',
            why_text: 'Colores suaves, buena música y baristas amigables hacen de ALFARERO tu escape diario perfecto.',
            why_card1_title: 'Café de especialidad',
            why_card1_text: 'Granos de origen único, métodos lentos y lattes con arte en la espuma.',
            why_card2_title: 'Espacio colorido',
            why_card2_text: 'Paredes en tonos pastel, tazas brillantes y plantas por todas partes para el mejor ambiente.',
            why_card3_title: 'Bocados frescos',
            why_card3_text: 'Pasteles del día, sándwiches abundantes y bowls ligeros que combinan con tu café.',
            section2_title: 'Tu lugar diario de pan y café',
            section2_text: 'Elige tu porción favorita de la vitrina, pide una bebida y disfruta en un rincón acogedor.',
            section2_item1: '• Mostradores de tortas y snacks de autoservicio',
            section2_item2: '• Mesas con enchufes para portátiles',
            section2_item3: '• Mesas grandes para amigos y estudio',
            section2_cta: 'Reservar tu mesa',
            menu_title: 'Menú de pan y café',
            menu_subtitle: 'Cafés de colores, rebanadas frescas y dulces — combina tus favoritos.',
            menu_col1_title: 'Café y bebidas',
            menu_col2_title: 'Platos de cafetería',
            menu_col3_title: 'Pasteles y dulces',
            about_title: 'Sobre ALFARERO',
            about_subtitle: 'Una pastelería de barrio llena de color donde se juntan café, historias y horneados frescos.',
            about_section1_title: 'Un pequeño rincón pastel en la ciudad',
            about_section1_text1: 'ALFARERO CAKE SHOP nació como un botón de pausa en tonos pastel en medio de los días ocupados. Mezclamos la calidez de una panadería familiar con la energía de una cafetería moderna: música suave, tazas de colores y olor a algo recién salido del horno.',
            about_section1_text2: 'Cada detalle, desde los platos hasta las plantas, está pensado para que tú y tus amigos se quieran quedar “10 minutitos más”, para otro café, otra rebanada o una conversación más.',
            about_feature1_title: 'Tortas artesanales',
            about_feature1_text: 'Tortas de celebración llenas de color, mini cupcakes y especiales de temporada en tandas pequeñas.',
            about_feature2_title: 'Rincones acogedores',
            about_feature2_text: 'Espacios para leer, mesas grandes para estudiar y asientos junto a la ventana para ver pasar la ciudad.',
            about_philosophy_title: 'Nuestra filosofía dulce',
            about_philosophy_text: 'Recetas sencillas, colores brillantes y mucho cariño — todo pensado para suavizar un poco tu día.',
            about_philosophy_card1_title: 'Horneado en pequeñas tandas',
            about_philosophy_card1_text: 'Preferimos hornear poquito y seguido, para que la vitrina siempre se sienta viva y cambiante.',
            about_philosophy_card2_title: 'Color que calma',
            about_philosophy_card2_text: 'Tonos pastel en las paredes, platos brillantes y pequeños detalles que hacen que cada foto se sienta cálida.',
            about_philosophy_card3_title: 'Primero la comunidad',
            about_philosophy_card3_text: 'Desde mañanas tranquilas con portátil hasta tardes de cumpleaños, queremos que ALFARERO se sienta como “tu” lugar.',
            contact_title: 'Contacto y visita',
            contact_subtitle: 'Pregunta por tortas personalizadas, reservas para grupos o simplemente salúdanos — nos encantará leerte.',
            contact_form_title: 'Envíanos un mensaje dulce',
            contact_form_text: 'Comparte tus ideas para una torta colorida, pregunta por los horneados del día o planea una celebración acogedora. Completa el formulario y nuestro equipo responderá con una sonrisa lo antes posible.',
            contact_form_name_label: 'Nombre',
            contact_form_email_label: 'Correo electrónico',
            contact_form_topic_label: '¿Sobre qué es esto?',
            contact_topic_custom: 'Pedido de torta personalizada',
            contact_topic_table: 'Reserva de mesa',
            contact_topic_event: 'Evento o cumpleaños',
            contact_topic_feedback: 'Comentarios y sugerencias',
            contact_topic_other: 'Otra cosa',
            contact_form_message_label: 'Mensaje',
            contact_form_message_placeholder: 'Cuéntanos todos los detalles dulces…',
            contact_form_button: 'Enviar mensaje (solo demo)',
            contact_form_note: 'Este es un formulario de contacto de demostración para el diseño — conéctalo a tu backend o servicio de correo cuando estés listo.',
            contact_whatsapp_button: 'Enviar mensaje por WhatsApp',
            contact_visit_title: 'Encuentra nuestro rincón pastel',
            contact_visit_address_title: 'Dirección del local',
            contact_visit_address_text: 'Calle Dulce 123, Barrio Centro\nRiobamba, Ecuador',
            contact_visit_hours_title: 'Horario de atención',
            contact_visit_hours_text: 'Lunes a viernes: 08:00 – 20:00\nSábado: 09:00 – 21:00\nDomingo: Mañanas lentas y acogedoras ☕',
            contact_visit_contact_title: 'Contacto',
            contact_visit_contact_text: 'Teléfono: +593 000000000\nCorreo: hello@alfarerocakeshop.demo',
            contact_map_title: 'Mapa de referencia',
            contact_map_text: 'Más adelante puedes insertar aquí tu mapa favorito (Google Maps, OpenStreetMap, etc.).',
            cart_title: 'Tu carrito pastel',
            cart_subtitle: 'Agrega tus bebidas y bocados favoritos — este es un carrito de demostración (sin pago todavía).',
            cart_items_label: 'Ítems:',
            cart_total_label: 'Total:',
            cart_clear: 'Vaciar carrito',
            reservation_title: 'Reserva un rincón acogedor',
            reservation_subtitle: 'Reserva una mesa pastel para cumpleaños, estudios o tardes de café tranquilo.',
            reservation_form_title: 'Detalles de la reserva',
            reservation_form_text: 'Elige tu fecha y hora preferidas y guardaremos un lugar dulce para ti. Este formulario es solo de diseño — todavía no envía reservas reales.',
            reservation_date_label: 'Fecha',
            reservation_time_label: 'Hora',
            reservation_people_label: 'Número de personas',
            reservation_occasion_label: 'Ocasión',
            reservation_occasion_coffee: 'Café con amigos',
            reservation_occasion_birthday: 'Cumpleaños',
            reservation_occasion_study: 'Sesión de estudio',
            reservation_occasion_meeting: 'Reunión pequeña',
            reservation_occasion_other: 'Otra ocasión',
            reservation_name_label: 'Tu nombre',
            reservation_contact_label: 'Contacto',
            reservation_notes_label: 'Notas',
            reservation_notes_placeholder: 'Preferencias de torta, alergias o decoraciones especiales…',
            reservation_button: 'Enviar reserva (demo)',
            reservation_note: 'Este es solo un formulario frontal de demostración. Conéctalo a tu sistema de reservas o correo más adelante.',
            reservation_side_title: 'Mejores momentos para venir',
            reservation_side_text1: 'Las mañanas son tranquilas y luminosas para trabajar con el portátil. Las tardes se sienten acogedoras con música suave y horneados frescos.',
            reservation_side_text2: 'Para cumpleaños o mesas grandes recomendamos reservar con al menos 24 horas de anticipación para preparar algo extra dulce.',
            reservation_side_highlight_title: '¿Necesitas una torta personalizada?',
            reservation_side_highlight_text: 'Menciona tu idea de torta en las notas o combina esta reserva con un mensaje en la página de contacto para diseños más detallados.',
            reservation_alert: 'Reserva enviada (solo demo). Conecta este formulario a tu backend más adelante.',
            footer_name: 'ALFARERO CAKE SHOP',
            footer_name_inline: 'ALFARERO CAKE SHOP',
            footer_address: 'Riobamba, Ecuador',
            footer_phone: 'Teléfono: +1 (234) 567-8901',
            footer_rights: 'Todos los derechos reservados.',
            footer_tagline: 'Momentos dulces, horneados cada día.'
        }
    };

    function applyLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        if (langToggle) {
            langToggle.setAttribute('data-lang', lang);
        }
    }

    if (langToggle) {
        langToggle.addEventListener('click', function () {
            const current = langToggle.getAttribute('data-lang') || 'en';
            const next = current === 'en' ? 'es' : 'en';
            applyLanguage(next);
        });
    }

    applyLanguage('en');

    document.querySelectorAll('[data-add-to-cart]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const itemEl = btn.closest('[data-item]');
            if (!itemEl) return;
            const name = itemEl.getAttribute('data-name') || 'Item';
            const price = parseFloat(itemEl.getAttribute('data-price') || '0');
            if (!Number.isNaN(price)) {
                cart.add(name, price);
            }
        });
    });

    const clearBtn = document.getElementById('cart-clear');
    if (clearBtn) {
        clearBtn.addEventListener('click', function () {
            cart.clear();
        });
    }

    cart.render();

    const reservationForm = document.getElementById('reservation-form');
    const reservationWhatsAppBtn = document.getElementById('reservation-whatsapp');
    const contactWhatsAppBtn = document.getElementById('contact-whatsapp');

    if (reservationWhatsAppBtn && reservationForm) {
        reservationWhatsAppBtn.addEventListener('click', function () {
            const currentLang = (langToggle && langToggle.getAttribute('data-lang')) || 'en';
            const dict = translations[currentLang] || translations.en;

            const date = document.getElementById('res-date')?.value || '';
            const time = document.getElementById('res-time')?.value || '';
            const people = document.getElementById('res-people')?.value || '';
            const occasion = document.getElementById('res-occasion')?.value || '';
            const name = document.getElementById('res-name')?.value || '';
            const contact = document.getElementById('res-contact')?.value || '';
            const notes = document.getElementById('res-notes')?.value || '';

            if (!date || !time || !name || !contact) {
                const alertText = currentLang === 'es'
                    ? 'Por favor completa al menos fecha, hora, nombre y contacto antes de enviar por WhatsApp.'
                    : 'Please fill at least date, time, name and contact before sending via WhatsApp.';
                alert(alertText);
                return;
            }

            let message;
            if (currentLang === 'es') {
                message =
                    'Hola, me gustaría hacer una reserva en ALFARERO CAKE SHOP:%0A%0A' +
                    `• Fecha: ${date}%0A` +
                    `• Hora: ${time}%0A` +
                    `• Personas: ${people}%0A` +
                    `• Ocasión: ${occasion}%0A` +
                    `• Nombre: ${name}%0A` +
                    `• Contacto: ${contact}%0A` +
                    `• Notas: ${notes || '(sin notas adicionales)'}`;
            } else {
                message =
                    'Hi, I would like to book a table at ALFARERO CAKE SHOP:%0A%0A' +
                    `• Date: ${date}%0A` +
                    `• Time: ${time}%0A` +
                    `• People: ${people}%0A` +
                    `• Occasion: ${occasion}%0A` +
                    `• Name: ${name}%0A` +
                    `• Contact: ${contact}%0A` +
                    `• Notes: ${notes || '(no extra notes)'}`;
            }

            const phone = '593939359400'; // WhatsApp number in international format
            const url = `https://wa.me/${phone}?text=${message}`;
            window.open(url, '_blank');
        });
    }

    if (contactWhatsAppBtn) {
        contactWhatsAppBtn.addEventListener('click', function () {
            const currentLang = (langToggle && langToggle.getAttribute('data-lang')) || 'en';
            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const topicSelect = document.getElementById('topic');
            const topic = topicSelect && topicSelect.options[topicSelect.selectedIndex]
                ? topicSelect.options[topicSelect.selectedIndex].text
                : '';
            const messageField = document.getElementById('message')?.value || '';

            if (!name || !email || !messageField) {
                const alertText = currentLang === 'es'
                    ? 'Por favor completa al menos nombre, correo y mensaje antes de enviar por WhatsApp.'
                    : 'Please fill at least name, email and message before sending via WhatsApp.';
                alert(alertText);
                return;
            }

            let text;
            if (currentLang === 'es') {
                text =
                    'Hola, me gustaría ponerme en contacto con ALFARERO CAKE SHOP:%0A%0A' +
                    `• Nombre: ${name}%0A` +
                    `• Correo: ${email}%0A` +
                    `• Tema: ${topic}%0A` +
                    `• Mensaje: ${messageField}`;
            } else {
                text =
                    'Hi, I would like to contact ALFARERO CAKE SHOP:%0A%0A' +
                    `• Name: ${name}%0A` +
                    `• Email: ${email}%0A` +
                    `• Topic: ${topic}%0A` +
                    `• Message: ${messageField}`;
            }

            const phone = '593939359400';
            const url = `https://wa.me/${phone}?text=${text}`;
            window.open(url, '_blank');
        });
    }

    const heroImage = document.querySelector('.hero-image-rotator');
    if (heroImage) {
        const data = heroImage.getAttribute('data-hero-images');
        try {
            const images = JSON.parse(data);
            let index = 0;
            if (Array.isArray(images) && images.length > 1) {
                setInterval(function () {
                    index = (index + 1) % images.length;
                    heroImage.src = images[index];
                }, 5000);
            }
        } catch (e) {
            // ignore JSON errors
        }
    }
});

