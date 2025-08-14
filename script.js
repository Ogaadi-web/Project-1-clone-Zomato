document.addEventListener('DOMContentLoaded', () => {

    // Scroll animation for the heading
    const heading = document.querySelector('.text-heading');

    // Fade-in effect when the page loads
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            heading.style.opacity = '1';
            heading.style.transition = 'opacity 1s ease-in';
        } else {
            heading.style.opacity = '0';
        }
    });

    // Smooth scroll for links (only for the sake of effect, no actual target set in the HTML links)
    const links = document.querySelectorAll('header ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');

            // If you had anchors in your page, you could scroll to them
            if (targetId !== "") {
                const targetElement = document.querySelector(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adding a basic animation effect to the video when the page loads
    const videoElement = document.querySelector('video');
    videoElement.style.opacity = '0';
    videoElement.style.transition = 'opacity 1.5s ease-in-out';

    // Wait for the video to load before animating
    videoElement.onloadeddata = () => {
        videoElement.style.opacity = '1';
    };
});
