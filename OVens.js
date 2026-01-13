// 1. SELECT ELEMENTS
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const modal = document.getElementById('signInModal');

// 2. TOGGLE BETWEEN SIGN-IN AND SIGN-UP VIEWS
// This replaces the old switchTab function
function toggleAuth(view) {
    const loginView = document.getElementById('login-view');
    const signupView = document.getElementById('signup-view');

    if (view === 'signup') {
        loginView.classList.add('hidden');
        signupView.classList.remove('hidden');
    } else {
        signupView.classList.add('hidden');
        loginView.classList.remove('hidden');
    }
}

// 3. OPEN THE MODAL
function handleSignIn() {
    modal.style.display = "block";
    
    // Always start on the Login view
    toggleAuth('login'); 
    
    // Close mobile navbar if it's open
    if (navbar) {
        navbar.classList.remove('show');
    }
}

// 4. CLOSE THE MODAL
function closeSignIn() {
    modal.style.display = "none";
}

// 5. GLOBAL CLICK HANDLER
window.onclick = function(event) {
    // Close modal if clicking outside the white box
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function handleForgotPassword() {
    const email = document.querySelector('#login-view input[type="email"]').value;
    if (email) {
        alert(`A password reset link has been sent to: ${email}`);
    } else {
        alert("Please enter your email address first to reset your password.");
    }
}

// 6. MOBILE MENU TOGGLE
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });
}

    // 4. PAGE NAVIGATION
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

        // Close mobile menu after clicking a link
            navbar.classList.remove('show');
            window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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