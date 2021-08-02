-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ruffdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ruffdb` ;

-- -----------------------------------------------------
-- Schema ruffdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ruffdb` DEFAULT CHARACTER SET utf8 ;
USE `ruffdb` ;

-- -----------------------------------------------------
-- Table `dog`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dog` ;

CREATE TABLE IF NOT EXISTS `dog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `fav_toy` VARCHAR(100) NULL,
  `fav_treat` VARCHAR(100) NULL,
  `fav_place` VARCHAR(200) NULL,
  `vices` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS ruff@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'ruff'@'localhost' IDENTIFIED BY 'ruff';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'ruff'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `dog`
-- -----------------------------------------------------
START TRANSACTION;
USE `ruffdb`;
INSERT INTO `dog` (`id`, `name`, `fav_toy`, `fav_treat`, `fav_place`, `vices`) VALUES (1, 'Tuco', 'Squeaky Llama', 'Peanut Butter', 'Next To Momma', 'Scaredy Cat');
INSERT INTO `dog` (`id`, `name`, `fav_toy`, `fav_treat`, `fav_place`, `vices`) VALUES (2, 'Linus', 'Fluffy Bunny', 'Veggies', 'Heating Pad', 'Meanstreak down his backbone a mile wide');
INSERT INTO `dog` (`id`, `name`, `fav_toy`, `fav_treat`, `fav_place`, `vices`) VALUES (3, 'Rocket', 'Rope', 'Salmon', 'In the Wilderness', 'Will Follow you to the Bathroom');
INSERT INTO `dog` (`id`, `name`, `fav_toy`, `fav_treat`, `fav_place`, `vices`) VALUES (4, 'Zara', 'Stick', 'Ice Cream', 'By The River', 'Everything in Life starts with a Lick');

COMMIT;

