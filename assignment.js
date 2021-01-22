// https://github.com/UpekkaChakma/ThirdAssignment


function kilometerToMeter(number){
    if (number < 0)
        return "ERROR 404! Real world distance cannot be negative.Please input positive integer";
    else
        return number * 1000;
}

function budgetCalculator(numOfWatch, numOfMobile, numOfLaptop){
    while((numOfWatch < 0) || (numOfMobile < 0) || (numOfLaptop < 0)){
        return "ERROR 404! Please be smart, don't input negative integer or characters";
    }
    while((numOfWatch >= 0) && (numOfMobile >= 0) && (numOfLaptop >= 0)){
        var a = Math.round(numOfWatch);
        var b = Math.round(numOfMobile);
        var c = Math.round(numOfLaptop);
        var totalBudgetNeeded = a * 50 + b * 100 + c * 500;
        return totalBudgetNeeded;
    }    
}

function hotelCost(yourDaysInHotel) {
    var totalCost = 0;
    var daysSpent = Math.ceil(yourDaysInHotel);
    while (true) {
        if (daysSpent <=0) {
            return "You didn't spend a single day in the hotel";
        } else if ( daysSpent <=10 ) {
            totalCost = daysSpent * 100;
        } else if (daysSpent > 10 && daysSpent <= 20) {
            var firstTenDaysCost = 10 * 100;
            var remainingDays = daysSpent - 10;
            var remainingDaysCost = remainingDays * 80;
            totalCost = firstTenDaysCost + remainingDaysCost;
        } else {
            var twentyDaysCost = 10 * 100 + 80 * 10;
            var remainingDays = daysSpent - 20;
            totalCost = twentyDaysCost + remainingDays * 50;
        }
        return totalCost;  
    } 
}

function megaFriend(array) {
    var longest = array[0];
    if (array.length == 0 || array == "")
        return "Please input your friends name,thank you"
    for (var i = 1; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
}
