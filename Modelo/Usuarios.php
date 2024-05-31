<?php
class Usuarios
{

    /**
     * @var int $idUsuario almacenar el id del usuario
     * @var string $nombreUusuario almacenar el nombre del usuario
     * @var string $email almacenar el email del usuario
     * @var string $contrasena almacenar la contraseña del usuario
     * @var boolean $permisosAdmin almacena los permisos de administrador, si es 1 o 0
     */

    private $idUsuario;
    private $nombreUsuario;
    private $email;
    private $contrasena;
    private $permisosAdmin;

    public function __construct($nombreUsuario, $email, $contrasena, $permisosAdmin)
    {
        $this->nombreUsuario = $nombreUsuario;
        $this->email = $email;
        $this->contrasena = $contrasena;
        $this->permisosAdmin = $permisosAdmin; 
    }



    public function getidUsuario()
    {
        return $this->idUsuario;
    }


    public function setidUsuario($idUsuario)
    {
        $this->idUsuario = $idUsuario;

        return $this;
    }

    public function getNombreUsuario()
    {
        return $this->nombreUsuario;
    }


    public function setNombreUsuario($nombreUsuario)
    {
        $this->nombreUsuario = $nombreUsuario;

        return $this;
    }


    public function getEmail()
    {
        return $this->email;
    }


    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    public function getContrasena()
    {
        return $this->contrasena;
    }


    public function setContrasena($contrasena)
    {
        $this->contrasena = $contrasena;

        return $this;
    }


    public function getPermisosAdmin()
    {
        return $this->permisosAdmin;
    }


    public function setPermisosAdmin($permisosAdmin)
    {
        $this->permisosAdmin = $permisosAdmin;

        return $this;
    }
}
