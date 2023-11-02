(function() {
    "use strict";
    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 100) {
                document.getElementById("header").classList.add("fixed-top");
                const navLink = document.querySelectorAll(".nav-link");
                navLink.forEach((element) => {
                    element.classList.remove("navLink");
                });
            } else {
                document.getElementById("header").classList.remove("fixed-top");
                const navLink = document.querySelectorAll(".nav-link");
                navLink.forEach((element) => {
                    element.classList.add("navLink");
                });
            }
        });
    });
    var contactForm = function() {
        var $form = $("#contact-form");
        const $formInput = $(".form-control");
        $formInput.on("focus blur", (event) => {
            if ($(event.target).val() === "") {
                if (event.type === "focus") {
                    $(event.target).next(".control-label").addClass("filled");
                } else if (event.type === "blur") {
                    $(event.target).next(".control-label").removeClass("filled");
                }
            }
        });
        $form.submit(function(e) {
            $(".form-group").removeClass("has-error");
            $(".help-block").remove();
            var guestsList = [];
            $(".guest-list input").each(function() {
                guestsList.push(this.value);
            });
            var formData = {
                name: $('input[name="form-name"]').val(),
                email: $('input[name="form-email"]').val(),
                attending: $('.switch-field input[type="radio"]:checked').attr("id"),
                guest: guestsList.join(", "),
            };
            $.ajax({
                type: "POST",
                url: "form.php",
                data: formData,
                dataType: "json",
                encode: true,
            }).done(function(data) {
                if (!data.success) {
                    if (data.errors.name) {
                        $("#name-field").addClass("has-error");
                        $("#name-field").find(".col-sm-6").append('<span class="help-block">' +
                            data.errors.name +
                            "</span>");
                    }
                    if (data.errors.email) {
                        $("#email-field").addClass("has-error");
                        $("#email-field").find(".col-sm-6").append('<span class="help-block">' +
                            data.errors.email +
                            "</span>");
                    }
                } else {
                    $form.html('<div class="message-success">' +
                        data.message +
                        "</div>");
                }
            }).fail(function(data) {});
            e.preventDefault();
        });
    };
    var contentWayPoint = function() {
        var i = 0;
        $(".animate-box").waypoint(function(direction) {
            if (direction === "down" && !$(this.element).hasClass("animated-fast")) {
                i++;
                $(this.element).addClass("item-animate");
                setTimeout(function() {
                    $("body .animate-box.item-animate").each(function(k) {
                        var el = $(this);
                        setTimeout(function() {
                            var effect = el.data("animate-effect");
                            if (effect === "fade-in") {
                                el.addClass("fade-in animated-fast");
                            } else if (effect === "fade-in-left") {
                                el.addClass("fade-in-left animated-fast");
                            } else if (effect === "fade-in-right") {
                                el.addClass("fade-in-right animated-fast");
                            } else {
                                el.addClass("fade-in-up animated-fast");
                            }
                            el.removeClass("item-animate");
                        }, k * 200, "easeInOutExpo");
                    });
                }, 100);
            }
        }, {
            offset: "85%"
        });
    };
    var testimonialCarousel = function() {
        var owl = $(".owl-carousel-fullwidth");
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            smartSpeed: 800,
            autoHeight: true,
        });
    };
    var counter = function() {
        $(".js-counter").countTo({
            formatter: function(value, options) {
                return value.toFixed(options.decimals);
            },
        });
    };
    var counterWayPoint = function() {
        if ($("#counter").length > 0) {
            $("#counter").waypoint(function(direction) {
                if (direction === "down" && !$(this.element).hasClass("animated")) {
                    setTimeout(counter, 400);
                    $(this.element).addClass("animated");
                }
            }, {
                offset: "90%"
            });
        }
    };

    function addGuest() {
        var addBtn = $(".add-button");
        var guestInput = $("#form-guest-name");
        var guestList = $(".guest-list");
        addBtn.on("click", function() {
            event.preventDefault();
            var guestVal = guestInput.val();
            var appendString = '<div><input class="form-control" type="text" value="' +
                guestVal +
                '"/><a href="#" class="remove_field"><i class="fa fa-trash"></i></a></div>';
            if (guestVal == "") {
                guestInput.focus();
            } else {
                guestList.append(appendString);
                guestInput.val("");
            }
        });
        $(".guest-list").on("click", ".remove_field", function(e) {
            e.preventDefault();
            $(this).parent("div").remove();
        });
    }
    var isotope = function() {
        var $container = $(".grid");
        $container.imagesLoaded(function() {
            $container.isotope({
                itemSelector: ".grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid-sizer",
                },
                getSortData: {
                    moments: ".moments",
                    category: "[data-category]",
                    weight: function(itemElem) {
                        var weight = $(itemElem).find(".weight").text();
                        return parseFloat(weight.replace(/[\(\)]/g, ""));
                    },
                },
            });
        });
        var filterFns = {
            numberGreaterThan50: function() {
                var number = $(this).find(".number").text();
                return parseInt(number, 10) > 50;
            },
            ium: function() {
                var name = $(this).find(".name").text();
                return name.match(/ium$/);
            },
        };
        $(".filters-button-group").on("click", "button", function() {
            var filterValue = $(this).attr("data-filter");
            filterValue = filterFns[filterValue] || filterValue;
            $container.isotope({
                filter: filterValue
            });
        });
        $(".button-group").each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on("click", "button", function() {
                $buttonGroup.find(".is-checked").removeClass("is-checked");
                $(this).addClass("is-checked");
            });
        });
    };
    const closeMenu = document.querySelectorAll(".nav-link");
    closeMenu.forEach((element) => {
        element.addEventListener("click", function() {
            const offcanvasNavbar = document.getElementById("offcanvasNavbar");
            const overlay = document.getElementsByClassName("offcanvas-backdrop fade");
            const body = document.getElementsByTagName("body");
            body[0].classList.add("custom_body");
            if (offcanvasNavbar.classList.contains("show")) {
                offcanvasNavbar.classList.remove("show");
            }
            if (overlay[0].classList.contains("show")) {
                overlay[0].classList.remove("show");
            }
        });
    });
})();