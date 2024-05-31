<?php
require_once "ComentarioDAO.php";
require_once "Conexion.php";

class ComentarioDAOimplementar implements ComentarioDAO
{
    /**
     * @var Conexion $conexion almacenar la conexion con la base de datos
     */

    private $conexion;

    public function __construct()
    {
        return $this->conexion = new Conexion();
    }


    /**
     * Función para leer los comentarios
     * @return Json array de los datos en formato Json
     */
    public function leerComentario()
    {

        $consulta = mysqli_query($this->conexion->getConexion(), "SELECT * FROM comentarios") or die("Error en consulta: " . mysqli_error($this->conexion->getConexion()));
        $datosArray = array();
        while ($reg = mysqli_fetch_array($consulta)) {
            $datosArray[] = $reg;
        }
        return json_encode($datosArray);
    }


    /**
     * Función para subir un comentario
     * @param Comentario $comenatario objeto de la clase comentario con sus datos
     * 
     * @return string|string|string Devuelve un mensaje de éxito si el comentario se crea, si no, devuelve un mensaje de error.
     *                              Si la consulta no se realiza, devuelve un mensaje de error.
     */

     public function subirComentario(Comentario $comentario)
     {
         $sql = "INSERT INTO comentarios (idUsuario, Contenido, nombreUsuario) VALUES (?, ?, ?)";
         $consulta = $this->conexion->getConexion()->prepare($sql);
     
         if ($consulta) {
             $idUsuario = $comentario->getIdUsuario();
             $contenido = $comentario->getContenido();
             $nombreUsuario = $comentario->getNombreUsuario();
     
             $consulta->bind_param("iss", $idUsuario, $contenido, $nombreUsuario);
     
             $resultado = $consulta->execute();
     
             if ($resultado) {
                 return "Comentario subido.";
             } else {
                 return "Error al subir comentario: " . $consulta->error;
             }
         } else {
             return "Error en la consulta: " . $this->conexion->getConexion()->error;
         }
     }

}
