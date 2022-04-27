$(document).ready(function() {

    loadData("main-page-content.html");
    loadAllData();

    let descriptionAnimation = 0;
    let buttonAnimation = 0;
    var index = 0;
    var title = $(".title-container");
    var body = $("#main-body");
    var learnPage = $("#learn-page");
    var mainContainer = $("#main-container");
    var menu = $(".menu");
    var menuButton = $(".menu-icon");
    var exitButton = $(".menu-exit-button");
    var homeButton = $("#home-button");
    var learnButton = $("#learn-button");
    var animationButton = $("#animation-button");
    var mouse;
    var description;
    var buttonLeft;
    var buttonRight;

    function loadAllData() {
        setTimeout(function() {
            title = $(".title-container");
            body = $("#main-body");
            learnPage = $("#learn-page");
            mainContainer = $("#main-container");
            menu = $(".menu");
            menuButton = $(".menu-icon");
            exitButton = $(".menu-exit-button");
            homeButton = $("#home-button");
            learnButton = $("#learn-button");
            animationButton = $("#animation-button");
            mouse = $(".mouse-scroll");
            description = $(".description-container-hidden");
            buttonLeft = $(".left-button");
            buttonRight = $(".right-button");

            buttonRight.click(() => {

                mainBodyToRightOut();

                setTimeout(
                    function() {
                        clearMainBody();
                        loadData("learn-page.html");
                        mainBodyToLeftIn();
                    }, 200);
                index = 1;
            });

            buttonLeft.click(() => {
                mainBodyToLeftOut();

                setTimeout(
                    function() {
                        clearMainBody();
                        loadData("animation-page.html");
                        mainBodyToLeftIn();
                    }, 200);
                index = 2;
            });


        }, 100);
    }

    function mainBodyDownOut() {
        body.removeClass();
        body.addClass("main-body-down-out");
    }

    function mainBodyDownIn() {
        body.removeClass();
        body.addClass("main-body-down-in");
    }

    function mainBodyToRightOut() {
        body.removeClass("main-body-left-in");
        body.addClass("main-body-right-out");

        setTimeout(
            () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 100
        );
    }

    function mainBodyToLeftOut() {
        body.removeClass("main-body-right-in");
        body.addClass("main-body-left-out");

        setTimeout(
            () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 100
        );
    }

    function mainBodyToRightIn() {
        body.addClass("main-body-right-in");
    }

    function mainBodyToLeftIn() {
        body.removeClass("main-body-left-out");
        body.addClass("main-body-left-in");
    }

    function loadData(from) {

        $.get(from, function(data) {
            body.append(data);
        });
    }

    function clearMainBody() {
        body.empty();
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
        if (index != 0) {
            setTimeout(
                function() {
                    setTimeout(() => {
                        mainBodyDownIn();
                        clearMainBody();
                        loadData("main-page-content.html");
                        loadAllData();
                    }, 500);
                }, 500);
            mainBodyDownOut();
            index = 0;
        }
    });

    homeButton.click(() => {
        closeMenu();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (index != 0) {
            setTimeout(
                function() {
                    setTimeout(() => {
                        mainBodyDownIn();
                        clearMainBody();
                        loadData("main-page-content.html");
                        loadAllData();
                    }, 500);
                }, 500);
            mainBodyDownOut();
            index = 0;
        }
    });

    learnButton.click(() => {
        closeMenu();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (index != 1) {
            setTimeout(
                function() {
                    setTimeout(() => {
                        mainBodyDownIn();
                        clearMainBody();
                        loadData("learn-page.html");
                        loadAllData();
                    }, 500);
                }, 500);
            mainBodyDownOut();
            index = 1;
        }
    });

    animationButton.click(() => {
        closeMenu();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (index != 2) {
            setTimeout(
                function() {
                    setTimeout(() => {
                        mainBodyDownIn();
                        clearMainBody();
                        loadData("animation-page.html");
                        loadAllData();
                    }, 500);
                }, 500);
            mainBodyDownOut();
            index = 2;
        }
    });

});