const ClickManager = {
    //Debes avanzar del primer video.
    //Abrir la consola de depuración con F12.
    //Pegar todo este codigo en la pestaña consola
    //Presionar <Enter>
    //Escribir ClickManager.start();
    //Presionar <Enter>
    intervalTime: 20000,
    intervalID: null,
    start: function() {
        const clickButton = () => {
            try {
                document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-xl yt-spec-button-shape-next--icon-button")[1].click();
                console.log("Botón clicado.");
            } catch (error) {
                console.error("No se pudo clicar el botón:", error);
            }
        };
        this.intervalID = setInterval(clickButton, this.intervalTime);
        console.log("Ejecución iniciada.");
    },
    stop: function() {
        if (this.intervalID !== null) {
            clearInterval(this.intervalID);
            this.intervalID = null;
            console.log("La ejecución ha sido cancelada.");
        } else {
            console.log("No hay ninguna ejecución en curso para cancelar.");
        }
    }
};
