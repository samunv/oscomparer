window.addEventListener("DOMContentLoaded", function () {
  //Si estamos en buscar, poner en negrita el enlace del nav
  let liBuscar = document.getElementById("li-buscar");
  liBuscar.style.fontWeight = "bold";

  const seccionPrincipal = document.getElementById("seccion-principal");

  let res; // Variable para almacenar la respuesta

  // Realiza una solicitud
  fetch("./../../Controlador/paginainfocontrolador.php")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      res = data; // Almacena la respuesta en la variable res
      console.log(res);
      imprimirContenedores(res);
      filtrarMoviles(res);
      filtrarOrdenadores(res);
      filtrarConsolas(res);
      filtrarTv(res);
      filtrarCoches(res);
      filtrarGratis(res);
      filtrarDePago(res);
      filtrarTodo(res);
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
    });

  function imprimirContenedores(datos) {
    let html = "";
    let contadorResultados = 0;

    for (let i = 0; i < datos.length; i++) {
      html += "<div class='contenedores'>";
      html += "<h3 id='nombre'>" + datos[i].nombre + "</h3>";
      html += "<div id='info-detallada" + i + "' >";
      html += "<p>Desarrollador: " + datos[i].fabricante + "</p>";
      html += "<p>Arquitectura: " + datos[i].arquitectura + "</p>";
      html += "<p>Comunidad: " + datos[i].comunidad + " Mill.</p>";
      html += "<p>Seguridad: " + datos[i].seguridad + "</p>";
      html += "<p>Versión: " + datos[i].version + "</p>";
      html += "<p>Dispositivos: " + datos[i].dispositivos + "</p>";
      html += "<p>Gratis: " + datos[i].gratis + "</p>";
      html += "</div>";
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
      contadorResultados++;
    }
    if (contadorResultados === 0) {
      vaciarTextoResultados(); 
      //Cuando el contadorResultados sea igual que 0, imprimirá lo siguiente:

      html += "<div class='no-resultados'>";
      html += "<p>Vaya... No encontramos el SO que buscas</p>";
      html +=
        "<img src='../img/triste.png' width='100' height='100' id='img-no-resultados'/>";
      html += "</div>";
    } 
    
    seccionPrincipal.innerHTML = html;
  }

  // BUSCADOR
  const buscador = document.getElementById("buscador");
  buscador.addEventListener("input", function () {
    const btnBuscar = document.getElementById("btn-buscar");
    btnBuscar.addEventListener("click", function (e) {
      //Buscar al hacer click en el icono de buscar
      e.preventDefault(); //evitar recarga de la página
      buscar(res);
       
    });
  });

  function buscar(datos) {
    //Obtener el valor del input del buscador en minúsculas
    const textoEntrada = buscador.value.toLowerCase();

    // Buscar los datos comprobando que coincida el textoEntrada con el nombre de los SO

    if(textoEntrada!=""){
      const datosEncontrados = []; // Inicializamos como array vacío

    for (const sistemaOperativo of datos) {
      //datos es un array al que le asignamos a cada objeto la variable sistemaOperativo
      if (sistemaOperativo.nombre.toLowerCase().includes(textoEntrada)) {
        //Si el nombre del SO en minúsculas, incluye el texto de entrada, añadir el SO al array de datosEncontrados
        //con el método push
        datosEncontrados.push(sistemaOperativo);
        imprimirTextoResultados(textoEntrada); 
      }
    }

    //Imprimir los contenedores de los SO encontrados
    imprimirContenedores(datosEncontrados);
    }
    
  }


  //Función para imprimir el texto de los resultados filtrados
  function imprimirTextoResultados(texto) {
    let cajaResultados = document.getElementById("resultados");
    let html = "<p>Filtrados por: "+texto+"</p>";
    cajaResultados.innerHTML = html; 
  }

  //Función para vaciar el texto
  function vaciarTextoResultados(){
    let cajaResultados = document.getElementById("resultados");
    cajaResultados.innerHTML = ""; 
  }

  //Filtrar so de móviles
  function filtrarMoviles(datos) {
    let iconoMovil = document.getElementById("icono-movil");
    iconoMovil.addEventListener("click", function () {
      let moviles = []; // Guardar los datos de los móviles en el array vacío
      for (let i = 0; i < datos.length; i++) {
        //recorrer todos los datos
        if (datos[i].dispositivos.toLowerCase() === "móviles") {
          //cuando los dispositivos de los datos sean Móviles:
          moviles.push(datos[i]); // Añadir los datos al array mientras pertenezcan a los móviles
          imprimirContenedores(moviles);
          imprimirTextoResultados(datos[i].dispositivos); 
        }
      }
    });
  }

  //Aplicar la misma lógica de filtrado de so de móviles a los demás filtros
  function filtrarOrdenadores(datos) {
    let iconoPc = document.getElementById("icono-pc");
    iconoPc.addEventListener("click", function () {
      let ordenadores = [];
      for (let i = 0; i < datos.length; i++) {
        if (datos[i].dispositivos.toLowerCase() === "ordenadores") {
          ordenadores.push(datos[i]);
          imprimirContenedores(ordenadores);
          imprimirTextoResultados(datos[i].dispositivos); 
        }
      }
    });
  }

  function filtrarConsolas(datos) {
    let iconoConsola = document.getElementById("icono-consola");
    iconoConsola.addEventListener("click", function () {
      let consolas = [];
      for (let i = 0; i < datos.length; i++) {
        if (datos[i].dispositivos.toLowerCase() === "consola") {
          consolas.push(datos[i]);
          imprimirContenedores(consolas);
          imprimirTextoResultados(datos[i].dispositivos); 
        }
      }
    });
  }

  function filtrarTv(datos) {
    let iconoTv = document.getElementById("icono-tv");
    iconoTv.addEventListener("click", function () {
      let tvs = [];
      for (let i = 0; i < datos.length; i++) {
        if (datos[i].dispositivos.toLowerCase() === "tv") {
          tvs.push(datos[i]);
          imprimirContenedores(tvs);
          imprimirTextoResultados(datos[i].dispositivos); 
        }
      }
    });
  }

  function filtrarCoches(datos) {
    let iconoCoche = document.getElementById("icono-coche");
    iconoCoche.addEventListener("click", function () {
      let coches = [];
      for (let i = 0; i < datos.length; i++) {
        if (datos[i].dispositivos.toLowerCase() === "coches") {
          coches.push(datos[i]);
          imprimirContenedores(coches);
          imprimirTextoResultados(datos[i].dispositivos); 
        }
      }
    });
  }

  function filtrarGratis(datos) {
    let iconoGratis = document.getElementById("icono-gratis");
    iconoGratis.addEventListener("click", function () {
      let soGratis = [];
      for (let i = 0; i < datos.length; i++) {
        if (datos[i].gratis.toLowerCase() === "si") {
          soGratis.push(datos[i]);
          imprimirContenedores(soGratis);
          imprimirTextoResultados("SO Gratis"); 
        }
      }
    });
  }

  function filtrarDePago(datos) {
    let iconoPago = document.getElementById("icono-de-pago");
    iconoPago.addEventListener("click", function () {
      let soDePago = [];
      for (let i = 0; i < datos.length; i++) {
        if (datos[i].gratis.toLowerCase() === "no") {
          soDePago.push(datos[i]);
          imprimirContenedores(soDePago);
          imprimirTextoResultados("SO de Pago"); 
        }
      }
    });
  }

  function filtrarTodo(datos) {
    let todos = document.getElementById("icono-de-todo");

    todos.addEventListener("click", function () {
      imprimirContenedores(datos);
      imprimirTextoResultados("Todos los SO"); 
    });
  }
});
