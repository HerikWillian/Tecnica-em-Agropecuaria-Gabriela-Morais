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

    const changeBackground = (event) => {
        const colors = ['#ffcccb', '#add8e6', '#90ee90', '#f0e68c', '#ffb6c1'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        event.currentTarget.style.backgroundColor = randomColor;
    };

    const showMessage = (event) => {
        event.preventDefault();
        alert('Você clicou em: ' + event.currentTarget.innerText);
    };

    targets.forEach(item => {
        item.addEventListener('click', changeBackground);
        item.addEventListener('click', showMessage);
    });
});
