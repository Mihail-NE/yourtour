document.addEventListener("DOMContentLoaded", () => {
    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");
    const link4 = document.getElementById("link4");
    const header = document.getElementById("header");
    const form = document.querySelector(".form__wrap");
    const select = document.getElementById("directionSelect");
    const resetButton = document.querySelector(".form__button-reset");


    document.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
        });
    });


    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (form.checkValidity()) {
            console.log("Форма отправлена");
        }
    });


    resetButton.addEventListener("click", function (e) {
        e.preventDefault();
        form.reset();
        indicator.style.transform = "rotate(0deg)";
    });


    function scrollToElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    function addClickListener(link, selector) {
        if (link) {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                scrollToElement(selector);
            });
        }
    }

    addClickListener(link1, ".category");
    addClickListener(link2, ".form");
    addClickListener(link3, ".comments");
    addClickListener(link4, ".story");


    if (header) {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 450) {
                header.classList.add("scroll");
            } else {
                header.classList.remove("scroll");
            }
        });
    }

    const indicator = select.nextElementSibling;
    let isOpen = false;

    function toggleIndicator() {
        indicator.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";

    }

    select.addEventListener("focus", function () {
        isOpen = true;
        toggleIndicator();
    });

    select.addEventListener("blur", function () {
        isOpen = false;
        toggleIndicator();
    });

    select.addEventListener("change", function () {
        isOpen = false;
        toggleIndicator();
    });

    select.addEventListener("touchstart", function () {
        isOpen = !isOpen;
        toggleIndicator();
    });


    select.addEventListener('change', () => {
        const value = select.value;

        if (value === 'none') {
            select.classList.add('form__select-placeholder');
        } else {
            select.classList.remove('form__select-placeholder');
        }
    });


});
