function scrolle() {
    a = window.pageYOffset;
    b = document.getElementById("d1").style.opacity
    if (a > 950) {
        document.getElementById("d1").style.opacity = "1"
        // // document.getElementById("d1").translate="(100,200)"
        document.getElementById("d2").style.opacity = "0.5"
        document.getElementById("d2").style.backgroundImage = "url('./Images/1.png')"

    }

    if (a > 1050) {
        document.getElementById("d1").style.opacity = "0.5"
        document.getElementById("d2").style.opacity = "0.4"
        document.getElementById("d2").style.backgroundImage = "url('./Images/2.png')"


    }

    if (a > 1060) {
        document.getElementById("d1").style.opacity = "0.4"
        document.getElementById("d2").style.opacity = "0.6"
        document.getElementById("d2").style.backgroundImage = "url('./Images/3.png')"


    }

    if (a > 1070) {
        document.getElementById("d1").style.opacity = "0.3"
        document.getElementById("d2").style.opacity = "0.8"
        document.getElementById("d2").style.backgroundImage = "url('./Images/4.png')"



    }
    if (a > 1080) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/5.png')"


    }


    if (a > 1090) {
        document.getElementById("d1").style.opacity = "0"
        document.getElementById("d2").style.opacity = "1"
        document.getElementById("d2").style.backgroundImage = "url('./Images/6.png')"


    }

    if (a > 1110) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/5.png')"


    }

    if (a > 1130) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/6.png')"


    }

    if (a > 1150) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/7.png')"
    }
    if (a > 1160) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/8.png')"
    }
    if (a > 1190) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/9.png')"
    }



    if (a < 1000) {
        document.getElementById("d1").style.opacity = "1"
        document.getElementById("d2").style.opacity = "0"
        document.getElementById("d2").style.backgroundImage = "url('./Images/1.png')"
    }
}
//exteriror slides
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
function initialSlide() {
    showSlides(1, 0);
    showSlides(0, 1);
}

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("img-carousel");

//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }
// //exteriror slides

// //interior slides
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("in-img-carousel");

//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }
//interior slides


let slideIndex = [1, 1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["img-carousel", "in-img-carousel"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

function unique() {
    document.getElementById("colr").src = "Images/etrongrad.png";
    p1.innerHTML = "Kemora Grey Metallic"
    
}
function red() {
    document.getElementById("colr").src = "Images/red.jpeg"
    p1.innerHTML = "Tango Red Metallic"
    
}
function white() {
    document.getElementById("colr").src = "Images/white.png"
    p1.innerHTML = "Ibis White Metallic"
}
function creme() {
    document.getElementById("colr").src = "Images/creme.jpeg"
    p1.innerHTML = "Suzuka Grey Metallic"
}
function blue() {
    document.getElementById("colr").src = "Images/blue.jpeg"
    p1.innerHTML = "Ascari Blue Metallic"
}
