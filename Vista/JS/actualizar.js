window.addEventListener("DOMContentLoaded", function () {

  let permisosAdmin = sessionStorage.getItem("permisosAdmin");

  devolverLogin(permisosAdmin);

  //Función para devolver al login si se accede a esta página sin permisos de administrador
  function devolverLogin(permisosAdmin){

if(permisosAdmin !== "1" && (permisosAdmin === "0" || permisosAdmin === null)){
  window.location.href = "../../index.php"; 
}
  }
  
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
  var version = new URLSearchParams(window.location.search).get(
    "version"
  );
  var comunidad = new URLSearchParams(window.location.search).get(
    "comunidad"
  );
  var seguridad = new URLSearchParams(window.location.search).get(
    "seguridad"
  );

  var color = new URLSearchParams(window.location.search).get(
    "color"
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
  let inputVersion = document.getElementById("input-version");
  inputVersion.value = version;
  let inputComunidad = document.getElementById("input-comunidad");
  inputComunidad.value = comunidad;
  let inputSeguridad= document.getElementById("input-seguridad");
  inputSeguridad.value = seguridad;
  let inputColor= document.getElementById("input-color");
  inputColor.value = color;

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
