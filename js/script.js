$('.count-num').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function() {
    header.classList.toggle("menu-open");
}