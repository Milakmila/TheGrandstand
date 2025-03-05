document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const closeMenuIcon = document.querySelector(".close-menu");
    const menuLinks = document.querySelector(".menu-links");
    const body = document.body;

    // Función para alternar el menú
    function toggleMenu() {
        const isMenuOpen = menuLinks.classList.contains("show");

        if (isMenuOpen) {
            // Ocultar menú con animación
            menuLinks.style.transition = "transform 0.5s ease-in-out";
            menuLinks.style.transform = "translateX(100%)"; // Desplazar a la derecha fuera de la pantalla

            setTimeout(() => {
                menuLinks.style.position = "";
                menuLinks.style.top = "";
                menuLinks.style.left = "";
                menuLinks.style.width = "";
                menuLinks.style.height = "";
                menuLinks.style.zIndex = "";
                menuLinks.style.backgroundColor = "";
                menuLinks.style.overflowY = "";
                menuLinks.style.display = "none";
                menuLinks.style.transform = ""; // Resetear la posición
                menuLinks.style.transition = ""; // Resetear la transición
                menuLinks.classList.remove("show");
                body.style.overflow = ""; // Permitir scroll del fondo
            }, 500);
        } else {
            // Mostrar menú y forzar superposición
            menuLinks.style.position = "fixed";
            menuLinks.style.top = "0";
            menuLinks.style.left = "0";
            menuLinks.style.width = "100%";
            menuLinks.style.height = "100vh";
            menuLinks.style.zIndex = "9999";
            menuLinks.style.backgroundColor = "#000";
            menuLinks.style.overflowY = "auto";
            menuLinks.style.display = "flex";
            menuLinks.style.flexDirection = "column";
            menuLinks.style.gap = "15px";
            menuLinks.style.padding = "20px";
            menuLinks.style.transform = "translateX(100%)"; // Posición inicial fuera de la pantalla

            // Forzar reflujo para que la animación se active
            void menuLinks.offsetWidth;

            // Mostrar menú
            menuLinks.style.transition = "transform 0.5s ease-in-out";
            menuLinks.style.transform = "translateX(0)";
            menuLinks.classList.add("show");
            body.style.overflow = "hidden"; // Evitar scroll del fondo
        }
    }

    menuIcon.addEventListener("click", toggleMenu);
    closeMenuIcon.addEventListener("click", toggleMenu); // Cerrar el menú
});
