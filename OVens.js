  // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navbar = document.getElementById('navbar');

        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('show');
        });

        // Page navigation
        function showPage(pageName) {
            const pages = document.querySelectorAll('.page-container');
            pages.forEach(page => page.classList.add('hidden'));

            const selectedPage = document.getElementById('page-' + pageName);
            if (selectedPage) {
                selectedPage.classList.remove('hidden');
            }

            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));
            
            const activeLink = document.querySelector(`[data-page="${pageName}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            navbar.classList.remove('show');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Scroll to top button
        window.addEventListener('scroll', function() {
            const backToTop = document.getElementById('back-to-top');
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Newsletter subscription handlers
        function handleSubscribe() {
            const name = document.getElementById('sub-name').value;
            const email = document.getElementById('sub-email').value;
            const agreed = document.getElementById('sub-agree').checked;

            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }

            if (!agreed) {
                alert('Please agree to receive marketing emails to subscribe.');
                return;
            }

            alert(`Thank you for subscribing, ${name}! We've sent a confirmation to ${email}`);
            
            document.getElementById('sub-name').value = '';
            document.getElementById('sub-email').value = '';
            document.getElementById('sub-birthday').value = '';
            document.getElementById('sub-agree').checked = false;
        }

        function handleFooterNewsletter() {
            const email = document.getElementById('footer-email').value;
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }

            alert(`Thank you for subscribing with ${email}!`);
            document.getElementById('footer-email').value = '';
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            showPage('home');
        });