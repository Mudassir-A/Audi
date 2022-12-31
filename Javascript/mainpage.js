var btn = document.getElementsByClassName("hoverbtns");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mouseover", function () {
        btn[i].style.backgroundColor = "#555";
        btn[i].style.transition = "0.3s ease";
    });

    btn[i].addEventListener("mouseout", function () {
        btn[i].style.backgroundColor = "black";
        btn[i].style.color = "white";
        btn[i].style.transition = "0.5s";
        btn[i].style.boxShadow = "0px 0px 0px";
        btn[i].style.cursor = "pointer";
    });
}


function scrolltop() {
    scrollTo(0, 0)
}