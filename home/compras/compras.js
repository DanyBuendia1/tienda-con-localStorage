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

if(Productos != "")
{
    let contenedor = document.querySelector(".row");
    let texto = document.querySelector(".texto");
    texto.parentNode.removeChild(texto);//Elimina el div que dice no se ha agregado ningun producto

    for(i=0; i<Productos.length; i++)
    {

        contenedor.innerHTML+=`
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
          <img src="../../img/${Productos[i].image}" class="card-img-top" alt="...">
            <h4 class="card-subtitle mb-2 text-muted">${Productos[i].name}</h4>
            <p class="card-text">${Productos[i].description}. <br>
            Precio: $${Productos[i].price}</p>
            <a class="card-link btn btn-danger" onclick="resta${Productos[i].id}()">restar</a>
            <input type="number" id="producto${Productos[i].id}" value="0">
            <a class="card-link btn btn-success" onclick="suma${Productos[i].id}()">sumar</a>
            <br><br>
            <p>Total: </p>
          </div>
        </div>
      </div>
        `
    }
}
