/*
crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera)
 la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano,
  luego preguntar si queremos jugar otra vez. 
*/

// let ganadorUsuario = 0;
// let ganadorCompu = 0;
// do {
//     let movimientoUsuario = prompt("Elige tu movimiento (piedra, papel, tijera): ").toLowerCase();
//     if (movimientoUsuario === "piedra" || movimientoUsuario === "papel" || movimientoUsuario === "tijera") {
        
//         let opciones = ["piedra", "papel", "tijera"];
//         let movimientoCompu = opciones[Math.floor(Math.random() * opciones.length)];

//         if (movimientoUsuario === movimientoCompu) {
//             alert(`Tú elegiste ${movimientoUsuario} y la computadora eligió ${movimientoCompu}.`);
//             alert("¡Empate!");
//         } else if (
//             (movimientoUsuario === "piedra" && movimientoCompu === "tijera") ||
//             (movimientoUsuario === "papel" && movimientoCompu === "piedra") ||
//             (movimientoUsuario === "tijera" && movimientoCompu === "papel")
//         ) {
//             alert(`Tú elegiste ${movimientoUsuario} y la computadora eligió ${movimientoCompu}.`);
//             alert("¡Ganaste!");
//             ganadorUsuario++;
//         } else {
//             alert(`Tú elegiste ${movimientoUsuario} y la computadora eligió ${movimientoCompu}.`);
//             alert("¡Perdiste!");
//             ganadorCompu++
//         }
//     } else {
//         alert("Debe ingresar un movimiento válido. (piedra, papel o tijera)")
//     }

// } while (confirm("¿Quieres jugar de nuevo?"))


// document.write("Resultados finales:");
// document.write("<br>")
// document.write(`Ganador USUARIO: ${ganadorUsuario}`);
// document.write("<br>")
// document.write(`Ganador COMPUTADORA: ${ganadorCompu}`);