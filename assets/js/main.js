// Constantes
const Argentina = 1
const Uruguay = 0.25
const EstadosUnidos = 0.00543
const Europa = 0.00513
const Chile = 5
const Brasil = 0.027

//Variables

let cantidadIn = 0
let cantidadOut = 0
let ask = true





//Función Elección  Moneda origen

function seleccionMonedaOrigen() {
    let pais = (prompt("Desde la divisa:" + " \n1 - Dollar,\n2 - Euro,\n3 - Real,\n4 - Peso Uruguayo,\n5 - Peso Clileno,\n6 - Peso Argentino"));
    switch (pais) {
        case "1":
            alert("Has seleccionado moneda de origen " + "Dollar");
            cantidadIn = ingresarDinero() / EstadosUnidos;
            break;
        case "2":
            alert("Has seleccionado moneda de origen  " + "Euro");
            cantidadIn = ingresarDinero() / Europa;
            break;
        case "3":
            alert("Has seleccionado moneda de origen  " + "Real");
            cantidadIn = ingresarDinero() / Brasil;
            break;
        case "4":
            alert("Has seleccionado moneda de origen  " + "Peso uruguayo");
            cantidadIn = ingresarDinero() / Uruguay;
            break;
        case "5":
            alert("Has seleccionado moneda de origen  " + "Peso Chileno");
            cantidadIn = ingresarDinero() / Chile;
            break;
        case "6":
            alert("Has seleccionado moneda de origen  " + "Peso Argentino");
            cantidadIn = ingresarDinero() / Argentina;
            break;
        default:
            alert("Moneda no disponible, seleccionar de la lista");
            seleccionMonedaOrigen();
            break;
    }
}

//Funci+on Elección Moneda Destino

function seleccionMonedaDestino() {
    let pais = (prompt("A la divisa:" + " \n1 - Dollar,\n2 - Euro,\n3 - Real,\n4 - Peso Uruguayo,\n5 - Peso Clileno,\n6 - Peso Argentino"));
    switch (pais) {
        case "1":
            alert("Has seleccionado moneda de Destino " + "Dollar");
            cantidadOut = cantidadIn * EstadosUnidos;
            alert("Equivale a " + cantidadOut.toFixed(2) + " Dólares");
            break;
        case "2":
            alert("Has seleccionado moneda de Destino  " + "Euro");
            cantidadOut = cantidadIn * Europa;
            alert("Equivale a " + cantidadOut.toFixed(2) + " Euros");
            break;
        case "3":
            alert("Has seleccionado moneda de Destino  " + "Real");
            cantidadOut = cantidadIn * Brasil;
            alert("Equivale a " + cantidadOut.toFixed(2) + " Reales");
            break;
        case "4":
            alert("Has seleccionado moneda de Destino  " + "Peso uruguayo");
            cantidadOut = cantidadIn * Uruguay;
            alert("Equivale a " + cantidadOut.toFixed(2) + " Pesos uruguayos");
            break;
        case "5":
            alert("Has seleccionado moneda de Destino  " + "Peso Chileno");
            cantidadOut = cantidadIn * Chile;
            alert("Equivale a " + cantidadOut.toFixed(2) + " Pesos Chilenos");
            break;
        case "6":
            alert("Has seleccionado moneda de Destino  " + "Peso Argentino");
            cantidadOut = cantidadIn * Argentina;
            alert("Equivale a " + cantidadOut.toFixed(2) + " Pesos Argentinos");
            break;
        default:
            alert("Moneda no disponible, seleccionar de la lista");
            seleccionMonedaDestino();
            break;
    }
}

//Función Datos del Cliente

function ingresarDinero() {
    let monto = parseFloat(prompt("Ingrese cuanto dinero desea convertir:"))
    return monto;
}

//Algoritmo Principal

do {
    seleccionMonedaOrigen()
    seleccionMonedaDestino()
    if (window.confirm("Quieres hacer otra operación?")) {
        ask = true
        alert("Nueva operación");
    }
    else {
        ask = false
    }
} while (ask)
alert("Gracias por elegirnos, éxitos!");

