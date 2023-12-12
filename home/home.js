//------------Cerrar Session -------------

//------------Cerrar Session -------------
//----------- ALIMENTOS PREDETERMINADOS ----------------
function alimentos(){
    document.querySelector(".alimentos").showModal();
}
let food =document.querySelector(".alimentos")
document.getElementById("cerraralimentos").addEventListener("click", ()=>food.close());

//----------- Alimento 1 ----------------------
function alimento1(){
    document.querySelector(".alimento1").showModal();
}
    let food1 = document.querySelector(".alimento1");
    document.getElementById("cerraralimento1").addEventListener("click",()=>food1.close());
//----------- Alimento 1 ----------------------
//----------- Alimento 2 ----------------------
function alimento2(){
    document.querySelector(".alimento2").showModal();
}
    let food2 = document.querySelector(".alimento2")
    document.getElementById("cerraralimento2").addEventListener("click", ()=>food2.close());
//----------- Alimento 2 ----------------------
//----------- Alimento 2 ----------------------
function alimento3(){
    document.querySelector(".alimento3").showModal();
}
    let food3 = document.querySelector(".alimento3")
    document.getElementById("cerraralimento3").addEventListener("click", ()=>food3.close());
//----------- Alimento 2 ----------------------
//----------- ALIMENTOS PREDETERMINADOS ----------------

function cerrarsesion(){
    let confirmar = confirm("¿Te gustaria cerrar sesion?");
    if(confirmar)
    {
        window.location="../index.html"
    }
}