-- MySQL dump 10.16  Distrib 10.1.26-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 172.20.1.26    Database: ordenes
-- ------------------------------------------------------
-- Server version	10.1.26-MariaDB-0+deb9u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `abono_promoupgrade`
--

DROP TABLE IF EXISTS `abono_promoupgrade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `abono_promoupgrade` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `epli` varchar(250) NOT NULL,
  `precio` float NOT NULL,
  `precio_eset` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `epli` (`epli`(191))
) ENGINE=InnoDB AUTO_INCREMENT=7768 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `accesos_ampliacion`
--

DROP TABLE IF EXISTS `accesos_ampliacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accesos_ampliacion` (
  `id_acceso_ampliacion` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) NOT NULL,
  `num_accesos` int(11) NOT NULL DEFAULT '0',
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tipo` varchar(36) DEFAULT 'cantidad',
  PRIMARY KEY (`id_acceso_ampliacion`)
) ENGINE=MyISAM AUTO_INCREMENT=215455 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `actividades`
--

DROP TABLE IF EXISTS `actividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actividades` (
  `id_actividad` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  `sector` int(11) NOT NULL,
  PRIMARY KEY (`id_actividad`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=1040 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `addonRequests`
--

DROP TABLE IF EXISTS `addonRequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addonRequests` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `versionApp` varchar(10) DEFAULT NULL,
  `mostrado` varchar(1) DEFAULT 'N',
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `sistemaOp` varchar(20) DEFAULT NULL,
  `ejecutor` varchar(15) DEFAULT NULL,
  `ipCliente` varchar(18) DEFAULT NULL,
  `desinstala` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12257131 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `admin_usuarios`
--

DROP TABLE IF EXISTS `admin_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL DEFAULT '',
  `pass` varchar(64) NOT NULL DEFAULT '',
  `nivel` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `amazonpay_ordenes`
--

DROP TABLE IF EXISTS `amazonpay_ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amazonpay_ordenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `authorization_amount` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `captured_amount` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `soft_descriptor` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expiration_timestamp` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_list_member` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `soft_decline` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `auth_status_last_update_timestamp` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `auth_status_reason_code` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `auth_status_state` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `auth_billing_address_city` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `auth_billing_address_country_code` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `auth_billing_address_postal_code` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `auth_billing_address_name` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `auth_billing_address_address_line1` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `auth_billing_address_address_line2` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_order_id` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1659 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `amazonpay_ordenes_draft`
--

DROP TABLE IF EXISTS `amazonpay_ordenes_draft`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amazonpay_ordenes_draft` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_reference_status_state` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_language` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `destination_type` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `destination_physical_state_region` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `destination_physical_city` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `destination_physical_country_code` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `destination_physical_postal_code` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expiration_timestamp` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_order_storename` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_order_id` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_total_currency` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_total_amount` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `release_environment` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_note` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amazon_order_reference_id` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `creation_timestamp` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1659 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ampliaciones`
--

DROP TABLE IF EXISTS `ampliaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ampliaciones` (
  `id_ampliacion` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL DEFAULT '0',
  `precio_ampliacion` decimal(7,2) NOT NULL DEFAULT '0.00',
  `generada_por` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_ampliacion`),
  KEY `id_orden` (`id_orden`)
) ENGINE=MyISAM AUTO_INCREMENT=98905 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ampliaciones_temp`
--

DROP TABLE IF EXISTS `ampliaciones_temp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ampliaciones_temp` (
  `id_orden` int(9) NOT NULL DEFAULT '0',
  `precio_ampliacion` decimal(7,2) NOT NULL DEFAULT '0.00',
  `id_orden_ampliacion` int(9) NOT NULL DEFAULT '0',
  `contabilizada` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id_orden`,`id_orden_ampliacion`),
  UNIQUE KEY `id_orden` (`id_orden`,`id_orden_ampliacion`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `au_categorias`
--

DROP TABLE IF EXISTS `au_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `au_categorias` (
  `id_categoria` int(5) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(50) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `au_publicidad`
--

DROP TABLE IF EXISTS `au_publicidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `au_publicidad` (
  `id_autorizacion` int(5) NOT NULL AUTO_INCREMENT,
  `id_orden` int(10) NOT NULL,
  `cp` int(6) DEFAULT NULL,
  `poblacion` varchar(200) DEFAULT NULL,
  `id_provincia` int(5) DEFAULT NULL,
  `id_categoria` int(10) DEFAULT NULL,
  `scanner` varchar(300) DEFAULT NULL,
  `logo` varchar(300) DEFAULT NULL,
  `publicado` varchar(10) DEFAULT NULL,
  `web` varchar(100) DEFAULT NULL,
  `nombre_comercial` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_autorizacion`)
) ENGINE=MyISAM AUTO_INCREMENT=1323 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `aviso_reseller`
--

DROP TABLE IF EXISTS `aviso_reseller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aviso_reseller` (
  `id_reseller` int(9) NOT NULL,
  `mostrado` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_reseller`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `banner_eset`
--

DROP TABLE IF EXISTS `banner_eset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banner_eset` (
  `id_banner_eset` int(11) NOT NULL AUTO_INCREMENT,
  `id_reseller` int(11) DEFAULT NULL,
  `url` text,
  `visitas` int(11) NOT NULL DEFAULT '0',
  `create_time` timestamp NULL DEFAULT NULL,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_banner_eset`)
) ENGINE=InnoDB AUTO_INCREMENT=274963 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `bundle_ontinet`
--

DROP TABLE IF EXISTS `bundle_ontinet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bundle_ontinet` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `ontinet_product_code` int(9) NOT NULL,
  `eset_product_code` int(9) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cambio_claves`
--

DROP TABLE IF EXISTS `cambio_claves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cambio_claves` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(25) DEFAULT NULL,
  `clave_antigua` varchar(20) DEFAULT NULL,
  `clave_nueva` varchar(20) DEFAULT NULL,
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2473 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `campanias`
--

DROP TABLE IF EXISTS `campanias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campanias` (
  `id_campania` int(11) NOT NULL DEFAULT '0',
  `campania` varchar(40) NOT NULL DEFAULT '',
  `reseller` int(11) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `producto` varchar(5) DEFAULT NULL,
  `opcion_compra` int(11) DEFAULT NULL,
  `observaciones` varchar(200) DEFAULT NULL,
  `fecha_expiracion` date DEFAULT NULL,
  `mensaje_expiracion` varchar(250) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id_cart` int(11) NOT NULL AUTO_INCREMENT,
  `session_id` varchar(255) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `total_amount` float DEFAULT NULL,
  `send_lost_cart` tinyint(4) NOT NULL DEFAULT '0',
  `google_cid` varchar(45) DEFAULT NULL,
  `hotjar_user_id` varchar(45) DEFAULT NULL,
  `date_add` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_upd` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_cart`)
) ENGINE=InnoDB AUTO_INCREMENT=298542 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cart_orden`
--

DROP TABLE IF EXISTS `cart_orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_orden` (
  `id_cart_orden` int(11) NOT NULL AUTO_INCREMENT,
  `id_cart` int(11) NOT NULL,
  `id_orden` int(11) NOT NULL,
  PRIMARY KEY (`id_cart_orden`)
) ENGINE=InnoDB AUTO_INCREMENT=519885 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cart_products`
--

DROP TABLE IF EXISTS `cart_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_products` (
  `id_cart_products` int(11) NOT NULL AUTO_INCREMENT,
  `id_cart` int(255) NOT NULL,
  `product` varchar(255) NOT NULL,
  `licenses` int(11) NOT NULL DEFAULT '1',
  `years` int(255) NOT NULL DEFAULT '1',
  `price` float NOT NULL DEFAULT '0',
  `purchase_option` int(11) NOT NULL DEFAULT '1',
  `user` int(255) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_cart_products`)
) ENGINE=InnoDB AUTO_INCREMENT=448635 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `certificaciones`
--

DROP TABLE IF EXISTS `certificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `certificaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_certificado` int(11) NOT NULL,
  `id_tecnico` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `aprobada` int(11) NOT NULL DEFAULT '0' COMMENT '0: No aprobada - 1: Aprobada',
  `fecha_aprobada` date DEFAULT NULL,
  `id_packs_certificaciones` int(11) NOT NULL DEFAULT '0',
  `cajas` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=484 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `certificados`
--

DROP TABLE IF EXISTS `certificados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `certificados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sufijo` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `precio` decimal(7,2) NOT NULL,
  `dependencia` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `sufijo` (`sufijo`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `clientes_presupuestos`
--

DROP TABLE IF EXISTS `clientes_presupuestos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes_presupuestos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipo_persona` char(1) NOT NULL,
  `empresa` varchar(250) DEFAULT NULL,
  `id_tipo_empresa` int(11) DEFAULT NULL,
  `nif` varchar(50) NOT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  `apellido1` varchar(250) DEFAULT NULL,
  `apellido2` varchar(250) DEFAULT NULL,
  `email` varchar(250) NOT NULL,
  `id_opcion_especial` int(11) NOT NULL,
  `id_reseller` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cod_res`
--

DROP TABLE IF EXISTS `cod_res`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cod_res` (
  `codigo` int(5) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `codigo_promocion`
--

DROP TABLE IF EXISTS `codigo_promocion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `codigo_promocion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numeracion` varchar(45) DEFAULT NULL,
  `uso` tinyint(4) NOT NULL DEFAULT '0',
  `codigo_reseller` int(11) DEFAULT NULL,
  `id_promocion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `numeracion_UNIQUE` (`numeracion`)
) ENGINE=InnoDB AUTO_INCREMENT=695 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `codigo_promocion_ordenes`
--

DROP TABLE IF EXISTS `codigo_promocion_ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `codigo_promocion_ordenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_codigo_promocion` int(11) DEFAULT NULL,
  `id_orden` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `comentarios_presupuestos`
--

DROP TABLE IF EXISTS `comentarios_presupuestos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios_presupuestos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_presupuesto` int(11) NOT NULL,
  `comentario` varchar(250) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_ultima_modificacion` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `consolas_esmc`
--

DROP TABLE IF EXISTS `consolas_esmc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consolas_esmc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `server_root_password` varchar(45) NOT NULL,
  `db_name` varchar(45) NOT NULL,
  `db_user` varchar(45) NOT NULL,
  `db_password` varchar(100) NOT NULL,
  `license_key` varchar(200) DEFAULT NULL,
  `domain` varchar(200) DEFAULT NULL,
  `server_port_1` int(11) DEFAULT NULL,
  `server_port_2` int(11) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  `hash` varchar(200) DEFAULT NULL,
  `is_credentials_sended` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `consumidos`
--

DROP TABLE IF EXISTS `consumidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consumidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `producto` varchar(5) NOT NULL,
  `fecha_uso` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=991 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contadores`
--

DROP TABLE IF EXISTS `contadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contadores` (
  `variable` varchar(30) NOT NULL,
  `cantidad` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`variable`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contadores_descargas`
--

DROP TABLE IF EXISTS `contadores_descargas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contadores_descargas` (
  `id_contador` int(11) NOT NULL AUTO_INCREMENT,
  `id_reseller` int(11) NOT NULL,
  `producto` varchar(10) NOT NULL,
  `visitas` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_contador`)
) ENGINE=MyISAM AUTO_INCREMENT=1921 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `conversion_productos`
--

DROP TABLE IF EXISTS `conversion_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conversion_productos` (
  `producto_antiguo` varchar(50) NOT NULL DEFAULT '',
  `sufijo_nuevo` varchar(5) NOT NULL DEFAULT '',
  PRIMARY KEY (`producto_antiguo`,`sufijo_nuevo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `correos`
--

DROP TABLE IF EXISTS `correos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `correos` (
  `id_correo` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_lista` int(5) unsigned DEFAULT NULL,
  `de` varchar(200) NOT NULL,
  `deQuien` varchar(200) DEFAULT NULL,
  `asunto` varchar(250) NOT NULL,
  `cuerpo` blob NOT NULL,
  `tipo` varchar(1) NOT NULL DEFAULT 'H',
  `enviado` varchar(1) NOT NULL DEFAULT 'N',
  `fecha_envio` datetime DEFAULT NULL,
  `reply` varchar(200) DEFAULT NULL,
  `fecha_programada` datetime DEFAULT NULL,
  `returnPath` varchar(200) DEFAULT NULL,
  `cabeceras` text,
  PRIMARY KEY (`id_correo`)
) ENGINE=MyISAM AUTO_INCREMENT=13549 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `credentials`
--

DROP TABLE IF EXISTS `credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `credentials` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `epli` varchar(36) DEFAULT NULL,
  `licenseKey` varchar(24) DEFAULT NULL,
  `publicLicenseKey` varchar(11) DEFAULT NULL,
  `commonTag` varchar(36) DEFAULT NULL,
  `proxyId` varchar(40) DEFAULT NULL,
  `ELAPassword` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_orden` (`id_orden`),
  KEY `licenseKey` (`licenseKey`),
  KEY `publicLicenseKey` (`publicLicenseKey`),
  KEY `commonTag` (`commonTag`),
  KEY `epli` (`epli`)
) ENGINE=InnoDB AUTO_INCREMENT=2977395 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`backup_credentials_BEFORE_UPDATE` BEFORE UPDATE ON `ordenes`.`credentials` FOR EACH ROW 
BEGIN
DELETE FROM credentials_backup WHERE id = OLD.id;
INSERT INTO credentials_backup (SELECT * FROM credentials WHERE id = OLD.id);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`credentials_to_odoo_table_AFTER_UPDATE` AFTER UPDATE ON `ordenes`.`credentials` FOR EACH ROW 
BEGIN
DECLARE to_update INT;
DECLARE exist INT;
IF 
OLD.id_orden <> NEW.id_orden OR 
OLD.usuario <> NEW.usuario OR 
OLD.password <> NEW.password OR 
OLD.epli <> NEW.epli OR 
OLD.licenseKey <> NEW.licenseKey OR 
OLD.publicLicenseKey <> NEW.publicLicenseKey OR 
OLD.commonTag <> NEW.commonTag
THEN
SET exist = ( SELECT count(*) FROM to_odoo_temp_trigger where tablename='ordenes' AND (id_row = NEW.id_orden OR (NEW.commonTag IS NOT NULL AND common_tag = NEW.commonTag)));
if exist=0
THEN
INSERT INTO to_odoo_temp_trigger (tablename, id_row, common_tag, action) VALUES ('ordenes', NEW.id_orden, NEW.commonTag, 'update');
END if;
END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`backup_credentials_BEFORE_DELETE` BEFORE DELETE ON `ordenes`.`credentials` FOR EACH ROW
BEGIN
DELETE FROM credentials_backup WHERE id = OLD.id;
INSERT INTO credentials_backup (SELECT * FROM credentials WHERE id = OLD.id);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `credentials_backup`
--

DROP TABLE IF EXISTS `credentials_backup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `credentials_backup` (
  `id` int(9) DEFAULT NULL,
  `id_orden` int(9) DEFAULT NULL,
  `usuario` varchar(25) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `epli` varchar(36) DEFAULT NULL,
  `licenseKey` varchar(24) DEFAULT NULL,
  `publicLicenseKey` varchar(11) DEFAULT NULL,
  `commonTag` varchar(36) DEFAULT NULL,
  `proxyId` varchar(40) DEFAULT NULL,
  `ELAPassword` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `id_customer` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `lastname1` varchar(80) DEFAULT NULL,
  `lastname2` varchar(80) DEFAULT NULL,
  `nif` varchar(20) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `date_add` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_upd` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_customer`)
) ENGINE=InnoDB AUTO_INCREMENT=303466 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `data_quality_licenses`
--

DROP TABLE IF EXISTS `data_quality_licenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data_quality_licenses` (
  `id_data_quality_licenses` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) DEFAULT NULL,
  `usuario` varchar(45) DEFAULT NULL,
  `tipo_error` varchar(45) DEFAULT NULL,
  `valor_ontinet` varchar(45) DEFAULT NULL,
  `valor_dexter` varchar(45) DEFAULT NULL,
  `revisada` tinyint(4) NOT NULL DEFAULT '0',
  `create_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_data_quality_licenses`)
) ENGINE=InnoDB AUTO_INCREMENT=870135 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `demos`
--

DROP TABLE IF EXISTS `demos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `demos` (
  `id_orden` int(11) NOT NULL,
  `hardDiskSNR` varchar(50) NOT NULL,
  `instalaciones` int(2) DEFAULT '1',
  PRIMARY KEY (`id_orden`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `demos_locale`
--

DROP TABLE IF EXISTS `demos_locale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `demos_locale` (
  `id_orden` int(11) unsigned NOT NULL,
  `locale_browser` varchar(50) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL,
  `ip` char(45) DEFAULT NULL,
  PRIMARY KEY (`id_orden`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `demos_old`
--

DROP TABLE IF EXISTS `demos_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `demos_old` (
  `id_orden` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `reseller` int(5) DEFAULT '-1',
  `producto` varchar(5) DEFAULT NULL,
  `licencias` int(3) unsigned DEFAULT '0',
  `cliente_nombre` varchar(80) DEFAULT '0',
  `cliente_contacto` varchar(50) DEFAULT NULL,
  `cliente_email` varchar(50) DEFAULT NULL,
  `cliente_telefono` varchar(30) DEFAULT NULL,
  `cliente_nif` varchar(20) NOT NULL,
  `expiracion` date DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT '0.00',
  `servidores` int(3) unsigned DEFAULT '0',
  `notas` blob,
  `enviar_cliente` char(1) DEFAULT 'S',
  `enviar_reseller` char(1) DEFAULT 'N',
  `opcion_compra` int(3) unsigned DEFAULT '0',
  `usuario` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `fecha` date NOT NULL,
  `hay_lic` char(1) DEFAULT 'N',
  `onreg` varchar(30) NOT NULL,
  `comentario` blob,
  `estado` char(1) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL DEFAULT 'A',
  `ordenada_por` char(1) NOT NULL DEFAULT 'R',
  `snr` varchar(30) DEFAULT NULL,
  `pdf` char(1) DEFAULT 'N',
  `codigo_expedicia` varchar(30) DEFAULT NULL,
  `comentario_publico` blob,
  `reseller_email_opcional` varchar(50) DEFAULT NULL,
  `aviso_distribuidor` char(1) DEFAULT 'S',
  `fecha_envio_aviso` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `generada_desde` varchar(10) DEFAULT NULL,
  `albaran` varchar(200) DEFAULT NULL,
  `renovada` char(1) DEFAULT 'N',
  `de_agente` char(1) DEFAULT 'N',
  `tipo_persona` char(1) DEFAULT NULL,
  `cliente_apellido1` varchar(80) DEFAULT NULL,
  `cliente_apellido2` varchar(80) DEFAULT NULL,
  `id_tipo_empresa` int(2) DEFAULT NULL,
  `nombre_comercial` varchar(80) DEFAULT NULL,
  `nuevo_modelo` char(1) DEFAULT NULL,
  `user_agent` varchar(200) NOT NULL DEFAULT '',
  `es_caja` char(1) NOT NULL DEFAULT 'N',
  `id_orden_comprada` int(9) DEFAULT NULL,
  `instalaciones` int(2) DEFAULT '1',
  PRIMARY KEY (`id_orden`),
  KEY `reseller` (`reseller`,`producto`,`expiracion`),
  KEY `fecha` (`fecha`),
  KEY `onreg` (`onreg`),
  KEY `cliente_nombre` (`cliente_nombre`),
  KEY `cliente_nif` (`cliente_nif`),
  KEY `usuario` (`usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=597313 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `demosout`
--

DROP TABLE IF EXISTS `demosout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `demosout` (
  `id_orden` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `reseller` int(5) DEFAULT '-1',
  `producto` varchar(5) DEFAULT NULL,
  `licencias` int(3) unsigned DEFAULT '0',
  `cliente_nombre` varchar(80) DEFAULT '0',
  `cliente_contacto` varchar(50) DEFAULT NULL,
  `cliente_email` varchar(50) DEFAULT NULL,
  `cliente_telefono` varchar(30) DEFAULT NULL,
  `cliente_nif` varchar(20) NOT NULL,
  `expiracion` date DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT '0.00',
  `servidores` int(3) unsigned DEFAULT '0',
  `notas` blob,
  `enviar_cliente` char(1) DEFAULT 'S',
  `enviar_reseller` char(1) DEFAULT 'N',
  `opcion_compra` int(3) unsigned DEFAULT '0',
  `usuario` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `fecha` date NOT NULL,
  `hay_lic` char(1) DEFAULT 'N',
  `onreg` varchar(30) NOT NULL,
  `comentario` blob,
  `estado` char(1) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL DEFAULT 'A',
  `ordenada_por` char(1) NOT NULL DEFAULT 'R',
  `snr` varchar(30) DEFAULT NULL,
  `pdf` char(1) DEFAULT 'N',
  `codigo_expedicia` varchar(30) DEFAULT NULL,
  `comentario_publico` blob,
  `reseller_email_opcional` varchar(50) DEFAULT NULL,
  `aviso_distribuidor` char(1) DEFAULT 'S',
  `fecha_envio_aviso` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `generada_desde` varchar(10) DEFAULT NULL,
  `albaran` varchar(200) DEFAULT NULL,
  `renovada` char(1) DEFAULT 'N',
  `de_agente` char(1) DEFAULT 'N',
  `tipo_persona` char(1) DEFAULT NULL,
  `cliente_apellido1` varchar(80) DEFAULT NULL,
  `cliente_apellido2` varchar(80) DEFAULT NULL,
  `id_tipo_empresa` int(2) DEFAULT NULL,
  `nombre_comercial` varchar(80) DEFAULT NULL,
  `nuevo_modelo` char(1) DEFAULT NULL,
  `user_agent` varchar(200) NOT NULL DEFAULT '',
  `es_caja` char(1) NOT NULL DEFAULT 'N',
  `id_orden_comprada` int(9) DEFAULT NULL,
  PRIMARY KEY (`id_orden`),
  KEY `reseller` (`reseller`,`producto`,`expiracion`),
  KEY `fecha` (`fecha`),
  KEY `onreg` (`onreg`),
  KEY `cliente_nombre` (`cliente_nombre`),
  KEY `cliente_nif` (`cliente_nif`),
  KEY `usuario` (`usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=597313 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `descuentos`
--

DROP TABLE IF EXISTS `descuentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `descuentos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) NOT NULL,
  `mostrar` varchar(45) NOT NULL,
  `descuento` float(2,1) NOT NULL DEFAULT '1.0',
  `codigo_eset` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `detalles_pedido_caja`
--

DROP TABLE IF EXISTS `detalles_pedido_caja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalles_pedido_caja` (
  `id_detalle_pedido_caja` int(10) NOT NULL AUTO_INCREMENT,
  `id_pedido_caja` int(10) NOT NULL,
  `producto` varchar(32) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `precio` float NOT NULL DEFAULT '0',
  `descuento` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_detalle_pedido_caja`)
) ENGINE=MyISAM AUTO_INCREMENT=2348 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`backup_detalles_pedido_caja_BEFORE_UPDATE` BEFORE UPDATE ON `ordenes`.`detalles_pedido_caja` FOR EACH ROW 
BEGIN
DELETE FROM detalles_pedido_caja_backup WHERE id_detalle_pedido_caja = OLD.id_detalle_pedido_caja;
INSERT INTO detalles_pedido_caja_backup (SELECT * FROM detalles_pedido_caja WHERE id_detalle_pedido_caja = OLD.id_detalle_pedido_caja);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`backup_detalles_pedido_caja_BEFORE_DELETE` BEFORE DELETE ON `ordenes`.`detalles_pedido_caja` FOR EACH ROW
BEGIN
DELETE FROM detalles_pedido_caja_backup WHERE id_detalle_pedido_caja = OLD.id_detalle_pedido_caja;
INSERT INTO detalles_pedido_caja_backup (SELECT * FROM detalles_pedido_caja WHERE id_detalle_pedido_caja = OLD.id_detalle_pedido_caja);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `detalles_pedido_caja_backup`
--

DROP TABLE IF EXISTS `detalles_pedido_caja_backup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalles_pedido_caja_backup` (
  `id_detalle_pedido_caja` int(10) DEFAULT NULL,
  `id_pedido_caja` int(10) NOT NULL,
  `producto` varchar(32) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `descuento` float NOT NULL DEFAULT '0',
  `precio` float NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `detalles_pedido_caja_snr`
--

DROP TABLE IF EXISTS `detalles_pedido_caja_snr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalles_pedido_caja_snr` (
  `id_detalles_pedido_caja_snr` int(11) NOT NULL AUTO_INCREMENT,
  `producto` varchar(10) NOT NULL,
  `id_pedido_caja` int(10) NOT NULL,
  `id_nro_serie_caja` int(10) DEFAULT NULL,
  `snr` varchar(30) NOT NULL,
  `barcode` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_detalles_pedido_caja_snr`)
) ENGINE=InnoDB AUTO_INCREMENT=3030 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dexter_purchase_options`
--

DROP TABLE IF EXISTS `dexter_purchase_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dexter_purchase_options` (
  `id_purchase_option` tinyint(3) NOT NULL AUTO_INCREMENT,
  `purchase_option` varchar(60) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_purchase_option`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `diff_ordenes`
--

DROP TABLE IF EXISTS `diff_ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diff_ordenes` (
  `id_orden` int(9) unsigned NOT NULL DEFAULT '0',
  `reseller` int(10) unsigned NOT NULL DEFAULT '0',
  `producto` varchar(5) DEFAULT NULL,
  `licencias` int(3) unsigned DEFAULT '0',
  `cliente_nombre` varchar(200) DEFAULT '0',
  `cliente_contacto` varchar(50) DEFAULT NULL,
  `cliente_email` varchar(100) DEFAULT NULL,
  `cliente_telefono` varchar(30) DEFAULT NULL,
  `cliente_nif` varchar(20) NOT NULL,
  `expiracion` date DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT '0.00',
  `servidores` int(3) unsigned DEFAULT '0',
  `notas` blob,
  `enviar_cliente` char(1) DEFAULT 'S',
  `enviar_reseller` char(1) DEFAULT 'N',
  `opcion_compra` int(3) unsigned DEFAULT '0',
  `usuario` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `fecha` date NOT NULL,
  `hay_lic` char(1) DEFAULT 'N',
  `onreg` varchar(30) NOT NULL,
  `comentario` blob,
  `estado` char(1) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL DEFAULT 'A',
  `ordenada_por` char(1) NOT NULL DEFAULT 'R',
  `snr` varchar(30) DEFAULT NULL,
  `pdf` char(1) DEFAULT 'N',
  `codigo_expedicia` varchar(30) DEFAULT NULL,
  `comentario_publico` blob,
  `reseller_email_opcional` varchar(50) DEFAULT NULL,
  `aviso_distribuidor` char(1) DEFAULT 'S',
  `fecha_envio_aviso` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `generada_desde` varchar(10) DEFAULT NULL,
  `albaran` varchar(200) DEFAULT NULL,
  `renovada` char(1) DEFAULT 'N',
  `de_agente` char(1) DEFAULT 'N',
  `tipo_persona` char(1) DEFAULT NULL,
  `cliente_apellido1` varchar(80) DEFAULT NULL,
  `cliente_apellido2` varchar(80) DEFAULT NULL,
  `id_tipo_empresa` int(2) DEFAULT NULL,
  `nombre_comercial` varchar(80) DEFAULT NULL,
  `nuevo_modelo` char(1) DEFAULT NULL,
  `user_agent` varchar(200) NOT NULL DEFAULT '',
  `es_caja` char(1) NOT NULL DEFAULT 'N',
  `id_orden_comprada` int(9) DEFAULT NULL,
  `id_orden_antigua` int(9) DEFAULT NULL,
  `robinson` varchar(1) NOT NULL DEFAULT 'N',
  `ampliada` varchar(1) DEFAULT 'N'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `direcciones` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `id_provincia` int(9) NOT NULL,
  `poblacion` varchar(100) CHARACTER SET latin1 NOT NULL,
  `cp` varchar(10) CHARACTER SET latin1 NOT NULL,
  `telefono` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `tipo_via` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `direccion` varchar(200) CHARACTER SET latin1 NOT NULL,
  `numero` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `detalle_dir` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `tipo` varchar(15) CHARACTER SET latin1 DEFAULT NULL,
  `escalera` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `piso` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `puerta` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=612619 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`backup_direcciones_BEFORE_UPDATE` BEFORE UPDATE ON `ordenes`.`direcciones` FOR EACH ROW 
BEGIN
DELETE FROM direcciones_backup WHERE id = OLD.id;
INSERT INTO direcciones_backup (SELECT * FROM direcciones WHERE id = OLD.id);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`backup_direcciones_BEFORE_DELETE` BEFORE DELETE ON `ordenes`.`direcciones` FOR EACH ROW
BEGIN
DELETE FROM direcciones_backup WHERE id = OLD.id;
INSERT INTO direcciones_backup (SELECT * FROM direcciones WHERE id = OLD.id);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `direcciones_backup`
--

DROP TABLE IF EXISTS `direcciones_backup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `direcciones_backup` (
  `id` int(9) DEFAULT NULL,
  `id_orden` int(9) NOT NULL,
  `id_provincia` int(9) NOT NULL,
  `poblacion` varchar(100) CHARACTER SET latin1 NOT NULL,
  `cp` varchar(10) CHARACTER SET latin1 NOT NULL,
  `telefono` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `tipo_via` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `direccion` varchar(200) CHARACTER SET latin1 NOT NULL,
  `numero` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `detalle_dir` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `tipo` varchar(15) CHARACTER SET latin1 DEFAULT NULL,
  `escalera` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `piso` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `puerta` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `direcciones_reseller`
--

DROP TABLE IF EXISTS `direcciones_reseller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `direcciones_reseller` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `direccion` varchar(200) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `escalera` varchar(20) DEFAULT NULL,
  `piso` varchar(20) DEFAULT NULL,
  `puerta` varchar(20) DEFAULT NULL,
  `codigo_postal` varchar(10) DEFAULT NULL,
  `poblacion` varchar(100) DEFAULT NULL,
  `id_provincia` int(9) DEFAULT NULL,
  `att` varchar(45) DEFAULT NULL,
  `id_reseller` int(9) DEFAULT NULL,
  `cp` varchar(30) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `tipo_via` varchar(30) DEFAULT NULL,
  `detalle_dir` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3927 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ema_company`
--

DROP TABLE IF EXISTS `ema_company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ema_company` (
  `id_company` int(11) NOT NULL,
  `id_reseller` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `activa` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_company`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ema_license`
--

DROP TABLE IF EXISTS `ema_license`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ema_license` (
  `id_license` int(11) NOT NULL,
  `id_site` int(11) NOT NULL,
  `product_code` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `public_license_id` varchar(45) DEFAULT NULL,
  `server_name` varchar(45) DEFAULT NULL,
  `trial` tinyint(4) NOT NULL DEFAULT '0',
  `trial_expiration_date` date DEFAULT NULL,
  `activa` tinyint(4) NOT NULL DEFAULT '1',
  `notas` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_license`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ema_sec_admin`
--

DROP TABLE IF EXISTS `ema_sec_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ema_sec_admin` (
  `id_sec_admin` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_sec_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=173 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ema_site`
--

DROP TABLE IF EXISTS `ema_site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ema_site` (
  `id_site` int(11) NOT NULL,
  `id_company` int(11) NOT NULL,
  `tipo_persona` char(1) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido1` varchar(30) DEFAULT NULL,
  `apellido2` varchar(30) DEFAULT NULL,
  `nif` varchar(15) DEFAULT NULL,
  `era_key` varchar(45) DEFAULT NULL,
  `id_security_admin` int(11) DEFAULT NULL,
  `activa` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_site`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresas` (
  `nif` varchar(9) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `actividad` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`nif`),
  KEY `fk_actividad` (`actividad`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `empresas_datos`
--

DROP TABLE IF EXISTS `empresas_datos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresas_datos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_entidad` char(1) DEFAULT 'C',
  `cif` varchar(15) NOT NULL,
  `denominacion` varchar(120) NOT NULL,
  `forma_juridica_sigla` varchar(45) NOT NULL,
  `direccion` varchar(110) NOT NULL,
  `numero` varchar(25) DEFAULT NULL,
  `poblacion` varchar(45) NOT NULL,
  `provincia_id` int(5) NOT NULL,
  `cp` varchar(5) NOT NULL,
  `fax` varchar(15) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `situacion_empresa` varchar(50) DEFAULT NULL,
  `url_enlace` varchar(45) DEFAULT NULL,
  `cnae_codigo` int(10) DEFAULT NULL,
  `cnae_descripcion` varchar(60) DEFAULT NULL,
  `numempleados_cantidad` int(5) DEFAULT NULL,
  `numempleados_anyo` int(5) DEFAULT NULL,
  `objeto_social` varchar(250) DEFAULT NULL,
  `actividad` varchar(250) DEFAULT NULL,
  `administrador_nombre` varchar(45) DEFAULT NULL,
  `administrador_cargo` varchar(45) DEFAULT NULL,
  `directivo_nombre` varchar(45) DEFAULT NULL,
  `directivo_cargo` varchar(45) DEFAULT NULL,
  `capital_social` varchar(45) DEFAULT NULL,
  `resultado_ultimo_anyo_resultado` varchar(45) DEFAULT NULL,
  `resultado_ultimo_anyo_fecha_cierre_ultimo_balance` varchar(45) DEFAULT NULL,
  `rng_ventas` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=919 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `envio_licencias`
--

DROP TABLE IF EXISTS `envio_licencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `envio_licencias` (
  `id_orden` int(9) NOT NULL,
  `contador` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `envios`
--

DROP TABLE IF EXISTS `envios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `envios` (
  `id_envio` int(10) NOT NULL AUTO_INCREMENT,
  `id_correo` int(10) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(1) NOT NULL DEFAULT 'P',
  PRIMARY KEY (`id_envio`)
) ENGINE=MyISAM AUTO_INCREMENT=376418 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `envios_resellers`
--

DROP TABLE IF EXISTS `envios_resellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `envios_resellers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reseller` varchar(10) NOT NULL,
  `motivo` varchar(45) DEFAULT NULL,
  `codigo_envio` varchar(30) DEFAULT NULL,
  `id_estado_envio` int(10) DEFAULT NULL,
  `numero_solicitud` varchar(30) DEFAULT NULL,
  `url_etiqueta` varchar(250) DEFAULT NULL,
  `fechaEnvio` timestamp NULL DEFAULT NULL,
  `urgente` char(1) DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4192 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `eol_report`
--

DROP TABLE IF EXISTS `eol_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eol_report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `segment_l2` varchar(80) DEFAULT NULL,
  `sales_territory_l1` varchar(80) DEFAULT NULL,
  `sales_territory_l3` varchar(80) DEFAULT NULL,
  `reseller_name` varchar(80) DEFAULT NULL,
  `public_reseller_id` varchar(80) DEFAULT NULL,
  `channel_l4` varchar(80) DEFAULT NULL,
  `plid` varchar(80) DEFAULT NULL,
  `username` varchar(80) DEFAULT NULL,
  `customer_name` varchar(200) DEFAULT NULL,
  `company_name` varchar(200) DEFAULT NULL,
  `customer_email` varchar(100) DEFAULT NULL,
  `item_type_detail` varchar(80) DEFAULT NULL,
  `deal` varchar(80) DEFAULT NULL,
  `deal_code` varchar(80) DEFAULT NULL,
  `batch_register_key_code` varchar(80) DEFAULT NULL,
  `product` varchar(80) DEFAULT NULL,
  `item_expiration_date` date DEFAULT NULL,
  `managed_license` varchar(80) DEFAULT NULL,
  `alpc_seats` float DEFAULT NULL,
  `eolv4v5_seats` float DEFAULT NULL,
  `certificate_seats` float DEFAULT NULL,
  `sha1_seats` float DEFAULT NULL,
  `xcert_seats` float DEFAULT NULL,
  `seats_updating` float DEFAULT NULL,
  `purchased_quantity` float DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `usuario` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=1365920 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `esd`
--

DROP TABLE IF EXISTS `esd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `esd` (
  `dominio` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `estado_alta_resellers`
--

DROP TABLE IF EXISTS `estado_alta_resellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado_alta_resellers` (
  `id_estado_alta` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_estado` varchar(100) NOT NULL,
  PRIMARY KEY (`id_estado_alta`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `estado_resellers`
--

DROP TABLE IF EXISTS `estado_resellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado_resellers` (
  `id_estado` int(3) NOT NULL AUTO_INCREMENT,
  `nombre_estado` varchar(30) NOT NULL,
  PRIMARY KEY (`id_estado`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `estados_presupuestos`
--

DROP TABLE IF EXISTS `estados_presupuestos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estados_presupuestos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `fidelizacion_lostdemos_enviadas`
--

DROP TABLE IF EXISTS `fidelizacion_lostdemos_enviadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fidelizacion_lostdemos_enviadas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `fecha_envio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `iteracion` int(9) NOT NULL,
  `sales` int(9) NOT NULL,
  `enviado` int(9) NOT NULL,
  `es_reseller` int(9) NOT NULL,
  `llega` int(9) NOT NULL,
  `compra` int(9) NOT NULL,
  `fecha_compra` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=323096 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `fidelizacion_lostdemos_ordenes_resellers`
--

DROP TABLE IF EXISTS `fidelizacion_lostdemos_ordenes_resellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fidelizacion_lostdemos_ordenes_resellers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `id_reseller` int(9) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `fidelizacion_lostlicenses_enviadas`
--

DROP TABLE IF EXISTS `fidelizacion_lostlicenses_enviadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fidelizacion_lostlicenses_enviadas` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `fecha_envio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `iteracion` int(1) NOT NULL,
  `sales` int(1) NOT NULL DEFAULT '0' COMMENT '0:no - 1:si',
  `enviado` int(1) NOT NULL DEFAULT '0' COMMENT '0:no - 1:si',
  `es_reseller` int(1) NOT NULL DEFAULT '0' COMMENT '0: no - 1: si',
  `llega` int(1) NOT NULL DEFAULT '0' COMMENT '0: no - 1: si',
  `compra` int(1) NOT NULL DEFAULT '0' COMMENT '0: no - 1: si',
  `fecha_compra` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=110141 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `fidelizacion_lostlicenses_ordenes_resellers`
--

DROP TABLE IF EXISTS `fidelizacion_lostlicenses_ordenes_resellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fidelizacion_lostlicenses_ordenes_resellers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `id_reseller` int(9) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=196653 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `forma_pago`
--

DROP TABLE IF EXISTS `forma_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forma_pago` (
  `id_forma_pago` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `forma_pago` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_forma_pago`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `forma_pago_detail`
--

DROP TABLE IF EXISTS `forma_pago_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forma_pago_detail` (
  `id_forma_pago_detail` int(11) NOT NULL AUTO_INCREMENT,
  `id_forma_pago` int(2) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_forma_pago_detail`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `gdpr`
--

DROP TABLE IF EXISTS `gdpr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gdpr` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) unsigned DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `formulario` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4040588 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `historico_ordenes_solicitudes`
--

DROP TABLE IF EXISTS `historico_ordenes_solicitudes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historico_ordenes_solicitudes` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `producto` varchar(5) NOT NULL,
  `licencias` int(3) NOT NULL DEFAULT '0',
  `es_caja` char(1) NOT NULL DEFAULT 'N',
  `soporte_remoto` char(1) NOT NULL DEFAULT 'N',
  `instalacion_remota` int(11) NOT NULL DEFAULT '0',
  `precio_soporte` float NOT NULL DEFAULT '0',
  `precio_instalacion` float NOT NULL DEFAULT '0',
  `precio` decimal(7,2) NOT NULL DEFAULT '0.00',
  `opcion_compra` int(3) unsigned DEFAULT '0',
  `comentario` blob,
  `facturacion` tinyint(1) NOT NULL DEFAULT '0',
  `id_forma_pago` int(2) DEFAULT NULL,
  `borrado` int(1) DEFAULT '0',
  `es_usb` char(1) NOT NULL DEFAULT 'N',
  `precio_instalador_personalizado` float NOT NULL DEFAULT '0',
  `precio_soporte24_7` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111062 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `identificador_externo`
--

DROP TABLE IF EXISTS `identificador_externo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identificador_externo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) NOT NULL,
  `id_pedido_externo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_orden` (`id_orden`)
) ENGINE=InnoDB AUTO_INCREMENT=19543 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `instalaciones`
--

DROP TABLE IF EXISTS `instalaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `instalaciones` (
  `hd_serial` varchar(30) NOT NULL,
  `id_orden` int(11) NOT NULL,
  `contador` int(11) NOT NULL,
  PRIMARY KEY (`hd_serial`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `intentoinstalaciones`
--

DROP TABLE IF EXISTS `intentoinstalaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `intentoinstalaciones` (
  `hd_serial` varchar(30) NOT NULL,
  `contador` int(11) NOT NULL,
  PRIMARY KEY (`hd_serial`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ipm_messages`
--

DROP TABLE IF EXISTS `ipm_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ipm_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_name` varchar(45) NOT NULL,
  `username` varchar(15) NOT NULL,
  `date_show` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `action` varchar(15) DEFAULT NULL,
  `reseller` int(11) NOT NULL,
  `date_add` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_index` (`username`,`date_show`)
) ENGINE=InnoDB AUTO_INCREMENT=45634 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ipm_users`
--

DROP TABLE IF EXISTS `ipm_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ipm_users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=158073 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `justificantes_pago`
--

DROP TABLE IF EXISTS `justificantes_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `justificantes_pago` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `file` longblob NOT NULL,
  `date_add` datetime DEFAULT CURRENT_TIMESTAMP,
  `extension` varchar(11) DEFAULT NULL,
  `type` varchar(250) NOT NULL,
  `id_orden` int(9) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19202 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lineas_pedidos_presupuestos`
--

DROP TABLE IF EXISTS `lineas_pedidos_presupuestos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lineas_pedidos_presupuestos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pedido_presupuesto` int(11) NOT NULL,
  `id_presupuesto` int(11) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lineas_presupuestos`
--

DROP TABLE IF EXISTS `lineas_presupuestos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lineas_presupuestos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_presupuesto` int(11) NOT NULL,
  `producto` varchar(5) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `borrado` tinyint(4) NOT NULL DEFAULT '0',
  `id_opcion_compra` int(11) DEFAULT '1',
  `id_orden` int(11) DEFAULT '0',
  `onreg` varchar(30) NOT NULL,
  `pvp_modificado` float NOT NULL DEFAULT '0',
  `id_opcion_compra_especial` int(11) NOT NULL DEFAULT '0',
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_modificacion` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lista_correo`
--

DROP TABLE IF EXISTS `lista_correo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lista_correo` (
  `email` varchar(50) NOT NULL DEFAULT '',
  `id_orden` int(9) unsigned NOT NULL DEFAULT '0',
  `estado` varchar(20) NOT NULL DEFAULT 'Activo',
  `fecha_cancelacion` datetime DEFAULT NULL,
  `dummy` int(11) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `listas`
--

DROP TABLE IF EXISTS `listas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `listas` (
  `id_lista` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `publica` varchar(1) NOT NULL DEFAULT 'N',
  `moderada` varchar(1) NOT NULL DEFAULT 'S',
  `cabeceras` text,
  `tag` varchar(50) DEFAULT NULL,
  `footer` text,
  `footerHTML` text,
  PRIMARY KEY (`id_lista`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `listas_autorizaciones`
--

DROP TABLE IF EXISTS `listas_autorizaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `listas_autorizaciones` (
  `id_lista` int(5) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `id_autorizacion` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_autorizacion`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `listas_subscripciones`
--

DROP TABLE IF EXISTS `listas_subscripciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `listas_subscripciones` (
  `id_subscripcion` int(10) NOT NULL AUTO_INCREMENT,
  `id_lista` int(5) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `md5` varchar(50) DEFAULT NULL,
  `opt_out` tinyint(1) NOT NULL DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_subscripcion`)
) ENGINE=MyISAM AUTO_INCREMENT=55582 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `listas_subscripciones_bajas`
--

DROP TABLE IF EXISTS `listas_subscripciones_bajas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `listas_subscripciones_bajas` (
  `id_baja` int(10) NOT NULL AUTO_INCREMENT,
  `id_subscripcion` int(10) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_baja`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `log_subscripciones`
--

DROP TABLE IF EXISTS `log_subscripciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_subscripciones` (
  `id_log_subscripciones` int(11) NOT NULL AUTO_INCREMENT,
  `snr` varchar(50) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `accion` varchar(1) NOT NULL,
  `remesa` int(11) NOT NULL,
  `id_reseller` int(11) NOT NULL,
  PRIMARY KEY (`id_log_subscripciones`)
) ENGINE=MyISAM AUTO_INCREMENT=293 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lostOrders`
--

DROP TABLE IF EXISTS `lostOrders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lostOrders` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) DEFAULT NULL,
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `renovada` char(1) DEFAULT 'N',
  `comentario` varchar(10000) DEFAULT NULL,
  `presupuesto` varchar(10) DEFAULT NULL,
  `cancelada` char(1) DEFAULT 'N',
  `idOpcionCancelacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15827 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lotes`
--

DROP TABLE IF EXISTS `lotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lotes` (
  `id_lote` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `id_opcion_compra` tinyint(3) NOT NULL,
  `producto` varchar(5) NOT NULL,
  `precio` decimal(7,2) NOT NULL,
  `cantidad` int(4) NOT NULL,
  `reseller` int(10) unsigned NOT NULL DEFAULT '0',
  `caja` char(1) NOT NULL,
  `usb` char(1) DEFAULT 'N',
  `duracion` int(2) NOT NULL,
  `fecha` date NOT NULL,
  `activo` char(1) NOT NULL DEFAULT 'S',
  `fecha_caducidad` date NOT NULL,
  `licencias` int(35) NOT NULL DEFAULT '1',
  `id_promocion` int(10) NOT NULL DEFAULT '0',
  `requesID` int(10) DEFAULT '0',
  `batchCode` varchar(20) DEFAULT '',
  `status` varchar(45) DEFAULT NULL,
  `postpaid` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_lote`),
  KEY `id_promocion` (`id_promocion`)
) ENGINE=MyISAM AUTO_INCREMENT=945 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mail_track`
--

DROP TABLE IF EXISTS `mail_track`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mail_track` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) DEFAULT NULL,
  `md5` varchar(32) DEFAULT NULL,
  `id_mail_track_type` int(9) DEFAULT NULL,
  `opened` int(20) DEFAULT NULL,
  `date_add` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1179583 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mail_track_action`
--

DROP TABLE IF EXISTS `mail_track_action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mail_track_action` (
  `id_mail_track_action` int(11) NOT NULL AUTO_INCREMENT,
  `id_mail_track` int(11) NOT NULL,
  `id_referer` int(11) NOT NULL,
  `action` varchar(45) DEFAULT NULL,
  `counter` int(3) NOT NULL DEFAULT '1',
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_mail_track_action`)
) ENGINE=InnoDB AUTO_INCREMENT=37205 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mail_track_type`
--

DROP TABLE IF EXISTS `mail_track_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mail_track_type` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `nombre_mail` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mantener_claves`
--

DROP TABLE IF EXISTS `mantener_claves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mantener_claves` (
  `id_orden` int(9) NOT NULL,
  `mantener` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_orden`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `msp`
--

DROP TABLE IF EXISTS `msp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manager` tinyint(1) DEFAULT NULL,
  `reseller` tinyint(1) DEFAULT NULL,
  `division_id` varchar(45) DEFAULT NULL,
  `email` varchar(120) NOT NULL,
  `trial_license_allowed` tinyint(1) DEFAULT NULL,
  `custom_identifier` int(10) NOT NULL,
  `comment` varchar(150) DEFAULT NULL,
  `vat_id` varchar(15) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `name` varchar(150) NOT NULL,
  `company_id` varchar(60) NOT NULL,
  `password` varchar(60) DEFAULT NULL,
  `id_address` int(11) NOT NULL,
  `id_status` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `custom_identifier` (`custom_identifier`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `company_id` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `msp_address`
--

DROP TABLE IF EXISTS `msp_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msp_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country_code` char(3) NOT NULL,
  `state` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `street_address` varchar(200) DEFAULT NULL,
  `zip_code` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=292 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `msp_customer`
--

DROP TABLE IF EXISTS `msp_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msp_customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `custom_identifier` varchar(45) DEFAULT NULL,
  `comment` varchar(150) DEFAULT NULL,
  `vat_id` varchar(45) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `name` varchar(150) DEFAULT NULL,
  `company_id` varchar(150) DEFAULT NULL,
  `id_address` int(11) NOT NULL,
  `id_msp` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=262 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `msp_customer_has_msp_user`
--

DROP TABLE IF EXISTS `msp_customer_has_msp_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msp_customer_has_msp_user` (
  `msp_customer_id` int(11) NOT NULL,
  `msp_user_id` int(11) NOT NULL,
  `permission_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`msp_customer_id`,`msp_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `msp_customer_license`
--

DROP TABLE IF EXISTS `msp_customer_license`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msp_customer_license` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `public_license_key` varchar(20) DEFAULT NULL,
  `product_code` int(10) DEFAULT NULL,
  `id_msp_customer` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=291 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `msp_has_msp_products`
--

DROP TABLE IF EXISTS `msp_has_msp_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msp_has_msp_products` (
  `id_msp` int(11) NOT NULL,
  `id_msp_products` int(11) NOT NULL,
  PRIMARY KEY (`id_msp_products`,`id_msp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `msp_license_history`
--

DROP TABLE IF EXISTS `msp_license_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msp_license_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) DEFAULT NULL,
  `trial` tinyint(1) NOT NULL DEFAULT '0',
  `suspended` tinyint(1) NOT NULL DEFAULT '0',
  `date_add` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `id_msp_customer_license` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=401 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `msp_old`
--

DROP TABLE IF EXISTS `msp_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msp_old` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estado` char(1) NOT NULL DEFAULT 'A',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=901 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `msp_products`
--

DROP TABLE IF EXISTS `msp_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msp_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `msp_status`
--

DROP TABLE IF EXISTS `msp_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msp_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `msp_user`
--

DROP TABLE IF EXISTS `msp_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msp_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) NOT NULL,
  `firstname` varchar(150) NOT NULL,
  `lastname` varchar(150) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `country_code` varchar(3) NOT NULL DEFAULT 'ESP',
  `phone` varchar(150) DEFAULT NULL,
  `id_msp` int(11) NOT NULL,
  `permission_type` int(11) NOT NULL,
  `userId` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `nro_serie`
--

DROP TABLE IF EXISTS `nro_serie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nro_serie` (
  `snr` varchar(30) NOT NULL,
  `id_lote` int(5) NOT NULL,
  `usado` char(1) NOT NULL DEFAULT 'N',
  `reseller` int(10) NOT NULL DEFAULT '0',
  `fecha_activacion` datetime DEFAULT NULL,
  PRIMARY KEY (`snr`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `nro_serie_barcode`
--

DROP TABLE IF EXISTS `nro_serie_barcode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nro_serie_barcode` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `snr` varchar(30) NOT NULL,
  `barcode` varchar(30) NOT NULL,
  `activo` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=119553 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `nro_serie_caja`
--

DROP TABLE IF EXISTS `nro_serie_caja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nro_serie_caja` (
  `id_nro_serie_caja` int(10) NOT NULL AUTO_INCREMENT,
  `snr` varchar(30) NOT NULL,
  `id_lote` int(5) NOT NULL,
  `asignado` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id_nro_serie_caja`)
) ENGINE=MyISAM AUTO_INCREMENT=73761 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `onreg`
--

DROP TABLE IF EXISTS `onreg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `onreg` (
  `onreg_ultimo` int(9) unsigned NOT NULL DEFAULT '1000',
  PRIMARY KEY (`onreg_ultimo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `opcion_compra`
--

DROP TABLE IF EXISTS `opcion_compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `opcion_compra` (
  `id_opcion_compra` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `opcion_compra` varchar(60) DEFAULT NULL,
  `mostrar` varchar(60) DEFAULT NULL,
  `descuento` float(2,1) NOT NULL DEFAULT '1.0',
  `tipo` char(1) DEFAULT NULL,
  `reseller` char(1) DEFAULT 'N',
  `duracion` int(11) NOT NULL DEFAULT '1',
  `id_purchase_option` tinyint(3) NOT NULL DEFAULT '0',
  `updateType` tinyint(3) NOT NULL DEFAULT '0',
  `vigencia` int(11) DEFAULT NULL,
  `orden` tinyint(2) NOT NULL,
  `string_purchase_option` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_opcion_compra`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `opcionesCancelacion`
--

DROP TABLE IF EXISTS `opcionesCancelacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `opcionesCancelacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mostrar` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orden_added`
--

DROP TABLE IF EXISTS `orden_added`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orden_added` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `producto` varchar(5) NOT NULL,
  `fecha` date NOT NULL,
  `precio` decimal(7,2) NOT NULL,
  `id_orden_tienda` int(9) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `factura` tinyint(4) NOT NULL DEFAULT '1',
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=634 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orden_added_backup`
--

DROP TABLE IF EXISTS `orden_added_backup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orden_added_backup` (
  `id` int(11) DEFAULT NULL,
  `id_orden` int(9) NOT NULL,
  `producto` varchar(5) NOT NULL,
  `fecha` date NOT NULL,
  `precio` decimal(7,2) NOT NULL,
  `id_orden_tienda` int(9) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `factura` tinyint(4) NOT NULL DEFAULT '1',
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orden_analytics`
--

DROP TABLE IF EXISTS `orden_analytics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orden_analytics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) NOT NULL,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53164 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orden_carrier`
--

DROP TABLE IF EXISTS `orden_carrier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orden_carrier` (
  `id_orden` int(11) NOT NULL,
  `carrier` varchar(45) DEFAULT NULL,
  `amount` decimal(5,2) DEFAULT NULL,
  `id_estado_envio` int(11) DEFAULT '0',
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_orden`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orden_descuento`
--

DROP TABLE IF EXISTS `orden_descuento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orden_descuento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_descuento` int(11) NOT NULL,
  `id_orden` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_orden_descuento` (`id_descuento`,`id_orden`),
  UNIQUE KEY `id_orden` (`id_orden`)
) ENGINE=InnoDB AUTO_INCREMENT=129968 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orden_libro`
--

DROP TABLE IF EXISTS `orden_libro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orden_libro` (
  `id_orden` int(11) NOT NULL,
  `libro` tinyint(4) DEFAULT '1',
  `amount` decimal(5,2) DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_orden`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orden_ontinet_commonTag`
--

DROP TABLE IF EXISTS `orden_ontinet_commonTag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orden_ontinet_commonTag` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `commonTag` varchar(36) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orden_promocion`
--

DROP TABLE IF EXISTS `orden_promocion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orden_promocion` (
  `id_orden_promocion` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) NOT NULL,
  `id_promocion` int(11) NOT NULL,
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_orden_promocion`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes`
--

DROP TABLE IF EXISTS `ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes` (
  `id_orden` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `reseller` int(10) unsigned NOT NULL DEFAULT '0',
  `producto` varchar(5) DEFAULT NULL,
  `licencias` int(6) unsigned DEFAULT NULL,
  `cliente_nombre` varchar(200) DEFAULT '0',
  `cliente_contacto` varchar(50) DEFAULT NULL,
  `cliente_email` varchar(100) DEFAULT NULL,
  `cliente_telefono` varchar(30) DEFAULT NULL,
  `cliente_nif` varchar(20) NOT NULL,
  `expiracion` date DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT '0.00',
  `precio_licencia` decimal(7,2) DEFAULT '0.00',
  `id_tarifa` int(2) NOT NULL DEFAULT '0',
  `servidores` int(3) unsigned DEFAULT '0',
  `notas` blob,
  `enviar_cliente` char(1) DEFAULT 'S',
  `enviar_reseller` char(1) DEFAULT 'N',
  `opcion_compra` int(3) unsigned DEFAULT '0',
  `usuario` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `fecha` date NOT NULL,
  `hay_lic` char(1) DEFAULT 'N',
  `onreg` varchar(30) NOT NULL,
  `comentario` blob,
  `estado` char(1) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL DEFAULT 'A',
  `ordenada_por` char(1) NOT NULL DEFAULT 'R',
  `snr` varchar(30) DEFAULT NULL,
  `pdf` char(1) DEFAULT 'N',
  `codigo_expedicia` varchar(30) DEFAULT NULL,
  `comentario_publico` blob,
  `reseller_email_opcional` varchar(50) DEFAULT NULL,
  `aviso_distribuidor` char(1) DEFAULT 'S',
  `fecha_envio_aviso` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `generada_desde` varchar(10) DEFAULT NULL,
  `albaran` varchar(200) DEFAULT NULL,
  `renovada` char(1) DEFAULT 'N',
  `de_agente` char(1) DEFAULT 'N',
  `tipo_persona` char(1) DEFAULT NULL,
  `cliente_apellido1` varchar(80) DEFAULT NULL,
  `cliente_apellido2` varchar(80) DEFAULT NULL,
  `id_tipo_empresa` int(2) DEFAULT NULL,
  `nombre_comercial` varchar(80) DEFAULT NULL,
  `nuevo_modelo` char(1) DEFAULT NULL,
  `user_agent` varchar(400) NOT NULL DEFAULT '',
  `es_caja` char(1) NOT NULL DEFAULT 'N',
  `es_usb` char(1) NOT NULL DEFAULT 'N',
  `id_orden_comprada` int(9) DEFAULT NULL,
  `id_orden_antigua` int(9) DEFAULT NULL,
  `robinson` varchar(1) NOT NULL DEFAULT '0',
  `ampliada` varchar(1) DEFAULT 'N',
  `promocion` int(11) NOT NULL,
  `id_forma_pago` int(2) NOT NULL DEFAULT '0',
  `soporte_remoto` char(1) DEFAULT 'N',
  `precio_soporte` float NOT NULL DEFAULT '0',
  `instalacion_remota` int(11) NOT NULL DEFAULT '0',
  `precio_instalacion` float NOT NULL DEFAULT '0',
  `precio_instalador_personalizado` float(10,2) NOT NULL DEFAULT '0.00',
  `commonTag` varchar(45) DEFAULT NULL,
  `facturacion` tinyint(1) NOT NULL DEFAULT '1',
  `soporte24_7` char(1) DEFAULT 'N',
  `precio_soporte24_7` float DEFAULT '0',
  `anyos_validez` int(2) DEFAULT '1',
  `autorenewal` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_orden`),
  KEY `reseller` (`reseller`,`producto`,`expiracion`),
  KEY `fecha` (`fecha`),
  KEY `onreg` (`onreg`),
  KEY `cliente_nombre` (`cliente_nombre`),
  KEY `cliente_nif` (`cliente_nif`),
  KEY `usuario` (`usuario`),
  KEY `opcion_compra` (`opcion_compra`),
  KEY `idx_cliente_email` (`cliente_email`),
  KEY `commonTag` (`commonTag`),
  KEY `instalacion_remota` (`instalacion_remota`),
  KEY `soporte_remoto` (`soporte_remoto`)
) ENGINE=MyISAM AUTO_INCREMENT=52363591 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`order_to_odoo_table_AFTER_INSERT` AFTER INSERT ON `ordenes` FOR EACH ROW
BEGIN
INSERT INTO to_odoo_temp_trigger (tablename, id_row, common_tag, action) VALUES ('ordenes', NEW.id_orden, NEW.commonTag, 'insert');
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`backup_ordenes_BEFORE_UPDATE`
BEFORE UPDATE ON `ordenes`.`ordenes`
FOR EACH ROW BEGIN
DELETE FROM ordenes_backup WHERE id_orden = OLD.id_orden;
INSERT INTO ordenes_backup (SELECT *, NOW() FROM ordenes WHERE id_orden = OLD.id_orden);
UPDATE ordenes SET fecha_cancelacion = NOW() WHERE OLD.id_orden = NEW.id_orden AND OLD.estado != NEW.estado AND NEW.estado = 'C'; 
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`order_to_odoo_table_AFTER_UPDATE` AFTER UPDATE ON `ordenes`.`ordenes` FOR EACH ROW 
BEGIN
DECLARE to_update INT;
DECLARE exist INT;
IF 
OLD.reseller <> NEW.reseller OR 
OLD.producto <> NEW.producto OR 
OLD.cliente_nombre <> NEW.cliente_nombre OR 
OLD.cliente_contacto <> NEW.cliente_contacto OR 
OLD.cliente_email <> NEW.cliente_email OR 
OLD.cliente_telefono <> NEW.cliente_telefono OR 
OLD.cliente_nif <> NEW.cliente_nif OR 
OLD.expiracion <> NEW.expiracion OR 
OLD.precio <> NEW.precio OR 
OLD.notas <> NEW.notas OR 
OLD.enviar_cliente <> NEW.enviar_cliente OR 
OLD.enviar_reseller <> NEW.enviar_reseller OR 
OLD.opcion_compra <> NEW.opcion_compra OR 
OLD.usuario <> NEW.usuario OR 
OLD.password <> NEW.password OR 
OLD.fecha <> NEW.fecha OR 
OLD.onreg <> NEW.onreg OR 
OLD.comentario <> NEW.comentario OR 
OLD.estado <> NEW.estado OR 
OLD.snr <> NEW.snr OR 
OLD.comentario_publico <> NEW.comentario_publico OR 
OLD.hora <> NEW.hora OR 
OLD.generada_desde <> NEW.generada_desde OR 
OLD.de_agente <> NEW.de_agente OR 
OLD.tipo_persona <> NEW.tipo_persona OR 
OLD.cliente_apellido1 <> NEW.cliente_apellido1 OR 
OLD.cliente_apellido2 <> NEW.cliente_apellido2 OR 
OLD.id_tipo_empresa <> NEW.id_tipo_empresa OR 
OLD.es_caja <> NEW.es_caja OR 
OLD.es_usb <> NEW.es_usb OR 
OLD.robinson <> NEW.robinson OR 
OLD.promocion <> NEW.promocion OR 
OLD.id_forma_pago <> NEW.id_forma_pago OR 
OLD.soporte_remoto <> NEW.soporte_remoto OR 
OLD.precio_soporte <> NEW.precio_soporte OR 
OLD.instalacion_remota <> NEW.instalacion_remota OR 
OLD.precio_instalacion <> NEW.precio_instalacion OR 
OLD.precio_instalador_personalizado <> NEW.precio_instalador_personalizado OR 
OLD.commonTag <> NEW.commonTag OR 
OLD.facturacion <> NEW.facturacion OR 
OLD.soporte24_7 <> NEW.soporte24_7 OR 
OLD.precio_soporte24_7 <> NEW.precio_soporte24_7 OR 
OLD.anyos_validez <> NEW.anyos_validez OR 
OLD.autorenewal <> NEW.autorenewal
THEN
SET exist = ( SELECT count(*) FROM to_odoo_temp_trigger where tablename='ordenes' AND id_row = NEW.id_orden );
if exist=0
THEN
INSERT INTO to_odoo_temp_trigger (tablename, id_row, common_tag, action) VALUES ('ordenes', NEW.id_orden, NEW.commonTag, 'update');
ELSE
UPDATE to_odoo_temp_trigger SET common_tag=NEW.commonTag WHERE tablename='ordenes' AND id_row = NEW.id_orden;
END if;
END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`backup_ordenes_BEFORE_DELETE` BEFORE DELETE ON `ordenes`.`ordenes` FOR EACH ROW
BEGIN
DELETE FROM ordenes_backup WHERE id_orden = OLD.id_orden;
INSERT INTO ordenes_backup (SELECT * FROM ordenes WHERE id_orden = OLD.id_orden);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ordenes_backup`
--

DROP TABLE IF EXISTS `ordenes_backup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_backup` (
  `id_orden` int(9) unsigned DEFAULT NULL,
  `reseller` int(10) unsigned NOT NULL DEFAULT '0',
  `producto` varchar(5) DEFAULT NULL,
  `licencias` int(3) unsigned DEFAULT '0',
  `cliente_nombre` varchar(200) DEFAULT '0',
  `cliente_contacto` varchar(50) DEFAULT NULL,
  `cliente_email` varchar(100) DEFAULT NULL,
  `cliente_telefono` varchar(30) DEFAULT NULL,
  `cliente_nif` varchar(20) NOT NULL,
  `expiracion` date DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT '0.00',
  `precio_licencia` decimal(7,2) DEFAULT '0.00',
  `id_tarifa` int(2) NOT NULL DEFAULT '1',
  `servidores` int(3) unsigned DEFAULT '0',
  `notas` blob,
  `enviar_cliente` char(1) DEFAULT 'S',
  `enviar_reseller` char(1) DEFAULT 'N',
  `opcion_compra` int(3) unsigned DEFAULT '0',
  `usuario` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `fecha` date NOT NULL,
  `hay_lic` char(1) DEFAULT 'N',
  `onreg` varchar(30) NOT NULL,
  `comentario` blob,
  `estado` char(1) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL DEFAULT 'A',
  `ordenada_por` char(1) NOT NULL DEFAULT 'R',
  `snr` varchar(30) DEFAULT NULL,
  `pdf` char(1) DEFAULT 'N',
  `codigo_expedicia` varchar(30) DEFAULT NULL,
  `comentario_publico` blob,
  `reseller_email_opcional` varchar(50) DEFAULT NULL,
  `aviso_distribuidor` char(1) DEFAULT 'S',
  `fecha_envio_aviso` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `generada_desde` varchar(10) DEFAULT NULL,
  `albaran` varchar(200) DEFAULT NULL,
  `renovada` char(1) DEFAULT 'N',
  `de_agente` char(1) DEFAULT 'N',
  `tipo_persona` char(1) DEFAULT NULL,
  `cliente_apellido1` varchar(80) DEFAULT NULL,
  `cliente_apellido2` varchar(80) DEFAULT NULL,
  `id_tipo_empresa` int(2) DEFAULT NULL,
  `nombre_comercial` varchar(80) DEFAULT NULL,
  `nuevo_modelo` char(1) DEFAULT NULL,
  `user_agent` varchar(400) NOT NULL DEFAULT '',
  `es_caja` char(1) NOT NULL DEFAULT 'N',
  `es_usb` char(1) NOT NULL DEFAULT 'N',
  `id_orden_comprada` int(9) DEFAULT NULL,
  `id_orden_antigua` int(9) DEFAULT NULL,
  `robinson` varchar(1) NOT NULL DEFAULT 'N',
  `ampliada` varchar(1) DEFAULT 'N',
  `promocion` int(11) NOT NULL,
  `id_forma_pago` int(2) NOT NULL DEFAULT '0',
  `soporte_remoto` char(1) DEFAULT 'N',
  `precio_soporte` float NOT NULL DEFAULT '0',
  `instalacion_remota` int(11) NOT NULL DEFAULT '0',
  `precio_instalacion` float NOT NULL DEFAULT '0',
  `precio_instalador_personalizado` float(10,2) NOT NULL DEFAULT '0.00',
  `commonTag` varchar(45) DEFAULT NULL,
  `facturacion` tinyint(1) NOT NULL DEFAULT '1',
  `soporte24_7` char(1) DEFAULT 'N',
  `precio_soporte24_7` float DEFAULT '0',
  `anyos_validez` int(2) DEFAULT '1',
  `autorenewal` tinyint(1) NOT NULL DEFAULT '0',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `reseller` (`reseller`,`producto`,`expiracion`),
  KEY `fecha` (`fecha`),
  KEY `onreg` (`onreg`),
  KEY `cliente_nombre` (`cliente_nombre`),
  KEY `cliente_nif` (`cliente_nif`),
  KEY `usuario` (`usuario`),
  KEY `opcion_compra` (`opcion_compra`),
  KEY `idx_cliente_email` (`cliente_email`),
  KEY `commonTag` (`commonTag`),
  KEY `instalacion_remota` (`instalacion_remota`),
  KEY `soporte_remoto` (`soporte_remoto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_bankwire`
--

DROP TABLE IF EXISTS `ordenes_bankwire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_bankwire` (
  `id_orden` int(10) NOT NULL,
  `bank_number` varchar(30) NOT NULL,
  `precio` decimal(7,2) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  PRIMARY KEY (`id_orden`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_cancelaciones`
--

DROP TABLE IF EXISTS `ordenes_cancelaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_cancelaciones` (
  `id_orden` int(11) NOT NULL,
  `motivo` varchar(45) NOT NULL,
  PRIMARY KEY (`id_orden`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_factura_cliente`
--

DROP TABLE IF EXISTS `ordenes_factura_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_factura_cliente` (
  `id_ordenes_factura_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `factura_cliente` tinyint(1) NOT NULL DEFAULT '1',
  `date_add` date DEFAULT NULL,
  PRIMARY KEY (`id_ordenes_factura_cliente`),
  UNIQUE KEY `id_ordenes_factura_cliente_UNIQUE` (`id_ordenes_factura_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=1744 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_impagadas`
--

DROP TABLE IF EXISTS `ordenes_impagadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_impagadas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` varchar(9) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1710 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_instalador`
--

DROP TABLE IF EXISTS `ordenes_instalador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_instalador` (
  `id_orden` int(11) NOT NULL,
  `instalador` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id_orden`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_ip`
--

DROP TABLE IF EXISTS `ordenes_ip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_ip` (
  `id_orden` int(11) NOT NULL,
  `IP` varchar(30) NOT NULL,
  PRIMARY KEY (`id_orden`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_md5`
--

DROP TABLE IF EXISTS `ordenes_md5`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_md5` (
  `id_orden` int(9) NOT NULL,
  `md5` varchar(32) NOT NULL,
  `descargas` int(2) NOT NULL DEFAULT '0',
  `md5fichero` varchar(32) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_orden`),
  KEY `MD5` (`md5`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_old`
--

DROP TABLE IF EXISTS `ordenes_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_old` (
  `id_orden` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `reseller` int(5) DEFAULT '-1',
  `producto` varchar(5) DEFAULT NULL,
  `licencias` int(3) unsigned DEFAULT '0',
  `cliente_nombre` varchar(80) DEFAULT '0',
  `cliente_contacto` varchar(50) DEFAULT NULL,
  `cliente_email` varchar(50) DEFAULT NULL,
  `cliente_telefono` varchar(30) DEFAULT NULL,
  `cliente_nif` varchar(20) NOT NULL,
  `expiracion` date DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT '0.00',
  `servidores` int(3) unsigned DEFAULT '0',
  `notas` blob,
  `enviar_cliente` char(1) DEFAULT 'S',
  `enviar_reseller` char(1) DEFAULT 'N',
  `opcion_compra` int(3) unsigned DEFAULT '0',
  `usuario` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `fecha` date NOT NULL,
  `hay_lic` char(1) DEFAULT 'N',
  `onreg` varchar(30) NOT NULL,
  `comentario` blob,
  `estado` char(1) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL DEFAULT 'A',
  `ordenada_por` char(1) NOT NULL DEFAULT 'R',
  `snr` varchar(30) DEFAULT NULL,
  `pdf` char(1) DEFAULT 'N',
  `codigo_expedicia` varchar(30) DEFAULT NULL,
  `comentario_publico` blob,
  `reseller_email_opcional` varchar(50) DEFAULT NULL,
  `aviso_distribuidor` char(1) DEFAULT 'S',
  `fecha_envio_aviso` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `generada_desde` varchar(10) DEFAULT NULL,
  `albaran` varchar(200) DEFAULT NULL,
  `renovada` char(1) DEFAULT 'N',
  `de_agente` char(1) DEFAULT 'N',
  `tipo_persona` char(1) DEFAULT NULL,
  `cliente_apellido1` varchar(80) DEFAULT NULL,
  `cliente_apellido2` varchar(80) DEFAULT NULL,
  `id_tipo_empresa` int(2) DEFAULT NULL,
  `nombre_comercial` varchar(80) DEFAULT NULL,
  `nuevo_modelo` char(1) DEFAULT NULL,
  `user_agent` varchar(200) NOT NULL DEFAULT '',
  `es_caja` char(1) NOT NULL DEFAULT 'N',
  `id_orden_comprada` int(9) DEFAULT NULL,
  `id_orden_antigua` int(9) DEFAULT NULL,
  PRIMARY KEY (`id_orden`),
  KEY `reseller` (`reseller`,`producto`,`expiracion`),
  KEY `fecha` (`fecha`),
  KEY `onreg` (`onreg`),
  KEY `cliente_nombre` (`cliente_nombre`),
  KEY `cliente_nif` (`cliente_nif`),
  KEY `usuario` (`usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=648325 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_pais`
--

DROP TABLE IF EXISTS `ordenes_pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_pais` (
  `id_orden` int(9) NOT NULL,
  `country_code` varchar(50) NOT NULL,
  PRIMARY KEY (`id_orden`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_reduccion`
--

DROP TABLE IF EXISTS `ordenes_reduccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_reduccion` (
  `id_ordenes_reduccion` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `es_reducible` tinyint(4) DEFAULT '0',
  `cantidad_minima` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ordenes_reduccion`,`id_orden`),
  UNIQUE KEY `id_orden_UNIQUE` (`id_orden`),
  UNIQUE KEY `id_ordenes_reduccion_UNIQUE` (`id_ordenes_reduccion`)
) ENGINE=InnoDB AUTO_INCREMENT=1207 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_salesorder`
--

DROP TABLE IF EXISTS `ordenes_salesorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_salesorder` (
  `id_ordenes_salesorder` int(9) NOT NULL AUTO_INCREMENT,
  `md5` varchar(32) DEFAULT NULL,
  `pagado` char(1) DEFAULT 'N',
  `salesorder_no` varchar(100) NOT NULL,
  PRIMARY KEY (`id_ordenes_salesorder`),
  UNIQUE KEY `id_ordenes_salesorder_UNIQUE` (`id_ordenes_salesorder`)
) ENGINE=InnoDB AUTO_INCREMENT=54381 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_salesorder_detail`
--

DROP TABLE IF EXISTS `ordenes_salesorder_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_salesorder_detail` (
  `id_ordenes_salesorder_detail` int(11) NOT NULL AUTO_INCREMENT,
  `id_ordenes_salesorder` int(9) NOT NULL,
  `id_orden` int(9) NOT NULL,
  PRIMARY KEY (`id_ordenes_salesorder_detail`),
  UNIQUE KEY `id_ordenes_salesorder_detail_UNIQUE` (`id_ordenes_salesorder_detail`)
) ENGINE=InnoDB AUTO_INCREMENT=55318 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_salesorder_original`
--

DROP TABLE IF EXISTS `ordenes_salesorder_original`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_salesorder_original` (
  `id_orden` int(9) unsigned NOT NULL DEFAULT '0',
  `reseller` int(10) unsigned NOT NULL DEFAULT '0',
  `producto` varchar(5) DEFAULT NULL,
  `licencias` int(6) unsigned DEFAULT NULL,
  `cliente_nombre` varchar(200) DEFAULT '0',
  `cliente_contacto` varchar(50) DEFAULT NULL,
  `cliente_email` varchar(100) DEFAULT NULL,
  `cliente_telefono` varchar(30) DEFAULT NULL,
  `cliente_nif` varchar(20) NOT NULL,
  `expiracion` date DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT '0.00',
  `precio_licencia` decimal(7,2) DEFAULT '0.00',
  `id_tarifa` int(2) NOT NULL DEFAULT '1',
  `servidores` int(3) unsigned DEFAULT '0',
  `notas` blob,
  `enviar_cliente` char(1) DEFAULT 'S',
  `enviar_reseller` char(1) DEFAULT 'N',
  `opcion_compra` int(3) unsigned DEFAULT '0',
  `usuario` varchar(25) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `fecha` date NOT NULL,
  `hay_lic` char(1) DEFAULT 'N',
  `onreg` varchar(30) NOT NULL,
  `comentario` blob,
  `estado` char(1) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL DEFAULT 'A',
  `ordenada_por` char(1) NOT NULL DEFAULT 'R',
  `snr` varchar(30) DEFAULT NULL,
  `pdf` char(1) DEFAULT 'N',
  `codigo_expedicia` varchar(30) DEFAULT NULL,
  `comentario_publico` blob,
  `reseller_email_opcional` varchar(50) DEFAULT NULL,
  `aviso_distribuidor` char(1) DEFAULT 'S',
  `fecha_envio_aviso` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `generada_desde` varchar(10) DEFAULT NULL,
  `albaran` varchar(200) DEFAULT NULL,
  `renovada` char(1) DEFAULT 'N',
  `de_agente` char(1) DEFAULT 'N',
  `tipo_persona` char(1) DEFAULT NULL,
  `cliente_apellido1` varchar(80) DEFAULT NULL,
  `cliente_apellido2` varchar(80) DEFAULT NULL,
  `id_tipo_empresa` int(2) DEFAULT NULL,
  `nombre_comercial` varchar(80) DEFAULT NULL,
  `nuevo_modelo` char(1) DEFAULT NULL,
  `user_agent` varchar(400) NOT NULL DEFAULT '',
  `es_caja` char(1) NOT NULL DEFAULT 'N',
  `es_usb` char(1) NOT NULL DEFAULT 'N',
  `id_orden_comprada` int(9) DEFAULT NULL,
  `id_orden_antigua` int(9) DEFAULT NULL,
  `robinson` varchar(1) NOT NULL DEFAULT 'N',
  `ampliada` varchar(1) DEFAULT 'N',
  `promocion` int(11) NOT NULL,
  `id_forma_pago` int(2) NOT NULL DEFAULT '0',
  `soporte_remoto` char(1) DEFAULT 'N',
  `precio_soporte` float NOT NULL DEFAULT '0',
  `instalacion_remota` int(11) NOT NULL DEFAULT '0',
  `precio_instalacion` float NOT NULL DEFAULT '0',
  `precio_instalador_personalizado` float(10,2) NOT NULL DEFAULT '0.00',
  `commonTag` varchar(45) DEFAULT NULL,
  `facturacion` tinyint(1) NOT NULL DEFAULT '1',
  `soporte24_7` char(1) DEFAULT 'N',
  `precio_soporte24_7` float DEFAULT '0',
  `anyos_validez` int(2) DEFAULT '1',
  `autorenewal` tinyint(1) NOT NULL DEFAULT '0',
  `md5` varchar(32) NOT NULL,
  PRIMARY KEY (`id_orden`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_servicios`
--

DROP TABLE IF EXISTS `ordenes_servicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_servicios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) NOT NULL,
  `servicio` varchar(45) NOT NULL,
  `cantidad` int(9) DEFAULT '1',
  `estado` varchar(45) NOT NULL,
  `usado` tinyint(1) NOT NULL DEFAULT '0',
  `cantidad_usada` int(9) DEFAULT '0',
  `precio` decimal(7,2) DEFAULT '0.00',
  `fecha_caducidad` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fecha_creacion` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=760 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_suscripcion`
--

DROP TABLE IF EXISTS `ordenes_suscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_suscripcion` (
  `id_ordenes_suscripcion` int(11) NOT NULL AUTO_INCREMENT,
  `onreg` varchar(20) DEFAULT NULL,
  `id_orden` int(11) NOT NULL,
  `id_forma_pago` int(11) DEFAULT NULL,
  `num_transaccion` varchar(45) DEFAULT NULL,
  `estado_suscripcion` varchar(45) DEFAULT 'PENDIENTE',
  `fecha_cancelacion` timestamp NULL DEFAULT NULL,
  `tipo_suscripcion` varchar(45) DEFAULT NULL,
  `pago_periodico` decimal(7,2) DEFAULT NULL,
  `fecha_proximo_pago` date DEFAULT NULL,
  `tipo_pago` varchar(10) DEFAULT NULL,
  `free_days` int(3) DEFAULT '0',
  `autoupgrade` tinyint(1) DEFAULT '0',
  `create_time` timestamp NULL DEFAULT NULL,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ordenes_suscripcion`)
) ENGINE=InnoDB AUTO_INCREMENT=94770 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_suspendidas`
--

DROP TABLE IF EXISTS `ordenes_suspendidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_suspendidas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(10) NOT NULL,
  `suspendida` tinyint(1) NOT NULL DEFAULT '1',
  `date_add` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_end` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ordenes_tienda`
--

DROP TABLE IF EXISTS `ordenes_tienda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_tienda` (
  `id_orden_tienda` int(9) DEFAULT NULL,
  `id_orden_crm` int(9) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary table structure for view `ordenes_to_odoo`
--

DROP TABLE IF EXISTS `ordenes_to_odoo`;
/*!50001 DROP VIEW IF EXISTS `ordenes_to_odoo`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `ordenes_to_odoo` (
  `id_orden` tinyint NOT NULL,
  `reseller` tinyint NOT NULL,
  `producto` tinyint NOT NULL,
  `licencias` tinyint NOT NULL,
  `cliente_nombre` tinyint NOT NULL,
  `cliente_contacto` tinyint NOT NULL,
  `cliente_email` tinyint NOT NULL,
  `cliente_telefono` tinyint NOT NULL,
  `cliente_nif` tinyint NOT NULL,
  `expiracion` tinyint NOT NULL,
  `precio` tinyint NOT NULL,
  `precio_licencia` tinyint NOT NULL,
  `servidores` tinyint NOT NULL,
  `notas` tinyint NOT NULL,
  `enviar_cliente` tinyint NOT NULL,
  `enviar_reseller` tinyint NOT NULL,
  `opcion_compra` tinyint NOT NULL,
  `usuario` tinyint NOT NULL,
  `password` tinyint NOT NULL,
  `fecha` tinyint NOT NULL,
  `hay_lic` tinyint NOT NULL,
  `onreg` tinyint NOT NULL,
  `comentario` tinyint NOT NULL,
  `estado` tinyint NOT NULL,
  `ordenada_por` tinyint NOT NULL,
  `snr` tinyint NOT NULL,
  `pdf` tinyint NOT NULL,
  `codigo_expedicia` tinyint NOT NULL,
  `comentario_publico` tinyint NOT NULL,
  `reseller_email_opcional` tinyint NOT NULL,
  `aviso_distribuidor` tinyint NOT NULL,
  `fecha_envio_aviso` tinyint NOT NULL,
  `hora` tinyint NOT NULL,
  `generada_desde` tinyint NOT NULL,
  `albaran` tinyint NOT NULL,
  `renovada` tinyint NOT NULL,
  `de_agente` tinyint NOT NULL,
  `tipo_persona` tinyint NOT NULL,
  `cliente_apellido1` tinyint NOT NULL,
  `cliente_apellido2` tinyint NOT NULL,
  `id_tipo_empresa` tinyint NOT NULL,
  `nombre_comercial` tinyint NOT NULL,
  `nuevo_modelo` tinyint NOT NULL,
  `user_agent` tinyint NOT NULL,
  `es_caja` tinyint NOT NULL,
  `es_usb` tinyint NOT NULL,
  `id_orden_comprada` tinyint NOT NULL,
  `id_orden_antigua` tinyint NOT NULL,
  `robinson` tinyint NOT NULL,
  `ampliada` tinyint NOT NULL,
  `promocion` tinyint NOT NULL,
  `id_forma_pago` tinyint NOT NULL,
  `soporte_remoto` tinyint NOT NULL,
  `precio_soporte` tinyint NOT NULL,
  `instalacion_remota` tinyint NOT NULL,
  `precio_instalacion` tinyint NOT NULL,
  `precio_instalador_personalizado` tinyint NOT NULL,
  `commonTag` tinyint NOT NULL,
  `facturacion` tinyint NOT NULL,
  `soporte24_7` tinyint NOT NULL,
  `precio_soporte24_7` tinyint NOT NULL,
  `anyos_validez` tinyint NOT NULL,
  `autorenewal` tinyint NOT NULL,
  `id_pedido_externo` tinyint NOT NULL,
  `mostrar` tinyint NOT NULL,
  `error` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `ordenes_update_expiracion`
--

DROP TABLE IF EXISTS `ordenes_update_expiracion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordenes_update_expiracion` (
  `id_orden` int(9) NOT NULL,
  `expiracion` varchar(25) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `packs_certificados`
--

DROP TABLE IF EXISTS `packs_certificados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `packs_certificados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sufijo` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `descuento` int(11) NOT NULL COMMENT 'Porcentaje',
  `lista_certificados` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pagos`
--

DROP TABLE IF EXISTS `pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` varchar(15) NOT NULL,
  `id_pagos_token` int(11) DEFAULT NULL,
  `referencia` varchar(30) DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `origen` varchar(20) DEFAULT NULL,
  `merchantID` varchar(9) DEFAULT '105019566',
  `terminalID` varchar(8) DEFAULT '3',
  `numOperacion` varchar(45) DEFAULT NULL,
  `numAutorizacion` int(6) DEFAULT NULL,
  `numTarjeta` int(4) DEFAULT NULL,
  `caducidad` varchar(7) DEFAULT NULL,
  `tipoTarjeta` varchar(10) DEFAULT NULL,
  `pais` varchar(20) DEFAULT NULL,
  `descripcion` varchar(245) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=514009 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pagos_dev`
--

DROP TABLE IF EXISTS `pagos_dev`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagos_dev` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` varchar(15) NOT NULL,
  `id_pagos_token` int(11) DEFAULT NULL,
  `referencia` varchar(30) DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `origen` varchar(20) DEFAULT NULL,
  `merchantID` varchar(9) DEFAULT '105019566',
  `terminalID` varchar(8) DEFAULT '3',
  `numOperacion` varchar(45) DEFAULT NULL,
  `numAutorizacion` int(6) DEFAULT NULL,
  `numTarjeta` int(4) DEFAULT NULL,
  `caducidad` varchar(7) DEFAULT NULL,
  `tipoTarjeta` varchar(10) DEFAULT NULL,
  `pais` varchar(20) DEFAULT NULL,
  `descripcion` varchar(245) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16028 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pagos_inespay`
--

DROP TABLE IF EXISTS `pagos_inespay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagos_inespay` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `id_orden` int(15) NOT NULL,
  `id_transaccion` varchar(255) DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_transaccion_inespay` varchar(255) DEFAULT NULL,
  `signature` varchar(255) DEFAULT NULL,
  `recipient` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1479 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pagos_inespay_dev`
--

DROP TABLE IF EXISTS `pagos_inespay_dev`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagos_inespay_dev` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `id_orden` int(15) NOT NULL,
  `id_transaccion` varchar(255) DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_transaccion_inespay` varchar(255) DEFAULT NULL,
  `signature` varchar(255) DEFAULT NULL,
  `recipient` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=172 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pagos_token`
--

DROP TABLE IF EXISTS `pagos_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagos_token` (
  `id_pagos_token` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(45) DEFAULT NULL,
  `onreg` varchar(20) DEFAULT NULL,
  `id_orden` int(11) DEFAULT NULL,
  `create_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_pagos_token`)
) ENGINE=InnoDB AUTO_INCREMENT=53608 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pagos_token_dev`
--

DROP TABLE IF EXISTS `pagos_token_dev`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagos_token_dev` (
  `id_pagos_token` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(45) DEFAULT NULL,
  `onreg` varchar(20) DEFAULT NULL,
  `id_orden` int(11) DEFAULT NULL,
  `create_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_pagos_token`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pais`
--

DROP TABLE IF EXISTS `pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pais` (
  `id` varchar(3) NOT NULL,
  `pais` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `paypal_orden`
--

DROP TABLE IF EXISTS `paypal_orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paypal_orden` (
  `id_orden` varchar(15) NOT NULL,
  `id_paypal` varchar(255) CHARACTER SET latin1 NOT NULL,
  `precio` decimal(7,2) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  PRIMARY KEY (`id_orden`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pedidos_cajas`
--

DROP TABLE IF EXISTS `pedidos_cajas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos_cajas` (
  `id_pedido_caja` int(10) NOT NULL AUTO_INCREMENT,
  `id_reseller` int(10) NOT NULL,
  `secure_key` varchar(32) NOT NULL,
  `fecha_pedido` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gestionado` tinyint(4) NOT NULL DEFAULT '0',
  `importado` tinyint(4) NOT NULL DEFAULT '0',
  `cancelado` tinyint(4) NOT NULL DEFAULT '0',
  `f_pago` varchar(15) DEFAULT NULL,
  `total` float NOT NULL DEFAULT '0',
  `importa` datetime DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id_pedido_caja`)
) ENGINE=MyISAM AUTO_INCREMENT=1046 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pedidos_certificados`
--

DROP TABLE IF EXISTS `pedidos_certificados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos_certificados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pagado` varchar(1) NOT NULL DEFAULT 'N' COMMENT 'S=pagado - N=no pagado',
  `tipo` varchar(1) NOT NULL DEFAULT 'C' COMMENT 'C: certificados - R: renovaciones',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=208 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pedidos_presupuestos`
--

DROP TABLE IF EXISTS `pedidos_presupuestos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos_presupuestos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pagado` int(1) NOT NULL DEFAULT '0',
  `id_forma_pago` int(1) NOT NULL,
  `fecha_pedido` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_pagado` datetime NOT NULL,
  `md5` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pedidos_webservice`
--

DROP TABLE IF EXISTS `pedidos_webservice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos_webservice` (
  `id` varchar(50) NOT NULL,
  `id_orden` int(9) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `peticiones_instalacion`
--

DROP TABLE IF EXISTS `peticiones_instalacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `peticiones_instalacion` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) NOT NULL,
  `hardDiskSNR` varchar(50) DEFAULT NULL,
  `instalaciones` int(2) DEFAULT '1',
  `version` varchar(20) DEFAULT NULL,
  `origen` varchar(10) DEFAULT NULL,
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=197880 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pre-pass`
--

DROP TABLE IF EXISTS `pre-pass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pre-pass` (
  `reseller` int(5) NOT NULL,
  `md5` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pre_pass`
--

DROP TABLE IF EXISTS `pre_pass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pre_pass` (
  `reseller` int(10) unsigned NOT NULL DEFAULT '0',
  `md5` varchar(32) NOT NULL,
  `pass` varchar(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `precio_subscripcion`
--

DROP TABLE IF EXISTS `precio_subscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `precio_subscripcion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_reseller` int(10) NOT NULL,
  `producto` varchar(5) NOT NULL,
  `precio` float NOT NULL,
  `meses` int(4) DEFAULT '1',
  `inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `precios`
--

DROP TABLE IF EXISTS `precios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `precios` (
  `product_code` varchar(7) NOT NULL DEFAULT '',
  `precio` float NOT NULL DEFAULT '0',
  `precio2` float NOT NULL DEFAULT '0',
  `precio3` float NOT NULL DEFAULT '0',
  `precio_ren` float NOT NULL DEFAULT '0',
  `precio_ren2` float NOT NULL DEFAULT '0',
  `precio_ren3` float NOT NULL DEFAULT '0',
  `min_users` int(11) NOT NULL DEFAULT '0',
  `max_users` int(11) NOT NULL DEFAULT '0',
  `id_tarifa` int(2) NOT NULL DEFAULT '1',
  `tipo_calculo` varchar(1) NOT NULL DEFAULT 'C',
  PRIMARY KEY (`id_tarifa`,`product_code`,`min_users`,`max_users`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `preciosESET`
--

DROP TABLE IF EXISTS `preciosESET`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preciosESET` (
  `product` varchar(60) NOT NULL,
  `product_code` int(5) NOT NULL,
  `sufijo` varchar(5) NOT NULL,
  `purchase_type` varchar(45) NOT NULL,
  `validez` int(2) NOT NULL DEFAULT '1',
  `minimo` int(5) NOT NULL,
  `maximo` int(5) NOT NULL,
  `precio` float NOT NULL,
  `tipo_precio` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `premios_amazon`
--

DROP TABLE IF EXISTS `premios_amazon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `premios_amazon` (
  `id_distribuidor` int(10) NOT NULL,
  `fecha_visualizacion` datetime DEFAULT NULL,
  `facturacion` float NOT NULL,
  `ordenes` int(7) NOT NULL,
  `numero_vales_100` int(7) DEFAULT NULL,
  `numero_vales_50` int(7) DEFAULT NULL,
  `numero_vales_25` int(7) DEFAULT NULL,
  `numero_vales_10` int(7) DEFAULT NULL,
  PRIMARY KEY (`id_distribuidor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `premios_amazon_vales`
--

DROP TABLE IF EXISTS `premios_amazon_vales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `premios_amazon_vales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_vale` varchar(255) DEFAULT NULL,
  `id_distribuidor` int(10) DEFAULT NULL,
  `importe` float DEFAULT NULL,
  `fecha_expiracion` date DEFAULT NULL,
  `numero_de_serie` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=347 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `presupuestos`
--

DROP TABLE IF EXISTS `presupuestos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `presupuestos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_reseller` int(11) NOT NULL,
  `id_estado` int(11) NOT NULL DEFAULT '1',
  `id_cliente` int(11) NOT NULL,
  `identificador` varchar(250) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_conversion` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `sufijo` varchar(5) NOT NULL DEFAULT '',
  `mostrar` varchar(70) NOT NULL DEFAULT '',
  `enviar` varchar(60) NOT NULL DEFAULT '',
  `funcion` varchar(20) DEFAULT NULL,
  `descuento` float(2,2) DEFAULT NULL,
  `mostrar_reseller` char(1) NOT NULL DEFAULT 'N',
  `orden` int(4) NOT NULL DEFAULT '1000',
  `tipo_precio` char(1) NOT NULL DEFAULT '',
  `minimo` int(11) DEFAULT '0',
  `maximo` int(11) DEFAULT '0',
  `product_code` varchar(7) NOT NULL DEFAULT '',
  `tipo` varchar(1) DEFAULT NULL,
  `subtipo` varchar(15) DEFAULT NULL,
  `fabricante` varchar(15) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`sufijo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `productos_new`
--

DROP TABLE IF EXISTS `productos_new`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos_new` (
  `sufijo` varchar(5) NOT NULL DEFAULT '',
  `mostrar` varchar(70) NOT NULL DEFAULT '',
  `enviar` varchar(60) NOT NULL DEFAULT '',
  `funcion` varchar(20) DEFAULT NULL,
  `descuento` float(2,1) unsigned NOT NULL DEFAULT '1.0',
  `mostrar_reseller` char(1) NOT NULL DEFAULT 'N',
  `orden` int(4) NOT NULL DEFAULT '1000',
  `tipo_precio` char(1) NOT NULL DEFAULT '',
  `product_code` varchar(5) NOT NULL DEFAULT '',
  PRIMARY KEY (`sufijo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `promo_covid19`
--

DROP TABLE IF EXISTS `promo_covid19`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promo_covid19` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `id_lote` int(11) DEFAULT NULL,
  `new_mail` tinyint(4) NOT NULL DEFAULT '0',
  `estado` varchar(45) NOT NULL DEFAULT 'INICIAL',
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5214 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `promo_fidelizacion`
--

DROP TABLE IF EXISTS `promo_fidelizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promo_fidelizacion` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `id_orden_promo` int(9) DEFAULT NULL,
  `id_orden_parent` int(9) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=905 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `promo_parental_snr`
--

DROP TABLE IF EXISTS `promo_parental_snr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promo_parental_snr` (
  `id` int(6) NOT NULL,
  `EPC` varchar(30) DEFAULT NULL,
  `ESS` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `promo_r_sociales`
--

DROP TABLE IF EXISTS `promo_r_sociales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promo_r_sociales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `md5` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `coste` double NOT NULL,
  `red_social` varchar(45) DEFAULT NULL,
  `resultado` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=312 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `promo_registry`
--

DROP TABLE IF EXISTS `promo_registry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promo_registry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) NOT NULL,
  `id_promocion` int(11) NOT NULL,
  `id_orden_promocion` int(11) DEFAULT NULL,
  `id_lote` int(11) DEFAULT NULL,
  `new_mail` tinyint(4) NOT NULL DEFAULT '0',
  `estado` varchar(45) NOT NULL DEFAULT 'INICIAL',
  `date_add` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4347 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `promo_sanvalentin`
--

DROP TABLE IF EXISTS `promo_sanvalentin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promo_sanvalentin` (
  `id_promo_sanvalentin` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(8) NOT NULL,
  `codigo_promocion` varchar(45) DEFAULT NULL,
  `nombre_promo` varchar(45) DEFAULT NULL,
  `email_promo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_promo_sanvalentin`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `promociones`
--

DROP TABLE IF EXISTS `promociones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promociones` (
  `id_promocion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `dias` int(11) DEFAULT '0',
  `id_tipo_descuento` int(4) DEFAULT NULL,
  `valor_descuento` float DEFAULT NULL,
  PRIMARY KEY (`id_promocion`)
) ENGINE=MyISAM AUTO_INCREMENT=177 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `promociones_tracking`
--

DROP TABLE IF EXISTS `promociones_tracking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promociones_tracking` (
  `id_promociones_tracking` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) DEFAULT NULL,
  `id_promocion` int(11) DEFAULT NULL,
  `id_tracking` int(11) DEFAULT NULL,
  `date_add` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_promociones_tracking`),
  UNIQUE KEY `id_promociones_tracking_UNIQUE` (`id_promociones_tracking`)
) ENGINE=InnoDB AUTO_INCREMENT=28013 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `provincias`
--

DROP TABLE IF EXISTS `provincias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincias` (
  `id_provincia` int(3) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `id_provincia_tienda` int(3) NOT NULL,
  `cp_provincia` varchar(2) NOT NULL,
  `code` varchar(2) NOT NULL,
  `id_zona` int(3) DEFAULT NULL,
  PRIMARY KEY (`id_provincia`)
) ENGINE=MyISAM AUTO_INCREMENT=54 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `provincias_envios`
--

DROP TABLE IF EXISTS `provincias_envios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincias_envios` (
  `id_provincia` int(11) NOT NULL,
  `id_zona` int(11) NOT NULL,
  PRIMARY KEY (`id_provincia`,`id_zona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `provincias_zonas`
--

DROP TABLE IF EXISTS `provincias_zonas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincias_zonas` (
  `id_zona` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_zona`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ps_envios`
--

DROP TABLE IF EXISTS `ps_envios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ps_envios` (
  `id_order` int(10) NOT NULL,
  `codigo_envio` varchar(30) NOT NULL DEFAULT '0',
  `id_estado_envio` int(10) DEFAULT '0',
  `numero_solicitud` varchar(30) DEFAULT '0',
  `url_etiqueta` varchar(250) DEFAULT '0',
  `fechaEnvio` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `motivo_cancelacion` varchar(30) DEFAULT '',
  PRIMARY KEY (`id_order`),
  UNIQUE KEY `id_order` (`id_order`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`backup_ps_envios_BEFORE_UPDATE` BEFORE UPDATE ON `ordenes`.`ps_envios` FOR EACH ROW 
BEGIN
DELETE FROM ps_envios_backup WHERE id_order = OLD.id_order;
INSERT INTO ps_envios_backup (SELECT * FROM ps_envios WHERE id_order = OLD.id_order);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`envio_to_odoo_table_AFTER_UPDATE` AFTER UPDATE ON `ordenes`.`ps_envios` FOR EACH ROW
BEGIN
INSERT INTO to_odoo_temp_trigger (tablename, id_row, action) VALUES ('envio', NEW.id_order, 'update');
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`backup_ps_envios_BEFORE_DELETE` BEFORE DELETE ON `ordenes`.`ps_envios` FOR EACH ROW
BEGIN
DELETE FROM ps_envios_backup WHERE id_order = OLD.id_order;
INSERT INTO ps_envios_backup (SELECT * FROM ps_envios WHERE id_order = OLD.id_order);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ps_envios_backup`
--

DROP TABLE IF EXISTS `ps_envios_backup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ps_envios_backup` (
  `id_order` int(10) DEFAULT '0',
  `codigo_envio` varchar(30) NOT NULL DEFAULT '0',
  `id_estado_envio` int(10) DEFAULT '0',
  `numero_solicitud` varchar(30) DEFAULT '0',
  `url_etiqueta` varchar(250) DEFAULT '0',
  `fechaEnvio` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `motivo_cancelacion` varchar(30) DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ps_estado_envios`
--

DROP TABLE IF EXISTS `ps_estado_envios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ps_estado_envios` (
  `id` int(11) NOT NULL DEFAULT '0',
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reenvios_claves`
--

DROP TABLE IF EXISTS `reenvios_claves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reenvios_claves` (
  `id_orden` int(11) NOT NULL,
  `envios` int(11) NOT NULL DEFAULT '0',
  `onreg` varchar(100) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `fecha_primero` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_ultimo` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25680 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `referers`
--

DROP TABLE IF EXISTS `referers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `referers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `session_id` varchar(100) NOT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `referer` text,
  `url` text,
  `browser` varchar(200) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `domain` varchar(20) DEFAULT NULL,
  `md5` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `session_id` (`session_id`),
  KEY `ip` (`ip`),
  KEY `md5` (`md5`)
) ENGINE=InnoDB AUTO_INCREMENT=11524015 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `referers_cart`
--

DROP TABLE IF EXISTS `referers_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `referers_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_referer` int(11) DEFAULT NULL,
  `id_orden` int(11) DEFAULT NULL,
  `id_forma_pago` int(11) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=474233 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `referers_hotjar`
--

DROP TABLE IF EXISTS `referers_hotjar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `referers_hotjar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_referers` int(11) DEFAULT NULL,
  `id_hotjar` varchar(45) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `referers_navegacion`
--

DROP TABLE IF EXISTS `referers_navegacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `referers_navegacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_referer` int(11) DEFAULT NULL,
  `referer` text,
  `direccion` text,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18226255 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `referers_orden`
--

DROP TABLE IF EXISTS `referers_orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `referers_orden` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_referer` int(9) DEFAULT NULL,
  `id_orden` int(9) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_referers_compra_1` (`id_referer`)
) ENGINE=MyISAM AUTO_INCREMENT=850699 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `referers_promos`
--

DROP TABLE IF EXISTS `referers_promos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `referers_promos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_referer` int(11) NOT NULL,
  `direccion` text,
  `promo` varchar(45) DEFAULT NULL,
  `action` varchar(45) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1305414 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `referers_user_eset`
--

DROP TABLE IF EXISTS `referers_user_eset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `referers_user_eset` (
  `id_referers_user_eset` int(11) NOT NULL AUTO_INCREMENT,
  `id_referer` int(11) NOT NULL,
  `user_eset` varchar(45) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_referers_user_eset`),
  KEY `SECUNDARY` (`id_referer`,`user_eset`)
) ENGINE=InnoDB AUTO_INCREMENT=1413738 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `relacion_resellers`
--

DROP TABLE IF EXISTS `relacion_resellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `relacion_resellers` (
  `id_reseller_padre` int(11) NOT NULL,
  `id_reseller_hijo` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `renovaciones_certificaciones`
--

DROP TABLE IF EXISTS `renovaciones_certificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `renovaciones_certificaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_certificacion` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_pedido` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reportes`
--

DROP TABLE IF EXISTS `reportes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportes` (
  `usuario` varchar(45) DEFAULT NULL,
  `Build_Version` int(11) DEFAULT NULL,
  `of_distinct_IPs` int(11) DEFAULT NULL,
  `of_downloads` int(11) DEFAULT NULL,
  `ofV2downloads` int(11) DEFAULT NULL,
  `Workstation_quantity` int(11) DEFAULT NULL,
  `Product_name` varchar(250) DEFAULT NULL,
  `Purchase_type_name` varchar(250) DEFAULT NULL,
  `Partner_id` int(11) DEFAULT NULL,
  `Customer_name` varchar(1000) DEFAULT NULL,
  `Customer_company_name` varchar(1000) DEFAULT NULL,
  `fechaDescarga` timestamp NULL DEFAULT NULL,
  `id_reporte` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_reporte`),
  KEY `idx_usuario` (`usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=8921133 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reportes_envio_correos`
--

DROP TABLE IF EXISTS `reportes_envio_correos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportes_envio_correos` (
  `usuario` varchar(45) NOT NULL,
  `fechaEnvio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `idTipoMail` int(2) NOT NULL,
  `precio` decimal(7,2) NOT NULL DEFAULT '0.00',
  `Build_Version` int(11) NOT NULL DEFAULT '0',
  `id_reportes_envio_correos` int(11) NOT NULL AUTO_INCREMENT,
  `id_reporte` int(11) NOT NULL,
  PRIMARY KEY (`id_reportes_envio_correos`),
  KEY `fk_reportes_envio_correos_1` (`idTipoMail`),
  KEY `idx_usuario` (`usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=2806 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reportes_historial`
--

DROP TABLE IF EXISTS `reportes_historial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportes_historial` (
  `License_Username1` varchar(45) DEFAULT NULL,
  `Build_Version` int(11) DEFAULT NULL,
  `of_distinct_IPs` int(11) DEFAULT NULL,
  `of_downloads` int(11) DEFAULT NULL,
  `ofV2downloads` int(11) DEFAULT NULL,
  `Workstation_quantity` int(11) DEFAULT NULL,
  `Product_name` varchar(250) DEFAULT NULL,
  `Purchase_type_name` varchar(250) DEFAULT NULL,
  `Partner_id` int(11) DEFAULT NULL,
  `Customer_name` varchar(1000) DEFAULT NULL,
  `Customer_company_name` varchar(1000) DEFAULT NULL,
  `id_orden` int(11) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reportes_seguimiento`
--

DROP TABLE IF EXISTS `reportes_seguimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportes_seguimiento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario` varchar(45) NOT NULL,
  `id_orden` int(9) NOT NULL,
  `idTipoMail` int(2) NOT NULL,
  `licencias_compradas` int(3) NOT NULL DEFAULT '0',
  `licencias_utilizadas` int(3) NOT NULL DEFAULT '0',
  `licencias_recuperadas` int(3) NOT NULL DEFAULT '0',
  `licencias_perdidas` int(3) NOT NULL DEFAULT '0',
  `opcion_compra` int(3) DEFAULT NULL,
  `cancelada` varchar(1) NOT NULL DEFAULT 'N',
  `precio_pagado` decimal(7,2) NOT NULL DEFAULT '0.00',
  `precio_perdido` decimal(7,2) NOT NULL DEFAULT '0.00',
  `isOntinet` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `idx_usuario` (`usuario`),
  KEY `idx_id_orden` (`id_orden`)
) ENGINE=MyISAM AUTO_INCREMENT=20866 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reportes_seguimiento_ventas`
--

DROP TABLE IF EXISTS `reportes_seguimiento_ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportes_seguimiento_ventas` (
  `id_reportes_envio_correos` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) NOT NULL,
  `fechaEnvio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Build_Version` int(11) NOT NULL,
  `id_reporte` int(11) NOT NULL,
  PRIMARY KEY (`id_reportes_envio_correos`)
) ENGINE=InnoDB AUTO_INCREMENT=3838 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers`
--

DROP TABLE IF EXISTS `resellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers` (
  `codigo` int(10) unsigned NOT NULL DEFAULT '0',
  `nombre` varchar(50) DEFAULT NULL,
  `razon_social` varchar(200) NOT NULL DEFAULT '0',
  `domicilio` varchar(120) DEFAULT NULL,
  `cod_postal` varchar(10) DEFAULT '0',
  `poblacion` varchar(50) DEFAULT '0',
  `provincia` varchar(50) DEFAULT '0',
  `nif` varchar(15) DEFAULT '0',
  `telefono` varchar(50) DEFAULT '0',
  `fax` varchar(15) DEFAULT '0',
  `email` varchar(120) NOT NULL DEFAULT '',
  `usuario` varchar(32) DEFAULT NULL,
  `pass` varchar(32) DEFAULT NULL,
  `dias_aviso` int(5) DEFAULT '16',
  `aviso_cliente` char(1) DEFAULT 'N',
  `observaciones` blob,
  `id_forma_pago` tinyint(4) DEFAULT NULL,
  `cont_personales` int(3) DEFAULT NULL,
  `id_provincia` int(3) DEFAULT NULL,
  `recargo_equiv` char(1) NOT NULL DEFAULT 'N',
  `estado` char(1) DEFAULT NULL,
  `resp_nombre` varchar(150) DEFAULT NULL,
  `new_pass` tinyint(1) NOT NULL,
  `resp_nif` varchar(30) DEFAULT NULL,
  `resp_cargo` varchar(100) DEFAULT NULL,
  `persona` varchar(1) DEFAULT NULL,
  `firma_ip` varchar(20) DEFAULT NULL,
  `firma_fecha` timestamp NULL DEFAULT NULL,
  `tipo_pers` varchar(1) DEFAULT NULL,
  `id_estado` int(3) DEFAULT NULL,
  `maxCorreos` int(11) DEFAULT '5',
  `bloqueoEnvios` varchar(1) NOT NULL DEFAULT 'N',
  `margen1` float DEFAULT '0.25',
  `margen2` float DEFAULT '0.3',
  `margen3` float DEFAULT '0.35',
  `margenLXS_EFS_1a10` float DEFAULT '0.3',
  `margenLXS_EFS_11a24` float DEFAULT '0.35',
  `permitir_subscripciones` tinyint(1) NOT NULL,
  `IAE` varchar(100) NOT NULL,
  `origen_alta` varchar(100) NOT NULL,
  `fecha_alta` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `revisado` varchar(1) NOT NULL,
  `estado_alta` int(11) NOT NULL,
  `GA` varchar(20) NOT NULL,
  `webservice` tinyint(1) NOT NULL DEFAULT '0',
  `id_parent` int(10) NOT NULL DEFAULT '0',
  `margen_caja` float DEFAULT '0.33',
  `cnae` int(6) DEFAULT NULL,
  `comentario_administracion` varchar(1000) DEFAULT NULL,
  `sustituido_por` int(10) DEFAULT NULL,
  `sede` varchar(1) NOT NULL DEFAULT 'N',
  `msp` char(1) DEFAULT 'N',
  `isp` char(1) DEFAULT 'N',
  `margenDSV_DES_DEP_DEE_1a25` float DEFAULT '0.3',
  `margenDSV_DES_DEP_DEE_26` float DEFAULT '0.35',
  `margenStorage` float NOT NULL DEFAULT '0.3',
  `es_tienda` char(1) NOT NULL DEFAULT 'X',
  `margenSafetica` float NOT NULL DEFAULT '0.3',
  `margenXopero` float NOT NULL DEFAULT '0.25',
  `id_tipo_reseller` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`codigo`),
  KEY `nif` (`nif`),
  KEY `razon_social` (`razon_social`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`to_odoo_table_AFTER_INSERT` AFTER INSERT ON `ordenes`.`resellers` FOR EACH ROW
BEGIN
INSERT INTO to_odoo_temp_trigger (tablename, id_row, action) VALUES ('resellers', NEW.codigo, 'insert');
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ordenes`.`reseller_to_odoo_table_BEFORE_UPDATE` BEFORE UPDATE ON `ordenes`.`resellers` FOR EACH ROW 
BEGIN
DECLARE exist INT;
IF 
OLD.codigo <> NEW.codigo OR 
OLD.nombre <> NEW.nombre OR 
OLD.razon_social <> NEW.razon_social OR 
OLD.domicilio <> NEW.domicilio OR 
OLD.cod_postal <> NEW.cod_postal OR 
OLD.poblacion <> NEW.poblacion OR 
OLD.provincia <> NEW.provincia OR 
OLD.nif <> NEW.nif OR 
OLD.telefono <> NEW.telefono OR 
OLD.fax <> NEW.fax OR 
OLD.email <> NEW.email OR 
OLD.observaciones <> NEW.observaciones OR 
OLD.id_forma_pago <> NEW.id_forma_pago OR 
OLD.id_provincia <> NEW.id_provincia OR 
OLD.recargo_equiv <> NEW.recargo_equiv OR 
OLD.estado <> NEW.estado OR 
OLD.resp_nombre <> NEW.resp_nombre OR 
OLD.resp_nif <> NEW.resp_nif OR 
OLD.resp_cargo <> NEW.resp_cargo OR 
OLD.persona <> NEW.persona OR 
OLD.tipo_pers <> NEW.tipo_pers OR 
OLD.id_estado <> NEW.id_estado OR 
OLD.margen1 <> NEW.margen1 OR 
OLD.margen2 <> NEW.margen2 OR 
OLD.margen3 <> NEW.margen3 OR 
OLD.margenLXS_EFS_1a10 <> NEW.margenLXS_EFS_1a10 OR 
OLD.margenLXS_EFS_11a24 <> NEW.margenLXS_EFS_11a24 OR 
OLD.permitir_subscripciones <> NEW.permitir_subscripciones OR 
OLD.IAE <> NEW.IAE OR 
OLD.origen_alta <> NEW.origen_alta OR 
OLD.fecha_alta <> NEW.fecha_alta OR 
OLD.revisado <> NEW.revisado OR 
OLD.estado_alta <> NEW.estado_alta OR 
OLD.GA <> NEW.GA OR 
OLD.webservice <> NEW.webservice OR 
OLD.id_parent <> NEW.id_parent OR 
OLD.margen_caja <> NEW.margen_caja OR 
OLD.cnae <> NEW.cnae OR 
OLD.comentario_administracion <> NEW.comentario_administracion OR 
OLD.sustituido_por <> NEW.sustituido_por OR 
OLD.sede <> NEW.sede OR 
OLD.msp <> NEW.msp OR 
OLD.isp <> NEW.isp OR 
OLD.margenDSV_DES_DEP_DEE_1a25 <> NEW.margenDSV_DES_DEP_DEE_1a25 OR 
OLD.margenDSV_DES_DEP_DEE_26 <> NEW.margenDSV_DES_DEP_DEE_26 OR 
OLD.margenStorage <> NEW.margenStorage OR 
OLD.es_tienda <> NEW.es_tienda OR 
OLD.margenSafetica <> NEW.margenSafetica OR 
OLD.margenXopero <> NEW.margenXopero OR 
OLD.id_tipo_reseller <> NEW.id_tipo_reseller 
THEN
SET exist = ( SELECT count(*) FROM to_odoo_temp_trigger where tablename='resellers' AND id_row = NEW.codigo );
if exist=0
THEN
INSERT INTO to_odoo_temp_trigger (tablename, id_row, action) VALUES ('resellers', NEW.codigo, 'update');
END if;
END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `resellers_cancelados_de_agente`
--

DROP TABLE IF EXISTS `resellers_cancelados_de_agente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_cancelados_de_agente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) NOT NULL,
  `codigo_reseller` int(11) NOT NULL,
  `date_insert` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15589 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers_codina`
--

DROP TABLE IF EXISTS `resellers_codina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_codina` (
  `id_reseller` int(11) NOT NULL,
  PRIMARY KEY (`id_reseller`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers_contratos`
--

DROP TABLE IF EXISTS `resellers_contratos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_contratos` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `reseller` int(10) unsigned NOT NULL,
  `url_contrato` varchar(256) NOT NULL,
  `version` varchar(50) NOT NULL,
  `ip` varchar(16) DEFAULT NULL,
  `doc` mediumtext,
  `sign_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers_deuda`
--

DROP TABLE IF EXISTS `resellers_deuda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_deuda` (
  `id_reseller` int(11) NOT NULL,
  `deuda` decimal(16,2) NOT NULL DEFAULT '0.00',
  `pagado` decimal(16,2) NOT NULL DEFAULT '0.00',
  `descripcion` varchar(1000) NOT NULL DEFAULT '',
  `md5` varchar(128) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_reseller`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers_forma_pago`
--

DROP TABLE IF EXISTS `resellers_forma_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_forma_pago` (
  `id_resellers_forma_pago` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_reseller` int(11) NOT NULL,
  `id_forma_pago` int(2) NOT NULL,
  `id_forma_pago_detail` int(2) NOT NULL,
  `dias` int(3) NOT NULL DEFAULT '0',
  `factura_final_mes` int(1) NOT NULL DEFAULT '0',
  `notas` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_resellers_forma_pago`)
) ENGINE=InnoDB AUTO_INCREMENT=2766 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers_historico`
--

DROP TABLE IF EXISTS `resellers_historico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_historico` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) DEFAULT NULL,
  `reseller_viejo` int(11) DEFAULT NULL,
  `reseller_nuevo` int(11) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=120514 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers_level`
--

DROP TABLE IF EXISTS `resellers_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_level` (
  `id` int(11) NOT NULL,
  `min_amount` float NOT NULL,
  `level` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers_mod`
--

DROP TABLE IF EXISTS `resellers_mod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_mod` (
  `id` int(10) unsigned NOT NULL DEFAULT '0',
  `codigo` int(10) unsigned NOT NULL DEFAULT '0',
  `razon_social` varchar(100) DEFAULT NULL,
  `nif` varchar(15) DEFAULT NULL,
  `domicilio` varchar(120) DEFAULT NULL,
  `cod_postal` varchar(10) DEFAULT NULL,
  `poblacion` varchar(50) DEFAULT NULL,
  `id_provincia` int(3) DEFAULT NULL,
  `resp_nombre` varchar(150) DEFAULT NULL,
  `resp_nif` varchar(30) DEFAULT NULL,
  `resp_cargo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `codigo` (`codigo`)
) ENGINE=MyISAM AUTO_INCREMENT=576 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers_modificaciones`
--

DROP TABLE IF EXISTS `resellers_modificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_modificaciones` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `md5` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `cod_reseller` int(10) DEFAULT NULL,
  `domicilio` varchar(120) DEFAULT NULL,
  `cod_postal` varchar(10) DEFAULT NULL,
  `poblacion` varchar(50) DEFAULT NULL,
  `id_provincia` int(3) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `email` varchar(120) DEFAULT NULL,
  `recordado` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers_old`
--

DROP TABLE IF EXISTS `resellers_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_old` (
  `codigo` int(10) unsigned NOT NULL DEFAULT '0',
  `nombre` varchar(50) DEFAULT NULL,
  `razon_social` varchar(100) NOT NULL DEFAULT '0',
  `domicilio` varchar(120) DEFAULT NULL,
  `cod_postal` varchar(10) DEFAULT '0',
  `poblacion` varchar(50) DEFAULT '0',
  `provincia` varchar(50) DEFAULT '0',
  `nif` varchar(15) DEFAULT '0',
  `telefono` varchar(15) DEFAULT '0',
  `fax` varchar(15) DEFAULT '0',
  `email` varchar(120) NOT NULL DEFAULT '',
  `usuario` varchar(32) DEFAULT NULL,
  `pass` varchar(32) DEFAULT NULL,
  `dias_aviso` int(5) DEFAULT '14',
  `aviso_cliente` char(1) DEFAULT 'N',
  `observaciones` blob,
  `id_forma_pago` tinyint(4) DEFAULT NULL,
  `cont_personales` int(3) DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `nif` (`nif`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers_pendientes`
--

DROP TABLE IF EXISTS `resellers_pendientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_pendientes` (
  `id_reseller_pendiente` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(10) unsigned NOT NULL DEFAULT '0',
  `nombre` varchar(50) DEFAULT NULL,
  `razon_social` varchar(200) NOT NULL DEFAULT '0',
  `domicilio` varchar(120) DEFAULT NULL,
  `cod_postal` varchar(10) DEFAULT '0',
  `poblacion` varchar(50) DEFAULT '0',
  `provincia` varchar(50) DEFAULT '0',
  `nif` varchar(15) DEFAULT '0',
  `telefono` varchar(50) DEFAULT '0',
  `fax` varchar(15) DEFAULT '0',
  `email` varchar(120) NOT NULL DEFAULT '',
  `usuario` varchar(32) DEFAULT NULL,
  `pass` varchar(32) DEFAULT NULL,
  `dias_aviso` int(5) DEFAULT '16',
  `aviso_cliente` char(1) DEFAULT 'N',
  `observaciones` blob,
  `id_forma_pago` tinyint(4) DEFAULT NULL,
  `cont_personales` int(3) DEFAULT NULL,
  `id_provincia` int(3) DEFAULT NULL,
  `recargo_equiv` char(1) NOT NULL DEFAULT 'N',
  `estado` char(1) DEFAULT NULL,
  `resp_nombre` varchar(150) DEFAULT NULL,
  `new_pass` tinyint(1) NOT NULL,
  `resp_nif` varchar(30) DEFAULT NULL,
  `resp_cargo` varchar(100) DEFAULT NULL,
  `persona` varchar(1) DEFAULT NULL,
  `firma_ip` varchar(20) DEFAULT NULL,
  `firma_fecha` timestamp NULL DEFAULT NULL,
  `tipo_pers` varchar(1) DEFAULT NULL,
  `id_estado` int(3) DEFAULT NULL,
  `maxCorreos` int(11) DEFAULT '5',
  `bloqueoEnvios` varchar(1) NOT NULL DEFAULT 'N',
  `margen1` float DEFAULT '0.75',
  `margen2` float DEFAULT '0.7',
  `margen3` float DEFAULT '0.65',
  `permitir_subscripciones` tinyint(1) NOT NULL,
  `estado_alta` int(11) NOT NULL,
  PRIMARY KEY (`id_reseller_pendiente`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resellers_subscripcion`
--

DROP TABLE IF EXISTS `resellers_subscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resellers_subscripcion` (
  `id_res_sus` int(10) NOT NULL AUTO_INCREMENT,
  `reseller` int(10) NOT NULL,
  `id_subscripcion` int(10) NOT NULL,
  PRIMARY KEY (`id_res_sus`)
) ENGINE=MyISAM AUTO_INCREMENT=16475 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary table structure for view `resellers_total`
--

DROP TABLE IF EXISTS `resellers_total`;
/*!50001 DROP VIEW IF EXISTS `resellers_total`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `resellers_total` (
  `codigo` tinyint NOT NULL,
  `year` tinyint NOT NULL,
  `total` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `sectores`
--

DROP TABLE IF EXISTS `sectores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sectores` (
  `id_sector` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  PRIMARY KEY (`id_sector`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `serviceWorkers`
--

DROP TABLE IF EXISTS `serviceWorkers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `serviceWorkers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `entidad` varchar(10) NOT NULL,
  `p256dh` varchar(255) NOT NULL,
  `auth` varchar(255) NOT NULL,
  `endpoint` varchar(255) NOT NULL,
  `expirationTime` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `entidad` (`entidad`)
) ENGINE=InnoDB AUTO_INCREMENT=15316 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `settings_gc_ordenes`
--

DROP TABLE IF EXISTS `settings_gc_ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settings_gc_ordenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) NOT NULL,
  `id_settings` int(11) NOT NULL,
  `deleted` tinyint(4) NOT NULL DEFAULT '0',
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_orden` (`id_orden`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `settings_gestion_clientes`
--

DROP TABLE IF EXISTS `settings_gestion_clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settings_gestion_clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_settings` int(11) NOT NULL,
  `gestion_clientes` tinyint(1) NOT NULL DEFAULT '0',
  `state` enum('waiting','running','done','fail') NOT NULL,
  `date_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_settings` (`id_settings`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `settings_history_gestion_clientes`
--

DROP TABLE IF EXISTS `settings_history_gestion_clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settings_history_gestion_clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_gestion_clientes` int(11) NOT NULL,
  `gestion_clientes` tinyint(1) NOT NULL,
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `settings_history_ordenes`
--

DROP TABLE IF EXISTS `settings_history_ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settings_history_ordenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_gestion_clientes` int(11) NOT NULL,
  `id_orden` int(11) NOT NULL,
  `enviar_cliente` varchar(1) NOT NULL,
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `settings_reseller`
--

DROP TABLE IF EXISTS `settings_reseller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settings_reseller` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reseller` int(11) NOT NULL,
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reseller` (`reseller`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `snr_aux`
--

DROP TABLE IF EXISTS `snr_aux`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `snr_aux` (
  `snr` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `snr_old`
--

DROP TABLE IF EXISTS `snr_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `snr_old` (
  `snr` varchar(20) NOT NULL DEFAULT '',
  `usado` char(1) NOT NULL DEFAULT 'N',
  `id_campania` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `statsRenoveEmpresa`
--

DROP TABLE IF EXISTS `statsRenoveEmpresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `statsRenoveEmpresa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `md5` varchar(45) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stats_demos`
--

DROP TABLE IF EXISTS `stats_demos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats_demos` (
  `accesos` int(11) DEFAULT '0',
  `demos` int(11) DEFAULT '0',
  `banner` varchar(50) NOT NULL,
  `activa` tinyint(1) NOT NULL,
  PRIMARY KEY (`banner`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stats_demos_diarios`
--

DROP TABLE IF EXISTS `stats_demos_diarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats_demos_diarios` (
  `banner` varchar(50) NOT NULL,
  `accesos` int(11) NOT NULL,
  `demos` int(11) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stats_diainternet`
--

DROP TABLE IF EXISTS `stats_diainternet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats_diainternet` (
  `email` varchar(50) NOT NULL,
  `poblacion` varchar(100) DEFAULT NULL,
  `cp` varchar(10) DEFAULT NULL,
  `conoce` char(1) DEFAULT NULL,
  `medio` char(2) DEFAULT NULL,
  `id_provincia` int(3) DEFAULT NULL,
  `revista` varchar(20) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stats_diainternet_2008`
--

DROP TABLE IF EXISTS `stats_diainternet_2008`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats_diainternet_2008` (
  `email` varchar(50) NOT NULL,
  `poblacion` varchar(100) DEFAULT NULL,
  `cp` varchar(10) DEFAULT NULL,
  `conoce` char(1) DEFAULT NULL,
  `medio` char(2) DEFAULT NULL,
  `id_provincia` int(3) DEFAULT NULL,
  `revista` varchar(20) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stats_diainternet_2009`
--

DROP TABLE IF EXISTS `stats_diainternet_2009`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats_diainternet_2009` (
  `email` varchar(50) NOT NULL,
  `poblacion` varchar(100) DEFAULT NULL,
  `cp` varchar(10) DEFAULT NULL,
  `conoce` char(1) DEFAULT NULL,
  `medio` char(2) DEFAULT NULL,
  `id_provincia` int(3) DEFAULT NULL,
  `revista` varchar(20) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stats_diainternet_2010`
--

DROP TABLE IF EXISTS `stats_diainternet_2010`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats_diainternet_2010` (
  `email` varchar(50) NOT NULL,
  `poblacion` varchar(100) DEFAULT NULL,
  `cp` varchar(10) DEFAULT NULL,
  `conoce` char(1) DEFAULT NULL,
  `medio` char(2) DEFAULT NULL,
  `id_provincia` int(3) DEFAULT NULL,
  `revista` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stats_encuestas`
--

DROP TABLE IF EXISTS `stats_encuestas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats_encuestas` (
  `email` varchar(50) NOT NULL,
  `poblacion` varchar(100) NOT NULL,
  `cp` varchar(10) NOT NULL,
  `conoce` char(1) NOT NULL,
  `medio` char(2) NOT NULL,
  `id_provincia` int(3) NOT NULL,
  `revista` varchar(20) NOT NULL,
  `ip` varchar(20) NOT NULL,
  `id_encuesta` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_encuesta`,`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stats_rama`
--

DROP TABLE IF EXISTS `stats_rama`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats_rama` (
  `email` varchar(50) NOT NULL,
  `poblacion` varchar(100) DEFAULT NULL,
  `cp` varchar(10) DEFAULT NULL,
  `conoce` char(1) DEFAULT NULL,
  `medio` char(2) DEFAULT NULL,
  `id_provincia` int(3) DEFAULT NULL,
  `revista` varchar(20) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stats_trial`
--

DROP TABLE IF EXISTS `stats_trial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats_trial` (
  `email` varchar(50) NOT NULL,
  `poblacion` varchar(100) DEFAULT NULL,
  `cp` varchar(10) DEFAULT NULL,
  `conoce` char(1) DEFAULT NULL,
  `medio` char(2) DEFAULT NULL,
  `id_provincia` int(3) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stats_windows_defender`
--

DROP TABLE IF EXISTS `stats_windows_defender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats_windows_defender` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) DEFAULT NULL,
  `usuario_md5` varchar(45) DEFAULT NULL,
  `email_send` tinyint(1) DEFAULT '0',
  `email_open` tinyint(1) DEFAULT '0',
  `ip` varchar(45) DEFAULT NULL,
  `get_eset_back_1` tinyint(1) DEFAULT '0',
  `find_out_more_1` tinyint(1) DEFAULT '0',
  `get_eset_back_2` tinyint(1) DEFAULT '0',
  `find_out_more_2` tinyint(1) DEFAULT '0',
  `direct` tinyint(1) DEFAULT '0',
  `click_install_eav` tinyint(1) DEFAULT '0',
  `click_install_ess` tinyint(1) DEFAULT '0',
  `click_submit_button` tinyint(1) DEFAULT '0',
  `date_created` timestamp NULL DEFAULT NULL,
  `date_modified` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `php_session` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stock_cajas`
--

DROP TABLE IF EXISTS `stock_cajas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock_cajas` (
  `id_stock_cajas` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_caja` varchar(10) DEFAULT 'USB',
  `producto` varchar(3) DEFAULT NULL,
  `cantidad_minima_aviso_pedido` int(11) DEFAULT NULL,
  `cantidad_inicial` int(11) DEFAULT NULL,
  `cantidad_restante` int(11) DEFAULT NULL,
  `fecha_pedido` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_upd` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_stock_cajas`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `stripe_pago`
--

DROP TABLE IF EXISTS `stripe_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stripe_pago` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(10) NOT NULL,
  `customer_id` varchar(100) DEFAULT NULL,
  `customer_email` varchar(100) DEFAULT NULL,
  `charge_id` varchar(100) DEFAULT NULL,
  `amount` float NOT NULL DEFAULT '0',
  `description` varchar(100) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `payment_method` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `date_add` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_upd` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7013 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `subscripcion_promos_resellers`
--

DROP TABLE IF EXISTS `subscripcion_promos_resellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subscripcion_promos_resellers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_reseller` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `participa` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=723 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `subscripciones`
--

DROP TABLE IF EXISTS `subscripciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subscripciones` (
  `snr` varchar(100) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `baja` tinyint(1) NOT NULL DEFAULT '0',
  `fecha_baja` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `id_reseller` int(11) NOT NULL,
  `remesa` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`snr`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tecnicos`
--

DROP TABLE IF EXISTS `tecnicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tecnicos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido1` varchar(45) NOT NULL,
  `apellido2` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `poblacion` varchar(45) DEFAULT NULL,
  `id_provincias` int(11) NOT NULL,
  `pais` varchar(45) DEFAULT NULL,
  `id_reseller` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=856 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `campo` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tipo_empresas`
--

DROP TABLE IF EXISTS `tipo_empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_empresas` (
  `id_tipo_empresa` int(2) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(20) NOT NULL DEFAULT '',
  `caracter` char(1) NOT NULL DEFAULT '',
  `orden` int(2) NOT NULL,
  PRIMARY KEY (`id_tipo_empresa`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tipo_mail`
--

DROP TABLE IF EXISTS `tipo_mail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_mail` (
  `idtipo_mail` int(2) NOT NULL AUTO_INCREMENT,
  `plantilla` varchar(45) DEFAULT NULL,
  `desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idtipo_mail`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tipo_reseller`
--

DROP TABLE IF EXISTS `tipo_reseller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_reseller` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tipo_via`
--

DROP TABLE IF EXISTS `tipo_via`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_via` (
  `id` int(11) NOT NULL,
  `nombre_via` varchar(45) NOT NULL,
  `sigla` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `to_odoo_temp_trigger`
--

DROP TABLE IF EXISTS `to_odoo_temp_trigger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `to_odoo_temp_trigger` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tablename` varchar(100) NOT NULL,
  `id_row` varchar(45) NOT NULL,
  `common_tag` varchar(64) DEFAULT NULL,
  `action` varchar(45) NOT NULL,
  `error` tinyint(4) NOT NULL DEFAULT '0',
  `date_upd` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tablename` (`tablename`,`id_row`)
) ENGINE=InnoDB AUTO_INCREMENT=9872636 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `track`
--

DROP TABLE IF EXISTS `track`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `track` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_add` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `url` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2142261 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `track_params`
--

DROP TABLE IF EXISTS `track_params`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `track_params` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `utm_source` varchar(45) DEFAULT NULL,
  `utm_medium` varchar(45) DEFAULT NULL,
  `utm_campaign` varchar(45) DEFAULT NULL,
  `utm_term` varchar(45) DEFAULT NULL,
  `utm_content` varchar(45) DEFAULT NULL,
  `source` varchar(45) DEFAULT NULL,
  `medium` varchar(45) DEFAULT NULL,
  `campaignid` varchar(45) DEFAULT NULL,
  `adgroupid` varchar(45) DEFAULT NULL,
  `keyword` varchar(45) DEFAULT NULL,
  `matchtype` varchar(45) DEFAULT NULL,
  `creative` varchar(45) DEFAULT NULL,
  `network` varchar(45) DEFAULT NULL,
  `networkcategory` varchar(45) DEFAULT NULL,
  `device` varchar(45) DEFAULT NULL,
  `id_track` int(11) NOT NULL,
  `date_add` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_params_track1_idx` (`id_track`),
  CONSTRAINT `fk_params_track1` FOREIGN KEY (`id_track`) REFERENCES `track` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2687644 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `track_pedido`
--

DROP TABLE IF EXISTS `track_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `track_pedido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) DEFAULT NULL,
  `date_add` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_track_params` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_track_pedido_track_params1_idx` (`id_track_params`),
  CONSTRAINT `fk_track_pedido_track_params1` FOREIGN KEY (`id_track_params`) REFERENCES `track_params` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=167809 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `track_subscription`
--

DROP TABLE IF EXISTS `track_subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `track_subscription` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cierra_popup` tinyint(4) DEFAULT '0',
  `click_popup` tinyint(4) DEFAULT '0',
  `click_banner` tinyint(4) DEFAULT '0',
  `descargas` int(11) DEFAULT '0',
  `date_add` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=194034 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tracking`
--

DROP TABLE IF EXISTS `tracking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tracking` (
  `id_tracking` int(11) NOT NULL AUTO_INCREMENT,
  `name_tracking` varchar(45) NOT NULL,
  `date_add` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_tracking`),
  UNIQUE KEY `id_tracking_UNIQUE` (`id_tracking`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `trilogi`
--

DROP TABLE IF EXISTS `trilogi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trilogi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `onreg` varchar(45) DEFAULT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `apellidos` varchar(200) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `cif` varchar(20) DEFAULT NULL,
  `producto` varchar(45) DEFAULT NULL,
  `opcionCompra` varchar(45) DEFAULT NULL,
  `precio` decimal(15,2) DEFAULT NULL,
  `md5` varchar(45) NOT NULL,
  `direccion` int(9) DEFAULT NULL,
  `pagado` char(1) DEFAULT 'N',
  `idorden` int(9) DEFAULT NULL,
  `casoOtrs` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=480 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `urls_cuadro_eset`
--

DROP TABLE IF EXISTS `urls_cuadro_eset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `urls_cuadro_eset` (
  `id_url` int(11) NOT NULL AUTO_INCREMENT,
  `reseller` int(11) NOT NULL,
  `url` varchar(2000) NOT NULL,
  PRIMARY KEY (`id_url`)
) ENGINE=MyISAM AUTO_INCREMENT=48752 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `urls_cuadro_eset_estad`
--

DROP TABLE IF EXISTS `urls_cuadro_eset_estad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `urls_cuadro_eset_estad` (
  `id_estad` int(11) NOT NULL AUTO_INCREMENT,
  `reseller` int(11) NOT NULL,
  `url` varchar(2000) NOT NULL,
  `producto` varchar(10) NOT NULL,
  `visitas` int(11) NOT NULL,
  `compras` int(11) NOT NULL,
  PRIMARY KEY (`id_estad`)
) ENGINE=MyISAM AUTO_INCREMENT=2378 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary table structure for view `v_productos`
--

DROP TABLE IF EXISTS `v_productos`;
/*!50001 DROP VIEW IF EXISTS `v_productos`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `v_productos` (
  `producto` tinyint NOT NULL,
  `sufijo` tinyint NOT NULL,
  `mostrar` tinyint NOT NULL,
  `enviar` tinyint NOT NULL,
  `funcion` tinyint NOT NULL,
  `descuento` tinyint NOT NULL,
  `mostrar_reseller` tinyint NOT NULL,
  `orden` tinyint NOT NULL,
  `tipo_precio` tinyint NOT NULL,
  `product_code` tinyint NOT NULL,
  `tipo` tinyint NOT NULL,
  `subtipo` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `v_reporte_global_results`
--

DROP TABLE IF EXISTS `v_reporte_global_results`;
/*!50001 DROP VIEW IF EXISTS `v_reporte_global_results`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `v_reporte_global_results` (
  `usuario` tinyint NOT NULL,
  `iniciales` tinyint NOT NULL,
  `finales` tinyint NOT NULL,
  `usadas` tinyint NOT NULL,
  `perdidas` tinyint NOT NULL,
  `recuperadas` tinyint NOT NULL,
  `idTipoMail` tinyint NOT NULL,
  `precio_pagado` tinyint NOT NULL,
  `precio_perdido` tinyint NOT NULL,
  `isOntinet` tinyint NOT NULL,
  `fechaDescarga` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `v_ultimos_mails_reportados`
--

DROP TABLE IF EXISTS `v_ultimos_mails_reportados`;
/*!50001 DROP VIEW IF EXISTS `v_ultimos_mails_reportados`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `v_ultimos_mails_reportados` (
  `usuario` tinyint NOT NULL,
  `idTipoMail` tinyint NOT NULL,
  `ultimaFechaEnvio` tinyint NOT NULL,
  `id_reporte` tinyint NOT NULL,
  `precio` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `v_ultimos_reportes`
--

DROP TABLE IF EXISTS `v_ultimos_reportes`;
/*!50001 DROP VIEW IF EXISTS `v_ultimos_reportes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `v_ultimos_reportes` (
  `rep_id` tinyint NOT NULL,
  `rep_usuario` tinyint NOT NULL,
  `of_downloads` tinyint NOT NULL,
  `Workstation_quantity` tinyint NOT NULL,
  `ultimaFechaDescarga` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `v_ultimos_reportes_seguimiento`
--

DROP TABLE IF EXISTS `v_ultimos_reportes_seguimiento`;
/*!50001 DROP VIEW IF EXISTS `v_ultimos_reportes_seguimiento`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `v_ultimos_reportes_seguimiento` (
  `id` tinyint NOT NULL,
  `fecha` tinyint NOT NULL,
  `usuario` tinyint NOT NULL,
  `id_orden` tinyint NOT NULL,
  `idTipoMail` tinyint NOT NULL,
  `licencias_compradas` tinyint NOT NULL,
  `licencias_utilizadas` tinyint NOT NULL,
  `licencias_perdidas` tinyint NOT NULL,
  `opcion_compra` tinyint NOT NULL,
  `cancelada` tinyint NOT NULL,
  `precio_pagado` tinyint NOT NULL,
  `precio_perdido` tinyint NOT NULL,
  `isOntinet` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `xopero_products`
--

DROP TABLE IF EXISTS `xopero_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xopero_products` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `sufijo` varchar(3) DEFAULT NULL,
  `capacidad` int(9) DEFAULT NULL,
  `xopero_code` int(9) DEFAULT NULL,
  `xopero_code_dev` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `xopero_server`
--

DROP TABLE IF EXISTS `xopero_server`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xopero_server` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `id_orden` int(9) DEFAULT NULL,
  `url` varchar(250) NOT NULL,
  `capacidad` int(6) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=854 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `zonas_envio`
--

DROP TABLE IF EXISTS `zonas_envio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zonas_envio` (
  `id_zona` int(11) NOT NULL,
  `precio_zona` float NOT NULL,
  PRIMARY KEY (`id_zona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Final view structure for view `ordenes_to_odoo`
--

/*!50001 DROP TABLE IF EXISTS `ordenes_to_odoo`*/;
/*!50001 DROP VIEW IF EXISTS `ordenes_to_odoo`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `ordenes_to_odoo` AS select `o`.`id_orden` AS `id_orden`,`o`.`reseller` AS `reseller`,`o`.`producto` AS `producto`,`o`.`licencias` AS `licencias`,`o`.`cliente_nombre` AS `cliente_nombre`,`o`.`cliente_contacto` AS `cliente_contacto`,`o`.`cliente_email` AS `cliente_email`,`o`.`cliente_telefono` AS `cliente_telefono`,`o`.`cliente_nif` AS `cliente_nif`,`o`.`expiracion` AS `expiracion`,`o`.`precio` AS `precio`,`o`.`precio_licencia` AS `precio_licencia`,`o`.`servidores` AS `servidores`,`o`.`notas` AS `notas`,`o`.`enviar_cliente` AS `enviar_cliente`,`o`.`enviar_reseller` AS `enviar_reseller`,`o`.`opcion_compra` AS `opcion_compra`,`o`.`usuario` AS `usuario`,`o`.`password` AS `password`,`o`.`fecha` AS `fecha`,`o`.`hay_lic` AS `hay_lic`,`o`.`onreg` AS `onreg`,`o`.`comentario` AS `comentario`,`o`.`estado` AS `estado`,`o`.`ordenada_por` AS `ordenada_por`,`o`.`snr` AS `snr`,`o`.`pdf` AS `pdf`,`o`.`codigo_expedicia` AS `codigo_expedicia`,`o`.`comentario_publico` AS `comentario_publico`,`o`.`reseller_email_opcional` AS `reseller_email_opcional`,`o`.`aviso_distribuidor` AS `aviso_distribuidor`,`o`.`fecha_envio_aviso` AS `fecha_envio_aviso`,`o`.`hora` AS `hora`,`o`.`generada_desde` AS `generada_desde`,`o`.`albaran` AS `albaran`,`o`.`renovada` AS `renovada`,`o`.`de_agente` AS `de_agente`,`o`.`tipo_persona` AS `tipo_persona`,`o`.`cliente_apellido1` AS `cliente_apellido1`,`o`.`cliente_apellido2` AS `cliente_apellido2`,`o`.`id_tipo_empresa` AS `id_tipo_empresa`,`o`.`nombre_comercial` AS `nombre_comercial`,`o`.`nuevo_modelo` AS `nuevo_modelo`,`o`.`user_agent` AS `user_agent`,`o`.`es_caja` AS `es_caja`,`o`.`es_usb` AS `es_usb`,`o`.`id_orden_comprada` AS `id_orden_comprada`,`o`.`id_orden_antigua` AS `id_orden_antigua`,`o`.`robinson` AS `robinson`,`o`.`ampliada` AS `ampliada`,`o`.`promocion` AS `promocion`,`o`.`id_forma_pago` AS `id_forma_pago`,`o`.`soporte_remoto` AS `soporte_remoto`,`o`.`precio_soporte` AS `precio_soporte`,`o`.`instalacion_remota` AS `instalacion_remota`,`o`.`precio_instalacion` AS `precio_instalacion`,`o`.`precio_instalador_personalizado` AS `precio_instalador_personalizado`,`o`.`commonTag` AS `commonTag`,`o`.`facturacion` AS `facturacion`,`o`.`soporte24_7` AS `soporte24_7`,`o`.`precio_soporte24_7` AS `precio_soporte24_7`,`o`.`anyos_validez` AS `anyos_validez`,`o`.`autorenewal` AS `autorenewal`,`i`.`id_pedido_externo` AS `id_pedido_externo`,`p`.`mostrar` AS `mostrar`,`t`.`error` AS `error` from (((`to_odoo_temp_trigger` `t` join `ordenes` `o` on((`t`.`id_row` = `o`.`id_orden`))) left join `identificador_externo` `i` on((`o`.`id_orden` = `i`.`id_orden`))) left join `productos` `p` on((`o`.`producto` = `p`.`sufijo`))) where (`t`.`tablename` = 'ordenes') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `resellers_total`
--

/*!50001 DROP TABLE IF EXISTS `resellers_total`*/;
/*!50001 DROP VIEW IF EXISTS `resellers_total`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `resellers_total` AS select `o`.`reseller` AS `codigo`,year(`o`.`fecha`) AS `year`,sum(`o`.`precio`) AS `total` from ((`ordenes` `o` join `productos` `p` on((`o`.`producto` = `p`.`sufijo`))) join `resellers` `r` on((`o`.`reseller` = `r`.`codigo`))) where ((year(`o`.`fecha`) >= 2016) and (`o`.`estado` = 'A') and (`o`.`precio` > 0)) group by `o`.`reseller`,year(`o`.`fecha`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `v_productos`
--

/*!50001 DROP TABLE IF EXISTS `v_productos`*/;
/*!50001 DROP VIEW IF EXISTS `v_productos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_productos` AS select `productos`.`sufijo` AS `producto`,`productos`.`sufijo` AS `sufijo`,`productos`.`mostrar` AS `mostrar`,`productos`.`enviar` AS `enviar`,`productos`.`funcion` AS `funcion`,`productos`.`descuento` AS `descuento`,`productos`.`mostrar_reseller` AS `mostrar_reseller`,`productos`.`orden` AS `orden`,`productos`.`tipo_precio` AS `tipo_precio`,`productos`.`product_code` AS `product_code`,`productos`.`tipo` AS `tipo`,`productos`.`subtipo` AS `subtipo` from `productos` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `v_reporte_global_results`
--

/*!50001 DROP TABLE IF EXISTS `v_reporte_global_results`*/;
/*!50001 DROP VIEW IF EXISTS `v_reporte_global_results`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`ordenes`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_reporte_global_results` AS select `rec`.`usuario` AS `usuario`,`r`.`Workstation_quantity` AS `iniciales`,`rs1`.`licencias_compradas` AS `finales`,`rs1`.`licencias_utilizadas` AS `usadas`,`rs1`.`licencias_perdidas` AS `perdidas`,(`rs1`.`licencias_compradas` - `r`.`Workstation_quantity`) AS `recuperadas`,`rs1`.`idTipoMail` AS `idTipoMail`,`rs1`.`precio_pagado` AS `precio_pagado`,`rs1`.`precio_perdido` AS `precio_perdido`,`rs1`.`isOntinet` AS `isOntinet`,`r`.`fechaDescarga` AS `fechaDescarga` from ((`reportes` `r` join `v_ultimos_mails_reportados` `rec` on((`r`.`id_reporte` = `rec`.`id_reporte`))) join `v_ultimos_reportes_seguimiento` `rs1` on((`rs1`.`usuario` = `rec`.`usuario`))) where (`rs1`.`licencias_utilizadas` = (select max(`r2`.`licencias_utilizadas`) from `v_ultimos_reportes_seguimiento` `r2` where (`r2`.`usuario` = `rs1`.`usuario`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `v_ultimos_mails_reportados`
--

/*!50001 DROP TABLE IF EXISTS `v_ultimos_mails_reportados`*/;
/*!50001 DROP VIEW IF EXISTS `v_ultimos_mails_reportados`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`ordenes`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_ultimos_mails_reportados` AS select `ordenes`.`reportes_envio_correos`.`usuario` AS `usuario`,`ordenes`.`reportes_envio_correos`.`idTipoMail` AS `idTipoMail`,`ordenes`.`reportes_envio_correos`.`fechaEnvio` AS `ultimaFechaEnvio`,`ordenes`.`reportes_envio_correos`.`id_reporte` AS `id_reporte`,`ordenes`.`reportes_envio_correos`.`precio` AS `precio` from `reportes_envio_correos` where (`ordenes`.`reportes_envio_correos`.`fechaEnvio` = (select max(`rec2`.`fechaEnvio`) from `reportes_envio_correos` `rec2` where (`rec2`.`usuario` = `ordenes`.`reportes_envio_correos`.`usuario`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `v_ultimos_reportes`
--

/*!50001 DROP TABLE IF EXISTS `v_ultimos_reportes`*/;
/*!50001 DROP VIEW IF EXISTS `v_ultimos_reportes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`ordenes`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_ultimos_reportes` AS select `ordenes`.`reportes`.`id_reporte` AS `rep_id`,`ordenes`.`reportes`.`usuario` AS `rep_usuario`,`ordenes`.`reportes`.`of_downloads` AS `of_downloads`,`ordenes`.`reportes`.`Workstation_quantity` AS `Workstation_quantity`,`ordenes`.`reportes`.`fechaDescarga` AS `ultimaFechaDescarga` from `reportes` where (`ordenes`.`reportes`.`fechaDescarga` = (select max(`r2`.`fechaDescarga`) from `reportes` `r2` where (`r2`.`usuario` = `ordenes`.`reportes`.`usuario`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `v_ultimos_reportes_seguimiento`
--

/*!50001 DROP TABLE IF EXISTS `v_ultimos_reportes_seguimiento`*/;
/*!50001 DROP VIEW IF EXISTS `v_ultimos_reportes_seguimiento`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`ordenes`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_ultimos_reportes_seguimiento` AS select `rs1`.`id` AS `id`,`rs1`.`fecha` AS `fecha`,`rs1`.`usuario` AS `usuario`,`rs1`.`id_orden` AS `id_orden`,`rs1`.`idTipoMail` AS `idTipoMail`,`rs1`.`licencias_compradas` AS `licencias_compradas`,`rs1`.`licencias_utilizadas` AS `licencias_utilizadas`,`rs1`.`licencias_perdidas` AS `licencias_perdidas`,`rs1`.`opcion_compra` AS `opcion_compra`,`rs1`.`cancelada` AS `cancelada`,`rs1`.`precio_pagado` AS `precio_pagado`,`rs1`.`precio_perdido` AS `precio_perdido`,`rs1`.`isOntinet` AS `isOntinet` from `reportes_seguimiento` `rs1` where (`rs1`.`fecha` = (select max(`rs2`.`fecha`) from `reportes_seguimiento` `rs2` where (`rs2`.`usuario` = `rs1`.`usuario`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-22  9:53:01


DROP TABLE IF EXISTS `tarifas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarifas` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(244) DEFAULT NULL,
  `id_parent` int(4) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `date_add` datetime NOT NULL,
  `date_upd` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `producto_tarifa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto_tarifa` (
  `sufijo` varchar(5) NOT NULL,
  `parent_product_code` varchar(7) NOT NULL,
  `id_tarifa` int(4) NOT NULL,
  `is_default` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`sufijo`,`id_tarifa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `available_competitors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `available_competitors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS dx_quote_rel;
CREATE TABLE  dx_quote_rel(
    id  int NOT NULL auto_increment,
    quote_id int NOT NULL UNIQUE,
    quote_vtiger varchar(100) UNIQUE,
    id_orden int,
PRIMARY KEY (id)
);


DROP TABLE IF EXISTS dx_file;
CREATE TABLE  dx_file(
    id  int NOT NULL auto_increment,
    quote_id int,
    dx_file_id varchar(255),
    content LONGBLOB NOT NULL,
    name varchar(100),
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS dx_modified_object_reference;
CREATE TABLE  dx_modified_object_reference(
    id  int NOT NULL auto_increment,
    license_id int,
    service_id int,
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS dx_license;
CREATE TABLE  dx_license(
    id  int NOT NULL auto_increment,
    dx_license_id  varchar(255),
    epli varchar(255),
PRIMARY KEY (id)
);


DROP TABLE IF EXISTS dx_product_configuration;
CREATE TABLE  dx_product_configuration(
    id  int NOT NULL auto_increment,
    product_code varchar(255) NOT NULL,
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `dx_properties_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dx_properties_rel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rel_id` int(11) NOT NULL,
  `properties_id` int(11) NOT NULL,
  `type_rel` varchar(100) NOT NULL,
  `item_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=248 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS dx_properties;
CREATE TABLE  dx_properties(
    id  int NOT NULL auto_increment,
    name varchar(255) NOT NULL,
    value varchar(255) NOT NULL,
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `dx_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dx_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `item_operation` varchar(255) NOT NULL,
  `end_user_price` decimal(20,4) DEFAULT NULL,
  `validity_id` int(11) NOT NULL,
  `modified_object_reference_id` int(11) NOT NULL,
  `custom_reference` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=419 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;


DROP TABLE IF EXISTS dx_validity;
CREATE TABLE  dx_validity(
    id  int NOT NULL auto_increment,
    type_validity ENUM ( "Fixed","Perpetual","Subscription") NOT NULL,
    fixed_id int DEFAULT NULL,
    subscription_id int  DEFAULT NULL,
PRIMARY KEY (id)
);


DROP TABLE IF EXISTS dx_susbcription;
CREATE TABLE  dx_susbcription(
    id  int NOT NULL auto_increment,
    period_type varchar(50),
    suscription_period_lenght  int(2),
PRIMARY KEY (id)
);


DROP TABLE IF EXISTS dx_fixed;
CREATE TABLE  dx_fixed(
    id  int NOT NULL auto_increment,
    expiration_date TIMESTAMP,
    validity_period_length int(4),
PRIMARY KEY (id)
);


DROP TABLE IF EXISTS dx_quote;
CREATE TABLE  dx_quote(
    id  int NOT NULL auto_increment,
    customer_id int NOT NULL,
    distribution_id int,
    discount_justification_id int,
    dx_quote_id varchar(255),
    dx_quote_number varchar(255),
    vertical_code varchar (10) NOT NULL,
    dx_status varchar(100),
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS dx_distribution;
CREATE TABLE  dx_distribution(
    id  int NOT NULL auto_increment,
    channel_code int(3) NOT NULL,
    reseller_id varchar(255) default null,
    distributor_id varchar(255) default null,
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS dx_discount_justification;
CREATE TABLE  dx_discount_justification(
    id  int NOT NULL auto_increment,
    business_justification ENUM ("Competition","Reference", "MultipleEsetProducts", "StrategicCustomer" ,"Other"),
    business_trial_issued TINYINT(1) default 0,
    competitive_product_name varchar(100),
    competitive_product_price DECIMAL(20,4),
    competitor_name int(3),
    expected_closing_deal_date TIMESTAMP,
    information varchar(255) not null,
    is_global_deal TINYINT(1) default 0,
    poc_presales_done TINYINT(1) default 0,
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS dx_customer;
CREATE TABLE  dx_customer (
   id  int NOT NULL auto_increment,
   customer_type  enum('Person', 'Company') NOT NULL,
   vertical_code  varchar(3) NOT NULL,
   dx_customer_id varchar(255),
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `dx_person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dx_person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `person_registration_email` varchar(100) DEFAULT NULL,
  `person_name` varchar(255) NOT NULL,
  `dx_registration_email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6761 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS dx_company;
CREATE TABLE  dx_company  (
    id  int NOT NULL auto_increment,
    customer_id int NOT NULL,
    company_name  varchar(255) NOT NULL,
    company_registration_number  varchar(50),
    company_VAT_number  varchar(50),
PRIMARY KEY  ( id )
); 



DROP TABLE IF EXISTS dx_contact;
CREATE TABLE  dx_contact  (
    id int NOT NULL auto_increment,
    customer_id int NOT NULL,
    dx_contact_id varchar(255),
    first_name  varchar(100),
    last_name   varchar(100),
    phone  varchar(100),
    description  varchar(100),
PRIMARY KEY  ( id )
); 


DROP TABLE IF EXISTS settings_reseller;
CREATE TABLE settings_reseller(
id INT NOT NULL AUTO_INCREMENT,
reseller INT NOT NULL,
date_add TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
UNIQUE (reseller)
);

DROP TABLE IF EXISTS settings_gestion_clientes;
CREATE TABLE settings_gestion_clientes (
id INT NOT NULL AUTO_INCREMENT,
id_settings INT NOT NULL,
gestion_clientes BOOLEAN NOT NULL DEFAULT False,
state ENUM('waiting', 'running', "done", "fail") NOT NULL,
date_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id),
UNIQUE (id_settings));

DROP TABLE IF EXISTS settings_history_ordenes;
CREATE TABLE settings_history_ordenes (
id INT NOT NULL AUTO_INCREMENT,
id_gestion_clientes INT NOT NULL,
id_orden INT NOT NULL,
enviar_cliente VARCHAR(1) NOT NULL,
date_add TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id));

DROP TABLE IF EXISTS settings_history_gestion_clientes;
CREATE TABLE settings_history_gestion_clientes (
id INT NOT NULL AUTO_INCREMENT,
id_gestion_clientes INT NOT NULL,
gestion_clientes BOOLEAN NOT NULL,
date_add TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id));

DROP TABLE IF EXISTS dx_dealcode;
CREATE TABLE `dx_dealcode` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dx_dealcode_id` INT NOT NULL,
  `promocion_id` INT,
  `discount` INT(2) NOT NULL,
  `description_eset` VARCHAR(250),
  `description_ontinet` VARCHAR(250),
  `date_add` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));

DROP TABLE IF EXISTS `dx_dealcode_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dx_dealcode_rel` (
  `dx_dealcode_id` int(11) NOT NULL,
  `id_orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS dx_license_rel;
CREATE TABLE dx_license_rel (
    id  int NOT NULL auto_increment,
    customer_id int NOT NULL,
    onreg  varchar(255) NOT NULL,
PRIMARY KEY ( id )
);