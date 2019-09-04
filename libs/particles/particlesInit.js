window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 1300) {
        particlesJS.load('particles-js', 'libs/particles/particlesjs-config.json', function () {
            console.log('callback - particles.js config loaded');
        });
    };
});
