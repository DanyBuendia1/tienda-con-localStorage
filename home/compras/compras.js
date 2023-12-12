document.querySelector(".texto").addEventListener("click",()=>{
    let confirmar = confirm("¿Te fustaria agrgar productos?");
    if(confirmar)
    {
        window.location="../home.html";
    }
})
//-----------Datos de Usuario-----------
let Sesion = JSON.parse(sessionStorage.getItem("Sesion"));
//-----------Datos de Usuario-----------

document.getElementById("name").innerHTML=`Bienvenid@ ${Sesion.name}`

let Productos = JSON.parse(sessionStorage.getItem("Productos")) || [];

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
          <img src="../../img/${Productos[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${Productos[i].name}</h5>
            <p class="card-text">${Productos[i].description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">precio: $${Productos[i].price}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link btn btn-danger">restar</a>
            <input type="number" value="0">
            <a href="#" class="card-link btn btn-success" onclick="suma${Productos[i].id}()">sumar</a>
          </div>
        </div>
      </div>
      <script>
      let ${Productos[i].id} = 0;
      function suma${Productos[i].id}(){
        ${Productos[i].id}++
      }
      </script>
      `
    }
}
