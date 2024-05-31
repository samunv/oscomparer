window.addEventListener("DOMContentLoaded", function () {
  //Obtener todos los parámetros del SO enviados a la URL utilizando el método get() de la clase URLSearchParams

  var nombreUsuario = new URLSearchParams(window.location.search).get(
    "nombreUsuario"
  );

  var idUsuario = new URLSearchParams(window.location.search).get("idUsuario");

  let imprimirNombre = document.getElementById("nombre-del-usuario");
  imprimirNombre.innerHTML = nombreUsuario;

  let inputIdUsuario = document.getElementById("input-idUsuario");
  inputIdUsuario.value =  idUsuario; 

  //Obtener el formulario
  let formulario = document.getElementById("formulario-actualizar");

  formulario.addEventListener("submit", function (e) {
    //Evitar que la página se recargue
    e.preventDefault();

    // crear un objeto datos de la clase FormData pasando como parámetro los datos del formulario
    let datos = new FormData(formulario);
    console.log("DATOS:", datos.body);

    //Enviar datos utilizando Post
    fetch("/Controlador/actualizarusuariocontrolador.php", {
      method: "POST",
      body: datos,
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        window.location.href = "paneldecontrol.php";
      });
  });
});
