<?php
class SistemaOperativo
{

    /**
     * @var string $nombre nombre del SO
     * @var string $fabricante fabricante del SO
     * @var string $arquitectura arquitectura del SO
     * @var int $comunidad comunidad de usuarios en el mundo que utilizan el SO en millones
     * @var int $seguridad seguridad calificada del 1-10 de casa SO    
     * @var string $version versión del SO
     * @var string $dispositivos dispositivos que tienen acceso al SO (móviles, ordenadores, consolas, televisiones o coches)
     * @var string $imagen almacena la url de la imagen para poder imprimirla en la web
     * @var string $gratis almacena un texto de Sí o No dependidendo de si es sistema es Gratis o no
     * @var int $idSO almacena el id de los SO. Es único, y se asigna de forma automática
     * @var string $color almacena el codigo/id del color del SO
     */

    private $nombre;
    private $fabricante;
    private $arquitectura;
    private $comunidad;
    private $seguridad;
    private $version;
    private $dispositivos;
    private $imagen;
    private $gratis;
    private $idSO;
    private $color;


    public function __construct($nombre, $fabricante, $arquitectura, $comunidad, $seguridad, $version, $dispositivos, $imagen, $gratis, $color)
    {
        $this->nombre = $nombre;
        $this->fabricante = $fabricante;
        $this->arquitectura = $arquitectura;
        $this->comunidad = $comunidad;
        $this->seguridad = $seguridad;
        $this->version = $version;
        $this->dispositivos = $dispositivos;
        $this->imagen = $imagen;
        $this->gratis = $gratis;
        $this->color = $color;
    }





    public function getNombre()
    {
        return $this->nombre;
    }


    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }


    public function getFabricante()
    {
        return $this->fabricante;
    }


    public function setFabricante($fabricante)
    {
        $this->fabricante = $fabricante;

        return $this;
    }


    public function getArquitectura()
    {
        return $this->arquitectura;
    }

    public function setArquitectura($arquitectura)
    {
        $this->arquitectura = $arquitectura;

        return $this;
    }

    public function getComunidad()
    {
        return $this->comunidad;
    }


    public function setComunidad($comunidad)
    {
        $this->comunidad = $comunidad;

        return $this;
    }


    public function getSeguridad()
    {
        return $this->seguridad;
    }


    public function setSeguridad($seguridad)
    {
        $this->seguridad = $seguridad;

        return $this;
    }


    public function getDispositivos()
    {
        return $this->dispositivos;
    }

    public function setDispositivos($dispositivos)
    {
        $this->dispositivos = $dispositivos;

        return $this;
    }


    public function getVersion()
    {
        return $this->version;
    }


    public function setVersion($version)
    {
        $this->version = $version;

        return $this;
    }


    public function getImagen()
    {
        return $this->imagen;
    }


    public function setImagen($imagen)
    {
        $this->imagen = $imagen;

        return $this;
    }


    public function getGratis()
    {
        return $this->gratis;
    }


    public function setGratis($gratis)
    {
        $this->gratis = $gratis;

        return $this;
    }


    public function getIdSO()
    {
        return $this->idSO;
    }

    public function setIdSO($idSO)
    {
        $this->idSO = $idSO;

        return $this;
    }

    
    public function getColor()
    {
        return $this->color;
    }

    public function setColor($color)
    {
        $this->color = $color;

        return $this;
    }
}
