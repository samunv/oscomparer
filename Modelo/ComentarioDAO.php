<?php
interface ComentarioDAO
{
    public function leerComentario();
    public function subirComentario(Comentario $comentario);
}
