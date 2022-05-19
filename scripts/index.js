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

    // POP UP ANIMATION

    async function initPopUp(animationLocation, animationName) {
        $('.pop-up').addClass('display-block');
        // $('body').addClass('no-scroll');
        $('html').addClass('no-scroll');

        await $.get(animationLocation, function(data) {
            $(".pop-up-content").append(data);
        });
        $(".restart-button").click(() => {
            var el = $(animationName),
                newone = el.clone(true);

            el.before(newone);

            $("." + el.attr("class") + ":last").remove();
        });
    }

    function scrollToLearn(to) {
        window.scrollTo({
            top: $(to).offset().top,
            behavior: 'smooth'
        });
    }

    function initLinkedDropDownInfo() {
        var linkedFirst = $("#linked-desc .linked-first-animation");
        var linkedSecond = $("#linked-desc .linked-second-animation");
        var linkedThird = $("#linked-desc .linked-third-animation");
        var linkedFourth = $("#linked-desc .linked-fourth-animation");

        linkedFirst.click(() => {
            initPopUp("lists/linked-list/insert_a_new_node_animation.html", ".first-animation");
        });

        linkedSecond.click(() => {
            initPopUp("lists/linked-list/insert_a_new_head_animation.html", ".second-animation");
        });

        linkedThird.click(() => {
            initPopUp("lists/linked-list/remove_last_node.html", ".third-animation");
        });

        linkedFourth.click(() => {
            initPopUp("lists/linked-list/remove_head.html", ".fourth-animation");
        });
    }

    function initDoublyLinkedDropDownInfo() {
        var linkedFirst = $("#doubly-linked-desc .linked-first-animation");
        var linkedSecond = $("#doubly-linked-desc .linked-second-animation");
        var linkedThird = $("#doubly-linked-desc .linked-third-animation");
        var linkedFourth = $("#doubly-linked-desc .linked-fourth-animation");

        linkedFirst.click(() => {
            initPopUp("lists/doubly-linked-list/insert_a_new_node_animation.html", ".first-animation");
        });

        linkedSecond.click(() => {
            initPopUp("lists/doubly-linked-list/insert_a_new_head_animation.html", ".second-animation");
        });

        linkedThird.click(() => {
            initPopUp("lists/doubly-linked-list/remove_last_node.html", ".third-animation");
        });

        linkedFourth.click(() => {
            initPopUp("lists/doubly-linked-list/remove_head.html", ".fourth-animation");
        });
    }

    function initCircularLinkedDropDownInfo() {
        var linkedFirst = $("#circular-linked-desc .linked-first-animation");
        var linkedSecond = $("#circular-linked-desc .linked-second-animation");
        var linkedThird = $("#circular-linked-desc .linked-third-animation");
        var linkedFourth = $("#circular-linked-desc .linked-fourth-animation");

        linkedFirst.click(() => {
            initPopUp("lists/circular-linked-list/insert_a_new_node_animation.html", ".first-animation");
        });

        linkedSecond.click(() => {
            initPopUp("lists/circular-linked-list/insert_a_new_head_animation.html", ".second-animation");
        });

        linkedThird.click(() => {
            initPopUp("lists/circular-linked-list/remove_last_node.html", ".third-animation");
        });

        linkedFourth.click(() => {
            initPopUp("lists/circular-linked-list/remove_head.html", ".fourth-animation");
        });
    }

    function initDoublyCircularLinkedDropDownInfo() {
        var linkedFirst = $(".linked-first-animation");
        var linkedSecond = $(".linked-second-animation");
        var linkedThird = $(".linked-third-animation");
        var linkedFourth = $(".linked-fourth-animation");

        linkedFirst.click(() => {
            initPopUp("lists/doubly-circular-linked-list/insert_a_new_node_animation.html", ".first-animation");
        });

        linkedSecond.click(() => {
            initPopUp("lists/doubly-circular-linked-list/insert_a_new_head_animation.html", ".second-animation");
        });

        linkedThird.click(() => {
            initPopUp("lists/doubly-circular-linked-list/remove_last_node.html", ".third-animation");
        });

        linkedFourth.click(() => {
            initPopUp("lists/doubly-circular-linked-list/remove_head.html", ".fourth-animation");
        });
    }

    function initAnimationPage() {

        var listId;
        var counter = 5;
        var rear = true;

        $('#singly-linked').click(async() => {
            counter = 5;
            listId = 1;
            $("#animation-container").empty();
            await $.get("animation-pages/animation-frame.html", function(data) {
                $("#animation-container").append(data);
            });

            scrollToLearn("#animation-container");

            $(".add-button").click(() => {
                if (listId == 1) {
                    if (counter != 0) {
                        $(".counter").text("Capacity: " + --counter);
                        $(".counter").removeClass('shake-animation');
                        if (rear) {
                            if (counter == 4) {
                                $("#for-nodes .NULL").remove();
                                $("#for-nodes").append('<div class="node-with-arrow"  id="' + counter + '"> <div class="head node"> <section class="linked-list-data"> <input type="text"> </section> <div class="divider"></div> <section class="linked-list-next"></section>  </div><i class="fa-solid fa-right-long"></i></div> <div class="NULL">NULL</div>').fadeIn("slow");
                            } else {
                                $("#for-nodes .NULL").remove();
                                $("#for-nodes").append('<div class="node-with-arrow" id="' + counter + '"> <div class="node"> <section class="linked-list-data"> <input type="text"> </section> <div class="divider"></div> <section class="linked-list-next"></section>  </div><i class="fa-solid fa-right-long"></i></div> <div class="NULL">NULL</div>').show();
                            }
                        }
                    } else {
                        $(".counter").addClass('shake-animation');
                    }
                }

            });

            $(".remove-button").click(() => {
                if (listId == 1) {
                    if (rear) {
                        $("#for-nodes #" + counter).remove();
                    }

                    if (counter != 5) {
                        $(".counter").text("Capacity: " + ++counter);
                        $(".counter").removeClass('shake-animation');
                    } else {
                        $(".counter").addClass('shake-animation');
                    }

                }

            });


        });
    }

    function initLearnPage() {
        learnContainer = $(".learn-container");
        var clickedLinked = false;
        var clickedDLinked = false;
        var clickedCLinked = false;
        var clickedDCLinked = false;
        var linkedListInfoButton = $("#linked-list-info-button");
        var doublyLinkedListInfoButton = $("#doubly-linked-list-info-button");
        var circularLinkedListInfoButton = $("#circular-linked-list-info-button");
        var doublyCircularLinkedListInfoButton = $("#circular-doubly-linked-list-info-button");

        linkedListInfoButton.click(async() => {
            if (!clickedLinked) {
                await $.get("lists/linked-list/linked_list.html", function(data) {
                    $("#linked-desc").append(data);
                });
                downButtonToUp('#linked-list-info-button');
                initLinkedDropDownInfo();
                clickedLinked = !clickedLinked;
            } else {
                $("#linked-desc").empty();
                upButtonToDown('#linked-list-info-button');
                clickedLinked = !clickedLinked;
            }
            scrollToLearn('#linked-list-container');
        });

        doublyLinkedListInfoButton.click(async() => {
            if (!clickedDLinked) {
                await $.get("lists/doubly-linked-list/doubly_linked_list.html", function(data) {
                    $("#doubly-linked-desc").append(data);
                });
                downButtonToUp('#doubly-linked-list-info-button');
                initDoublyLinkedDropDownInfo();
                clickedDLinked = !clickedDLinked;
            } else {
                $("#doubly-linked-desc").empty();
                upButtonToDown('#doubly-linked-list-info-button');
                clickedDLinked = !clickedDLinked;
            }
            scrollToLearn('#doubly-linked-list-container');
        });

        circularLinkedListInfoButton.click(async() => {
            if (!clickedCLinked) {
                await $.get("lists/circular-linked-list/circular_linked_list.html", function(data) {
                    $("#circular-linked-desc").append(data);
                });
                downButtonToUp('#circular-linked-list-info-button');
                initCircularLinkedDropDownInfo();
                clickedCLinked = !clickedCLinked;
            } else {
                $("#circular-linked-desc").empty();
                upButtonToDown('#circular-linked-list-info-button');
                clickedCLinked = !clickedCLinked;
            }
            scrollToLearn('#circular-linked-list-container');
        });

        doublyCircularLinkedListInfoButton.click(async() => {
            if (!clickedDCLinked) {
                await $.get("lists/doubly-circular-linked-list/doubly_circular_linked_list.html", function(data) {
                    $("#circular-doubly-linked-desc").append(data);
                });
                downButtonToUp('#circular-doubly-linked-list-info-button');
                initDoublyCircularLinkedDropDownInfo();
                clickedDCLinked = !clickedDCLinked;
            } else {
                $("#circular-doubly-linked-desc").empty();
                upButtonToDown('#circular-doubly-linked-list-info-button');
                clickedDCLinked = !clickedDCLinked;
            }
            scrollToLearn('#circular-doubly-linked-list-container');
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
                        initAnimationPage();
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
                        // loadAllData();
                        initAnimationPage();
                    }, 500);
                }, 500);
            mainBodyDownOut();
        }
    });
});