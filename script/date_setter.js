


var last_str = "";

var Mathaton = false; 

function toggleMathaton() {
    Mathaton = !Mathaton;
    if (Mathaton) {
        document.getElementById("math").innerHTML = "Mathaton aus";
    } else {
        document.getElementById("math").innerHTML = "Mathaton ein";
    }
}

function set_date() {
    var cur_year = wald_seconds_to_years(greg_seconds_to_waldguru_seconds(Date.now() / 1000));

    hour.innerHTML = wald_seconds_to_hours(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    document.getElementById("hour_label").innerHTML = get_day_str(wald_seconds_to_hours(greg_seconds_to_waldguru_seconds(Date.now() / 1000)), 1);

    minute.innerHTML = wald_seconds_to_minutes(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    document.getElementById("minute_label").innerHTML = get_day_str(wald_seconds_to_minutes(greg_seconds_to_waldguru_seconds(Date.now() / 1000)), 1);   

    var k = get_day_str(wald_seconds_to_seconds(greg_seconds_to_waldguru_seconds(Date.now() / 1000)), 1);
    second.innerHTML = wald_seconds_to_seconds(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    document.getElementById("second_label").innerHTML = k;

    day.innerHTML = wald_seconds_to_days(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    document.getElementById("day-label").innerHTML = 
        get_day_str(wald_seconds_to_days(greg_seconds_to_waldguru_seconds(Date.now() / 1000)), cur_year);

    week.innerHTML = wald_seconds_to_weeks(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    document.getElementById("week-label").innerHTML = 
        get_week_str(wald_seconds_to_weeks(greg_seconds_to_waldguru_seconds(Date.now() / 1000)),  cur_year);

    month.innerHTML = wald_seconds_to_months(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    document.getElementById("month-label").innerHTML = 
        get_month_str(wald_seconds_to_months(greg_seconds_to_waldguru_seconds(Date.now() / 1000)),  cur_year);

    year.innerHTML = get_current_year(Date.now() / 1000);
    document.getElementById("year-label").innerHTML = get_day_str(get_current_year_mod(Date.now() / 1000), 1);


    

}
    1
async function playSound () {
    try {
        if (!Mathaton) {
            return;
        }
        tick.loop = false;
        tick.currentTime = 0;
        tick.play().catch(e => {});
    } catch (e) {
        
    }
  
}


async function set_date_on_change() {
    while (true) {
        var d = Date.now();
        var nstr = date_to_time_string(d/1000);
        if (nstr != last_str) {
            playSound();
            last_str = nstr;
            set_date();
        }
        await sleep(2400);
    }

    
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


set_date_on_change();


