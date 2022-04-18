$(document).ready(function() {

    let descriptionAnimation = 0;
    let buttonAnimation = 0;
    var index = 0;
    var description = $(".description-container-hidden");
    var buttonLeft = $(".left-button");
    var buttonRight = $(".right-button");
    var title = $(".title-container");
    var mouse = $(".mouse-scroll");
    var body = $("#main-body");
    var learnPage = $("#learn-page");
    var menu = $(".menu");
    var menuButton = $(".menu-icon");
    var exitButton = $(".menu-exit-button");
    var homeButton = $("#home-button");
    var learnButton = $("#learn-button");
    var animationButton = $("#animation-button");


    function loadPages(type) {
        let file;
        switch (type) {
            default: file = "index.html";
            break;
            case 1:
                    file = "learn.html";
                break;
        }

        $.get(file, (response) => {
            let newDoc = document.open("text/html", "replace");
            newDoc.write(response);
            newDoc.close();
        });
    }

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
            () => {
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
                // loadPages(1);
            }, 200);
        index = 1;
    });

    buttonLeft.click(() => {
        // body.addClass("main-body-left");

        // setTimeout(
        //     function() {
        //         window.location.href = "learn_page/index.html";
        //     }, 500);
    });

    function closeMenu() {
        menu.removeClass("menu-appear");
        menu.addClass("menu-hide");
        menuButton.removeClass("menu-icon-hide");
        menuButton.addClass("menu-icon-appear");
    }


    exitButton.click(() => closeMenu());

    menuButton.click(function openMenu() {
        menu.addClass("menu-appear");
        menuButton.removeClass("menu-icon-appear");
        menuButton.addClass("menu-icon-hide");
    });

    homeButton.click(() => {
        closeMenu();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        switch (index) {
            case 0:

                break;
            case 1:
                setTimeout(
                    function() {
                        learnPage.addClass('learn-page-hide');
                        body.removeClass('display-none');
                        // loadPages(1);
                    }, 200);

                body.addClass('main-body-in');

                index = 0;
                break;
        }
    });

});