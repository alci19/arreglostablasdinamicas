let arregloIzquierdo = [];
let arregloDerecho = [];

function agregarEdad() {
    let edadInput = document.getElementById("txtEdad");
    let edad = parseInt(edadInput.value);

    if (isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        edadInput.value = "";
        return;
    } else {
        arregloIzquierdo.push(edad);
        edadInput.value = "";
        pintarArregloIzquierdo();
    }
}

function pintarArregloIzquierdo() {
    let tablaIzquierda = document.getElementById("tablaIzquierda");
    let contenidoIzquierda = "";
    for (let i = 0; i < arregloIzquierdo.length; i++) {
        contenidoIzquierda += `
        <tr>
            <td>${arregloIzquierdo[i]}</td>

            <td>
                <button onclick="eliminarIzquierdo(${i})" class="btn-eliminar">
                    Eliminar
                </button>
            </td>

            <td>
                <button onclick="moverDerecha(${i})" class="btn-mover">
                    ➜
                </button>
            </td>
        </tr>
        `;
    }
    tablaIzquierda.innerHTML = contenidoIzquierda;
}

function eliminarIzquierdo(indice) {
    //Debug para eliminar 
    //console.log("Eliminando elemento en índice: " + indice);
    //console.log( arregloIzquierdo);
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierdo();
}

function pintarArregloDerecho() {
    let tablaDerecha = document.getElementById("tablaDerecha");
    let contenidoDerecha = "";
    for (let i = 0; i < arregloDerecho.length; i++) {
        contenidoDerecha += `
        <tr>
            <td>${arregloDerecho[i]}</td>

            <td>
                <button onclick="eliminarDerecho(${i})" class="btn-eliminar">
                    Eliminar
                </button>
            </td>

            <td>
                <button onclick="moverIzquierda(${i})" class="btn-mover">
                    ⬅
                </button>
            </td>
        </tr>
        `;
    }
    tablaDerecha.innerHTML = contenidoDerecha;
}