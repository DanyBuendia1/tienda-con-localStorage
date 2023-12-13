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


let contador1 = 0;

function sumar1(){
    contador1++;
    document.getElementById("cantidad1").value=contador1;
    let total = document.getElementById("total1");

    total.innerHTML ='Total: $'+ contador1*350;
    let producto1 = contador1*350
    return (producto1);
}

//---------------añadir alimentos---------
document.getElementById("añadiralimentos").addEventListener("click", function(){
    let producto1 = sumar1()-350;
    
    let datos ={
        id: 1,
        name: "Paquete de alimentos",
        description: "Paquete de alimentos saludables",
        price: 350,
        image: "alimentos.jpeg",
        total: producto1
    }
    let confirmar = confirm(`El resultado es ${producto1}, ¿Te gustaria añadir este producto?`);
    if(confirmar)
    {
        productos.push(datos);
        sessionStorage.setItem("Productos",JSON.stringify(productos));
        swal('producto añadidos','','success');
    }
})
//---------------añadir alimentos---------

function resta1(){
    contador1--;
    if(contador1 == -1)
    {
        alert('No se aceptan numeros negativos')
        document.getElementById("cantidad1").value=0;
        document.getElementById("total1").innerHTML="Total: $0.00"
        contador1=0;
    }
    document.getElementById("cantidad1").value=contador1;
    let total = document.getElementById("total1");

    total.innerHTML ='Total: $'+ contador1*350;
    }

//----------- Alimento 1 ----------------------
function alimento1(){
    document.querySelector(".alimento1").showModal();
}
    let food1 = document.querySelector(".alimento1");
    document.getElementById("cerraralimento1").addEventListener("click",()=>food1.close());

    let contador2 = 0;
    function sumar2(){
        contador2++;
        document.getElementById("cantidad2").value=contador2;
        let total = document.getElementById("total2");

        total.innerHTML ='Total: $'+ contador2*300;
        let producto1 = contador2*300
        return (producto1);
    }

    //-----------añadiralimentos1-----------
    document.getElementById("añadiralimentos1").addEventListener('click',()=>{
        let producto = sumar2()-300;
        let datos ={
            id: 2,
            name: "Paquete de bebidas",
            description: "Paquete de Jugos, fritas y verduras saludables",
            price: 300,
            image: "alimento1.jpeg",
            total: producto
        }
        let confirmar = confirm(`El resultado es ${producto}, ¿Te gustaria añadir este producto?`);
        if(confirmar)
        {
            productos.push(datos);
            sessionStorage.setItem("Productos",JSON.stringify(productos));
            swal('producto añadidos','','success');
        }
    })
    //-----------añadiralimentos1-----------

    function resta2(){
        contador2--;
        if(contador2 == -1)
        {
            alert('No se aceptan numeros negativos')
            document.getElementById("cantidad2").value=0;
            document.getElementById("total2").innerHTML="Total: $0.00"
            contador2=0;
        }
        document.getElementById("cantidad2").value=contador2;
        let total = document.getElementById("total2");

        total.innerHTML ='Total: $'+ contador2*300;
    }

//----------- Alimento 1 ----------------------

//----------- Alimento 2 ----------------------
function alimento2(){
    document.querySelector(".alimento2").showModal();
}
    let food2 = document.querySelector(".alimento2")
    document.getElementById("cerraralimento2").addEventListener("click", ()=>food2.close());
    
    let contador3 =0

    function sumar3(){
        contador3++;
        let cantidad = document.getElementById('cantidad3').value=contador3;

        let total = document.getElementById("total3");
        total.innerHTML="Total: $"+(cantidad*500);
        let producto = cantidad*500;
        return(producto);
    }

    function resta3(){
        contador3--;
        if(contador3 == -1)
        {
            alert('No se aceptan numeros negativos')
            document.getElementById("cantidad3").value=0;
            document.getElementById("total3").innerHTML="Total: $0.00"
            contador3=0;
        }
        let cantidad = document.getElementById('cantidad3').value=contador3;

        let total = document.getElementById("total3");
        total.innerHTML="Total: $"+(cantidad*500);
    }
    //-----------Añadir Producto3 -----------------
    document.getElementById("añadiralimentos2").addEventListener("click",()=>{
        let producto = sumar3()-500;
        let datos ={
            id: 3,
            name: "Frutas y Verduras",
            description: "Paquete de fritas y verduras saludables",
            price: 500,
            image: "alimento2.jpg",
            total: producto
        }
        let confirmar = confirm(`El resultado es ${producto}, ¿Te gustaria añadir este producto?`);
        if(confirmar)
        {
            productos.push(datos);
            sessionStorage.setItem("Productos",JSON.stringify(productos));
            swal('producto añadidos','','success');
        }
    })
    //-----------Añadir Producto3 -----------------
//----------- Alimento 2 ----------------------
function alimento3(){
    document.querySelector(".alimento3").showModal();
}
    let food3 = document.querySelector(".alimento3")
    document.getElementById("cerraralimento3").addEventListener("click", ()=>food3.close());

    let contador4 =0;

    function sumar4(){
        contador4++;
        let cantidad = document.getElementById('cantidad4').value=contador4;

        let total = document.getElementById("total4");
        total.innerHTML="Total: $"+(cantidad*65);
        let producto = cantidad*65;
        return(producto)
    }
    function resta4(){
        contador4--;
        if(contador4 == -1)
        {
            alert('No se aceptan numeros negativos')
            document.getElementById("cantidad4").value=0;
            document.getElementById("total4").innerHTML="Total: $0.00"
            contador4=0;
        }
        let cantidad = document.getElementById('cantidad4').value=contador4;

        let total = document.getElementById("total4");
        total.innerHTML="Total: $"+(cantidad*65);
    }

    //-----------almacenar producto3--------
    document.getElementById("añadiralimentos3").addEventListener("click",()=>{
        let producto = sumar4()-65;
        let datos ={
            id: 4,
            name: "Platillo de comida",
            description: "Platillo de comida con carne de pollo",
            price: 65,
            image: "platillo.jpeg",
            total: producto
        }
        let confirmar = confirm(`El resultado es ${producto}, ¿Te gustaria añadir este producto?`);
        if(confirmar)
        {
            productos.push(datos);
            sessionStorage.setItem("Productos",JSON.stringify(productos));
            swal('producto añadidos','','success');
        }
    })
    //-----------almacenar producto3--------
//----------- Alimento 2 ----------------------
//----------- ALIMENTOS PREDETERMINADOS ----------------