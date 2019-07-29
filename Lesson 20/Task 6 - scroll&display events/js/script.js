window.addEventListener('wheel', function(event) {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var newClass = document.querySelector('header');
    var addNewClass = newClass.classList.toggle('active');

    if (scrolled === 200) {
        return addNewClass;
    }
});

window.addEventListener('resize', function() {
    var newClass = document.querySelector('header');
    var addNewClass = newClass.classList.toggle('active');

    if (window.innerWidth < 768) { //this.innerWidth
        return addNewClass;
    }
});