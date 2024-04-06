

const RESET_TIMES = [
    "2023 17. März 12h16m11s",
    "2024 17. März 12h16m15s",
    "2025 17. März 12h16m19s",
    "2026 18. März 12h16m06s",
    "2027 18. März 12h16m10s",
    "2028 17. März 12h16m15s",
    "2029 17. März 12h16m19s",
    "2030 18. März 12h16m05s",
    "2031 18. März 12h16m10s",
    "2032 17. März 12h16m14s",
    "2033 17. März 12h16m18s",
    "2034 18. März 12h16m05s",
]

function month_to_int(month) {
    switch (month) {
        case "Januar":
            return 1;
        case "Februar":
            return 2;
        case "März":
            return 3;
        case "April":
            return 4;
        case "Mai":
            return 5;
        case "Juni":
            return 6;
        case "Juli":
            return 7;
        case "August":
            return 8;
        case "September":
            return 9;
        case "Oktober":
            return 10;
        case "November":
            return 11;
        case "Dezember":
            return 12;
    }
}
function string_to_date(s) {
    var parts = s.split(" ");
    var year = parseInt(parts[0]);
    var month = month_to_int(parts[2]);
    var day = parseInt(parts[1]);
    var hour = parseInt(parts[3].split("h")[0]);
    var minute = parseInt(parts[3].split("h")[1].split("m")[0]);
    var second = parseInt(parts[3].split("h")[1].split("m")[1].split("s")[0]);
    return new Date(year, month - 1, day, hour, minute, second);
}

function get_secs_pure(greg_seconds) {
    var l = parseInt((greg_seconds - 1704021373) / 2.404207362885049) -(33*33*33*11)*7 + (33*33*33*33*11) * 33;
    for (var i = 0; i < RESET_TIMES.length; i++) {
        var d = string_to_date(RESET_TIMES[i]);
        if (d.getTime() / 1000 >= greg_seconds) {
            return l;
        }
        l = parseInt((greg_seconds - d.getTime() / 1000) / 2.404207362885049) + 1;
    }
    return l;
}


function greg_seconds_to_waldguru_seconds(greg_seconds) {
  // caclulate the seconds since 1.1. 2024 12:00:00 CET
    var l = get_secs_pure(greg_seconds);
    if (is_countdown(l)) {
        for(var i = 0; i < RESET_TIMES.length; i++) {
            var d = string_to_date(RESET_TIMES[i]);
            if (d.getTime() / 1000 > greg_seconds) {
               return parseInt((d.getTime() / 1000 - greg_seconds) / 2.404207362885049) 
            }
        }
    }
    return l;
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
    return parseInt(seconds / (33 * 33 * 33)) % (33) + 1;
}

function wald_seconds_to_weeks(seconds) {
    return parseInt(seconds / (33 * 33 * 33 * 11)) % (33) + 1;
}

function wald_seconds_to_months(seconds) {
    return parseInt(seconds / (33 * 33 * 33 * 33)) % (11) + 1;
}

function wald_seconds_to_years(seconds) {
    return parseInt(seconds / (33 * 33 * 33 * 33 * 11)) + 1;
}


function secs_from_date(d) {
    return d.getTime() / 1000;
}

function get_current_year(greg_seconds) {
    for (var i = 1; i < RESET_TIMES.length; i++) {
        var d = string_to_date(RESET_TIMES[i]);
        if (d.getTime() / 1000 >= greg_seconds) {
            return ((i-2) % 33) + 1 
        }
    }
    return 1;
}

function is_countdown(seconds) {
    var year = wald_seconds_to_years(seconds)
    if (year == 2) {
        return true;
    }
    return false;
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


// 20.06.2024 12:16:15 CEST
var d = new Date(2024, 5, 20, 13, 16, 15);
var secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(d);
console.log(secs);
console.log(get_current_year(d.getTime() / 1000));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));
console.log(wald_seconds_to_seconds(secs));



// 01.08.2024 12:16:15  CEST
d = new Date(2024, 7, 1, 13, 16, 15);
secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(d);
console.log(secs);
console.log(get_current_year(d.getTime() / 1000));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));
console.log(wald_seconds_to_seconds(secs));
console.log(); console.log();

// 31.10.2024 12:16:15 CET
d = new Date(2024, 9, 31, 12, 16, 15);
secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(d);
console.log(secs);
console.log(get_current_year(d.getTime() / 1000));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));
console.log(wald_seconds_to_seconds(secs));
console.log(); console.log();
 

// 21.12.2024 12:16:15  CET
d = new Date(2024, 11, 21, 12, 16, 15);
secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(d);
console.log(secs);
console.log(get_current_year(d.getTime() / 1000));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));
console.log(wald_seconds_to_seconds(secs));
console.log(); console.log();

// 24.12.2024 12:16:15 CET
d = new Date(2024, 11, 24, 12, 16, 15);
secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(d);
console.log(secs);
console.log(get_current_year(d.getTime() / 1000));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));
console.log(wald_seconds_to_seconds(secs));
console.log(); console.log();



// 01.02.2025 12:16:15
d = new Date(2025, 1, 1, 12, 16, 15);
secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(d);
console.log(secs);
console.log(get_current_year(d.getTime() / 1000));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));
console.log(wald_seconds_to_seconds(secs));
console.log()



// 2025 16. März 12h16m19s
d = new Date(2025, 2, 16, 12, 16, 15);
secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(d);
console.log(secs);
console.log(get_current_year(d.getTime() / 1000));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));
console.log(wald_seconds_to_seconds(secs));
console.log(is_countdown(get_secs_pure(d.getTime() / 1000)));
console.log()

// 2025 16. März 12h16m50s
d = new Date(2025, 2, 16, 12, 16, 50);
secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(d);
console.log(secs);
console.log(get_current_year(d.getTime() / 1000));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));
console.log(wald_seconds_to_seconds(secs));
console.log(is_countdown(get_secs_pure(d.getTime() / 1000)));
console.log()


// 2025 17. März 12h16m19s
d = new Date(2025, 2, 17, 12, 16, 20, 500);
secs = greg_seconds_to_waldguru_seconds(d.getTime() / 1000);
console.log(d);
console.log(secs);
console.log(get_current_year(d.getTime() / 1000));
console.log(wald_seconds_to_months(secs));
console.log(wald_seconds_to_weeks(secs));
console.log(wald_seconds_to_days(secs));
console.log(wald_seconds_to_hours(secs));
console.log(wald_seconds_to_minutes(secs));
console.log(wald_seconds_to_seconds(secs));
console.log(is_countdown(get_secs_pure(d.getTime() / 1000)));
console.log()