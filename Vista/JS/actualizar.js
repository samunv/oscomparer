window.addEventListener("DOMContentLoaded", function () {
  //Obtener todos los parámetros del SO enviados a la URL utilizando el método get() de la clase URLSearchParams
  var idSO = new URLSearchParams(window.location.search).get("idSO");
  var nombre = new URLSearchParams(window.location.search).get("nombre");
  var fabricante = new URLSearchParams(window.location.search).get(
    "fabricante"
  );
  var arquitectura = new URLSearchParams(window.location.search).get(
    "arquitectura"
  );
  var imagen = new URLSearchParams(window.location.search).get("imagen");
  var gratis = new URLSearchParams(window.location.search).get("gratis");
  var dispositivos = new URLSearchParams(window.location.search).get(
    "dispositivos"
  );



  let imprimirNombre = document.getElementById("nombre-del-so");
  imprimirNombre.innerHTML = nombre;

  //Obtener los input de cada dato, para cambiar su valor, al valor proporcionado en la url
  let inputIdSo = document.getElementById("input-idSO");
  inputIdSo.value = idSO;
  let inputNombre = document.getElementById("input-nombre");
  inputNombre.value = nombre;
  let inputFabricante = document.getElementById("input-fabricante");
  inputFabricante.value = fabricante;
  let inputArquitectura = document.getElementById("input-arquitectura");
  inputArquitectura.value = arquitectura;
  let inputImagen = document.getElementById("input-imagen");
  inputImagen.value = imagen;
  let inputGratis = document.getElementById("input-gratis");
  inputGratis.value = gratis;
  let inputDispositivos = document.getElementById("input-dispositivos");
  inputDispositivos.value = dispositivos;


  //Obtener el formulario
  let formulario = document.getElementById("formulario-actualizar");

  console.log(imagen);

  formulario.addEventListener("submit", function (e) {
    //Evitar que la página se recargue
    e.preventDefault();

    // crear un objeto datos de la clase FormData pasando como parámetro los datos del formulario
    let datos = new FormData(formulario);
    console.log(datos);

    //Enviar datos utilizando Post
    fetch("./../../Controlador/actualizarcontrolador.php", {
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
