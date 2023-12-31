let Productos = JSON.parse(sessionStorage.getItem("Productos")) || [];
let sesion = JSON.parse(sessionStorage.getItem("Sesion"));

document.querySelector(".texto").addEventListener("click",()=>{
    let confirmar = confirm("¿Te gustaria agregar productos?");
    if(confirmar)
    {
        window.location="../home.html";
    }
})
//-----------Datos de Usuario-----------
let Sesion = JSON.parse(sessionStorage.getItem("Sesion"));
//-----------Datos de Usuario-----------

document.getElementById("name").innerHTML=`Bienvenid@ ${Sesion.name}`
function cerrarsesion(){
  let confirmar = confirm(`${sesion.name}, ¿Te gustaria Cerrar Sesion?`);
  if(confirmar)
  {
    window.location="../../index.html"
    sessionStorage.clear();
  }
}
//-----------------------Iteracion--------------

if(Productos != "")
{
  let button = document.createElement("button");
  let textbutton = document.createTextNode("Imprimir");
  button.appendChild(textbutton);
  button.addEventListener("click",()=>{
    window.print();
  })
  document.getElementById("imprimir").appendChild(button)

  let top=document.querySelector(".top");
  let texto=document.querySelector(".texto");

  top.parentNode.removeChild(top);
  texto.parentNode.removeChild(texto);

  let row =document.querySelector(".row");
  
  let Sumatotal =0;
  for(i=0; i<Productos.length; i++)
  {
    row.innerHTML+=`
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
      <div class="card" style="width: 18rem;">
        <img src="../../img/${Productos[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Nombre: ${Productos[i].name}</p>
          <p class="card-text">Description: ${Productos[i].description}</p>
          <p class="card-text">total: $${Productos[i].total}</p>
        </div>
      </div>
    </div>
    `

    let total = Productos[i].total;
    
    Sumatotal += total;
  }

  row.innerHTML += "<h1>Suma Total: "+Sumatotal+"</h1>"
  swal(`La cuenta es de ${Sumatotal}`,'Gracias por ver mi proyecto, hecho por Dany Buendia','success');
}
//-----------------------Iteracion--------------