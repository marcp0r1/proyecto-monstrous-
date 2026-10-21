
function showAlert(button){
    alert("Boo");
}


const button = document.getElementById("button");
button.addEventListener("click", showAlert);

let brazoLevantado = false;
function moveElement (){
    const brazoIzquierdo = document.getElementById("brazo-izquierdo");
    const brazoDerecho = document.getElementById("brazo-derecho");
    if (brazoLevantado === false) {
        brazoIzquierdo.style.transform = "translateY(-30px)";
        brazoDerecho.style.transform = "translateY(-30px)";
        brazoLevantado = true;
    } else {
        brazoIzquierdo.style.transform = "translateY(0)";
        brazoDerecho.style.transform = "translateY(0)";
        brazoLevantado = false;
    }
}
const ojo = document.getElementById("ojo");
ojo.addEventListener ("click", function(){
    moveElement();
});
