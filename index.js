$(document).ready(async() => {

    class ListNode {
        constructor(data) {
            this.data = data
            this.next = null
        }
    }

    class LinkedList {
        constructor(head = null) {
            this.head = head
        }

        size() {
            let count = 0;
            let node = this.head;
            while (node) {
                count++;
                node = node.next
            }
            return count;
        }

        clear() {
            this.head = null;
        }

        getLast() {
            let lastNode = this.head;
            if (lastNode) {
                while (lastNode.next) {
                    lastNode = lastNode.next
                }
            }
            return lastNode
        }

        getFirst() {
            return this.head;
        }
    }

    await loadData("pages/main_page.html");
    loadAllData();

    let descriptionAnimation = 0;
    let buttonAnimation = 0;
    var index = 0;
    var title = $(".title-container");
    var body = $("#main-body");
    var learnPage = $("#learn_page");
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
    var learnContainer;
    $(document).click(function(event) {
        var $target = $(event.target);
        if ((!$target.closest('.menu').length && !$target.closest('.menu-icon').length) || ($target.closest('.menu-button').length)) {
            closeMenu();
        }
    });

    function testLinkedList() {
        let node1 = new ListNode(2)
        let node2 = new ListNode(5)
        node1.next = node2

        let list = new LinkedList(node1)

        console.log(list.head.next.data)

        console.log(list.getFirst())
        console.log(list.getLast())
        console.log(list.size())
        list.clear()
        console.log(list.size())
    }

    function initLearnPage() {
        learnContainer = $(".learn-container");
        var clicked = false;
        var linkedListInfoButton = $("#linked-list-info-button");
        var linkedListAnimatiobButton = $("#linked-list-animation-button");

        linkedListInfoButton.click(() => {

            if (!clicked) {
                $.get("lists/linked-list/linked_list.html", function(data) {
                    $("#linked-desc").append(data);
                });
                downButtonToUp('#linked-list-info-button');
                clicked = !clicked;
            } else {
                $("#linked-desc").empty();
                upButtonToDown('#linked-list-info-button');
                clicked = !clicked;
            }
        });

        linkedListAnimatiobButton.click(() => {
            $('.pop-up').addClass('display-block');
            $('body').addClass('no-scroll');
            $('html').addClass('no-scroll');
            $.get("lists/linked-list/linked_list_basic_animation.html", function(data) {
                $(".pop-up-content").append(data);
            });
        });

        $('.fa-xmark').click(() => {
            $('.pop-up-content').empty();
            $('.pop-up').removeClass('display-block');
            $('body').removeClass('no-scroll');
            $('html').removeClass('no-scroll');
        });

    }



    function downButtonToUp(id) {
        $(id + " i").removeClass("fa-chevron-down");
        $(id + " i").addClass("fa-chevron-up");
        $(id + ' span').text('Less info');
    }

    function upButtonToDown(id) {
        $(id + " i").removeClass("fa-chevron-up");
        $(id + " i").addClass("fa-chevron-down");
        $(id + ' span').text('More info');
    }

    function loadAllData() {
        setTimeout(function() {
            title = $(".title-container");
            body = $("#main-body");
            learnPage = $("#learn_page");
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
                    async() => {
                        clearMainBody();
                        await loadData("pages/learn_page.html");
                        initLearnPage();
                        mainBodyToLeftIn();
                    }, 200);
                index = 1;
            });

            buttonLeft.click(() => {
                index = 2;
                mainBodyToLeftOut();

                setTimeout(
                    async() => {
                        clearMainBody();
                        await loadData("pages/animation_page.html");
                        mainBodyToLeftIn();
                    }, 200);
            });

            if (index == 1) {
                console.log('asd');
            }

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
        return new Promise(resolve => {
            $.get(from, function(data) {
                $("#main-body").append(data);
                resolve('resolved');
            });
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

            if (index == 1) {
                learnContainer.addClass("visible-left");
            }

        } else {
            if (index == 1) {
                learnContainer.removeClass("visible-left");
            }
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

    menuButton.click(function openMenu() {
        menu.addClass("menu-appear");
        menuButton.removeClass("menu-icon-appear");
        menuButton.addClass("menu-icon-hide");
    });

    homeButton.click(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (index != 0) {
            setTimeout(
                () => {
                    setTimeout(async() => {
                        mainBodyDownIn();
                        clearMainBody();
                        await loadData("pages/main_page.html");
                        loadAllData();
                    }, 500);
                }, 500);
            mainBodyDownOut();
            index = 0;
        }
    });

    learnButton.click(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (index != 1) {
            setTimeout(async() => {
                mainBodyDownIn();
                clearMainBody();
                await loadData("pages/learn_page.html");
                // loadAllData();
                initLearnPage();
            }, 500);
            mainBodyDownOut();
            index = 1;
        }
    });

    animationButton.click(() => {
        testLinkedList();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (index != 2) {
            index = 2;
            setTimeout(
                () => {
                    setTimeout(async() => {
                        mainBodyDownIn();
                        clearMainBody();
                        await loadData("pages/animation_page.html");
                        loadAllData();
                    }, 500);
                }, 500);
            mainBodyDownOut();
        }
    });

});