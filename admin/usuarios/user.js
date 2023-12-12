function Mostrar(){
    let ver = document.getElementById("ver");
    let contraseña = document.getElementById("contraseña");
    let vcontraseña = document.getElementById("vcontraseña");

    if(ver.checked == true)
    {
        contraseña.type ="text";
        vcontraseña.type="text";
    }
    else
    {
        contraseña.type ="password";
        vcontraseña.type="password";        
    }

}
let Users = JSON.parse(localStorage.getItem("Users")) || [];

function correovalido(){
    let correo = document.getElementById("correo").value;
    let check = Users.some(x=>x.email == correo);
    if(check)
    {
        swal('Este correo no es valido','','error');
    }
    else
    {
        validaciones();
    }
}
function validaciones(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    let vcontraseña = document.getElementById("vcontraseña").value;

    let test =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

    if(nombre ==""|| correo ==""|| contraseña ==""|| vcontraseña=="")
    {
        swal("Aun faltan campos para registrar",'','info');
    }
    else if(test.test(correo) === false)
    {
        swal("El correo no es valido",'','error');
    }
    else if(contraseña != vcontraseña)
    {
        swal('Las contraseñas no coinciden','','info');
    }
    else
    {
        if(contraseña.length <6)
        {
            swal('Se requiere al menos 6 caracteres')
        }
        else
        {
            guardar();
        }
    }
}

function guardar(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;

    let datos = {
        id: Users.length,
        name: nombre,
        email: correo,
        password: contraseña
    }
    Users.push(datos);

    localStorage.setItem("Users",JSON.stringify(Users));
    swal('Los datos fueron almacenados','','success');
}

//-----------Ejecutar Funciones-----------
document.getElementById("registrar").addEventListener("click",()=>{
    correovalido();
});
document.getElementById("salir").addEventListener("click",()=>{
    let confirmar = confirm("¿Deseas cerrar sesion como administrador?")
    if(confirmar)
    {
        window.location="../../index.html";
    }
})

document.addEventListener("keydown", manejarTeclado);
function manejarTeclado(event){
    if(event.key === "Enter")
    {
        correovalido();
    }
}


let tabla = document.getElementById("tabla");

for(i =0; i<Users.length; i++)
{
    tabla.innerHTML+=`
    <tr>
            <th scope="row">${Users[i].id}</th>
            <td>${Users[i].name}</td>
            <td>${Users[i].email}</td>
            <td>${Users[i].password}</td>
            <td>
                <button type="button" class="btn btn-danger" onclick="eliminar(${Users[i].id})">Eliminar</button>
                <button type="button" class="btn btn-primary" onclick="modificar(${Users[i].id})">Modificar</button>
            </td>
        </tr>`
}