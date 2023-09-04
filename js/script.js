function validateForm() {
    var name = document.getElementById("name");
    var razaSelect = document.getElementById("raza");
    var claseSelect = document.getElementById("clase");
    var inputpr = document.getElementById("pr");

    if (name.value === "") {
        name.classList.add("is-invalid");
        return false;
    }
    if (razaSelect.value === "") {
        razaSelect.classList.add("is-invalid");
        return false;
    }
    if (claseSelect.value === "") {
        claseSelect.classList.add("is-invalid");
        return false;
    }
    if (inputpr.value === "") {
        inputpr.classList.add("is-invalid");
        return false;
    }

    var alertaInput = document.getElementById("alerta");
    var valorAlerta = parseInt(alertaInput.value);
    //console.log(valorAlerta);

    var comunicacionInput = document.getElementById("comunicacion");
    var valorComunicacion = parseInt(comunicacionInput.value);
    //console.log(valorComunicacion);

    var manipulacionInput = document.getElementById("manipulacion");
    var valorManipulacion = parseInt(manipulacionInput.value);
    //console.log(valorManipulacion);

    var erudicionInput = document.getElementById("erudicion");
    var valorErudicion = parseInt(erudicionInput.value);
    //console.log(valorErudicion);

    var subterfugioInput = document.getElementById("subterfugio");
    var valorSubterfugio = parseInt(subterfugioInput.value);
    //console.log(valorSubterfugio);

    var supervivenciaInput = document.getElementById("supervivencia");
    var valorSupervivencia = parseInt(supervivenciaInput.value);
    //console.log(valorSupervivencia);

    var totalActual = valorAlerta + valorComunicacion + valorManipulacion + valorErudicion + valorSubterfugio + valorSupervivencia;
    var puntosTotales = parseInt(document.getElementById("puntosTotales").value);
    if (totalActual > puntosTotales) {
        return false;
    }

    return true; // Enviar el formulario si no hay errores
}

document.getElementById("name").addEventListener("change", mostrarTextoInformativo);

function setRandomName() {
    // Array de nombres
    var nombres = [
        "Thorian",
        "Alaric",
        "Finnian",
        "Darian",
        "Leofric",
        "Eadric",
        "Baelor",
        "Galahad",
        "Eldric",
        "Torin",
        "Malachi",
        "Eamon",
        "Kaelan",
        "Rhys",
        "Gavriel",
        "Perrin",
        "Brynjar",
        "Torvald",
        "Cedwyn",
        "Lorcan",
    ];

    // Obtener un nombre aleatorio del array
    var nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];

    // Establecer el nombre en el campo de entrada
    document.getElementById("name").value = nombreAleatorio;
}

document.getElementById("raza").addEventListener("change", mostrarTextoInformativo);

function mostrarTextoInformativo() {
    var select = document.getElementById("raza");
    var textoInformativo = document.getElementById("textoInformativo");
    var talento1 = document.getElementById("talento1");
    var talento2 = document.getElementById("talento2");
    var talento1Descripcion = document.getElementById("talento1Descripcion");
    var talento2Descripcion = document.getElementById("talento2Descripcion");

    var MovimientoHabilidades = document.getElementById("MovimientoHabilidades");

    switch (select.value) {
        case "elfo":
            textoInformativo.textContent = "Los elfos son humanoides mágicos conocidos por su gracia, longevidad y afinidad por la naturaleza. Suelen ser altos, delgados y tienen orejas puntiagudas. En D&D, hay diferentes subrazas de elfos, como los elfos de los bosques, los elfos oscuros y los elfos de alto rango, cada uno con sus propias características únicas.";
            talento1.value = "Vista Aguda ";
            talento1Descripcion.textContent = "Tienes ventaja en las pruebas de Alerta basadas en la vista.";
            talento2.value = "Infravisión ";
            talento2Descripcion.textContent = "Ves en la oscuridad hasta 20 metros. La visión se basa en el calor desprendido por los objetos.";
            MovimientoHabilidades.value = 12;
            break;
        case "enano":
            textoInformativo.textContent = "Los enanos son una raza resistente y robusta, conocida por su habilidad en la minería y la herrería. Son más bajos que los humanos, pero fuertes y resistentes. Tienen una gran afinidad por las montañas y las profundidades de la tierra.      ";
            talento1.value = "Afín a la Piedra";
            talento1Descripcion.textContent = "Tienes ventaja en cualquier prueba de Erudición relacionada con el trabajo sobre piedra. También puedes hacer una prueba de Alerta para detectar trampas hechas sobre roca.";
            talento2.value = "Infravisión ";
            talento2Descripcion.textContent = "Ves en la oscuridad hasta 20 metros. La visión se basa en el calor desprendido por los objetos.";
            MovimientoHabilidades.value = 9;
            break;
        case "mediano":
            textoInformativo.textContent = "Los medianos, también conocidos como hobbits, son una raza pequeña y amigable, famosa por su amor por la comida y la comodidad. Son expertos en la evasión y la ocultación y a menudo prefieren una vida pacífica en el campo.";
            talento1.value = "Escurridizo ";
            talento1Descripcion.textContent = "Tienes ventaja en las pruebas de Subterfugio relacionadas con moverse en silencio.";
            talento2.value = "Certero ";
            talento2Descripcion.textContent = "Tienes un bono adicional de +1 en todos los ataques de proyectiles.";
            MovimientoHabilidades.value = 9;
            break;
        case "humano":
            textoInformativo.textContent = "Los humanos son una de las razas más versátiles y comunes en D&D. No tienen características raciales especiales distintivas, pero son adaptables y pueden ser cualquier clase o profesión. Su diversidad los hace adecuados para una variedad de roles en el juego.";
            talento1.value = "Ímpetu Emprendedor ";
            talento1Descripcion.textContent = "Vives la vida con intensidad. Ganas un trasfondo adicional.";
            talento2.value = "Adaptable ";
            talento2Descripcion.textContent = "De alguna forma tienes facilidad para adaptarte a cualquier ambiente y entorno. Ganas un modificador adicional de +1 a tu rasgo de Instintos.";
            MovimientoHabilidades.value = 12;
            break;
        default:
            textoInformativo.textContent = "";
            break;
    }
}

document.getElementById("clase").addEventListener("change", mostrarTextoInformativoclase);

function mostrarTextoInformativoclase() {
    var select = document.getElementById("clase");
    var textoInformativo = document.getElementById("textoInformativoclase");
    var talento3 = document.getElementById("talento3");
    var talento4 = document.getElementById("talento4");
    var talento3Descripcion = document.getElementById("talento3Descripcion");
    var talento4Descripcion = document.getElementById("talento4Descripcion");

    var PVHabilidades = document.getElementById("PVHabilidades");
    var ConstitucionModificador = document.getElementById("ConstitucionModificador");

    var InstintoHabilidades = document.getElementById("InstintoHabilidades");

    var PoderHabilidades = document.getElementById("PoderHabilidades");
    var InteligenciaModificador = document.getElementById("InteligenciaModificador");

    switch (select.value) {
        case "guerrero":
            textoInformativo.textContent = "Los guerreros son maestros en el combate cuerpo a cuerpo y el uso de armas y armaduras. Son fuertes y resistentes, capaces de enfrentar a enemigos poderosos y proteger a sus aliados. Pueden especializarse en diferentes estilos de combate, como el combate con dos armas o el uso de armas a distancia.";
            talento3.value = "Lucha con X";
            talento3Descripcion.textContent = "Sustituye X por: arma de mano y escudo o dos armas de mano o armas a dos manos o armas de proyectiles. Peleando de esa forma ganas +1 al ataque y al daño.";
            talento4.value = "Ataques Múltiples";
            talento4Descripcion.textContent = "Al abatir a un enemigo puedes realizar inmediatamente otro ataque. De esta forma puedes encadenar tantos ataques EXTRA como nivel tengas. ";
            PVHabilidades.value = 8 + parseInt(ConstitucionModificador.value);
            InstintoHabilidades.value = 1;
            PoderHabilidades.value = 0;
            break;
        case "hechicero":
            textoInformativo.textContent = "Los hechiceros son lanzadores de conjuros que obtienen su magia a través del estudio y la práctica. Son conocidos por su versatilidad mágica y pueden lanzar una amplia variedad de hechizos, desde fuego y rayos hasta encantamientos y transformaciones.";
            talento3.value = "Sensibilidad Mágica";
            talento3Descripcion.textContent = "Puedes gastar puntos de poder (Pod) para realizar conjuros.";
            talento4.value = "Transferir Esencia";
            talento4Descripcion.textContent = "Puedes convertir 3 puntos de vida en un punto de poder (Pod).";
            PVHabilidades.value = 4 + parseInt(ConstitucionModificador.value);
            InstintoHabilidades.value = 0;
            PoderHabilidades.value = 1 + parseInt(InteligenciaModificador.value);
            break;
        case "bribon":
            textoInformativo.textContent = "Los bribones, también conocidos como pícaros, son expertos en el sigilo, el engaño y el sigilo. Son hábiles en el robo, el desarme de trampas y el combate furtivo. Pueden ser mortales en combate cuando atacan desde las sombras o evitan el enfrentamiento directo.";
            talento3.value = "Emboscar";
            talento3Descripcion.textContent = "Tienes ventaja en las pruebas de Subterfugio basadas en moverse en silencio y en ocultarse en las sombras. Añade 1d6 al daño cuando ataques a un blanco desprevenido.";
            talento4.value = "Dedos Ágiles";
            talento4Descripcion.textContent = "Tienes ventaja en las pruebas de Manipulación que requieran precisión (por ejemplo abrir cerraduras o sustraer las posesiones de otra persona).";
            PVHabilidades.value = 6 + parseInt(ConstitucionModificador.value);
            InstintoHabilidades.value = 0;
            PoderHabilidades.value = 0;
            break;
        default:
            textoInformativo.textContent = "";
            break;
    }
}

function sumarNivel() {
    var nivelInput = document.getElementById("nivel");
    nivelInput.value = parseInt(nivelInput.value) + 1;

    var puntosTotales = document.getElementById("puntosTotales");
    puntosTotales.value = parseInt(puntosTotales.value) + 2;
}

function restarNivel() {
    var nivelInput = document.getElementById("nivel");
    var valorActual = parseInt(nivelInput.value);

    if (valorActual > 1) {
        nivelInput.value = valorActual - 1;
        var puntosTotales = document.getElementById("puntosTotales");
        puntosTotales.value = parseInt(puntosTotales.value) - 2;
    }
}

function disminuirValor(inputId) {
    var input = document.getElementById(inputId);
    var valor = parseInt(input.value);

    if (valor > 0) {
        input.value = valor - 1;
    }
}

function aumentarValor(inputId) {

    var alertaInput = document.getElementById("alerta");
    var valorAlerta = parseInt(alertaInput.value);
    //console.log(valorAlerta);

    var comunicacionInput = document.getElementById("comunicacion");
    var valorComunicacion = parseInt(comunicacionInput.value);
    //console.log(valorComunicacion);

    var manipulacionInput = document.getElementById("manipulacion");
    var valorManipulacion = parseInt(manipulacionInput.value);
    //console.log(valorManipulacion);

    var erudicionInput = document.getElementById("erudicion");
    var valorErudicion = parseInt(erudicionInput.value);
    //console.log(valorErudicion);

    var subterfugioInput = document.getElementById("subterfugio");
    var valorSubterfugio = parseInt(subterfugioInput.value);
    //console.log(valorSubterfugio);

    var supervivenciaInput = document.getElementById("supervivencia");
    var valorSupervivencia = parseInt(supervivenciaInput.value);
    //console.log(valorSupervivencia);

    var totalActual = valorAlerta + valorComunicacion + valorManipulacion + valorErudicion + valorSubterfugio + valorSupervivencia;

    var HabilidadesAlerta = document.getElementById("HabilidadesAlerta");

    var input = document.getElementById(inputId);
    var valor = parseInt(input.value);
    var puntosTotales = parseInt(document.getElementById("puntosTotales").value);

    if (totalActual < puntosTotales) {
        input.value = valor + 1;
        HabilidadesAlerta.textContent = "";
    } else {
        HabilidadesAlerta.textContent = "No puedes superar el valor de Puntos Totales.";
    }

}


function generarValores(inputId) {
    // Generar números aleatorios entre 1 y 6 para cada dado
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    var dado3 = Math.floor(Math.random() * 6) + 1;

    // Calcular la suma de los tres dados
    var sumaDados = dado1 + dado2 + dado3;

    // Calcular el modificador según las reglas
    var modificador = "0";
    if (sumaDados === 3) {
        modificador = "-2";
    } else if (sumaDados >= 4 && sumaDados <= 6) {
        modificador = "-1";
    } else if (sumaDados >= 7 && sumaDados <= 14) {
        modificador = "0";
    } else if (sumaDados >= 15 && sumaDados <= 17) {
        modificador = "+1";
    } else if (sumaDados === 18) {
        modificador = "+2";
    }

    // Mostrar los resultados en los inputs
    document.getElementById(inputId + "Resultado").value = sumaDados;
    document.getElementById(inputId + "Modificador").value = modificador;
    document.getElementById(inputId + "Descripcion").textContent = "Los valores de los 3d6 son: " + dado1 + ", " + dado2 + ", " + dado3;

    var PVHabilidades = document.getElementById("PVHabilidades");
    var ConstitucionModificador = document.getElementById("ConstitucionModificador");
    var select = document.getElementById("clase");
    switch (select.value) {
        case "guerrero":
            PVHabilidades.value = 8 + parseInt(ConstitucionModificador.value);
            break;
        case "hechicero":
            PVHabilidades.value = 4 + parseInt(ConstitucionModificador.value);
            break;
        case "bribon":
            PVHabilidades.value = 6 + parseInt(ConstitucionModificador.value);
            break;
    }

    var DefensaHabilidades = document.getElementById("DefensaHabilidades");
    var DestrezaModificador = document.getElementById("DestrezaModificador");
    if (DestrezaModificador.value != 0) {
        DefensaHabilidades.value = 10 + parseInt(DestrezaModificador.value);
    } else {
        DefensaHabilidades.value = 10;
    }

    var PoderHabilidades = document.getElementById("PoderHabilidades");
    var InteligenciaModificador = document.getElementById("InteligenciaModificador");
    if (select.value === "hechicero") {
        if (InteligenciaModificador.value != 0) {
            PoderHabilidades.value = parseInt(PoderHabilidades.value) + parseInt(InteligenciaModificador.value);
        } else {
            console.log("=0");
            PoderHabilidades.value = 1;
        }
    }

}