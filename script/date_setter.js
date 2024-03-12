


var last_str = "";

function set_date() {
    timeWrapper.innerHTML = last_str;

}

async function playSound () {
    tick.loop = false;
    tick.currentTime = 0;
    tick.play();
}


async function set_date_on_change() {
    var d = Date.now();
    var nstr = date_to_time_string(d/1000);
   
    playSound();
    last_str = nstr;
    set_date();
    setInterval(set_date_on_change, 2.404 * 1000);
}


set_date_on_change();


