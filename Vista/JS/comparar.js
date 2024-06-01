window.addEventListener("DOMContentLoaded", function () {
  //Marcar el texto del nav cuando se esté en la página de comparar
  let liComparar = document.getElementById("li-comparar");
  liComparar.style.fontWeight = "bold";

  //Obtener el botón subir
  let btnSubir = document.getElementById("btn-subir");
  //Ocultar el botón de subir
  btnSubir.style.display = "none";

  //Asignación de variables de las secciones en las que se van a imprimir datos
  let seccionMoviles = document.getElementById("seccion-moviles");
  let seccionOrdenadores = document.getElementById("seccion-ordenadores");
  let seccionConsolas = document.getElementById("seccion-consolas");
  let seccionTv = document.getElementById("seccion-tv");
  let seccionCoches = document.getElementById("seccion-coches");

  let res; // Variable para almacenar la respuesta

  fetch("./../../Controlador/compararcontrolador.php")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      res = data; // Almacena la respuesta en la variable res
      console.log(res);
      //Lamar a los métodos que van a utilizar los datos del json para poder pasar res como parámetro
      imprimirMoviles(res);
      imprimirOrdenadores(res);
      imprimirConsolas(res);
      imprimirTv(res);
      imprimirCoches(res);
      //Pasar como parámetro el nombre del dispositivo para la lógica de selección
      elegirSO(res, "Móviles");
      elegirSO(res, "Ordenadores");
      elegirSO(res, "Consola");
      elegirSO(res, "TV");
      elegirSO(res, "Coches");
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
    });

  //Función para elegir los so y poder compararlos
  //Tomar los datos (res) y dispositivo como parámetros
  function elegirSO(datos, dispositivo) {
    let seleccionados = []; // Array para guardar los dispositivos seleccionados

    //Obtener el boton de comparar para poder habilitar o deshabilitarlo según la lógica de selección
    let btnComparar = document.getElementById("btn-comparar-" + dispositivo);
    //Deshabilitar el botón
    btnComparar.disabled = true;

    for (let i = 0; i < datos.length; i++) {
      //obtener los datos recorridos según su dispositivo
      if (datos[i].dispositivos === dispositivo) {
        let contenedor = document.getElementById("contenedor" + i);

        contenedor.addEventListener("click", function seleccionar() {
          //Al hacer click en un contenedor, verificar si ya está seleccionado o no
          if (seleccionados.includes(datos[i])) {
            // Si el so ya está seleccionado, lo deseleccionamos quitando el estilo de selección
            contenedor.style.borderWidth = "";
            contenedor.style.borderStyle = "";
            contenedor.style.borderColor = "";
            btnComparar.disabled = true;

            // Para eliminar los SO seleccionados:
            seleccionados = seleccionados.filter(function (so) {
              // La función filter recorre cada elemento del array 'seleccionados'
              // Para cada elemento 'so', se realiza esta función
              // 'so' representa un sistema operativo en 'seleccionados'

              return so !== datos[i];
              // La función devuelve 'true' si 'so' es diferente al sistema operativo 'datos[i]'.
              // De lo contrario, devuelve 'false'.

            });
          } else if (seleccionados.length < 2) {
            // Si aún no se han seleccionado dos so, seleccionamos este
            contenedor.style.borderWidth = "2px"; // Grosor del borde
            contenedor.style.borderStyle = "solid"; // Estilo del borde
            contenedor.style.borderColor = "#0071e3"; // Color del borde
            seleccionados.push(datos[i]); // Añadimos los datos del so al array de seleccionados
            btnComparar.disabled = true;
          } else {
            alert(
              "Solo se pueden elegir dos dispositivos. Deselecciona uno de los dispositivos elegidos."
            );
          }

          //Si el botón de comparar está deshabilitado, llamar a la función desactivarBoton() para aplicar los estilos necesarios
          if (btnComparar.disabled) {
            desactivarBoton(btnComparar);
          } else if (!btnComparar.disabled) {
            // Si el botón no esta deshabilitado, llamar a al función activarBoton() para aplicar los estilos del botón activado
            activarBoton(btnComparar);
          }

          if (seleccionados.length === 2) {
            // Si se han seleccionado 2 so, llamar a comparar y habilitar el botón de comparar
            btnComparar.disabled = false;

            // Aplicar la lógica del botón de nuevo
            if (btnComparar.disabled) {
              desactivarBoton(btnComparar);
            } else if (!btnComparar.disabled) {
              activarBoton(btnComparar);
            }

            //Cuando se haga click en el botón de comparar, llamar a la función comparar()
            btnComparar.addEventListener("click", function () {
              // pasar seleccionados[0] y seleccionados[1] como parámetros a comparar(), ya que son los so a comparar
              comparar(seleccionados[0], seleccionados[1]);
            });
          }
        });
      }
    }
  }


  
  
  //Función para aplicar los estilos al botón desactivado
  function desactivarBoton(btnComparar) {

    btnComparar.style.color = "";
    btnComparar.style.backgroundColor = "";
    btnComparar.style.border = "";
    btnComparar.style.borderRadius = "";
    btnComparar.style.padding = "";
    btnComparar.style.width = "";
    btnComparar.style.transition = "";
    btnComparar.style.cursor = "";
    btnComparar.style.fontSize = "";
    

    //Al pasar el ratón por encima, no se aplicará otro estilo al anterior
    btnComparar.addEventListener("mouseover", function () {
      btnComparar.style.backgroundColor = "";
      btnComparar.style.color = "";
      
    });
    //Al quitar el ratón de encima, seguirán los estilos anteriores
    btnComparar.addEventListener("mouseout", function () {
      btnComparar.style.backgroundColor = "";
      btnComparar.style.color = "";
      
    });
  }

  //Función para aplicar los estilos al botón activado
  function activarBoton(btnComparar) {


    btnComparar.style.color = "white";
    btnComparar.style.backgroundColor = "#0071e3";
    btnComparar.style.border = "1px solid #0071e3";
    btnComparar.style.borderRadius = "30px";
    btnComparar.style.padding = "10px 30px";
    btnComparar.style.width = "200px";
    btnComparar.style.transition = "all 0.5s ease";
    btnComparar.style.cursor = "pointer";
    btnComparar.style.fontSize = "18px";

    // Al pasar el ratón por encima, aplicar estilos
    btnComparar.addEventListener("mouseover", function () {
      btnComparar.style.backgroundColor = "transparent";
      btnComparar.style.color = "#0071e3";
    });

    //Al quitar el ratón de encima, aplicar otros estilos
    btnComparar.addEventListener("mouseout", function () {
      btnComparar.style.backgroundColor = "#0071e3";
      btnComparar.style.color = "white";
    });
  }

  // Función para imprimir los so de móviles
  function imprimirMoviles(datos) {
    let html = "";

    for (let i = 0; i < datos.length; i++) {
      if (datos[i].dispositivos === "Móviles") {
        html += "<div class='contenedores' id='contenedor" + i + "'>";
        html += "<h3>" + datos[i].nombre + "</h3>";
        html += "<div class='info-detallada'>";
        html += "<p>Desarrollador: " + datos[i].fabricante + "</p>";
        html += "<p>Arquitectura: " + datos[i].arquitectura + "</p>";
        html += "<p>Comunidad: " + datos[i].comunidad + " Mill.</p>";
        html += "<p>Seguridad: " + datos[i].seguridad + "</p>";
        html += "<p>Versión: " + datos[i].version + "</p>";
        html += "<p>Dispositivos: " + datos[i].dispositivos + "</p>";
        html += "<p>Gratis: " + datos[i].gratis + "</p>";
        html += "</div>";
        html +=
          "<div class='seccion-imagenes'><img src='" +
          datos[i].imagen +
          "' id='imagen" +
          i +
          "' class='imagenes' width='90' height='90'/>";
          html +="<img src='../img/masazul.png' alt='' height='35' width='35' class='icono-anadir'></div>";
       html += "</div>";
      }
    }

    seccionMoviles.innerHTML = html;
  }

  // Función para imprimir los so de ordenadores
  function imprimirOrdenadores(datos) {
    let html = "";

    for (let i = 0; i < datos.length; i++) {
      if (datos[i].dispositivos === "Ordenadores") {
        html += "<div class='contenedores' id='contenedor" + i + "'>";
        html += "<h3>" + datos[i].nombre + "</h3>";
        html += "<div class='info-detallada' >";
        html += "<p>Desarrollador: " + datos[i].fabricante + "</p>";
        html += "<p>Arquitectura: " + datos[i].arquitectura + "</p>";
        html += "<p>Comunidad: " + datos[i].comunidad + " Mill.</p>";
        html += "<p>Seguridad: " + datos[i].seguridad + "</p>";
        html += "<p>Versión: " + datos[i].version + "</p>";
        html += "<p>Dispositivos: " + datos[i].dispositivos + "</p>";
        html += "<p>Gratis: " + datos[i].gratis + "</p>";
        html += "</div>";
        html +=
        "<div class='seccion-imagenes'><img src='" +
        datos[i].imagen +
        "' id='imagen" +
        i +
        "' class='imagenes' width='90' height='90'/>";
        html +="<img src='../img/masazul.png' alt='' height='35' width='35' class='icono-anadir'></div>";
       html += "</div>";
      }
    }

    seccionOrdenadores.innerHTML = html;
  }

  // Función para imprimir los so de consolas
  function imprimirConsolas(datos) {
    let html = "";

    for (let i = 0; i < datos.length; i++) {
      if (datos[i].dispositivos === "Consola") {
        html += "<div class='contenedores' id='contenedor" + i + "'>";
        html += "<h3>" + datos[i].nombre + "</h3>";
        html += "<div class='info-detallada' ";
        html += "<p>Desarrollador: " + datos[i].fabricante + "</p>";
        html += "<p>Arquitectura: " + datos[i].arquitectura + "</p>";
        html += "<p>Comunidad: " + datos[i].comunidad + " Mill.</p>";
        html += "<p>Seguridad: " + datos[i].seguridad + "</p>";
        html += "<p>Versión: " + datos[i].version + "</p>";
        html += "<p>Dispositivos: " + datos[i].dispositivos + "</p>";
        html += "<p>Gratis: " + datos[i].gratis + "</p>";
        html += "</div>";
        html +=
          "<div class='seccion-imagenes'><img src='" +
          datos[i].imagen +
          "' id='imagen" +
          i +
          "' class='imagenes' width='90' height='90'/>";
          html +="<img src='../img/masazul.png' alt='' height='35' width='35' class='icono-anadir'></div>";
         html += "</div>";
      }
    }

    seccionConsolas.innerHTML = html;
  }

  // Función para imprimir los so de TV
  function imprimirTv(datos) {
    let html = "";

    for (let i = 0; i < datos.length; i++) {
      if (datos[i].dispositivos === "TV") {
        html += "<div class='contenedores' id='contenedor" + i + "'>";
        html += "<h3>" + datos[i].nombre + "</h3>";
        html += "<div class='info-detallada'>";
        html += "<p>Desarrollador: " + datos[i].fabricante + "</p>";
        html += "<p>Arquitectura: " + datos[i].arquitectura + "</p>";
        html += "<p>Comunidad: " + datos[i].comunidad + " Mill.</p>";
        html += "<p>Seguridad: " + datos[i].seguridad + "</p>";
        html += "<p>Versión: " + datos[i].version + "</p>";
        html += "<p>Dispositivos: " + datos[i].dispositivos + "</p>";
        html += "<p>Gratis: " + datos[i].gratis + "</p>";
        html += "</div>";
        html +=
          "<div class='seccion-imagenes'><img src='" +
          datos[i].imagen +
          "' id='imagen" +
          i +
          "' class='imagenes' width='90' height='90'/>";
          html +="<img src='../img/masazul.png' alt='' height='35' width='35' class='icono-anadir'></div>";
        html += "</div>";
      }
    }

    seccionTv.innerHTML = html;
  }

  // Función para imprimir los so de coches
  function imprimirCoches(datos) {
    let html = "";

    for (let i = 0; i < datos.length; i++) {
      if (datos[i].dispositivos === "Coches") {
        html += "<div class='contenedores' id='contenedor" + i + "'>";
        html += "<h3>" + datos[i].nombre + "</h3>";
        html += "<div class='info-detallada'>";
        html += "<p>Desarrollador: " + datos[i].fabricante + "</p>";
        html += "<p>Arquitectura: " + datos[i].arquitectura + "</p>";
        html += "<p>Comunidad: " + datos[i].comunidad + " Mill.</p>";
        html += "<p>Seguridad: " + datos[i].seguridad + "</p>";
        html += "<p>Versión: " + datos[i].version + "</p>";
        html += "<p>Dispositivos: " + datos[i].dispositivos + "</p>";
        html += "<p>Gratis: " + datos[i].gratis + "</p>";
        html += "</div>";
        html +=
          "<div class='seccion-imagenes'><img src='" +
          datos[i].imagen +
          "' id='imagen" +
          i +
          "' class='imagenes' width='90' height='90'/>";
          html +="<img src='../img/masazul.png' alt='' height='35' width='35' class='icono-anadir'></div>";
        html += "</div>";
      }
    }

    seccionCoches.innerHTML = html;
  }

  let ventanaComparacion = document.getElementById("ventana-comparacion");

  // Función para realizar la lógica de comparación
  function comparar(so1, so2) {
    //10 Puntos por punto de seguridad:
    let seguridad1 = so1.seguridad * 15;
    let seguridad2 = so2.seguridad * 15;

    //0.5 puntos por cada millón de usuarios en la comunidad
    let comunidad1 = so1.comunidad * 0.5;
    let comunidad2 = so2.comunidad * 0.5;

    //Crear un total para cada so y sumar sus puntos
    let total1 = seguridad1 + comunidad1;
    let total2 = seguridad2 + comunidad2;

    //10 puntos si el so es gratis
    let gratis1 = 0;
    let gratis2 = 0;

    if (so1.gratis === "Si") {
      //Si el so es gratis, añadir puntos al total
      gratis1 = 10;
      total1 += gratis1;
    } else {
      //Si no lo es, añadir 0 puntos al total
      total1 += 0;
    }

    if (so2.gratis === "Si") {
      //Si el so es gratis, añadir puntos al total
      gratis2 = 10;
      total2 += gratis2;
    } else {
      //Si no lo es, añadir 0 puntos al total
      total2 += 0;
    }

    let ganador = ""; //Crear una variable para guardar los datos del so ganador

    if (total1 > total2) {
      //Si el total1 es mayor al total2, se asignará la variable ganador al so1
      ganador = so1.nombre;
    } else if (total1 < total2) {
      //Si el total2 es mayor al total1, se asignará la variable ganador al so2
      ganador = so2.nombre;
    } else if (total1 == total2) {
      //console.log("empate");
    }

    //Llamar a la función imprimirComparacion() con todos los parámetros necesarios

    imprimirComparacion(
      so1,
      so2,
      seguridad1,
      seguridad2,
      comunidad1,
      comunidad2,
      gratis1,
      gratis2,
      total1,
      total2,
      ganador
    );

    //Llamar a la función crearGráficas() con los parámetros necesarios
    crearGraficas(so1, so2, total1, total2);
  }

  function crearGraficas(so1, so2, total1, total2) {
    const miGraficoCanvas = document.getElementById("grafico").getContext("2d");

    // Crear datasets
    const datasets = [
      {
        label: so1.nombre,
        data: [total1],
        borderColor: so1.color,
        backgroundColor: so1.color,
      },
      {
        label: so2.nombre,
        data: [total2],
        borderColor: so2.color,
        backgroundColor: so2.color,
      },
    ];

    //los datos del gráfico
    const datos = {
      labels: ["Puntos"],
      datasets: datasets,
    };

    // Configuración del gráfico
    const configuracion = {
      type: "bar",
      data: datos,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };

    // Crear el gráfico
    new Chart(miGraficoCanvas, configuracion);
  }

  function imprimirComparacion(
    so1,
    so2,
    seguridad1,
    seguridad2,
    comunidad1,
    comunidad2,
    gratis1,
    gratis2,
    total1,
    total2,
    ganador
  ) {
    let html = "";

    html += "<h1>Ganador: " + ganador + "</h1>";

    //caja para todos los elementos
    html += "<div class='caja-general'>";

    //Caja para el primer SO
    html += "<div id='so1' class='cajas-so'>";
    html += "<h3>" + so1.nombre + "</h3>";
    html +=
      "<img src='" +
      so1.imagen +
      "' id='imagen1' class='imagenes' width='90' height='90'/>";
    html += "<ul>";
    html += "<li>Puntos de Seguridad: " + seguridad1 + "</li>";
    html += "<li>Puntos de Comunidad: " + comunidad1 + "</li>";
    html += "<li>Puntos por ser Gratis (si lo es): " + gratis1 + "</li>";
    html += "</ul>";
    html += "<h3>Total de puntos: " + total1 + "</h3>";
    html += "</div>";

    //Caja para el segundo SO
    html += "<div id='so2' class='cajas-so'>";
    html += "<h3>" + so2.nombre + "</h3>";
    html +=
      "<img src='" +
      so2.imagen +
      "' id='imagen2' class='imagenes' width='90' height='90'/>";
    html += "<ul>";
    html += "<li>Puntos de Seguridad: " + seguridad2 + "</li>";
    html += "<li>Puntos de Comunidad: " + comunidad2 + "</li>";
    html += "<li>Puntos por ser Gratis (si lo es): " + gratis2 + "</li>";
    html += "</ul>";
    html += "<h3>Total de puntos: " + total2 + "</h3>";
    html += "</div>";

    html +=
      "<div class='contenedor-canvas' width='400px' height='300px'><canvas id='grafico'></canvas></div>";
    html += "</div>";
    html += "<button id='btn-cerrar' type='button'>Cerrar</button>";

    ventanaComparacion.style.display = "flex";

    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    ventanaComparacion.innerHTML = html;

    //Al pulsar en cerrar, no se mostrará la ventana
    let btnCerrar = document.getElementById("btn-cerrar");
    btnCerrar.addEventListener("click", function () {
      ventanaComparacion.style.display = "none";
      overlay.style.display = "none";
    });
  }

  //Al hacer scroll hacia abajo en la página, aparecer el boton de subir
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 300) {
      btnSubir.style.display = "block";
    } else {
      btnSubir.style.display = "none";
    }
  });

 

  // Hacer scroll en el carrusel con los botones
  var contenedor = document.getElementById("carrusel-dispositivos");
  var btnScrollDerecha = document.getElementById("btn-derecha");
  var btnScrollIzquierda = document.getElementById("btn-izquierda");

  btnScrollDerecha.addEventListener("click", function () {
    var scroll = contenedor.scrollLeft;
    var nuevaPosicion = scroll + 300;
    // Hacer un scroll suave
    contenedor.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });

  btnScrollIzquierda.addEventListener("click", function () {
    var scroll = contenedor.scrollLeft;
    var nuevaPosicion = scroll - 300;
    contenedor.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });

  var btnMovilesDer = document.getElementById("btn-derecha-moviles");
  var btnMovilesIzq = document.getElementById("btn-izquierda-moviles");

  btnMovilesDer.addEventListener("click", function () {
    var scroll = seccionMoviles.scrollLeft;
    var nuevaPosicion = scroll + 600;
    seccionMoviles.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });

  btnMovilesIzq.addEventListener("click", function () {
    var scroll = seccionMoviles.scrollLeft;
    var nuevaPosicion = scroll - 600;
    seccionMoviles.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });

  var btnOrdenadresDer = document.getElementById("btn-derecha-ordenadores");
  var btnOrdenadoresIzq = document.getElementById("btn-izquierda-ordenadores");

  btnOrdenadresDer.addEventListener("click", function () {
    var scroll = seccionOrdenadores.scrollLeft;
    var nuevaPosicion = scroll + 600;
    seccionOrdenadores.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });

  btnOrdenadoresIzq.addEventListener("click", function () {
    var scroll = seccionOrdenadores.scrollLeft;
    var nuevaPosicion = scroll - 600;
    seccionOrdenadores.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });

  var btnConsolasDer = document.getElementById("btn-derecha-consolas");
  var btnConsolasIzq = document.getElementById("btn-izquierda-consolas");

  btnConsolasDer.addEventListener("click", function () {
    var scroll = seccionConsolas.scrollLeft;
    var nuevaPosicion = scroll + 600;
    seccionConsolas.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });

  btnConsolasIzq.addEventListener("click", function () {
    var scroll = seccionConsolas.scrollLeft;
    var nuevaPosicion = scroll - 600;
    seccionConsolas.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });

  var btnTvDer = document.getElementById("btn-derecha-tv");
  var btnTvIzq = document.getElementById("btn-izquierda-tv");

  btnTvDer.addEventListener("click", function () {
    var scroll = seccionTv.scrollLeft;
    var nuevaPosicion = scroll + 600;
    seccionTv.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });

  btnTvIzq.addEventListener("click", function () {
    var scroll = seccionTv.scrollLeft;
    var nuevaPosicion = scroll - 600;
    seccionTv.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });

  var btnCochesDer = document.getElementById("btn-derecha-coches");
  var btnCochesIzq = document.getElementById("btn-izquierda-coches");

  btnCochesDer.addEventListener("click", function () {
    var scroll = seccionCoches.scrollLeft;
    var nuevaPosicion = scroll + 600;
    seccionCoches.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });

  btnCochesIzq.addEventListener("click", function () {
    var scroll = seccionCoches.scrollLeft;
    var nuevaPosicion = scroll - 600;
    seccionCoches.scrollTo({
      left: nuevaPosicion,
      behavior: "smooth",
    });
  });


});
