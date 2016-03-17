"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    var myVariable = "hello";
    console.log("myVariable" + myVariable);
    
    var myArray = [
        "Tyler Downey",
        "25 Rose Street",
        "Barrie",
        "Ontario",
        23,
        true
    ];
    
    myArray.slice(4, 4)
    
    for(var index=0; index < myArray.length; index++) {
        console.log(myArray[index]);
    }
    
    
})();

