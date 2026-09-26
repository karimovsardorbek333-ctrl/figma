function toggleMenu() {
    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.right = "7%";
        nav.style.top = "75px";
        nav.style.background = "#f7f7f2";
        nav.style.padding = "20px";
        nav.style.zIndex = "100";
    }
}


// Simple reveal animation

const elements = document.querySelectorAll(
    ".hero-content, .hero-image, .card, .project, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});