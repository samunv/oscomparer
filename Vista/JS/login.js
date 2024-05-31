window.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById("formulario");
  let alerta = document.getElementById("alerta");
  let btnAlerta = document.getElementById("btn-alerta");


  
  let overlay = document.getElementById("overlay");

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let datos = new FormData(formulario);

    //console.log(datos.get("nombre"));

    fetch("./Controlador/logincontrolador.php", {
      method: "POST",
      body: datos,
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);

        if (data.error) {
          alerta.style.display = "flex";
          overlay.style.display = "block";
          btnAlerta.addEventListener("click", function () {
            alerta.style.display = "none";
            overlay.style.display = "none";
          });
        } else {
          // ---------------------Guardar los datos en la sesión---------------------

          /*Utilizamos el objeto sessionStorage, el cual almacena temporalmente datos en el lado del cliente (en nuestro caso, el nombre de usuario y 
            los permisos del Admin)
           cuando la sesión en el navegador esté activada. Si se cierran als pestañas, se perderán los datos*/

          //El método setItem() almacena el nombre del usuario (nombreUsuario) con la clave "nombreUsuario"

          //Guardamos el nombre de usuario del json recibido en nombreUsuario
          var nombreUsuario = data.usuario[0].nombreUsuario;
          sessionStorage.setItem("nombreUsuario", nombreUsuario);
          var idUsuario = data.usuario[0].idUsuario;
          sessionStorage.setItem("idUsuario", idUsuario);

          

          var permisosAdmin = data.usuario[0].admin;
          console.log("Permisos de administrador:", permisosAdmin);
          console.log(data.usuario[0]); 
          if (data.usuario[0].admin === "1") {
            //Entrar como administrador si el campo admin vale 1
            sessionStorage.setItem("permisosAdmin", permisosAdmin);
            window.location.href = "./Vista/VistaUsuario/paneldecontrol.php";
          } else {
            sessionStorage.setItem("permisosAdmin", permisosAdmin);
            window.location.href = "./Vista/VistaUsuario/inicio.php";
          }
        }
      });
  });
});
