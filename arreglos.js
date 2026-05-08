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
        contenidoIzquierda +=`
        <tr> 
            <td>${arregloIzquierdo[i]}</td>
            <td>
                <button onclick="eliminarIzquierdo(${i})" class="btn-eliminar">Eliminar</button>
            </td>
            <td>
                <button onclick="moverDerecha(${i})" class="btn-mover">➜</button>
            </td>
        </tr>`;

    }
    tablaIzquierda.innerHTML = contenidoIzquierda;
}

function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierdo();
}