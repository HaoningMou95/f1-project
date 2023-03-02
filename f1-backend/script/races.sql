-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: f1_project
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `races`
--

DROP TABLE IF EXISTS `races`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `races` (
  `races_name` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `races_location` varchar(17) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `races_latitude` decimal(8,6) DEFAULT NULL,
  `races_longitude` decimal(9,6) DEFAULT NULL,
  `races_round` int NOT NULL,
  `races_slug` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `races_localeKey` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `races_sessions_fp1` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `races_sessions_fp2` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `races_sessions_fp3` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `races_sessions_qualifying` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `races_sessions_gp` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `races_sessions_sprint` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`races_round`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `races`
--

LOCK TABLES `races` WRITE;
/*!40000 ALTER TABLE `races` DISABLE KEYS */;
INSERT INTO `races` VALUES ('Bahrain','Sakhir',26.037000,50.511200,1,'bahrain-grand-prix','bahrain-grand-prix','2023-03-03T11:30:00Z','2023-03-03T15:00:00Z','2023-03-04T11:30:00Z','2023-03-04T15:00:00Z','2023-03-05T15:00:00Z',NULL),('Saudi Arabian','Jeddah',21.485811,39.192505,2,'saudi-arabia-grand-prix','saudi-arabia-grand-prix','2023-03-17T13:30:00Z','2023-03-17T17:00:00Z','2023-03-18T13:30:00Z','2023-03-18T17:00:00Z','2023-03-19T17:00:00Z',NULL),('Australian','Melbourne',-37.837300,144.966600,3,'australian-grand-prix','australian-grand-prix','2023-03-31T01:30:00Z','2023-03-31T05:00:00Z','2023-04-01T01:30:00Z','2023-04-01T05:00:00Z','2023-04-02T05:00:00Z',NULL),('Azerbaijan','Baku',40.369900,49.843300,5,'azerbaijan-grand-prix','azerbaijan-grand-prix','2023-04-28T09:30:00Z','2023-04-29T09:30:00Z',NULL,'2023-04-28T13:00:00Z','2023-04-30T11:00:00Z','2023-04-29T13:30:00Z'),('Miami','Miami',25.957764,-80.238835,6,'miami-grand-prix','miami-grand-prix','2023-05-05T18:30:00Z','2023-05-05T22:00:00Z','2023-05-06T16:30:00Z','2023-05-06T20:00:00Z','2023-05-07T19:30:00Z',NULL),('Emilia Romagna Grand Prix','Imola',44.344576,11.713808,7,'emilia-romagna-grand-prix','emilia-romagna-grand-prix','2023-05-19T11:30:00Z','2023-05-19T15:00:00Z','2023-05-20T10:30:00Z','2023-05-20T14:00:00Z','2023-05-21T13:00:00Z',NULL),('Monaco','Monte Carlo',43.733800,7.421500,8,'monaco-grand-prix','monaco-grand-prix','2023-05-26T11:30:00Z','2023-05-26T15:00:00Z','2023-05-27T10:30:00Z','2023-05-27T14:00:00Z','2023-05-28T13:00:00Z',NULL),('Spanish','Catalunya',41.563800,2.258500,9,'spanish-grand-prix','spanish-grand-prix','2023-06-02T11:30:00Z','2023-06-02T15:00:00Z','2023-06-03T10:30:00Z','2023-06-03T14:00:00Z','2023-06-04T13:00:00Z',NULL),('Canadian','Montreal',45.503400,-73.526700,10,'canadian-grand-prix','canadian-grand-prix','2023-06-16T17:30:00Z','2023-06-16T21:00:00Z','2023-06-17T16:30:00Z','2023-06-17T20:00:00Z','2023-06-18T18:00:00Z',NULL),('Austrian','Spielberg',47.222500,14.760700,11,'austrian-grand-prix','austrian-grand-prix','2023-06-30T11:30:00Z','2023-07-01T10:30:00Z',NULL,'2023-06-30T15:00:00Z','2023-07-02T13:00:00Z','2023-07-01T14:30:00Z'),('British','Silverstone',52.070600,-1.017400,12,'british-grand-prix','british-grand-prix','2023-07-07T11:30:00Z','2023-07-07T15:00:00Z','2023-07-08T10:30:00Z','2023-07-08T14:00:00Z','2023-07-09T14:00:00Z',NULL),('Hungarian','Budapest',47.583000,19.252600,13,'hungarian-grand-prix','hungarian-grand-prix','2023-07-21T11:30:00Z','2023-07-21T15:00:00Z','2023-07-22T10:30:00Z','2023-07-22T14:00:00Z','2023-07-23T13:00:00Z',NULL),('Belgian','Spa-Francorchamps',50.444000,5.968700,14,'belgian-grand-prix','belgian-grand-prix','2023-07-28T11:30:00Z','2023-07-29T10:30:00Z',NULL,'2023-07-28T15:00:00Z','2023-07-30T13:00:00Z','2023-07-29T14:30:00Z'),('Dutch','Zandvoort',52.388408,4.547122,15,'dutch-grand-prix','dutch-grand-prix','2023-08-25T10:30:00Z','2023-08-25T14:00:00Z','2023-08-26T09:30:00Z','2023-08-26T13:00:00Z','2023-08-27T13:00:00Z',NULL),('Italian','Monza',45.616900,9.282500,16,'italian-grand-prix','italian-grand-prix','2023-09-01T11:30:00Z','2023-09-01T15:00:00Z','2023-09-02T10:30:00Z','2023-09-02T14:00:00Z','2023-09-03T13:00:00Z',NULL),('Singapore','Singapore',1.285700,103.857500,17,'singapore-grand-prix','singapore-grand-prix','2023-09-15T09:30:00Z','2023-09-15T13:00:00Z','2023-09-16T09:30:00Z','2023-09-16T13:00:00Z','2023-09-17T12:00:00Z',NULL),('Japanese','Suzuka',35.368900,138.925600,18,'japanese-grand-prix','japanese-grand-prix','2023-09-22T02:30:00Z','2023-09-22T06:00:00Z','2023-09-23T02:30:00Z','2023-09-23T06:00:00Z','2023-09-24T05:00:00Z',NULL),('Qatar','Doha',25.490292,51.453030,19,'qatar-grand-prix','qatar-grand-prix','2023-10-06T13:30:00Z','2023-10-07T13:30:00Z',NULL,'2023-10-06T17:00:00Z','2023-10-08T17:00:00Z','2023-10-07T17:30:00Z'),('United States','Austin',30.132800,-97.641100,20,'us-grand-prix','us-grand-prix','2023-10-20T17:30:00Z','2023-10-21T18:00:00Z',NULL,'2023-10-20T21:00:00Z','2023-10-22T19:00:00Z','2023-10-21T22:00:00Z'),('Mexican','Mexico City',19.402800,-99.098600,21,'mexican-grand-prix','mexico-grand-prix','2023-10-27T18:30:00Z','2023-10-27T22:00:00Z','2023-10-28T17:30:00Z','2023-10-28T21:00:00Z','2023-10-29T20:00:00Z',NULL),('Brazilian','Sao Paulo',-23.701400,-46.696900,22,'brazilian-grand-prix','brazilian-grand-prix','2023-11-03T14:30:00Z','2023-11-04T14:30:00Z',NULL,'2023-11-03T18:00:00Z','2023-11-05T17:00:00Z','2023-11-04T18:30:00Z'),('Las Vegas','Las Vegas',36.166747,-115.148708,23,'las-vegas-grand-prix','las-vegas-grand-prix','2023-11-17T04:30:00Z','2023-11-17T08:00:00Z','2023-11-18T04:30:00Z','2023-11-18T08:00:00Z','2023-11-19T06:00:00Z',NULL),('Abu Dhabi','Yas Marina',24.482100,54.348200,24,'abu-dhabi-grand-prix','abu-dhabi-grand-prix','2023-11-24T09:30:00Z','2023-11-24T13:00:00Z','2023-11-25T10:30:00Z','2023-11-25T14:00:00Z','2023-11-26T13:00:00Z',NULL);
/*!40000 ALTER TABLE `races` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-02 22:34:09
