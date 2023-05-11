var cost = 15;
var cost1 = 100;
var cost2 = 1100;
document.getElementById("fmly").innerHTML = "Relative: " + cost + " Burgers";
document.getElementById("wrkr").innerHTML = "Worker: " + cost1 + " Burgers";
document.getElementById("mngr").innerHTML = "Manager: " + cost2 + " Burgers";
var clicks = 0;
var clicker = 0;
function first() {
    image.style.transform = "scale(0.95, 0.95)";
    clicks = clicks + 1;
}
function second() {
    image.style.transform = null;
    fmly.style.transform = null;
    wrkr.style.transform = null;
    mngr.style.transform = null;
}
function third() {
    fmly.style.transform = "scale(0.95, 0.95)";
    if (clicks >= cost) {
        clicker = clicker + 1;
        clicks = clicks - cost;
        cost = cost + Math.ceil(cost * 0.15);
        document.getElementById("fmly").innerHTML = "Relative: " + cost + " Burgers";
    }
}
function fourth() {
    wrkr.style.transform = "scale(0.95, 0.95)"
    if (clicks >= cost1) {
        clicker = clicker + 10;
        clicks = clicks - cost1;
        cost1 = cost1 + Math.ceil(cost1 * 0.15);
        document.getElementById("wrkr").innerHTML = "Worker: " + cost1 + " Burgers";
    }
}
function fifth() {
    mngr.style.transform = "scale(0.95, 0.95"
    if (clicks >= cost2) {
        clicker = clicker + 80;
        clicks = clicks - cost2;
        cost2 = cost2 + Math.ceil(cost2 * 0.15);
        document.getElementById("mngr").innerHTML = "Manager: " + cost2 + " Burgers";
    }
}
var t = setInterval(function() {
    if (clicks >= cost) {
        fmly.style.opacity = "1"
    } else {
        fmly.style.opacity = "0.3"
    }
    if (clicks >= cost1) {
        wrkr.style.opacity = "1"
    } else {
        wrkr.style.opacity = "0.3"
    }
    if (clicks >= cost2) {
        mngr.style.opacity = "1"
    } else {
        mngr.style.opacity = "0.3"
    }
    document.getElementById("clicks").innerHTML = "Burgers: " + Math.floor(clicks);
    document.getElementById("per").innerHTML = "Burgers per sec: " + (clicker / 10);
}, 10)
var ti = setInterval(function() {
    document.getElementById("title").innerHTML = Math.floor(clicks) + " Burgers - Burger Clicker";
}, 1000)
var tim = setInterval(function() {
    clicks = clicks + (clicker / 1000);
}, 10)
