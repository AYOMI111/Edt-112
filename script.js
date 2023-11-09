ocument.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    // Smooth scrolling for navigation links
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = link.getAttribute("href").substr(1); // Remove the '#' character
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Highlight the active section in the navigation menu while scrolling
    window.addEventListener("scroll", function() {
        let currentSection = "";

        // Determine the active section by scrolling position
        for (const section of document.querySelectorAll("section")) {
            const sectionTop = section.offsetTop - 50; // Offset for better alignment
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        }

        // Add the 'active' class to the corresponding navigation link
        navLinks.forEach(function(link) {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});