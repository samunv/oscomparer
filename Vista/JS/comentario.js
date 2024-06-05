window.addEventListener("DOMContentLoaded", function () {

  let liComentarios = document.getElementById("li-comentarios");
  liComentarios.style.fontWeight = "bold";

  //Obtener los valores del usuario guardados la sesión
  var idUsuario = sessionStorage.getItem("idUsuario");
  var nombreUsuario = sessionStorage.getItem("nombreUsuario");
  var permisosAdmin = sessionStorage.getItem("permisosAdmin");

  // Obtener los input y cambiar su valor, para posteriormente enviarlo como un dato
  var inputIdUsuario = document.getElementById("input-idUsuario");
  inputIdUsuario.value = idUsuario;

  var inputNombreUsuario = document.getElementById("input-nombreUsuario");

  //Verificar si los permisos de admin valen 1
  if (permisosAdmin === "1") {
    // Si valen 1, guardar su nombre con el texto (Administrador)
    inputNombreUsuario.value = nombreUsuario + " (Administrador)";
  } else {
    //Si no es 1, guardar solo el nombre
    inputNombreUsuario.value = nombreUsuario;
  }

  let formulario = document.getElementById("formulario-comentario");
  let seccionComentarios = document.getElementById("seccion-comentarios");

  //Al hacer submit en el formulario, enviar los datos
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // crear un objeto FormData para guardar los datos del formulario
    let datos = new FormData(formulario);
    console.log("Funciona"); 

    //Utilizar fetch para enviar los datos con el método post al controlador
    fetch("./../../Controlador/subircomentariocontrolador.php", {
      method: "POST",
      body: datos,
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log("DATA: ", data);
        //recargar la página
        window.location.href = "comentarios.php";
      });
  });

  let res;

  // Realizar una solicitud para obtener los comentarios
  fetch("./../../Controlador/comentarioscontrolador.php")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      res = data; // Almacena la respuesta en la variable res
      console.log(res);

      imprimirComentarios(res);

      //Llamamos a las funciones para pasarles res como parámetro
    });

  function imprimirComentarios(datos) {
    let html = "";

    //Imprimir los comentarios del último al primero, para imprimir los últimos comentarios al principio
    //Para ello se recorren de forma inversa.
    //i es igual que la longitud de los datos - 1 para comenzar desde el índice del último elemento.
    // Luego, en la condición, i debe ser mayor o igual que 0.
    //Por último, i irá disminuyendo de uno en uno.
    for (let i = datos.length - 1; i >= 0; i--) {
      html += "<div class='comentarios'>";
      html +=
        "<h3 id='nombre-del-usuario" +
        i +
        "'>" +
        datos[i].nombreUsuario +
        "</h3>";
      html += "<p>" + datos[i].contenido + "<p>";
      html += "</div>";
    }

    seccionComentarios.innerHTML = html;
  }

  
});
