<?php
require_once "SistemaOperativoDAO.php";
require_once "Conexion.php";
class SistemaOperativoDAOimplementar implements SistemaOperativoDAO

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
     * Función para leer información de los SO desde la base de datos.
     *
     * Esta función realiza una consulta a la base de datos para obtener los datos
     * de los SO
     * 
     * @return json Devuelve un json con los datos de los SO encontrados en la base de datos
     */

    public function leerSO()
    {
        $consulta = mysqli_query($this->conexion->getConexion(), "SELECT * FROM so") or die("Error en consulta: " . mysqli_error($this->conexion->getConexion()));
        $datosArray = array();
        while ($reg = mysqli_fetch_array($consulta)) {
            $datosArray[] = $reg;
        }
        return json_encode($datosArray);
    }


/**
 * Lee todos los registros de la tabla 'so' de la base de datos y los devuelve en un array.
 *
 * @return array Un array con todos los registros de la tabla 'so'.
 */

    public function leerSOsinJson()
    {
        $consulta = mysqli_query($this->conexion->getConexion(), "SELECT * FROM so") or die("Error en consulta: " . mysqli_error($this->conexion->getConexion()));
        $datosArray = array();
        while ($reg = mysqli_fetch_array($consulta)) {
            $datosArray[] = $reg;
        }
        return $datosArray;
    }

    /**
     * Función para subir/crear un SO en la base de datos.
     *
     * Esta función realiza una consulta a la base de datos para crear un nuevo SO con los datos del objetos
     * SistemaOperativo proporcionados
     * 
     * @param SistemaOperativo $so objeto SistemaOperativo que almacena los datos de los SO
     * 
     * @return string|string|string Devuelve un mensaje de éxito si el SO se crea, si no, devuelve un mensaje de error.
     *                              Si la consulta no se realiza, devuelve un mensaje de error.
     */

    public function subirSO(SistemaOperativo $so)
    {
        $sql = "INSERT INTO so (nombre, fabricante, arquitectura, comunidad, seguridad, version, dispositivos, imagen, gratis) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        // Preparar la declaración SQL
        $consulta = $this->conexion->getConexion()->prepare($sql);


        if ($consulta) {

            $nombre = $so->getNombre();
            $fabricante = $so->getFabricante();
            $arquitectura = $so->getArquitectura();
            $comunidad = $so->getComunidad();
            $seguridad = $so->getSeguridad();
            $version = $so->getVersion();
            $dispositivos = $so->getDispositivos();
            $imagen = $so->getImagen();
            $gratis = $so->getGratis();

            // Vincular los parámetros con los valores proporcionados
            $consulta->bind_param("sssidssss", $nombre, $fabricante, $arquitectura, $comunidad, $seguridad, $version, $dispositivos, $imagen, $gratis);

            // Ejecutar la declaración
            $resultado = $consulta->execute();

            // Verificar si la ejecución tuvo éxito
            if ($resultado) {
                return "Sistema operativo creado exitosamente.";
            } else {
                return "Error al crear el sistema operativo";
            }
        } else {
            // Si la preparación falla, devolver un mensaje de error
            return "Error al preparar la consulta";
        }
    }

    public function actualizarSO(SistemaOperativo $so, $idSO)
    {
        $sql = "UPDATE so SET comunidad=?, seguridad=?, version=? WHERE idSO=?";
        $consulta = $this->conexion->getConexion()->prepare($sql);


        if ($consulta) {

            $comunidad = $so->getComunidad();
            $seguridad = $so->getSeguridad();
            $version = $so->getVersion();
            $id = $idSO; 

            $consulta->bind_param("idsi", $comunidad, $seguridad, $version, $id);

            $resultado = $consulta->execute();
            if ($resultado) {
                return "Sistema operativo actualizado exitosamente.";
            } else {
                return "Error al actualizar el sistema operativo";
            }
        } else {
            return "Error al preparar la consulta";
        }
    }


    /**
     * Función para eliminar SO
     *
     * Esta función realiza una consulta a la base de datos para eliminar un SO mediante la sentencia sql 
     * utilizando el nombre del SO
     * 
     * @param string $nombre nombre del SO seleccionado para eliminar
     * 
     * @return string|string|string Devuelve un mensaje de éxito si el SO se elimina, si no, devuelve un mensaje de error.
     *                              Si la consulta no se realiza, devuelve un mensaje de error.
     */

    public function eliminar($nombre)
    {
        // Sentencia SQL con marcador de posición
        $sql = "DELETE FROM so WHERE nombre=?";

        // Preparar la declaración SQL
        $consulta = $this->conexion->getConexion()->prepare($sql);

        if ($consulta) {
            // Asociar parámetro e idSO a la declaración
            $consulta->bind_param("s", $nombre);

            // Ejecutar la declaración
            $resultado = $consulta->execute();

            // Verificar si la ejecución tuvo éxito
            if ($resultado) {
                return "Sistema operativo eliminado exitosamente.";
            } else {
                return "Error al eliminar el sistema operativo";
            }
        } else {
            // Si la preparación falla, devolver un mensaje de error
            return "Error al preparar la consulta";
        }
    }
}
