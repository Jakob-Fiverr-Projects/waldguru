

var new_times = [
    "17.03.2023 12:16:11",
    "17.03.2024 12:16:15",
    "17.03.2025 12:16:19",
    "18.03.2026 12:16:06",
    "18.03.2027 12:16:10",
    "17.03.2028 12:16:15",
    "17.03.2029 12:16:19",
    "18.03.2030 12:16:05",
    "18.03.2031 12:16:10",
    "17.03.2032 12:16:14",
    "17.03.2033 12:16:18",
    "18.03.2034 12:16:05"
]
const old_times = [
    "18.03.2022 12:16:07",
    "17.03.2021 12:16:20",
    "17.03.2020 12:16:16",
    "18.03.2019 12:16:12",
    "18.03.2018 12:16:08",
    "17.03.2017 12:16:21",
    "17.03.2016 12:16:17",
    "18.03.2015 12:16:12",
    "18.03.2014 12:16:08",
    "17.03.2013 12:16:22",
    "17.03.2012 12:16:17",
    "18.03.2011 12:16:13",
    "18.03.2010 12:16:09",
    "18.03.2009 12:16:05",
    "17.03.2008 12:16:18",
    "18.03.2007 12:16:14",
    "18.03.2006 12:16:10",
    "18.03.2005 12:16:06",
    "17.03.2004 12:16:19",
    "18.03.2003 12:16:15",
    "18.03.2002 12:16:11",
    "18.03.2001 12:16:06",
    "17.03.2000 12:16:20",
    "18.03.1999 12:16:15",
    "18.03.1998 12:16:11",
    "18.03.1997 12:16:07",
    "17.03.1996 12:16:20",
    "18.03.1995 12:16:16",
    "18.03.1994 12:16:12",
    "18.03.1993 12:16:08",
    "17.03.1992 12:16:21",
    "18.03.1991 12:16:17",
    "18.03.1990 12:16:13",
    "18.03.1989 12:16:09",
    "17.03.1988 12:16:22",
    "18.03.1987 12:16:18",
    "18.03.1986 12:16:13",
    "18.03.1985 12:16:09",
    "17.03.1984 12:16:22",
    "18.03.1983 12:16:18",
    "18.03.1982 12:16:14",
    "18.03.1981 12:16:10",
    "17.03.1980 12:16:23",
    "18.03.1979 12:16:19",
    "18.03.1978 12:16:15",
    "18.03.1977 12:16:11",
    "18.03.1976 12:16:06",
    "18.03.1975 12:16:20",
    "18.03.1974 12:16:16",
    "18.03.1973 12:16:11",
    "18.03.1972 12:16:07",
    "18.03.1971 12:16:21",
    "18.03.1970 12:16:16",
    "18.03.1969 12:16:12",
    "18.03.1968 12:16:08",
    "18.03.1967 12:16:21",
    "18.03.1966 12:16:17",
    "18.03.1965 12:16:13",
    "18.03.1964 12:16:09",
    "18.03.1963 12:16:22",
    "18.03.1962 12:16:18",
    "18.03.1961 12:16:14",
    "18.03.1960 12:16:09",
    "18.03.1959 12:16:23",
    "18.03.1958 12:16:18",
    "18.03.1957 12:16:14",
    "18.03.1956 12:16:10",
    "18.03.1955 12:16:23",
    "18.03.1954 12:16:19",
    "18.03.1953 12:16:15",
    "18.03.1952 12:16:11",
    "18.03.1951 12:16:24",
    "18.03.1950 12:16:20",
    "18.03.1949 12:16:16",
    "18.03.1948 12:16:11",
    "18.03.1947 12:16:25",
    "18.03.1946 12:16:21",
    "18.03.1945 12:16:16",
    "18.03.1944 12:16:12",
    "19.03.1943 12:16:08",
    "18.03.1942 12:16:21",
    "18.03.1941 12:16:17",
    "18.03.1940 12:16:15",
    "19.03.1939 12:16:09",
    "18.03.1938 12:16:22",
    "18.03.1937 12:16:18",
    "18.03.1936 12:16:14",
    "19.03.1935 12:16:09",
    "18.03.1934 12:16:23",
    "18.03.1933 12:16:19",
    "18.03.1932 12:16:14",
    "19.03.1931 12:16:10",
    "18.03.1930 12:16:24",
    "18.03.1929 12:16:19",
    "18.03.1928 12:16:15",
    "19.03.1927 12:16:11",
    "18.03.1926 12:16:24",
    "18.03.1925 12:16:20",
    "18.03.1924 12:16:16",
    "19.03.1923 12:16:12",
    "18.03.1922 12:16:25",
    "18.03.1921 12:16:21",
    "18.03.1920 12:16:17",
    "19.03.1919 12:16:12",
    "18.03.1918 12:16:26",
    "18.03.1917 12:16:21",
    "18.03.1916 12:16:17",
    "19.03.1915 12:16:13",
    "18.03.1914 12:16:26",
    "18.03.1913 12:16:22",
    "18.03.1912 12:16:18",
    "19.03.1911 12:16:14",
    "19.03.1910 12:16:09",
    "18.03.1909 12:16:23",
    "18.03.1908 12:16:19",
    "19.03.1907 12:16:14",
    "19.03.1906 12:16:10",
    "18.03.1905 12:16:24",
    "18.03.1904 12:16:19",
    "19.03.1903 12:16:15",
    "19.03.1902 12:16:11",
    "18.03.1901 12:16:24",
    "18.03.1900 12:16:20",
];
old_times.reverse();
// new times and old times together 
var RESET_TIMES = [
    ...old_times, ...new_times
]

function string_to_date(s) {
    var parts = s.split(" ");
    var date = parts[0].split(".");
    var time = parts[1].split(":");
    return new Date(date[2], date[1] - 1, date[0], time[0], time[1], time[2]);
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

function wald_seconds_to_years_mod(seconds) {
    return parseInt(seconds / (33 * 33 * 33 * 33 * 11) % 33) + 1;
}



function secs_from_date(d) {
    return d.getTime() / 1000;
}

function get_current_year(greg_seconds) {
    for (var i = 1; i < RESET_TIMES.length; i++) {
        var d = string_to_date(RESET_TIMES[i]);
        if (d.getTime() / 1000 >= greg_seconds) {
            return ((i-124))
        }
    }
    return 1;
}

function get_current_year_mod(greg_seconds) {
    for (var i = 1; i < RESET_TIMES.length; i++) {
        var d = string_to_date(RESET_TIMES[i]);
        if (d.getTime() / 1000 >= greg_seconds) {
            return ((i-126 + 33 * 100) % 33) + 1 
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