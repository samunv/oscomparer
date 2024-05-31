window.addEventListener("DOMContentLoaded", function () {
  //Marcar el texto de inicio del nav cuando se esté en esta página
  let liInicio = document.getElementById("li-inicio");
  liInicio.style.fontWeight = "bold";

  let seccionPrincipal = document.getElementById("seccion-principal");

  let res;

  // Realiza una solicitud
  fetch("./../../Controlador/paginainfocontrolador.php")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      res = data; // Almacena la respuesta en la variable res
      console.log(res);
      //Llamamos a las funciones para pasarles res como parámetro
      imprimirContenedores(res);
      imprimirCeldas(res, "Android 14", "iOS 17", "PS5 OS", "Xbox OS 21H2");
      imprimirTop(res);
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
    });

  //Función para imprimir los contenedores de los SO con los datos necesarioss
  function imprimirContenedores(datos) {
    let html = "";

    for (let i = 0; i < 6; i++) {
      html += "<div class='contenedores' id='contenedor" + i + "'>";
      html += "<h3>" + datos[i].nombre + "</h3>";
      html += "<div id='info-detallada" + i + "' >";
      html += "<p>Desarrollador: " + datos[i].fabricante + "</p>";
      html += "<p>Arquitectura: " + datos[i].arquitectura + "</p>";
      html += "<p>Comunidad: " + datos[i].comunidad + " Mill.</p>";
      html += "<p>Seguridad: " + datos[i].seguridad + "</p>";
      html += "<p>Versión: " + datos[i].version + "</p>";
      html += "<p>Dispositivos: " + datos[i].dispositivos + "</p>";
      html += "<p>Gratis: " + datos[i].gratis + "</p>";
      html += "</div>";
      console.log(datos[i].imagen);
      html +=
        "<img src='" +
        datos[i].imagen +
        "' id='imagen" +
        i +
        "' class='imagenes' width='90' height='90'/>";
      html += "<div class='contenedor-comentarios-comparar'>";
      html +=
        "<div id='comparar" +
        i +
        "' class='comparar'><a href='../VistaUsuario/comparar.php#" +
        datos[i].dispositivos +
        "'><img src='../img/flechas-repetir (3).png' alt='' width='25' height='25' title='comparar'></a></div>";
      html += "</div>";
      html += "</div>";
    }
    seccionPrincipal.innerHTML = html;
  }

  //Imprimir las celdas de las tablas de cada SO
  function imprimirCeldas(datos, nombre1, nombre2, nombre3, nombre4) {
    let tr1 = document.getElementById("tr-1");
    let tr2 = document.getElementById("tr-2");
    let tr3 = document.getElementById("tr-3");
    let tr4 = document.getElementById("tr-4");

    let html = "";
    let html2 = "";
    let html3 = "";
    let html4 = "";

    for (let i = 0; i < datos.length; i++) {
      if (datos[i].nombre === nombre1) {
        //Imprimir datos de android
        let soEncontrado1 = datos[i];

        html += "<td>" + soEncontrado1.seguridad + "</td>";
        html += "<td>" + soEncontrado1.comunidad + "Mill.</td>";
        html += "<td>" + soEncontrado1.version + "</td>";
        html += "<td>" + soEncontrado1.gratis + "</td>";
      } else if (datos[i].nombre === nombre2) {
        //Imprimir datos de iOS
        let soEncontrado2 = datos[i];

        html2 += "<td>" + soEncontrado2.seguridad + "</td>";
        html2 += "<td>" + soEncontrado2.comunidad + "Mill.</td>";
        html2 += "<td>" + soEncontrado2.version + "</td>";
        html2 += "<td>" + soEncontrado2.gratis + "</td>";
      } else if (datos[i].nombre === nombre3) {
        //Imprimir datos de PS5 os
        let soEncontrado3 = datos[i];

        html3 += "<td>" + soEncontrado3.seguridad + "</td>";
        html3 += "<td>" + soEncontrado3.comunidad + "Mill.</td>";
        html3 += "<td>" + soEncontrado3.version + "</td>";
        html3 += "<td>" + soEncontrado3.gratis + "</td>";
      } else if (datos[i].nombre === nombre4) {
        //Imprimir datos de Xbox os
        let soEncontrado4 = datos[i];

        html4 += "<td>" + soEncontrado4.seguridad + "</td>";
        html4 += "<td>" + soEncontrado4.comunidad + "Mill.</td>";
        html4 += "<td>" + soEncontrado4.version + "</td>";
        html4 += "<td>" + soEncontrado4.gratis + "</td>";
      }
    }

    tr1.innerHTML = html;
    tr2.innerHTML = html2;
    tr3.innerHTML = html3;
    tr4.innerHTML = html4;
  }

  //Función para imprimir el top de SO
  function imprimirTop(datos) {
    let cajaTop = document.getElementById("datos-top-so");
    let html = "<table id='tabla-top'>";

    //El método sort() modifica el array datos, para ordenarlo, en este caso, de mayor a menor tomando en cuenta
    //el valor de la comunidad de cada SO.
    //En él creamos una función de comparación, comparando a y b, que son dos objetos del array.
    //SE realiza la comparación entre dos objetos del array, recorriendolo entero, y por tanto, colocandolos en orden de mayor a menor
    datos.sort(function (a, b) {
      return b.comunidad - a.comunidad;
    });

    html += "<tr>";
    //Imprimir las imágenes
    for (let i = 0; i < 3; i++) {
      if (datos[i].comunidad >= 1000) {
        html +=
          "<td><img src='" +
          datos[i].imagen +
          "' alt='so-top' title='" +
          datos[i].nombre +
          "' width='100' height='100' class='imagenes-top'></td>";
      }
    }
    html += "</tr>";

    html += "<tr>";
    //Imprimir el texto
    for (var i = 0; i < 3; i++) {
      if (datos[i].comunidad >= 1000) {
        html +=
          "<td> Top " +
          (i + 1) +
          " <br>" +
          datos[i].nombre +
          "<br>" +
          datos[i].comunidad +
          " Mill.</td>";
      }
    }
    html += "</tr>";

    html += "</table>";
    cajaTop.innerHTML = html;
  }

  //Carrusel
  //Crear un array con las imagenes
  var imagenes = [
    "../img/iOS.png",
    "../img/PS4 OS.png",
    "../img/Ubuntu.png",
    "../img/WINDOWS.png",
  ];

  var carruselActivo = true; // Variable para ver si el carrusel está activo

  var indiceImagenActual = 0; //Establecer el índice en 0

  var img = document.getElementById("foto-carrusel");

  // Llamar a la función CambiarImagen cada 5 segundos
  setInterval(cambiarImagen, 5000);

  // Función para cambiar la imagen del carrusel
  function cambiarImagen() {
    if (carruselActivo) {
      // Cambiamos la imagen a la del indice actual
      img.src = imagenes[indiceImagenActual];

      // Se actualiza el índice de la imagen actual
      indiceImagenActual++;

      // Si el índice es igual al tamaño del array, lo reiniciamos a 0
      if (indiceImagenActual == imagenes.length) {
        indiceImagenActual = 0;
      }
    }
  }

  //Mostrar los detalles de las secciones cuadradas
  //Secciones
  let seccionAndroid = document.getElementById("seccionAndroid");
  let seccionOculta1 = document.getElementById("seccionAndroid-oculta");

  let seccionIos = document.getElementById("seccioniOS");
  let seccionOculta2 = document.getElementById("seccioniOS-oculta");

  let seccionPS5 = document.getElementById("seccionPS5");
  let seccionOculta3 = document.getElementById("seccionPS5-oculta");

  let seccionXbox = document.getElementById("seccionXbox");
  let seccionOculta4 = document.getElementById("seccionXbox-oculta");

  //Botones
  let btnAndroid = document.getElementById("btn-Android");
  let btnOculto1 = document.getElementById("btnoculto1");

  let btnIos = document.getElementById("btn-iOS");
  let btnOculto2 = document.getElementById("btnoculto2");

  let imgPS4 = document.getElementById("imagen-ps5");
  let btnOculto3 = document.getElementById("btnoculto3");

  let imgXbox = document.getElementById("imagen-xbox");
  let btnOculto4 = document.getElementById("btnoculto4");

  //Eventos
  btnAndroid.addEventListener("click", function () {
    seccionAndroid.style.display = "none";
    seccionOculta1.style.display = "block";
  });

  btnIos.addEventListener("click", function () {
    seccionIos.style.display = "none";
    seccionOculta2.style.display = "block";
  });

  imgPS4.addEventListener("click", function () {
    seccionPS5.style.display = "none";
    seccionOculta3.style.display = "block";
  });

  imgXbox.addEventListener("click", function () {
    seccionXbox.style.display = "none";
    seccionOculta4.style.display = "block";
  });

  btnOculto1.addEventListener("click", function () {
    seccionAndroid.style.display = "flex";
    seccionOculta1.style.display = "none";
  });

  btnOculto2.addEventListener("click", function () {
    seccionIos.style.display = "flex";
    seccionOculta2.style.display = "none";
  });

  btnOculto3.addEventListener("click", function () {
    seccionPS5.style.display = "block";
    seccionOculta3.style.display = "none";
  });

  btnOculto4.addEventListener("click", function () {
    seccionXbox.style.display = "block";
    seccionOculta4.style.display = "none";
  });
});
