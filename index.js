document.addEventListener("DOMContentLoaded", () => {
    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");
    const link4 = document.getElementById("link4");
    const header = document.getElementById("header");

    function scrollToElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error(`Element with selector "${selector}" not found`);
        }
    }

    function addClickListener(link, selector) {
        if (link) {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                scrollToElement(selector);
            });
        } else {
            console.error(`Link element not found`);
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
    } else {
        console.error("Header element not found");
    }
});
