document.addEventListener("DOMContentLoaded", () => {
    //Modo claro-escuro
    const themeToggleBtn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }

    themeToggleBtn.addEventListener("click", () => {
        let theme = document.documentElement.getAttribute("data-theme");

        if (theme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });


    // Validação de campos preenchidos corretamente ou não
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        alert(`Obrigado pelo contato, ${name}! Sua mensagem foi enviada com sucesso.`);
        contactForm.reset();
    });

    const backToTopBtn = document.getElementById("back-to-top");
    const sections = document.querySelectorAll(".section-animate");

    const handleScrollEffects = () => {
        // Desafio Extra: Mostrar/Esconder botão "Voltar ao Topo"
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;


            if (sectionTop < windowHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    };

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", handleScrollEffects);

    handleScrollEffects();
});