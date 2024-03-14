


var last_str = "";

function set_date() {
    var cur_year = wald_seconds_to_years(greg_seconds_to_waldguru_seconds(Date.now() / 1000));

    hour.innerHTML = wald_seconds_to_hours(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    //document.getElementById("hour-label").innerHTML = get_hour_str(wald_seconds_to_hours(greg_seconds_to_waldguru_seconds(Date.now() / 1000)));

    minute.innerHTML = wald_seconds_to_minutes(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    //document.getElementById("minute-label").innerHTML = get_minute_str(wald_seconds_to_minutes(greg_seconds_to_waldguru_seconds(Date.now() / 1000)));   

    second.innerHTML = wald_seconds_to_seconds(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    //document.getElementById("second-label").innerHTML = get_second_str(wald_seconds_to_seconds(greg_seconds_to_waldguru_seconds(Date.now() / 1000)));

    day.innerHTML = wald_seconds_to_days(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    document.getElementById("day-label").innerHTML = 
        get_day_str(wald_seconds_to_days(greg_seconds_to_waldguru_seconds(Date.now() / 1000)), cur_year);
    second_label.innerHTML = 
        get_day_str(wald_seconds_to_days(greg_seconds_to_waldguru_seconds(Date.now() / 1000)), cur_year);

    week.innerHTML = wald_seconds_to_weeks(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    document.getElementById("week-label").innerHTML = 
        get_week_str(wald_seconds_to_weeks(greg_seconds_to_waldguru_seconds(Date.now() / 1000)),  cur_year);

    month.innerHTML = wald_seconds_to_months(greg_seconds_to_waldguru_seconds(Date.now() / 1000));
    document.getElementById("month-label").innerHTML = 
        get_month_str(wald_seconds_to_months(greg_seconds_to_waldguru_seconds(Date.now() / 1000)),  cur_year);


    

}
    1
async function playSound () {
    try {
        tick.loop = false;
        tick.currentTime = 0;
        tick.play().catch(e => {});
    } catch (e) {
        
    }
  
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


