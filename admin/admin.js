function Mostrar(){
    let ver = document.getElementById("ver");
    let contraseña = document.getElementById("admincontraseña");
    let vcontraseña = document.getElementById("adminvcontraseña");
    if(ver.checked==true)
    {
        contraseña.type= "text";
        vcontraseña.type ="text";
    }
    else
    {
        contraseña.type="password";
        vcontraseña.type ="password";
    }
}

let Admin = JSON.parse(localStorage.getItem("Admin")) || [];

if(Admin ==""){
swal('Bienvenido Administrador','Se recomienda crear una cuenta como administrador')
}

document.getElementById("salir").addEventListener("click", ()=>{
    let confirmar = confirm("¿Deseas cerrar sesion como administrador?");
    if(confirmar)
    {
        window.location="../index.html";
    }
});


function correovalidado()
{
    let correo = document.getElementById("admincorreo").value;
    let Users = JSON.parse(localStorage.getItem("Users")) || [];

    let correoUsers = Users.some(x => x.email == correo);
    if(correoUsers)
    {
        swal('el correo ya lo uso un usuario','','info');
    }
    else
    {
        let correoigual = Admin.some(x => x.email == correo)
        if(correoigual)
        {
            swal('correo repetido','el correo no se puede almacenar por estar repetido','error')
        }
        else
        {
            validaciones();
        }
    }
}

function validaciones(){
    let nombre = document.getElementById("adminnombre").value;
    let correo = document.getElementById("admincorreo").value;
    let contraseña = document.getElementById("admincontraseña").value;
    let vcontraseña = document.getElementById("adminvcontraseña").value;
    
    let validacion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

    if(nombre ==""|| correo ==""|| contraseña==""|| vcontraseña=="")
    {
        swal('Aun hay espacios que requieren llenarse','','info')
    }
    else if(validacion.test(correo) === false)
    {
        swal('Correo no valido','','error');
    }
    else if(contraseña != vcontraseña)
    {
        swal('Las contraseñas no coinciden','','error');
    }
    else
    {
        if(contraseña.length <6)
        {
            swal('La contraseña requiere al menos 6 caracteres');
        }
        else
        {
            adminguardar();
        }
    }
}

function adminguardar(){
    let nombre = document.getElementById("adminnombre").value;
    let correo = document.getElementById("admincorreo").value;
    let contraseña = document.getElementById("admincontraseña").value;

    let datos ={
        id: Admin.length,
        name: nombre,
        email: correo,
        password:contraseña
    }
    Admin.push(datos);
    localStorage.setItem("Admin",JSON.stringify(Admin));
    swal('Los datos se registraron','','success')
    renderizarTabla();
}


//##### USO DE TECLADO ####
document.addEventListener("keydown", manejarTeclado);
function manejarTeclado(event){
    if(event.key === "Enter")
    {
        correovalidado();
    }
}

document.getElementById("adminregistrar").addEventListener("click",()=>{
  correovalidado();  
})
//##### USO DE TECLADO ####
//iterar los admins en la tabla

let tabla = document.getElementById("tabla");

for (let i = 0; i < Admin.length; i++) {
    tabla.innerHTML += `
        <tr>
            <th scope="row">${Admin[i].id}</th>
            <td>${Admin[i].name}</td>
            <td>${Admin[i].email}</td>
            <td>${Admin[i].password}</td>
            <td>
                <button type="button" class="btn btn-danger" onclick="eliminar(${Admin[i].id})">Eliminar</button>
                <button type="button" class="btn btn-primary" onclick="modificar(${Admin[i].id})">Modificar</button>
            </td>
        </tr>`;
}

function eliminar(id) {

    let confirmar = confirm('¿Te gustaria eliminar esta cuenta de administrador?');
    if(confirmar)
    {
        let index = Admin.findIndex(admin => admin.id === id);
        Admin.splice(index, 1);
        renderizarTabla();
        localStorage.setItem('Admin', JSON.stringify(Admin));
        alert('Registro eliminado');
    }
}

function modificar(id) {
    // Encuentra el índice del objeto con el ID correspondiente en el array 'Admin'.
    let index = Admin.findIndex(admin => admin.id === id);

    // Pide al usuario los nuevos datos (puedes utilizar un prompt, un formulario, etc.).
    let newName = prompt('Ingrese el nuevo nombre:', Admin[index].name);
    let newEmail = prompt('Ingrese el nuevo correo electrónico:', Admin[index].email);
    let newPassword = prompt('Ingrese la nueva contraseña:', Admin[index].password);

    
    // Actualiza los datos en el array 'Admin'.
    Admin[index].name = newName;
    Admin[index].email = newEmail;
    Admin[index].password = newPassword;

    // Vuelve a renderizar la tabla después de la modificación.
    renderizarTabla();

    // También puedes actualizar el localStorage después de realizar la modificación.
    localStorage.setItem('Admin', JSON.stringify(Admin));

    alert('Registro modificado');
}

function renderizarTabla() {
    tabla.innerHTML = '';

    for (let i = 0; i < Admin.length; i++) {
        tabla.innerHTML += `
            <tr>
                <th scope="row">${Admin[i].id}</th>
                <td>${Admin[i].name}</td>
                <td>${Admin[i].email}</td>
                <td>${Admin[i].password}</td>
                <td>
                    <button type="button" class="btn btn-danger" onclick="eliminar(${Admin[i].id})">Eliminar</button>
                    <button type="button" class="btn btn-primary" onclick="modificar(${Admin[i].id})">Modificar</button>
                </td>
            </tr>`;
    }
}