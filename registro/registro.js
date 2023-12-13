let contraseña = document.getElementById("contraseña").addEventListener("focus",()=>{

    let text = document.getElementById("texto");
    text.innerHTML="Las contraseñas deben tener almenos 6 dijitos";
})

let Users = JSON.parse(localStorage.getItem("Users")) || [];

document.getElementById("registrar").addEventListener("click", function revisar(){

    chequeocorreo();

});

function chequeocorreo(){
    let correo = document.getElementById("correo").value;
    let Admin = JSON.parse(localStorage.getItem("Admin")) || [];

    let correoadmin = Admin.some(x=>x.email == correo);

    if(correoadmin)
    {
        swal('El correo no es validor','','error');
    }
    else
    {
        let correoUser = Users.some(x=>x.email == correo);
        if(correoUser)
        {
            swal('El correo no es valido','','error')
        }
        else
        {
            Almacenar();
        }
    }
}
function Almacenar(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    let vcontraseña = document.getElementById("vcontraseña").value;

    let validacion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

    if(nombre =="" || correo ==""|| contraseña ==""|| vcontraseña=="")
    {
        swal("Faltan campos por completar","","error")
    }
    else if(validacion.test(correo)=== false)
    {
        swal("El correo no es valido","","error")
    }
    else if(contraseña != vcontraseña)
    {
        swal("Las contraseñas no coinciden","","error")
    }
    else
    {
        if(contraseña.length >=6)
        {
            let datos ={
                name: nombre,
                email: correo,
                password: contraseña
            }
            Users.push(datos);
            localStorage.setItem("Users", JSON.stringify(Users));
            swal("Los datos se registraron correctamente","","success")
            document.getElementById("nombre").value="";
            document.getElementById("correo").value="";
            document.getElementById("contraseña").value="";
            document.getElementById("vcontraseña").value="";
            
            let confirmar = confirm("Los datos fueron almacenados, te gustaria iniciar sesion");
            if(confirmar == true)
            {
                window.location="../index.html"
            }
        }
        else
        {
            swal('La contraseña debe ser mayor a 6 dijitos',"","error")
        }
    }
}

//#### teclado ####
document.addEventListener("keydown", manejarTeclado);
function manejarTeclado(event)
{
    if(event.key === "Enter")
    {
        chequeocorreo();
    }
}