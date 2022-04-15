$(document).ready(function() {

    let descriptionAnimation = 0;
    let buttonAnimation = 0;
    var description = $(".description-container-hidden");
    var buttonLeft = $(".left-button");
    var buttonRight = $(".right-button");
    var title = $(".title-container");
    var mouse = $(".mouse-scroll");
    var body = $("#main-body");
    var learnPage = $("#learn-page");

    $(window).scroll(function() {
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

    buttonRight.click(() => {
        body.addClass("main-body-right");

        setTimeout(
            function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 100
        );

        setTimeout(
            function() {
                learnPage.addClass("learn-page-reveal");
                body.addClass("display-none");
            }, 200);
    });

    buttonLeft.click(() => {
        body.addClass("main-body-left");

        setTimeout(
            function() {
                window.location.href = "learn_page/index.html";
            }, 500);
    });


});