CREATE DATABASE `api_usuarios`;
USE `api_usuarios`;

CREATE TABLE `usuario` (
  `id_usuario` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `correo_electronico` varchar(200) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `primer_apellido` varchar(70) NOT NULL,
  `segundo_apellido` varchar(70) DEFAULT NULL,
  `estatus` tinyint(1) NOT NULL DEFAULT '1',
  `usuario_de_creacion` varchar(255) NOT NULL,
  `usuario_de_modificacion` varchar(255) DEFAULT NULL,
  `fecha_de_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_de_modificacion` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`)
)


CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `estatus` tinyint(1) NOT NULL DEFAULT '1',
  `usuario_de_creacion` varchar(255) NOT NULL,
  `usuario_de_modificacion` varchar(255) DEFAULT NULL,
  `fecha_de_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_de_modificacion` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_rol`)
) 

CREATE TABLE `usuario_rol` (
  `id_usuario` varchar(100) COLLATE utf8_bin NOT NULL,
  `id_rol` int(11) NOT NULL,
  `estatus` tinyint(1) NOT NULL DEFAULT '1',
  `usuario_de_creacion` varchar(255) COLLATE utf8_bin NOT NULL,
  `usuario_de_modificacion` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `fecha_de_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_de_modificacion` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_rol`,`id_usuario`),
  KEY `fk_usuario_rol_usuario1_idx` (`id_usuario`),
  CONSTRAINT `fk_usuario_rol_rol1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_rol_usuario1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) 

