let iconos =[]
let selecciones = []


function cargarIconos(){
    iconos=[
        '<i class="fas fa-heart"></i>',
        '<i class="fas fa-dove"></i>',
        '<i class="fas fa-fan"></i>',
        '<i class="far fa-kiss-wink-heart"></i>',
        '<i class="fab fa-angellist"></i>',
        '<i class="fas fa-anchor"></i>',
        '<i class="fas fa-bolt"></i>',
        '<i class="fab fa-linux"></i>',
        '<i class="fas fa-dog"></i>',
        '<i class="fas fa-ghost"></i>',
        '<i class="fas fa-gamepad"></i>',
        '<i class="fab fa-grav"></i>'
    ]

}


function generarTablero(){
    cargarIconos()
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for(let i = 0; i < 24; i++){
        tarjetas.push(` 
            <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id= "trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>` 
        )
        if(i%2 == 1){
            iconos.splice(0,1)
        }
    }
    tarjetas.sort(()=>Math.random()-0.5)
    tablero.innerHTML= tarjetas.join(" ")
}



function seleccionarTarjeta(i){
    let tarjeta = document.getElementById("tarjeta" + i)
    if(tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if(selecciones.length == 2){
        deseleccionar(selecciones)
        selecciones = []
    }
}
function deseleccionar(selecciones){
    setTimeout(() => {   
        let trasera1 = document.getElementById("trasera"+ selecciones[0])
        let trasera2 = document.getElementById("trasera"+ selecciones[1])
        if(trasera1.innerHTML != trasera2.innerHTML){
            let tarjeta1 = document.getElementById("tarjeta"+ selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta"+ selecciones[1])
            tarjeta1.style.transform="rotateY(0deg)"
            tarjeta2.style.transform="rotateY(0deg)"
        }else{
            trasera1.style.background= "plum"
            trasera2.style.background= "plum"
        }
    }, 1000);
}