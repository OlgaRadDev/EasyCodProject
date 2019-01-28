function showDay(arg) {
    let date = Date.parse(arg);
    let dayNumber = date.getDay();
    console.log(dayNumber);
    let dayName = "";

    switch (dayNumber) {
        case 0:
            dayName += "воскресенье";
            break;
        case 1:
            dayName += "понедельник";
            break;
        case 2:
            dayName += "вторник";
            break;
        case 3:
            dayName += "среда";
            break;
        case 4:
            dayName += "четверг";
            break;
        case 5:
            dayName += "пятница";
            break;
        case 6:
            dayName += "суббота";
            break;
    }
    return dayName;
}

// console.log(showDay("29.03.1985"));
console.log(Date.parse('29.03.1985'))