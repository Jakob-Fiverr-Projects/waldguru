

function get_day_str(day, year) {
    if (year == 2) {
        if (day == 1) {
            return "der Akzeptanz";
        } else {
            return "der Göttliche Heiligkeit";
        }
    }
    switch (day) {
        case 1:
            return "der Glückseligkeit";
        case 2:
            return "des Tiefen Friedens";
        case 3:
            return "der Liebe und Reinheit";
        case 4:
            return "der Klarheit";
        case 5:
            return "der Heilung";
        case 6:
            return "der Hingabe an das Leben";
        case 7:
            return "des Inneren Friedens";
        case 8:
            return "der Einfachheit";
        case 9:
            return "der Stille";
        case 10:
            return "der Achtsamkeit";
        case 11:
            return "der Göttlichen Ordnung";
        case 12:
            return "der Liebe zu allen Mitgeschöpfen";
        case 13:
            return "der Hingabe zur Aufgabe";
        case 14:
            return "des Seelen Friedens";
        case 15:
            return "des Inneren Lichts";
        case 16:
            return "des lichtvollen Manifestierens";
        case 17:
            return "des Einheitsbewusstseins";
        case 18:
            return "der Gemeinschaftsglück";
        case 19:
            return "der Multidimensionalität";
        case 20:
            return "der Hingabe an die Liebe";
        case 21:
            return "der Flow-Erhaltung";
        case 22:
            return "der Hingabe an das Göttliche";
        case 23:
            return "des Familienglücks";
        case 24:
            return "der Liebe zur Gemeinschaft";
        case 25:
            return "der Entscheidung";
        case 26:
            return "der Harmonie mit allen Wesen";
        case 27:
            return "des Ahnenglücks";
        case 28:
            return "der Weisheit";
        case 29:
            return "des Wahren Selbst";
        case 30:
            return "der Heiligkeit";
        case 31:
            return "der Göttliche Universalität";
        case 32:
            return "des Allumfassenden Frieden";
        case 33:
            return "der Allverbundenheit";
    }
}


function get_month_str(month, year) {
    if (year == 2) {
        return "Countdown"
    }
    switch (month) {
        case 1:
            return "des Erwachens";
        case 2:
            return "der Vorbereitung";
        case 3:
            return "des Erblühens";
        case 4:
            return "des Wachstums";
        case 5:
            return "der Reife";
        case 6:
            return "der Ernte";
        case 7:
            return "des Abschluss";
        case 8:
            return "der Einkehr";
        case 9:
            return "des Friedens";
        case 10:
            return "der Konzentration";
        case 11:
            return "der Wiedergeburt";
    }
}


function get_week_str(week, year) {
    if (year == 2) {
        return "bis Neujahr"
    }
    switch (week) {
        case 1:
            return "der Barmherzigkeit";
        case 2:
            return "der Liebe";
        case 3:
            return "des Friedens";
        case 4:
            return "der Heilung";
        case 5:
            return "der Verbundenheit";
        case 6:
            return "des Staunens";
        case 7:
            return "des Lachens";
        case 8:
            return "der Weisheit";
        case 9:
            return "des Glücks";
        case 10:
            return "der Einheit";
        case 11:
            return "der Meisterschaft";
        case 12:
            return "der Großzügigkeit";
        case 13:
            return "des Wohlwollens";
        case 14:
            return "des Genusses";
        case 15:
            return "des Feierns";
        case 16:
            return "der Wunder";
        case 17:
            return "der Dankbarkeit";
        case 18:
            return "des Vertrauens";
        case 19:
            return "des Überblicks";
        case 20:
            return "der Konzentration";
        case 21:
            return "des Loslassens";
        case 22:
            return "des Tiefen Empfindens";
        case 23:
            return "der Geborgenheit";
        case 24:
            return "des Zuhause";
        case 25:
            return "der Vorfreude";
        case 26:
            return "der Heiligkeit";
        case 27:
            return "der Segnung";
        case 28:
            return "der Gnade";
        case 29:
            return "der Gegenwart";
        case 30:
            return "des Inneren Lichts";
        case 31:
            return "des Dienens";
        case 32:
            return "der Selbstüberwindung";
        case 33:
            return "der Vollendung";
    }
}