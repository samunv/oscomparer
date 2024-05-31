window.addEventListener("DOMContentLoaded", function () {
  let seccionContenedores = document.getElementById("seccion-contenedores");
  let resDatos; // Variable para almacenar los datos
  let resUsuarios; //variable para almacenar los usuarios
  let tablaUsuarios = document.getElementById("seccion-tabla");

  let ventanaEliminar = document.getElementById("ventana-eliminar-oculta");
  let btnCancelar = document.getElementById("btn-cancelar");
  let overlay = document.getElementById("overlay");

  // Realiza una solicitud  utilizando fetch
  fetch("/Controlador/panelcontrolador.php")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      resDatos = data.datos; // Almacena la respuesta (datos) en la variable resDatos
      resUsuarios = data.usuarios; // Almacena la respuesta (usuarios) en la variable resUsuarios
      console.log(resDatos);
      imprimirContenedores(resDatos);
      eliminar(resDatos);
      actualizar(resDatos);
      imprimirTablaUsuarios(resUsuarios);
      eliminarUsuarios(resUsuarios);
      actualizarUsuario(resUsuarios);
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
    });

  // Función para imprimir los contenedores en la página
  function imprimirContenedores(datos) {
    let html = "";
    html += "<div class='contenedores' id='contenedor-subir'>";
    html += "<a href='subir.php'>";
    html +=
      "<img src='../img/foto-anadir-datos.png' alt=''>";
    html += "</a>";
    html += "</div>";

    // Itera sobre los datos para crear contenedores dinámicamente
    for (let i = datos.length - 1; i >= 0; i--) {
      html += "<div class='contenedores' id='contenedor" + i + "'>";
      html += "<h3>" + datos[i].nombre + "</h3>";
      html += "<div id='info-detallada" + i + "'>";
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
      html += "<div class='contenedor-editar'>";
      html +=
        "<div class='actualizar' id='" +
        datos[i].idSO +
        "'><img src='../img/cuadrado-de-la-pluma.png' alt='' width='30' height='30' title='editar'></div>";
      html +=
        "<div class='eliminar'><img id='" +
        datos[i].nombre +
        "' src='../img/borrar.png' alt='' width='30' height='30' title='eliminar'></div>";
      html += "</div>";
      html += "</div>";
    }
    seccionContenedores.innerHTML = html;
  }

  // Función para manejar la eliminación de contenedores
  function eliminar(datos) {
    // Agregar eventos a los iconos de eliminar
    for (let i = 0; i < datos.length; i++) {
      let iconoEliminar = document.getElementById(datos[i].nombre);
      let imprimirNombre = document.getElementById("nombre-del-elemento");

      iconoEliminar.addEventListener("click", function (e) {
        //Al pulsar en el icono de eliminar, abrir la ventana y el overlay
        ventanaEliminar.style.display = "flex";
        overlay.style.display = "block";

        //Coger el nombre del so (guardado como id del icono de eliminar), mediante el target del objeto e
        imprimirNombre.innerHTML = "" + e.target.id;

        //Pasarlo como parametro a peticionEliminar()
        peticionEliminar(e.target.id);
      });
    }

    // Cierra la ventana de confirmación de eliminación
    btnCancelar.addEventListener("click", function () {
      ventanaEliminar.style.display = "none";
      overlay.style.display = "none";
    });
  }

  // Función para realizar la petición de eliminación
  function peticionEliminar(nombreSO) {
    let btnEliminar = document.getElementById("btn-eliminar");

    btnEliminar.addEventListener("click", function () {
      //Pasar el nombre del SO mediante el método get a eliminarcontrolador
      fetch("/Controlador/eliminarcontrolador.php?nombreSO=" + nombreSO)
        .then((respuesta) => respuesta.json())
        .then(() => {
          console.log("Nombre: ", nombreSO);
          // Recargar la página del panel
          window.location.href = "paneldecontrol.php";
        })
        .catch((error) => {
          console.error("Error al eliminar:", error);
        });
    });
  }

  // Función para manejar la actualización de los SO
  function actualizar(datos) {
    for (let i = 0; i < datos.length; i++) {
      let btnActualizar = document.getElementById(datos[i].idSO);

      // Al pulsar en actualizar, enviar los datos del SO como parámetros en la URL de la pestaña
      btnActualizar.addEventListener("click", function () {
        window.location.href =
          "actualizar.php?idSO=" +
          datos[i].idSO +
          "&nombre=" +
          datos[i].nombre +
          "&arquitectura=" +
          datos[i].arquitectura +
          "&fabricante=" +
          datos[i].fabricante +
          "&dispositivos=" +
          datos[i].dispositivos +
          "&imagen=" +
          datos[i].imagen +
          "&gratis=" +
          datos[i].gratis
          +"&comunidad=" +
          datos[i].comunidad
          +"&seguridad=" +
          datos[i].seguridad
          +"&version=" +
          datos[i].version;
      });
    }
  }

  function imprimirTablaUsuarios(usuarios) {
    let html = "<table id='tabla-de-usuarios'>";
    let textoPermisos = ""; 

    // Fila de encabezado
    html += "<tr id='encabezado-tabla'>";
    html += "<td>Nombre</td>";
    html += "<td class='columnas-ocultas'>Email</td>";
    html += "<td class='columnas-ocultas'>Contraseña</td>";
    html += "<td>Permisos</td>";
    html += "<td>Actualizar</td>";
    html += "<td>Eliminar</td>";
    html += "</tr>";

    // Filas de usuarios
    for (let i = usuarios.length - 1; i >= 0; i--) {
      if(usuarios[i].admin === "1"){
        textoPermisos = "Sí"; 
      }else{
        textoPermisos = "No"; 
      }
      
      html += "<tr>";
      html += "<td>" + usuarios[i].nombreUsuario + "</td>";
      html += "<td class='filas-ocultas'>" + usuarios[i].email + "</td>";
      html += "<td class='filas-ocultas'>********</td>";
      html += "<td>" + textoPermisos + "</td>";
      html +=
        "<td><img src='../img/cuadrado-de-la-pluma.png' width='30' height='30' class='icono-actualizar' id='" +
        usuarios[i].nombreUsuario +
        "-" +
        usuarios[i].idUsuario +
        "'/></td>";
      html +=
        "<td><img id='" +
        usuarios[i].nombreUsuario +
        "' src='../img/borrar.png' alt='eliminar' width='30' height='30' class='icono-eliminar' title='eliminar'></td>";
      html += "</tr>";
    }

    html += "</table>";

    tablaUsuarios.innerHTML = html;
  }

  //Obtener el botón subir
  let btnSubir = document.getElementById("btn-subir");
  //Ocultar el botón de subir
  btnSubir.style.display = "none";

  //Al hacer scroll hacia abajo en la página, aparecer el boton de subir
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 300) {
      btnSubir.style.display = "block";
    } else {
      btnSubir.style.display = "none";
    }
  });

  // Función para manejar la eliminación de contenedores
  function eliminarUsuarios(usuarios) {
    // Agregar eventos a los iconos de eliminar
    for (let i = 0; i < usuarios.length; i++) {
      let iconoEliminar = document.getElementById(usuarios[i].nombreUsuario);
      let imprimirNombre = document.getElementById("nombre-del-elemento");

      iconoEliminar.addEventListener("click", function (e) {
        //Al pulsar en el icono de eliminar, abrir la ventana y el overlay
        ventanaEliminar.style.display = "flex";
        overlay.style.display = "block";

        //Coger el nombre del usuario (guardado como id del icono de eliminar), mediante el target del objeto e
        imprimirNombre.innerHTML = "" + e.target.id;

        //Pasarlo como parametro a peticionEliminar()
        console.log(e.target.id);
        peticionEliminarUsuarios(e.target.id);
      });
    }

    // Cierra la ventana de confirmación de eliminación
    btnCancelar.addEventListener("click", function () {
      ventanaEliminar.style.display = "none";
      overlay.style.display = "none";
    });
  }

  // Función para realizar la petición de eliminación
  function peticionEliminarUsuarios(nombreUsuario) {
    let btnEliminar = document.getElementById("btn-eliminar");

    btnEliminar.addEventListener("click", function () {
      console.log(nombreUsuario);
      //Pasar el nombre del usuario mediante el método get a eliminarcontrolador
      fetch(
        "/Controlador/eliminarusuariocontrolador.php?nombreusuario=" +
          nombreUsuario
      )
        .then((respuesta) => respuesta.json())
        .then((data) => {
          console.log("DATOS:", data);
          // Recargar la página del panel
          window.location.href = "paneldecontrol.php";
        });
    });
  }

  function actualizarUsuario(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
      let actualizar = document.getElementById(
        usuarios[i].nombreUsuario + "-" + usuarios[i].idUsuario
      );
      actualizar.addEventListener("click", function () {
        window.location.href =
          "actualizarusuario.php?nombreUsuario=" +
          usuarios[i].nombreUsuario +
          "&idUsuario=" +
          usuarios[i].idUsuario;
      });
    }
  }
});
