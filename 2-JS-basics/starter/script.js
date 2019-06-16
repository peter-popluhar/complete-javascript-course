//    data:
//    This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
//    rules
//    John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
//
//    Implement a tip calculator using objects and loops:
//    1. Create an object with an array for the bill values
//    2. Add a method to calculate the tip
//    3. This method should include a loop to iterate over all the paid bills and do the tip calculations
//    4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
//
//
//    EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
//    Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
//
//    5. Implement the same functionality as before, this time using Mark's tipping rules
//    6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
//    7. Calculate the average tip for each family
//    8. Log to the console which family paid the highest tips on average

var calcAverage =  function(arr) {
    var sum = 0;
    for(var a = 0; a < arr.length; a++) {
        sum = arr[a] + sum;
    }
    return sum / arr.length;

}

var johnObj = {
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        var tip;
        for(var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var percentage;

            if(bill < 50) {
                percentage = .2;
                tip = .2 * bill;
            } else if (bill >= 50 && bill <= 200) {
                percentage = .15;
                tip = .15 * bill;
            } else if (bill > 200) {
                percentage = .1;
                tip = .10 * bill;
            }

            this.allTips[i] = percentage * bill;
            this.allBills[i] = bill + bill * percentage;
        }
    },
    allTips: [],
    allBills: []
};

var markObj = {
    bills: [77, 0, 110, 45],
    calcTip: function() {
        var tip;
        for(var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var percentage;

            if(bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill <= 300) {
                percentage = .1;
            } else if (bill > 300) {
                percentage = .25;
            }
            this.allTips[i] = percentage * bill;
            this.allBills[i] = bill + bill * percentage;
        }
    },
    allTips: [],
    allBills: []
};

johnObj.calcTip();
markObj.calcTip();

var john = johnObj.allTips;
var mark = markObj.allTips;

var johnAverage = calcAverage(john);
var markAverage = calcAverage(mark);

if(johnAverage > markAverage) {
    console.log('john ', johnAverage)
} else {
    console.log('mark ', markAverage)
}
