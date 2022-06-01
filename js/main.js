

let element = document.getElementById("totalPrecio");
element.innerHTML = "Total en precio";  // 

let txtNombre = document.getElementById("Name");
// txtNombre.value = "Leche Semidescremada"; // Para poner un valor dentro del cuadro, modificar informacion
let txtNumber = document.getElementById("Number");


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

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

// cuerpoTabla[0].innerHTML = `<tr>
// <th scope="row">1</th>
// <td>Leche descremada</td>
// <td>3</td>
// <td>$ 23.00</td>
// </tr> `;

let agregar = document.getElementById("btnAgregar");

agregar.addEventListener ("click", (event) => {  // Evento al que voy a responder
    let precio = Math.random() * 50;
    let tmp = `<tr>
<th scope="row">1</th>
<td>${txtNombre.value}</td>
<td>${txtNumber.value}</td>
<td>$ ${precio}</td>
</tr> `;
    console.log(tmp);
    cuerpoTabla[0].innerHTML += tmp;
    txtNumber.value="";
    txtNombre.value="";
    txtNombre.focus();

    }
);

// agregar.onclick = ;