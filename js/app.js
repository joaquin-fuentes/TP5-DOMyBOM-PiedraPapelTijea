/*
crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera)
 la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano,
  luego preguntar si queremos jugar otra vez. 
*/

const botonPiedraHumano = document.querySelector("#btnPiedraHumano")
const botonPapelHumano = document.querySelector("#btnPapelHumano")
const botonTijeraHumano = document.querySelector("#btnTijeraHumano")
const botonPiedraCompu = document.querySelector("#btnPiedaCompu")
const botonPapelCompu = document.querySelector("#btnPapelCompu")
const botonTijeraCompu = document.querySelector("#btnTijeraCompu")

const btnSiguienteMano = document.querySelector("#btnSiguienteMano")

const txtPiedraHumano = document.querySelector("#txtPiedraHumano")
const txtPapelHumano = document.querySelector("#txtPapelHumano")
const txtTijeraHumano = document.querySelector("#txtTijeraHumano")


const puntuacionHumano = document.querySelector("#puntuacionHumano")
const puntuacionCompu = document.querySelector("#puntuacionCompu")

const ganador = document.querySelector("#ganador")


 let ganadorHumano = 0;
 let ganadorCompu = 0;
 let manoElegida
 let movimientoCompu


function elegirPiedra(){
   manoElegida = "Piedra"
   console.log(`mano Humano : ${manoElegida}`)
   return manoElegida
}
function elegirPapel(){
  manoElegida = "Papel"
  console.log(`mano Humano : ${manoElegida}`)
  return manoElegida
}
function elegirTijera(){
  manoElegida = "Tijera"
  console.log(`mano Humano : ${manoElegida}`)
  return manoElegida
}



function generarManoCompu(){
  let opciones = ["Piedra", "Papel", "Tijera"];
   movimientoCompu = opciones[Math.floor(Math.random() * opciones.length)];
  console.log(`mano Compu : ${movimientoCompu}`)
  return movimientoCompu
}

function quienGana(){
   if(manoElegida === movimientoCompu){
    // Sentencia si hay empate
    ganador.innerHTML = ""
    ganador.innerHTML += `
    <div class="my-2 p-2 ">
       <h4>Empate <br>
           
       </h4>
       <div class="d-flex justify-content-center align-items-center d-lg-block centrar-lg">
           <article class="border border-primary rounded w-25 w-large-100 mb-3  p-3">
              <h6>${manoElegida}</h6>
              <img src="./img/${manoElegida}.webp" class="w-100" alt="">
           </article>
           <article class=" rounded w-25 w-large-100  p-1">
              <img src="./img/vs.jpg" width="50%" alt="">
           </article>
           <article class="border border-danger rounded w-25 w-large-100 mb-3  p-3">
              <h6>${movimientoCompu}</h6>
              <img src="./img/${movimientoCompu}.webp" class="w-100" alt="">
           </article>
       </div>
       <button type="button" onclick="siguienteMano()" id="btnSiguienteMano" class="btn btn-outline-secondary m-2">Siguiente mano</button>
   </div>`

   }  else if (  (manoElegida === "Piedra" && movimientoCompu === "Tijera") ||
                 (manoElegida === "Papel" && movimientoCompu === "Piedra") ||
                 (manoElegida === "Tijera" && movimientoCompu === "Papel")) {
                  // Sentencia si gana el humano
                 ganadorHumano++;
                  
                 ganador.innerHTML = ""
                 ganador.innerHTML += `
                 <div class="my-2 p-2 ">
                    <h4>Ganador <br>
                        Humano
                    </h4>
                    <div class="d-flex justify-content-center align-items-center d-lg-block centrar-lg">
                        <article class="border border-primary rounded w-25 w-large-100 mb-3  p-3">
                           <h6>${manoElegida}</h6>
                           <img src="./img/${manoElegida}.webp" class="w-100" alt="">
                        </article>
                        <article class=" rounded w-25 w-large-100  p-1">
                           <img src="./img/vs.jpg" width="50%" alt="">
                        </article>
                        <article class="border border-danger rounded w-25 w-large-100 mb-3  p-3">
                           <h6>${movimientoCompu}</h6>
                           <img src="./img/${movimientoCompu}.webp" class="w-100" alt="">
                        </article>
                    </div>
                    <button type="button" onclick="siguienteMano()" id="btnSiguienteMano" class="btn btn-outline-secondary m-2">Siguiente mano</button>
                </div>`

                 } else if (  (movimientoCompu === "Piedra" && manoElegida === "Tijera") ||
                 (movimientoCompu === "Papel" && manoElegida === "Piedra") ||
                 (movimientoCompu === "Tijera" && manoElegida === "Papel")) {
                  // Sentencia si gana la compu
                 ganadorCompu++;

                 ganador.innerHTML = ""
                 ganador.innerHTML += `
                 <div class="my-2 p-2 ">
                    <h4>Ganador <br>
                        Compu
                    </h4>
                    <div class="d-flex justify-content-center align-items-center d-lg-block centrar-lg">
                        <article class="border border-primary rounded w-25 w-large-100 mb-3  p-3">
                           <h6>${manoElegida}</h6>
                           <img src="./img/${manoElegida}.webp" class="w-100" alt="">
                        </article>
                        <article class=" rounded w-25 w-large-100  p-1">
                           <img src="./img/vs.jpg" width="50%" alt="">
                        </article>
                        <article class="border border-danger rounded w-25 w-large-100 mb-3  p-3">
                           <h6>${movimientoCompu}</h6>
                           <img src="./img/${movimientoCompu}.webp" class="w-100" alt="">
                        </article>
                    </div>
                    <button type="button" onclick="siguienteMano()" id="btnSiguienteMano" class="btn btn-outline-secondary m-2">Siguiente mano</button>
                </div>`

                 }
}
function actualizarPuntuacion(){
   puntuacionHumano.innerHTML = ""
   puntuacionHumano.innerHTML += `
     <h5>Puntos Humano</h5>
     <h5>${ganadorHumano}</h5>`

     puntuacionCompu.innerHTML = ""
     puntuacionCompu.innerHTML += `
     <h5>Puntos Compu</h5>
     <h5>${ganadorCompu}</h5>`
}
function inhabilitarBotones(){
  botonPapelHumano.disabled = true;
  botonPiedraHumano.disabled = true;
  botonTijeraHumano.disabled = true;
  // botonPiedraCompu.disabled = true;
  // botonPapelCompu.disabled = true;
  // botonTijeraCompu.disabled = true;
}
function esconderGanador(){
  ganador.innerHTML = ""
}
function siguienteMano(){
  botonPapelHumano.disabled = false;
  botonPiedraHumano.disabled = false;
  botonTijeraHumano.disabled = false;
  esconderGanador()
}

botonPiedraHumano.addEventListener('click', function() {
  elegirPiedra()
  inhabilitarBotones()
  generarManoCompu()
  quienGana()
  actualizarPuntuacion()
  
});
botonPapelHumano.addEventListener('click', function() {
  elegirPapel()
  inhabilitarBotones()
  generarManoCompu()
  quienGana()
  actualizarPuntuacion()

});
botonTijeraHumano.addEventListener('click', function() {
  elegirTijera()
  inhabilitarBotones()
  generarManoCompu()
  quienGana()
  actualizarPuntuacion()

});



