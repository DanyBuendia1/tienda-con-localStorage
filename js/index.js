//--------------DATOS DE LOCALSTORAGE-----------------
let Admin = JSON.parse(localStorage.getItem("Admin")) || [];
let Users = JSON.parse(localStorage.getItem("Users")) || [];
//--------------DATOS DE LOCALSTORAGE-----------------
if(Users == "")
{
    swal("Bienvenido Usuario",'Para comenzar se requiere crear una cuenta en esta pagina. Nota: puedes iniciar como administrador como admin admin en email y password','success')
}

function Mostrar(){
    let ver = document.getElementById("unlock");
    let contraseña = document.getElementById("contraseña");
    if(ver.checked==true)
    {
        contraseña.type= "text";
    }
    else
    {
        contraseña.type="password";
    }
}

function datosvacios(){
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;

    if(Admin == "")
    {
        if(correo =="admin" && contraseña == "admin")
        {
            window.location="../admin/admin.html";
        }
    }

    let validacion =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    if(correo=="" || contraseña=="")
    {
        swal("aun faltan campos por completar",'','info');
    }
    else if(validacion.test(correo) ===false)
    {
        swal(`El correo ${correo} no es valido`,'','error')
    }
    else
    {
        administradores();
    }

}

function administradores(){
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;

 
        for(let i=0; i<Admin.length; i++)
        {
            if(correo === Admin[i].email && contraseña === Admin[i].password)
            {
                window.location="../admin/admin.html";
            }
        }
    if(Users == "")
    {
        swal('Bienvenido Usuario','Para comenzar tus compras se requiere crear una cuenta en el registro','success')
    }
    else
    {
        for(let i=0; i<Users.length; i++)
        {
            if(correo === Users[i].email && contraseña === Users[i].password)
            {
                let datos ={
                    id: Users[i].id,
                    name: Users[i].name,
                    email: Users[i].email,
                    password: Users[i].password,
                }
                sessionStorage.setItem("Sesion",JSON.stringify(datos));
                alert(`Bienvenido a esta tienda virtual ${Users[i].name}`,'','success')
                usuarios();
            }
        }
        contador++;
        swal('Datos incorrectos',`Numero de intentos ${contador} de 3`);
        if(contador ===3)
        {
            bloqueo();
        }
    }
}

function usuarios(){
    window.location="../home/home.html";
}

let contador =0;
function bloqueo(){
    swal('Bloqueado','El Inicio de sesion se desbloqueara en 8 segundos apartir de ahora', 'info');
    document.getElementById("correo").disabled = true;
    document.getElementById("contraseña").disabled = true;
    document.getElementById("entrar").disabled = true;
    
    setTimeout(() => {
        document.getElementById("correo").disabled = false;
        document.getElementById("contraseña").disabled = false;
        document.getElementById("entrar").disabled = false;
        contador =0;
        swal("Desbloqueado",'','success')
    }, 8000);
}

//-----------EJECUTAR FUNCIONES------------
document.getElementById("entrar").addEventListener("click",()=>{
    datosvacios();
});

document.addEventListener("keydown", manejarTeclado);
function manejarTeclado(event)
{
    if(event.key === "Enter")
    {
        datosvacios();
    }
}