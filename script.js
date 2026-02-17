var typed = new Typed(".text", {
            strings: ["Frontend Developer", "Web Designer", "UI/UX Designer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });


        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');

            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });

       
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('scrolled', window.scrollY > 50);
        });

       
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

    
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });

    
        const form = document.getElementById('form');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });

       
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
        document.head.appendChild(link);