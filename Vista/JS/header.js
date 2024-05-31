window.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("menu");
  let navMovil = document.getElementById("nav-movil");
  let navActivo = false;


  menu.addEventListener("click", function () {
    if (!navActivo) {
      navMovil.style.display = "flex";
      navActivo = true;
    } else if (navActivo) {
      navMovil.style.display = "none";
      navActivo = false;
    }
  });

  // Obtener el nombre del usuario que ha iniciado sesión con el método getItem del objeto sessionStorage
  var nombreUsuario = sessionStorage.getItem("nombreUsuario");
  var permisosAdmin = sessionStorage.getItem("permisosAdmin");

  let iconoUsuario = document.getElementById("icono-usuario"); 

  // Mostrar el nombre de usuario en el HTML
  let nombreUsuarioHtml = document.getElementById("nombre-usuario");
  nombreUsuarioHtml.innerHTML = nombreUsuario;

  let pestanaSesion = document.getElementById("pestana-cerrar-sesion");
  let pestanaActiva = false;

  let cajaSesion = document.getElementById("sesionusuario");
  let enlacePanelOculto = document.getElementById("enlace-panel-oculto");

  enlacePanelOculto.style.display = "none";

  console.log("permisosAdmin: ", permisosAdmin, permisosAdmin === "1"); 
  if (permisosAdmin === "1") {
    enlacePanelOculto.style.display = "block"; 
    iconoUsuario.src = "../img/iconoAdmin.png"; 
  } else if(permisosAdmin !== "1" && (permisosAdmin === "0" || permisosAdmin === null)){
    enlacePanelOculto.style.display = "none";
  }

  cajaSesion.addEventListener("click", function () {
    if (!pestanaActiva) {
      pestanaSesion.style.display = "flex";
      pestanaActiva = true;
    } else if (pestanaActiva) {
      pestanaSesion.style.display = "none";
      pestanaActiva = false;
    }
  });

  let cerrarSesion = document.getElementById("cerrar-sesion");

  cerrarSesion.addEventListener("click", function () {
    // Confirmar si el usuario realmente quiere cerrar la sesión
    if (confirm("¿Estás seguro de que quieres cerrar la sesión?")) {
      cerrar();
    }
  });

  function cerrar() {
    // verificar si el nombre de usuario existe en sessionStorage
    if (nombreUsuario) {
      // eliminar el nombre de usuario
      sessionStorage.removeItem("nombreUsuario");
      // eliminar los permisos de admin
      sessionStorage.removeItem("permisosAdmin");
      // limpiar el html del nombre del usuario
      nombreUsuarioHtml.innerHTML = "";
      window.location.href = "../../index.php";

      console.log("Sesión cerrada");
    } else {
      console.log("No se encontró un nombre de usuario en la sesión");
    }
  }

});
