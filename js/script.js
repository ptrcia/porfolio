document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("portfolio-popup");
    const closeBtn = document.getElementById("close-popup");

    if (popup) {
        // Mostrar el pop-up automáticamente al cargar la página
        popup.classList.add("show");

        // Cerrar al hacer clic en la 'X'
        if (closeBtn) {
            closeBtn.addEventListener("click", function() {
                popup.classList.remove("show");
            });
        }

        // Cerrar también si el usuario hace clic fuera de la caja blanca
        popup.addEventListener("click", function(e) {
            if (e.target === popup) {
                popup.classList.remove("show");
            }
        });
    }
});