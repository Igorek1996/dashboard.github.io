document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".js-nav__link");
    const activeLink = document.querySelector(".js-nav__link.active").getAttribute("href");
    const content = document.getElementById("content");
    const contentStorage = document.getElementById("content-storage");
    let currentValue = activeLink;


    if (content && contentStorage) {
        content.innerHTML = contentStorage.innerHTML;
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
            currentValue = this.getAttribute("href");

            if (currentValue != "/customers") {
                content.innerHTML = "Default string";
            }
            else {
                content.innerHTML = contentStorage.innerHTML;
            }
        });
    });
});
