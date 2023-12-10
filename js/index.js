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

let Users = JSON.parse(localStorage.getItem("Users")) || [];
if(Users=="")
{
    swal("Bienvenido Usuario", "Para comenzar primero tienes que registrarte y comenzar tus compras","success");
}
document.getElementById("entrar").addEventListener("click", ()=>{
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    
    for(let i =0; i<Users.length; i++)
    {
        if(Users[i].email == correo && Users[i].password == contraseña)
        {
            window.location = "../home/home.html"
        }
        else
        {
            swal("El usuario o contraseña no son correctos","","error")
        }
    }
})