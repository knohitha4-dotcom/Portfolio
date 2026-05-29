// Smooth Scroll Animation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// Welcome Message

window.onload = function(){

    console.log("Welcome to Nohitha Portfolio Website");

};