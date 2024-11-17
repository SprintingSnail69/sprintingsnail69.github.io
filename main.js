const buttons = document.querySelectorAll('.project-button');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const size = Math.max(button.offsetWidth, button.offsetHeight);
        const x = e.clientX - button.offsetLeft - size / 2;
        const y = e.clientY - button.offsetTop - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        ripple.classList.add('ripple');
        button.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});
