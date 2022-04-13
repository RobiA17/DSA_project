$(document).ready(function() {

    let descriptionAnimation = 0;
    let buttonAnimation = 0;

    $(window).scroll(function() {
        var description = $(".description-container-hidden");
        var buttonLeft = $(".left-button");
        var buttonRight = $(".right-button");
        var title = $(".title-container");
        var mouse = $(".mouse-scroll");
        var windowpos = $(window).scrollTop();

        if (windowpos >= 100) {
            descriptionAnimation = 1;
            description.addClass("description-container-revealed");

            title.addClass("title-container-hidden");

        } else {
            if (descriptionAnimation == 1) {
                description.removeClass("description-container-revealed");
                description.addClass("off");
                descriptionAnimation = 0;

                title.removeClass("title-container-hidden");
            }
        }

        if (windowpos >= 170) {
            buttonAnimation = 1;
            buttonLeft.addClass("visible-left");
            buttonRight.addClass("visible-right");

            buttonLeft.removeClass("dissapear-left");
            buttonRight.removeClass("dissapear-right");

            mouse.addClass("mouse-scroll-hidden");
        } else {
            if (buttonAnimation == 1) {
                buttonLeft.removeClass("visible-left");
                buttonRight.removeClass("visible-right");

                buttonLeft.addClass("dissapear-left");
                buttonRight.addClass("dissapear-right");

                mouse.removeClass("mouse-scroll-hidden");
                buttonAnimation = 0;
            }
        }

    });
});