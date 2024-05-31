window.addEventListener("DOMContentLoaded", function () {
  //Obtener el formulario
  let formularioRegistro = document.getElementById("formularioRegistro");

  formularioRegistro.addEventListener("submit", function (e) {
    // Evitar la recarga de la página al hacer submit
    e.preventDefault();

    //Crear un objeto datos de la clase FormData con los datos del formulario como parámetro
    let datos = new FormData(formularioRegistro);

    //Enviar los datos al controlador mediante Post
    fetch("./Controlador/registrocontrolador.php", {
      method: "POST",
      body: datos,
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        if (data.registro) {
          //Si se recibe el texto "registrado", llevar al login para poder iniciar sesión
          window.location.href = "index.php";
        }
      });
  });
});
