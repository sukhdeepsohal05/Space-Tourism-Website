let checkbox = document.getElementById('checkbox');
let menuOpen = false;

checkbox.addEventListener('click', function(){
    if (!menuOpen) {
        document.body.style.overflow = 'hidden';
        menuOpen = true;
    } else {
        document.body.style.overflow = 'auto';
        menuOpen = false;
    }
})