"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {


    if (document.getElementById("about") != null) {
        console.log("About Page");
    } else if (document.getElementsById("project") != null) {
        console.log("Projects Page");
    } else if (document.getElementById("contact") != null) {
        console.log("Contact Page");
        var checkMeOut;

    checkMeOut = document.getElementById("checkMeOut");

    checkMeOut.addEventListener("click", namedFunc);

    function namedFunc() {
        console.log("checkMeOut clicked");
    }

})();

