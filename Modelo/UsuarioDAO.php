<?php
interface UsuarioDAO
{
    public function leerUsuario($nombre, $contrasena); 
    public function crearUsuario(Usuarios $usuario);
    public function eliminarUsuario($nombre); 
    public function actualizarPermisos($idUsuario, $permiso); 
    
}
