var min = 0;
var sec = 0;
var msec = 0;
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");

var interval;

function timer(){

    msec++;
    msecheading.innerHTML = msec;

    if(msec >= 100){
        sec++;
        secheading.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){

        min++;
        minheading.innerHTML = min;
        sec = 0;
    }
}
function start(id1, id2){

    interval = setInterval(timer, 10);
    document.getElementById(id1).disabled = true;

    if(document.getElementById(id2).disabled == true){

        document.getElementById(id2).removeAttribute("disabled");
    }
}
function stop(id1, id2){

    clearInterval(interval);
    document.getElementById(id1).disabled = true;
    document.getElementById(id2).disabled = false;
}
function reset(id1, id2){

    min = 0;
    sec = 0;
    msec = 0;
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msecheading.innerHTML = msec;

    clearInterval(interval);

    if(document.getElementById(id1).disabled == true){

        document.getElementById(id1).removeAttribute("disabled");
    }
    if(document.getElementById(id2).disabled == true){

        document.getElementById(id2).removeAttribute("disabled");
    }
}