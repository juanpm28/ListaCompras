let contador = 0;
let costoTotal = 0; // variable global que se le agrega el precio * cantidad
let element = document.getElementById("totalPrecio");
element.innerHTML = "Total en precio";  // Se cambió el texto de html desde este documento de JS

let txtNombre = document.getElementById("Name");
// txtNombre.value = "Leche Semidescremada"; // Para poner un valor dentro del cuadro, modificar informacion
let txtNumber = document.getElementById("Number");

let total = document.getElementById("precioTotal");

// let campos = document.getElementsByClassName("campo");   // Llamar elementos de clase
// campos[0].value = "Leche descremada deslactosada light=Agua"; // Se modifica el valor anterior
// console.log(campos[0].value);
// console.log(campos);

// for (let i = 0; i < campos.length; i++) {
//     campos[i].style.border= "red thin solid";  // Estilo programado que se aplica cada vez que haya un error (por ejemplo)
// } // for

// let spans = document.getElementsByTagName("span");
// for (let i = 0; i < spans.length; i++) {
//     console.log(spans[i].textContent);
// } // for i

let tabla = document.getElementById("tablaListaCompras"); // Del document, o sea body de la página, se obtiene lo que está en el id
let cuerpoTabla = tabla.getElementsByTagName("tbody"); // A partir de la tabla, busco un elemento (tbody)

// cuerpoTabla[0].innerHTML = `<tr>   // cuerpoTabla[0], es 0 porque es el primer y único elemento que coincide con lo que buscamos
// <th scope="row">1</th>
// <td>Leche descremada</td>
// <td>3</td>
// <td>$ 23.00</td>
// </tr> `;

function validarNombre() {
    if (txtNombre.value.length <3) {
        return false;
    } // if 
    return true;
    } // validarNombre


function validarCantidad() {
    if (txtNumber.value.length == 0) { // longitud no igual a cero validacion
        return false; // termina la función aquí, como un break
    } // if
    if (isNaN(txtNumber.value)) { // si no es un numero, es igual a falso
        return false;
    } // if
    if (parseFloat(txtNumber.value)<=0) { // valida que sea un numero 
        return false; // ya no hace lo demás
    } // if
    return true;
} // validarCantidad

let agregar = document.getElementById("btnAgregar");


agregar.addEventListener ("click", (event) => {  // Evento al que voy a responder
    event.preventDefault();    // quiero prevenir accion que se hace por default
    if ( (! validarNombre()) || (! validarCantidad())) {  // si este es falso o este otro es falso return false
        
        let lista="";
        if (!validarNombre()) {
            txtNombre.style.border= "red thin solid";
            lista += "<li>Se debe escribir un nombre válido</li>"
        }
        if (!validarCantidad()) {
            txtNumber.style.border= "red thin solid";
            lista += "<li>Se debe escribir una cantidad válida</li>"   // Se cambió el mensaje con backticks
        }

        document.getElementById("alertValidacionesTexto").innerHTML=`
        Los campos deben ser llenados correctamente.
        <ul>${lista}</ul>
        `;
        document.getElementById("alertValidaciones").style.display="block";
        setTimeout(function () {
            document.getElementById("alertValidaciones").style.display="none";
        },
            5000 // 5 segundos
        );
        return false;
    } // if
    document.getElementById("alertValidaciones").style.display="none";
    contador++; // para andar aumentando el contador de productos
    document.getElementById("contadorProductos").innerHTML= contador;
    let precio = (Math.floor((Math.random() * 50)*100))/100; // math.random por default solo da decimales
    let cantidad = parseFloat(txtNumber.value);  // Para convertir a número
    costoTotal += (precio * cantidad);
    total.innerHTML = `$ ${costoTotal.toFixed(2)}`;
    let tmp = `<tr>
<th scope="row">${contador}</th>
<td>${txtNombre.value}</td>
<td>${txtNumber.value}</td>
<td>$ ${precio}</td>  
</tr> `; // number.tofixed(#) para indicar cuantos dígitos aparecendespués del punto
    console.log(tmp);
    cuerpoTabla[0].innerHTML += tmp;  // Cada vez que añadamos algo, se va a volver a hacer lo que hace el tmp, en el único tbody que hay
    txtNumber.value="";
    txtNombre.value=""; // limpia formulario
    txtNombre.focus();
    Total.value=""
    }
);

txtNombre.addEventListener("blur", (event) => {  // blur: las instrucciones se ejecutan cuando se pierde el foco de atención del campo que estamos rellenando
    event.target.value = event.target.value.trim(); // quita espacios innecesarios al principio y al final
}
);

txtNumber.addEventListener("blur", (event) => {  // blur: las instrucciones se ejecutan cuando se pierde el foco de atención del campo que estamos rellenando
    event.target.value = event.target.value.trim();
}
);


// https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event

// agregar.onclick = ;