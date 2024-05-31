window.addEventListener("DOMContentLoaded", function () {
  //Obtener el formulario
  let formulario = document.getElementById("formulario-subida");

  formulario.addEventListener("submit", function (e) {
    //Prevenir la recarga de la página al hacer submit
    e.preventDefault();

    //Crear un objeto datos de la clase FormData y pasar el formulario como parámetro
    let datos = new FormData(formulario);

    //Realizar una solicitud al controlador con el método post
    fetch("./../../Controlador/subircontrolador.php", {
      method: "POST",
      body: datos,
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        alert(data);
        //Volver a la página del panel de control después de recibir la respuesta
        window.location.href = "./../VistaUsuario/paneldecontrol.php";
      });
  });
});
