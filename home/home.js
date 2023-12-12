let productos = JSON.parse(sessionStorage.getItem("Productos")) || [];
//------------Cerrar Session -------------
function cerrarsesion(){
    let confirmar = confirm("¿Te gustaria cerrar sesion?");
    if(confirmar)
    {
        window.location="../index.html"
        sessionStorage.clear();
    }
}
let sesion = JSON.parse(sessionStorage.getItem("Sesion"))

document.getElementById("name").innerHTML=`Bienvenid@ ${sesion.name}`;

//------------Cerrar Session -------------
//----------- ALIMENTOS PREDETERMINADOS ----------------
function alimentos(){
    document.querySelector(".alimentos").showModal();
}
let food =document.querySelector(".alimentos")
document.getElementById("cerraralimentos").addEventListener("click", ()=>food.close());
document.getElementById("añadiralimentos").addEventListener("click",()=>{
 
    let datos = 
    {
        id: 1,
        name: "Paquete de Alimentos",
        image:"alimentos.jpeg",
        description: "Paquete de alimentos saludables",
        price:350
    }
    function existe(id){
        return productos.some(x=>x.id === id);
    }

    if(existe(datos.id))
    {
        swal('Ya agregaste este producto a tu carrito','','info');
    }
    else
    {
        productos.push(datos)
        sessionStorage.setItem("Productos", JSON.stringify(productos));
        swal('producto añadido','','success');        
    }
})

//----------- Alimento 1 ----------------------
function alimento1(){
    document.querySelector(".alimento1").showModal();
}
    let food1 = document.querySelector(".alimento1");
    document.getElementById("cerraralimento1").addEventListener("click",()=>food1.close());
    document.getElementById("añadiralimentos1").addEventListener("click",()=>{
 
        let datos = 
        {
            id: 2,
            name: "Paquete de Bebidas",
            image:"alimento1.jpeg",
            description: "Paquete de Jugos, frutas y verduras saludables",
            price:300
        }
        function existe(id){
            return productos.some(x=>x.id === id);
        }
    
        if(existe(datos.id))
        {
            swal('Ya agregaste este producto a tu carrito','','info');
        }
        else
        {
            productos.push(datos)
            sessionStorage.setItem("Productos", JSON.stringify(productos));
            swal('producto añadido','','success');        
        }
    })
//----------- Alimento 1 ----------------------
//----------- Alimento 2 ----------------------
function alimento2(){
    document.querySelector(".alimento2").showModal();
}
    let food2 = document.querySelector(".alimento2")
    document.getElementById("cerraralimento2").addEventListener("click", ()=>food2.close());
    document.getElementById("añadiralimentos2").addEventListener("click",()=>{
 
        let datos = 
        {
            id: 3,
            name: "Paquete de verduras",
            image:"alimento2.jpg",
            description: "Paquete de frutas y verduras saludables",
            price:500
        }
        function existe(id){
            return productos.some(x=>x.id === id);
        }
    
        if(existe(datos.id))
        {
            swal('Ya agregaste este producto a tu carrito','','info');
        }
        else
        {
            productos.push(datos)
            sessionStorage.setItem("Productos", JSON.stringify(productos));
            swal('producto añadido','','success');        
        }
    })
//----------- Alimento 2 ----------------------
//----------- Alimento 2 ----------------------
function alimento3(){
    document.querySelector(".alimento3").showModal();
}
    let food3 = document.querySelector(".alimento3")
    document.getElementById("cerraralimento3").addEventListener("click", ()=>food3.close());
    document.getElementById("añadiralimentos3").addEventListener("click",()=>{
        let datos = 
        {
            id: 4,
            name: "Platillo de comida",
            image:"platillo.jpeg",
            description: "Platillo de comida con carne de pollo",
            price:65
        }
        function existe(id){
            return productos.some(x=>x.id === id);
        }
    
        if(existe(datos.id))
        {
            swal('Ya agregaste este producto a tu carrito','','info');
        }
        else
        {
            productos.push(datos)
            sessionStorage.setItem("Productos", JSON.stringify(productos));
            swal('producto añadido','','success');        
        }
    })
//----------- Alimento 2 ----------------------
//----------- ALIMENTOS PREDETERMINADOS ----------------