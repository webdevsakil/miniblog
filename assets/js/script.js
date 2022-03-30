

function targetElement(id) {
    if (id) {
        return document.querySelector(id)
    }
    return false;
}
const menuBarIcon = targetElement(".menuBarIcon");
const primaryNav = targetElement(".primaryNav");
const body = targetElement("body");
menuBarIcon.addEventListener("click", function () {
    primaryNav.classList.toggle("hidden");
})


// sticky header
// window.addEventListener('scroll', function () {
//     const header = document.querySelector('header');
//     header.classList.toggle('stickyheader', window.scrollY > 5)
// })
// tiny slider
// hero slider
if (targetElement('.hero-slider')) {
    var heroSlider = tns({
        container: targetElement('.hero-slider'),
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controlsContainer: targetElement('.heroslider-controls'),
        navContainer:".slider-navcontrols"
    });
}
// blog Slider
if (targetElement('.blogSlider')) {
    var blogSlider = tns({
        container: targetElement('.blogSlider'),
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controlsContainer: targetElement('.blogSliderControls'),
        gutter: 10,
        navContainer: ".blogSliderNav",
        responsive: {
            '640': {
                items:2
            },
            '1024': {
                items:3
            }
        }
    });
}
// news Slider
if (targetElement('.newsSlider')) {
    var newSlider = tns({
        container: targetElement('.newsSlider'),
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controlsContainer: targetElement('.newsSliderControls'),
        gutter: 2,
        navContainer: ".blogSliderNav",
        responsive: {
            '320': {
                items:1
            },
            '640': {
                items: 2
            },
            '768': {
                items:3
            },
            '1024': {
                items:4
            },
            '1400': {
                items:5
            },
        }
    });
}

// testimonialSlider
if (targetElement('.testimonialSlider')) {
    var testimonialSlider = tns({
        container: targetElement('.testimonialSlider'),
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controlsContainer: targetElement('.testimonialSliderControls'),
        gutter: 2,
        nav:false
    });
}
// logoSlider
if (targetElement('.logoSlider')) {
    var logoSlider = tns({
        container: targetElement('.logoSlider'),
        items: 4,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controls:false,
        gutter: 2,
        nav: false,
        responsive: {
            '320': {
                items: 2
            },
            '640': {
                items: 3
            },
            '768': {
                items: 4
            },
            '1024': {
                items: 5
            },
            '1400': {
                items: 6
            },
        }
    });
}



// Aos
AOS.init();
