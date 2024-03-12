




function greg_seconds_to_waldguru_seconds(greg_seconds) {
  // caclulate the seconds since 1.1. 2024 12:00:00 CET
    return parseInt((greg_seconds - 1704021373) / 2.404207362885049) -(33*33*33*11)*7 + (33*33*33*33*11) * 33; 
}

function wald_seconds_to_seconds (seconds) {
    return parseInt(seconds % 33 + 1);
}

function wald_seconds_to_minutes(seconds) {
    return parseInt(seconds / 33) % (33) + 1;
}

function wald_seconds_to_hours(seconds) {
    return parseInt(seconds / (33 * 33)) % (33) + 1;
}

function wald_seconds_to_days(seconds) {
    return parseInt(seconds / (33 * 33 * 33)) % (11) + 1;
}

function wald_seconds_to_weeks(seconds) {
    return parseInt(seconds / (33 * 33 * 33 * 11)) % (33) + 1;
}

function wald_seconds_to_months(seconds) {
    return parseInt(seconds / (33 * 33 * 33 * 33)) % (11) + 1;
}

function wald_seconds_to_years(seconds) {
    return parseInt(seconds / (33 * 33 * 33 * 33 * 11)) % 33 + 1;
}

function secs_from_date(d) {
    return d.getTime() / 1000;
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function date_to_time_string(seconds) {
    var wald_seconds = greg_seconds_to_waldguru_seconds(seconds);
    var hours = wald_seconds_to_hours(wald_seconds);
    var minutes = wald_seconds_to_minutes(wald_seconds);
    var seconds = wald_seconds_to_seconds(wald_seconds);
    return pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
}


// 20.06.2024 12:16:15 CET
var d = new Date(2024, 5, 20, 13, 16, 15);
var secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(secs);
console.log(wald_seconds_to_years(secs));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));
console.log(wald_seconds_to_seconds(secs));
console.log(date_to_time_string(secs));


// 01.08.2024 12:16:15 
d = new Date(2024, 7, 1, 13, 16, 15);
secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(secs);
console.log(wald_seconds_to_years(secs));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));
console.log(wald_seconds_to_seconds(secs));



// 01.02.2025 12:16:15
d = new Date(2025, 1, 1, 13, 16, 15);
secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(secs);
console.log(wald_seconds_to_years(secs));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));