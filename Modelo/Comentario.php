<?php
class Comentario
{
    /**
     * @var int El ID del comentario.
     */
    private $idComentario;

    /**
     * @var int El ID del usuario que realizó el comentario.
     */
    private $idUsuario;

    /**
     * @var string El contenido del comentario.
     */
    private $contenido;

    /**
     * @var string El nombre del usuario que realizó el comentario.
     */
    private $nombreUsuario;

    /**
     * Constructor de la clase Comentario.
     *
     * @param int $idUsuario El ID del usuario que realizó el comentario.
     * @param string $contenido El contenido del comentario.
     * @param string $nombreUsuario El nombre del usuario que realizó el comentario.
     */
    public function __construct($idUsuario, $contenido, $nombreUsuario)
    {
        $this->idUsuario = $idUsuario;
        $this->contenido = $contenido;
        $this->nombreUsuario = $nombreUsuario;
    }

    /**
     * Get the value of idComentario
     */
    public function getIdComentario()
    {
        return $this->idComentario;
    }

    /**
     * Set the value of idComentario
     *
     * @return  self
     */
    public function setIdComentario($idComentario)
    {
        $this->idComentario = $idComentario;

        return $this;
    }

    /**
     * Get the value of idUsuario
     */
    public function getIdUsuario()
    {
        return $this->idUsuario;
    }

    /**
     * Set the value of idUsuario
     *
     * @return  self
     */
    public function setIdUsuario($idUsuario)
    {
        $this->idUsuario = $idUsuario;

        return $this;
    }

    /**
     * Get the value of contenido
     */
    public function getContenido()
    {
        return $this->contenido;
    }

    /**
     * Set the value of contenido
     *
     * @return  self
     */
    public function setContenido($contenido)
    {
        $this->contenido = $contenido;

        return $this;
    }

    /**
     * Get the value of nombreUsuario
     */
    public function getNombreUsuario()
    {
        return $this->nombreUsuario;
    }

    /**
     * Set the value of nombreUsuario
     *
     * @return  self
     */
    public function setNombreUsuario($nombreUsuario)
    {
        $this->nombreUsuario = $nombreUsuario;

        return $this;
    }
}
