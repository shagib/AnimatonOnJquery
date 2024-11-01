// For revealing elements on scroll and load 
const sections = document.querySelectorAll("section");

sections.forEach((section) => {

    //Add active class to all sections all the page accroding to the position of the page scrolled so far on page load and scroll
    window.addEventListener("load", eventListener);
    window.addEventListener("scroll", eventListener);

    function eventListener() {
        let windowHeight = window.innerHeight;
        let sectionReactTop = section.getBoundingClientRect().top;

        // console.log("windowHeight=" + windowHeight);
        // console.log("sectionReactTop=" + sectionReactTop);


        if (sectionReactTop < windowHeight) {
            section.classList.add("active");
        }

    }

    // Revealing elements one by one on scroll
    window.addEventListener("scroll", () => {
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            if (section.classList.contains("active")) {
                const delay = 600;

                setTimeout(() => {
                    reveal.classList.add("active");
                }, index * delay);
            }
        });
    });

    // Revealing elements one by one on load (page reload)
    window.addEventListener("load", () => {
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            let windowHeight = window.innerHeight;
            let revealReactTop = reveal.getBoundingClientRect().top;

            if (revealReactTop < windowHeight) {
                const delay = 600;

                setTimeout(() => {
                    reveal.classList.add("active");
                }, index * delay);
            }
        });
    });

    // Revealing elements one by one scroll according to a revealing point
    window.addEventListener("load", () => {
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            let windowHeight = window.innerHeight;
            let revealReactTop = reveal.getBoundingClientRect().top;
            let revealPoint = -250;

            if (revealReactTop < windowHeight - revealPoint) {
                const delay = 600;

                setTimeout(() => {
                    reveal.classList.add("active");
                }, index * delay);
            }
        });
    });



});