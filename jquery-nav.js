// ensure the document is ready before running whatever the function is
// function is a placeholder here
// $ is used instead of jQuery
$(document).ready(function () {

    // attach to the icon for burger menu
    // on click run the function...

    $('.burgermenu').on('click', function () {
        // ...find the mobile nav and switch this on and toggle it
        // 'toggle' attributes inclue 'slow', 'fast' or time in milliseconds (eg '3000') for showing menu items
        // fadeToggle() fades button in/out
        // slideToggle() slides them in/out
        $('.mobile-nav').toggle();

    })

});
