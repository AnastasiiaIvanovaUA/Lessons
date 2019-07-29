var box = document.querySelector('.box');
window.addEventListener('click', function(event) {
    box.style.left = (event.clientX - 100 / 2) + 'px';
    box.style.top = (event.clientY - 100 / 2) + 'px';

})