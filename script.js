// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Active navigation while scrolling
const sections = document.querySelectorAll(
    '#about, #skills, #education'
);

const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                const activeLink = document.querySelector(
                    `nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    },
    {
        threshold: 0.4
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// Scroll reveal effect
const revealElements = document.querySelectorAll(
    '#about, #skills, #education, #thought, .thanks'
);

revealElements.forEach(element => {
    element.classList.add('js-reveal');
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll('.js-reveal').forEach(element => {
    revealObserver.observe(element);
});