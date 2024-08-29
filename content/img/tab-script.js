document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabLinks.forEach(link => {
        link.addEventListener("click", function() {
            const tabId = this.getAttribute("data-tab");

            tabLinks.forEach(link => link.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(tabId).classList.add("active");
        });
    });
});
