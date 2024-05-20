$(function () {
    $(".bg-slider").slick({
        autoplay: false, 
        arrows: false, 
        asNavFor: ".works-slider",
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false,
    });
});

$(function () {
    $(".works-slider").slick({
        autoplay: false, 
        centerMode: true,
        centerPadding: '40px',
        asNavFor: ".bg-slider",
    });
});


function copyBtn(elementId) {

    var element = document.getElementById(elementId);

    navigator.clipboard.writeText(element.textContent)
}
