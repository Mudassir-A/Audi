MyBanners = new Array('img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg')
banner = 0
links_arr = new Array('create_account.html', '11_3.html', '11_4.html', '11_5.html');
function ShowBanners() {
    // if (document.images) {
    banner++
    if (banner == MyBanners.length) {
        banner = 0
    }
    var ChangeBanner = document.getElementById("link")
    ChangeBanner.style.backgroundImage = `url('${MyBanners[banner]}')`
    var changeLink = document.getElementById("link")
    changeLink.href = links_arr[banner]
    setTimeout("ShowBanners()", 2300)
}
// }
function nameCheck() {
    var letters = /^[A-Za-z]+$/;
    var name = document.getElementById("t1").value;
    if (!(name.match(letters))) {
        document.getElementById("m1").value = "Name must only contain characters!";
    }
    else {
        document.getElementById("m1").value = "";
    }
}

function numCheck() {
    var letters = /^[0-9]+$/;
    var num = document.getElementById("t2").value;
    if (num.match(letters) && num.length == 10) {
        document.getElementById("m2").value = "";
    }
    else {
        document.getElementById("m2").value = "Enter valid mobile number!"
    }
}

function emailCheck() {
    var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("t3").value;
    if (letters.test(email)) {
        document.getElementById("m3").value = "";
    }
    else {
        document.getElementById("m3").value = "Enter valid Email id!"
    }
}

function passCheck() {
    // var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pass = document.getElementById("t4").value;
    if (pass.length < 8) {
        document.getElementById("m4").value = "Password must contain atleast 8 character!"
    }
    else {
        document.getElementById("m4").value = "";
    }
}