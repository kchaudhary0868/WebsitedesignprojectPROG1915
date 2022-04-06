"use strict";

$(document).ready(() => {
    const navButton = $("#nav-button");
    const navOptions = $(".nav-options")

    navButton.click(() => {
        navOptions.toggle("active");
    });
});