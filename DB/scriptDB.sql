-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Ketzal
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Ketzal
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Ketzal` DEFAULT CHARACTER SET utf8 ;
USE `Ketzal` ;

-- -----------------------------------------------------
-- Table `Ketzal`.`Productos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ketzal`.`Productos` ;

CREATE TABLE IF NOT EXISTS `Ketzal`.`Productos` (
  `idProductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `imagen` VARCHAR(200) NULL,
  `descripcion` VARCHAR(250) NOT NULL,
  `precio` FLOAT NOT NULL,
  `gramaje` VARCHAR(30) NULL,
  PRIMARY KEY (`idProductos`),
  UNIQUE INDEX `idProductos_UNIQUE` (`idProductos` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ketzal`.`Contacto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ketzal`.`Contacto` ;

CREATE TABLE IF NOT EXISTS `Ketzal`.`Contacto` (
  `idContacto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(150) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `asunto` VARCHAR(50) NOT NULL,
  `mensaje` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`idContacto`),
  UNIQUE INDEX `idContacto_UNIQUE` (`idContacto` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ketzal`.`Clientes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ketzal`.`Clientes` ;

CREATE TABLE IF NOT EXISTS `Ketzal`.`Clientes` (
  `idContacto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(150) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `contraseña` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idContacto`),
  UNIQUE INDEX `idContacto_UNIQUE` (`idContacto` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ketzal`.`Administrador`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ketzal`.`Administrador` ;

CREATE TABLE IF NOT EXISTS `Ketzal`.`Administrador` (
  `idAdministrador` INT NOT NULL,
  `correo` VARCHAR(150) NULL,
  `contraseña` VARCHAR(20) NULL,
  PRIMARY KEY (`idAdministrador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ketzal`.`Compras`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ketzal`.`Compras` ;

CREATE TABLE IF NOT EXISTS `Ketzal`.`Compras` (
  `idCompra` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `Clientes_idContacto` INT NOT NULL,
  PRIMARY KEY (`idCompra`, `Clientes_idContacto`),
  INDEX `fk_Compras_Clientes_idx` (`Clientes_idContacto` ASC) VISIBLE,
  CONSTRAINT `fk_Compras_Clientes`
    FOREIGN KEY (`Clientes_idContacto`)
    REFERENCES `Ketzal`.`Clientes` (`idContacto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ketzal`.`DetalleCompra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ketzal`.`DetalleCompra` ;

CREATE TABLE IF NOT EXISTS `Ketzal`.`DetalleCompra` (
  `idDetallesCompra` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `direccion` VARCHAR(300) NOT NULL,
  `total` FLOAT NOT NULL,
  `Compras_idCompra` INT NOT NULL,
  `Compras_Clientes_idContacto` INT NOT NULL,
  `Productos_idProductos` INT NOT NULL,
  PRIMARY KEY (`idDetallesCompra`, `Compras_idCompra`, `Compras_Clientes_idContacto`, `Productos_idProductos`),
  UNIQUE INDEX `idDetallesCompra_UNIQUE` (`idDetallesCompra` ASC) VISIBLE,
  INDEX `fk_DetalleCompra_Compras1_idx` (`Compras_idCompra` ASC, `Compras_Clientes_idContacto` ASC) VISIBLE,
  INDEX `fk_DetalleCompra_Productos1_idx` (`Productos_idProductos` ASC) VISIBLE,
  CONSTRAINT `fk_DetalleCompra_Compras1`
    FOREIGN KEY (`Compras_idCompra` , `Compras_Clientes_idContacto`)
    REFERENCES `Ketzal`.`Compras` (`idCompra` , `Clientes_idContacto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_DetalleCompra_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `Ketzal`.`Productos` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
