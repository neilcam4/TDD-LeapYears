function leapYear(year){
    if(year % 100 === 0 && year % 400 !== 0){
        return 'No, This is not a Leap Year'
    }
    return 'Yes, This is a Leap Year'
}