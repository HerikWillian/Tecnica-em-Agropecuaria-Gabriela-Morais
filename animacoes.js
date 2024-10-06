document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target.style.animationDelay = `${index * 0.1}s`; // Atraso baseado no índice
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targets = document.querySelectorAll(".contact-item, .aspectos");

    targets.forEach(target => {
        observer.observe(target);
    });

    // Remove a função changeBackground e seus eventos
});
