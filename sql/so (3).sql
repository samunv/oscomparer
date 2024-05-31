-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-05-2024 a las 09:54:14
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `comparadorprueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `so`
--

CREATE TABLE `so` (
  `nombre` varchar(100) DEFAULT NULL,
  `fabricante` varchar(100) DEFAULT NULL,
  `arquitectura` varchar(100) DEFAULT NULL,
  `comunidad` int(11) DEFAULT NULL,
  `seguridad` double DEFAULT NULL,
  `version` varchar(100) DEFAULT NULL,
  `dispositivos` varchar(50) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `gratis` varchar(10) DEFAULT NULL,
  `idSO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `so`
--

INSERT INTO `so` (`nombre`, `fabricante`, `arquitectura`, `comunidad`, `seguridad`, `version`, `dispositivos`, `imagen`, `gratis`, `idSO`) VALUES
('Windows 10', 'Microsoft', 'x86 (32 bits)', 1500, 7.5, 'Windows 10', 'Ordenadores', '/ComparadorGit/Vista/img/windows10foto.webp', 'No', 1),
('macOS BigSur', 'Apple Inc.', '64-bit', 2000, 8.8, 'BigSur', 'Ordenadores', '/Comparador/img/pruebaso.webp', 'No', 2),
('Ubuntu 20.04', 'Canonical Ltd.', '64-bit', 6, 8.5, '20.04 LTS', 'Ordenadores', '/Comparador/img/ubuntu-4.svg', 'Si', 3),
('Android 14', 'Google LLC', 'CPU ARM', 2100, 8, '14', 'Móviles', '/Comparador/img/Android_robot.png', 'Si', 4),
('iOS 17', 'Apple Inc.', ' XNU', 1800, 9, '17.4', 'Móviles', '/Comparador/img/ios17.png', 'No', 5),
('PS4 OS 10.01', 'Sony I.E.', 'x86-64 de AMD', 106, 8, '10.01', 'Consola', '/Comparador/img/ps4.png', 'No', 6),
('Xbox OS 21H2', 'Microsoft', 'Microkernel', 120, 8, '21H2', 'Consola', '/ComparadorGit/Vista/img/xbox-cloud-gaming-icon-filled-256.png', 'No', 7),
('PS5 OS', 'Sony I.E.', 'AMD Zen 2', 20, 8, 'PS5 OS', 'Consola', '/ComparadorGit/Vista/img/ps5os.png', 'No', 8),
('Miui TV 3.0', 'Xiaomi', 'ARM', 3, 8.5, '3.0', 'TV', '/ComparadorGit/Vista/img/4525-xiaomi_logo.webp', 'Si', 9),
('Windows Phone', 'Microsoft', 'NT 10.0', 11, 8, '8.1 Update 2', 'Móviles', '/ComparadorGit/Vista/img/windows-phone-metro.png', 'No', 13),
('SYNC 3', 'Ford', 'Propietario', 11, 8, '3', 'Coches', '/ComparadorGit/Vista/img/wDcUqZMByJV7QAAAABJRU5ErkJggg.png', 'No', 14),
('iDrive 7.0', 'BMW', 'Propietario', 12, 7, '7.0', 'Coches', '/ComparadorGit/Vista/img/2Q.png', 'No', 15),
('DCS', 'Nissan', 'Propietario', 10, 7.5, 'Última versión', 'Coches', '/ComparadorGit/Vista/img/z32CYAskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAofMfp52QEfPquJ4AAAAASUVORK5CYII.png', 'No', 16),
('MB.OS', 'Mercedes-Benz', 'De chip a nube', 15, 8, 'Última versión', 'Coches', '/ComparadorGit/Vista/img/free-mercedes-10-827486.webp', 'No', 17),
('Tesla OS', 'Tesla', 'Propietario', 9, 9.5, 'Última versión', 'Coches', '/ComparadorGit/Vista/img/wHof3aohqqJiwAAAABJRU5ErkJggg.png', 'No', 18),
('Android TV', 'Google', 'ARM64', 10, 8, 'Versión Android TV', 'TV', '/ComparadorGit/Vista/img/androidtv.png', 'Si', 21),
('Tizen', 'Samsung', 'ARM', 19, 9, 'Versión Tizen', 'TV', '/ComparadorGit/Vista/img/samsungtv.png', 'Si', 22),
('WebOS', 'LG', 'ARM/x86', 13, 9, 'Versión WebOS', 'TV', '/ComparadorGit/Vista/img/webos.png', 'Si', 23),
('Firefox OS', 'Panasonic', 'ARM', 9, 8, 'Versión Firefox OS', 'TV', '/ComparadorGit/Vista/img/firefoxtv.png', 'Si', 24),
('Saphi', 'Philips', 'ARM/x86', 20, 8, 'Versión Saphi', 'TV', '/ComparadorGit/Vista/img/saphios.png', 'Si', 25),
('prueba', '1', '1', 1, 1, '1', 'Móviles', '../img/advertencia.png', 'Si', 46);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `so`
--
ALTER TABLE `so`
  ADD PRIMARY KEY (`idSO`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `so`
--
ALTER TABLE `so`
  MODIFY `idSO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
