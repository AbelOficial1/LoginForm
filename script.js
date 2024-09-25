let respuestas = [];

    function respuesta(sectionIndex, radioButton) {
        respuestas[sectionIndex] = radioButton.value;
    }

    function obtenerResultados() {
        const count = { 1: 0, 2: 0, 3: 0 };

            respuestas.forEach(respuesta => {
                if (respuesta) {
                    count[respuesta]++;
                }
            });

        let maxCount = 0;
        let maxOption = null;

        for (let option in count) {
                if (count[option] > maxCount) {
                    maxCount = count[option];
                    maxOption = option;
                }
            }

            // Redirigir a la página de resultados
        if (maxOption) {
                window.location.href = `resultado.html?option=${maxOption}`;
            } else {
                alert("No se eligió ninguna respuesta.");
            }
    }