USE ketzal;


-- Datos administrador 
 
 
INSERT INTO `Ketzal`.`administrador` (`idadministrador`, `correo`, `contrasena`) VALUES (1, 'admin@gmail.com', 'ketzal1'); 
 
-- Datos contacto 
 
INSERT INTO `Ketzal`.`contacto` (`idcontacto`, `nombre`, `correo`, `telefono`) VALUES (1, 'Daisy Matus', 'dsmm.10@gmail.com', '5518981941'); 
INSERT INTO `Ketzal`.`contacto` (`idcontacto`, `nombre`, `correo`, `telefono`) VALUES (2, 'Claudia Cabrera', 'clc54@gmail.com', '5587654312'); 
INSERT INTO `Ketzal`.`contacto` (`idcontacto`, `nombre`, `correo`, `telefono`) VALUES (3, 'Marco Jiménez', 'maje_34@gmail.com', '9511234654'); 
INSERT INTO `Ketzal`.`contacto` (`idcontacto`, `nombre`, `correo`, `telefono`) VALUES (4, 'María férnanda González', 'maférgzl22@coffbreak.mx', '5522867609'); 
INSERT INTO `Ketzal`.`contacto` (`idcontacto`, `nombre`, `correo`, `telefono`) VALUES (5, 'Ana Arias', 'anaari2612@yahoo.com', '5529750966'); 
 
 
-- Datos Clientes 
INSERT INTO `Ketzal`.`clientes` (`idcontacto`, `nombre`, `correo`, `telefono`, `contrasena`) VALUES (1, 'Luis Hdz', 'luish@gmail.com', '5571654398', 'lu1s34'); 
INSERT INTO `Ketzal`.`clientes` (`idcontacto`, `nombre`, `correo`, `telefono`, `contrasena`) VALUES (2, 'Daniela Gómez	', 'dango@gmail.com	', '5534872987', 'dan1g0'); 
INSERT INTO `Ketzal`.`clientes` (`idcontacto`, `nombre`, `correo`, `telefono`, `contrasena`) VALUES (3, 'Marisol Morales', 'solmor@gmail.com', '5520103437', 's0lm0r4'); 
INSERT INTO `Ketzal`.`clientes` (`idcontacto`, `nombre`, `correo`, `telefono`, `contrasena`) VALUES (4, 'Martín Pérez', 'marpr32@hotmail.com', '5539891476', 'perri022'); 
INSERT INTO `Ketzal`.`clientes` (`idcontacto`, `nombre`, `correo`, `telefono`, `contrasena`) VALUES (5, 'Miguel López', 'mikelop@gmail.com', '5587953487', 'micky65l'); 
 
 -- Datos Producto 
 
INSERT INTO `Ketzal`.`productos` (`idproductos`, `nombre`, `imagen`, `descripcion`, `precio`, `gramaje`) VALUES (1, 'Café Honduras', 'caféHonduras.jpeg', 'Café 100% de café arábica, con una producción ecológicamente sostenible. Suelen ser dulces, achocolatados, con cuerpo redondo, acidez delicada y postgusto sostenido. Perfecto para esos días de descanso.', '360.00', '180'); 
INSERT INTO `Ketzal`.`productos` (`idproductos`, `nombre`, `imagen`, `descripcion`, `precio`, `gramaje`) VALUES (2, 'Café Borundi', 'caféBorundi.jpeg', 'Café de grano cosechado a mano y secado al sol en parihuelas elevadas. Se pueden identificar notas de frutas, flores y miel, acompañadas de consistencia, equilibrio y un cuerpo completo. Perfecto para iniciar tus mañanas.', '399.00', '200'); 
INSERT INTO `Ketzal`.`productos` (`idproductos`, `nombre`, `imagen`, `descripcion`, `precio`, `gramaje`) VALUES (3, 'Café Guatemala', 'caféGuatemala.jpeg', 'Este preparado gourmet es una mezcla arábiga aromática, El grano es cosechado a la sombra. Es delicioso, con pronunciada acidez cítrica y mucho cuerpo. Perfécto para compartir con amigos.', '350.00', '210'); 
INSERT INTO `Ketzal`.`productos` (`idproductos`, `nombre`, `imagen`, `descripcion`, `precio`, `gramaje`) VALUES (4, 'Café Indonesia', 'caféIndonesia.jpeg', 'Está considerado como uno de los mejores del mundo, es un café Arábica procesado húmedo. Es bastante dulce y de baja acidez, de cuerpo medio y aroma complejo a tierra. Ideal para esos días especiales.', '499.00', '150'); 
INSERT INTO `Ketzal`.`productos` (`idproductos`, `nombre`, `imagen`, `descripcion`, `precio`, `gramaje`) VALUES (5, 'Café Mimba', 'caféMimba.jpeg', 'Café liofilizado hecho con granos cosechados a mano a nivel del mar. Es apreciado por su dulce fragancia, acidez cítrica, sabores dulces y un cuerpo cremoso que la hacen muy agradable. Lo mejor para los días de trabajo.', '499.00', '250'); 
INSERT INTO `Ketzal`.`productos` (`idproductos`, `nombre`, `imagen`, `descripcion`, `precio`, `gramaje`) VALUES (6, 'Café Mujeres', 'caféMujeres.jpeg', 'Café en grano que se cultiva en laderas empinadas, bajo la sombra de árboles y plantas que permiten una maduración más lenta. Es de acidez media y mucho cuerpo, con notas a chocolate y avellana. El mejor para compartir con esa persona especial.', '219.00', '200'); 
INSERT INTO `Ketzal`.`productos` (`idproductos`, `nombre`, `imagen`, `descripcion`, `precio`, `gramaje`) VALUES (7, 'Café Perú', 'caféPeru.jpeg', 'Café Arábica, de las mejores cosechas debido a la privilegiada ubicación de Perú. Caracterizados por su cuerpo y notas herbáceas, pero con más dulzor. Delicioso para compartir en familia.', '299.00', '220'); 
INSERT INTO `Ketzal`.`productos` (`idproductos`, `nombre`, `imagen`, `descripcion`, `precio`, `gramaje`) VALUES (8, 'Café Pétalo', 'caféPetalo.jpeg', 'Café robusta, cosechado 100% por familias de las mejores regiones de Perú. Agradable sabor a cítricos, albaricoques y caramelo y acidez tartárica. Lo mejor para esos momentos difíciles.', '279.00', '140'); 
INSERT INTO `Ketzal`.`productos` (`idproductos`, `nombre`, `imagen`, `descripcion`, `precio`, `gramaje`) VALUES (9, 'Café Tziscao', 'caféTziscao.jpeg', 'Café granos 100% arábica y orgánico, el tostado del cafés está elaborado en pequeños lotes, con el mayor de los cuidados, con sabor achocolatado y tonos a almendras tostadas, con un aroma y cuerpo intenso. Tu mejor aliado para esos viajes largos.', '349.00', '125');
 
-- Datos Compras 

INSERT INTO `ketzal`.`compras` (`idcompra`, `fecha`, `clientes_idcontacto`) VALUES ('1', '2021-09-02', '1');
INSERT INTO `ketzal`.`compras` (`idcompra`, `fecha`, `clientes_idcontacto`) VALUES ('2', '2021-11-02', '2');
INSERT INTO `ketzal`.`compras` (`idcompra`, `fecha`, `clientes_idcontacto`) VALUES ('3', '2021-11-25', '3');
INSERT INTO `ketzal`.`compras` (`idcompra`, `fecha`, `clientes_idcontacto`) VALUES ('4', '2021-11-26', '4');
INSERT INTO `ketzal`.`compras` (`idcompra`, `fecha`, `clientes_idcontacto`) VALUES ('5', '2021-11-27', '5');
 
  
-- Datos DetallesCompra 
 
INSERT INTO `Ketzal`.`detalleCompra` (`iddetallescompra`, `cantidad`, `direccion`, `total`, `compras_idcompra`, `compras_clientes_idcontacto`, `productos_idproductos`) VALUES (1, 3, 'Calle Moctezuma 33, col Jardín. Delegación  Álvaro Obregón', '1050.00', '1', '1', '3'); 
INSERT INTO `Ketzal`.`detalleCompra` (`iddetallescompra`, `cantidad`, `direccion`, `total`, `compras_idcompra`, `compras_clientes_idcontacto`, `productos_idproductos`) VALUES (2, 1, 'San Ramón 23, col Roma. Del: Cuauhtémoc', '499.00', '2', '2', '4'); 
INSERT INTO `Ketzal`.`detalleCompra` (`iddetallescompra`, `cantidad`, `direccion`, `total`, `compras_idcompra`, `compras_clientes_idcontacto`, `productos_idproductos`) VALUES (3, 4, 'Calle Sinaloa 29, Tizapán San  Ángel,  Álvaro Obregón, CDMX', '1196.00', '3', '3', '7'); 
INSERT INTO `Ketzal`.`detalleCompra` (`iddetallescompra`, `cantidad`, `direccion`, `total`, `compras_idcompra`, `compras_clientes_idcontacto`, `productos_idproductos`) VALUES (4, 2, 'av armadillo 38, col Centro. Manzanillo, Colima.', '1047.00', '4', '4', '9'); 
INSERT INTO `Ketzal`.`detalleCompra` (`iddetallescompra`, `cantidad`, `direccion`, `total`, `compras_idcompra`, `compras_clientes_idcontacto`, `productos_idproductos`) VALUES (5, 9, '915 Wilshire Blvd #1654, LA, CA, USA', '2190.00', '5', '5', '6'); 
