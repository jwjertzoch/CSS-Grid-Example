$(document).ready(function () {
    $('#trigger').click(function () {
        $('#overlay').fadeIn(300);
    });
    $('#close').click(function () {
        $('#overlay').fadeOut(300);
    });
});

var pastries = document.getElementById('pastries');

// this handler will be executed every time the cursor is moved over a different list item
pastries.addEventListener("mouseover", function (event) {
    var dataTarget = event.target.getAttribute('data-target')
    textInfo.querySelector('[data-index="' + dataTarget + '"]').style.display = 'block';

}, false);
//for mouseleave, we need to iterate each `#pastries` child element
var pastriesChildren = document.querySelectorAll('#pastries>.box.item');
pastriesChildren.forEach(function (pastry) {
    pastry.addEventListener("mouseleave", function (event) {
        var dataTarget = event.target.getAttribute('data-target')
        textInfo.querySelector('[data-index="' + dataTarget + '"]').style.display = 'none';

    }, false);
})