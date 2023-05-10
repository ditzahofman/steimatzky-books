-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2023 at 01:02 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `steimatzky-books`
--
CREATE DATABASE IF NOT EXISTS `steimatzky-books` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `steimatzky-books`;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `bookId` int(11) NOT NULL,
  `bookName` varchar(20) NOT NULL,
  `nameOfWriter` varchar(30) NOT NULL,
  `summary` varchar(100) NOT NULL,
  `genreId` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `unitsInStock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`bookId`, `bookName`, `nameOfWriter`, `summary`, `genreId`, `price`, `unitsInStock`) VALUES
(1, 'Yael\'s house', 'miriam ruth', 'The story of Yael who wanted to find her own house. Yael\'s House - a great classic about Yael who ha', 1, 38.90, 16),
(2, 'is funny', 'James Patterson', 'The protagonist of the book, Jamie Grimm, is a boy with a purpose. He wants to be the funniest young', 4, 62.50, 5),
(3, ' Netanyahu biography', 'Ben Caspit', 'This is Caspit\'s second book about Benjamin Netanyahu; The first, \"Netanyahu: The Road to Power\", wa', 7, 120.00, 2),
(4, 'Legal infiltrator', 'A Brav', 'Everyone is trying to help everyone. to save, to assist.\r\nThis is not always possible. They don\'t al', 3, 68.00, 3),
(5, 'laughing again', 'l Rotem', 'l. Rotem is a Jewish humor artist. In a reissue of the witty bestseller.\r\nQuality jokes and jokes. a', 6, 57.00, 10),
(7, 'shalva bchava', 'menucha bekerman', 'Peace disturbed on the farm by the hen\'s egg and search for culprits Sephor is full of a message for', 1, 50.00, 5);

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `genreId` int(11) NOT NULL,
  `genreName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`genreId`, `genreName`) VALUES
(1, 'children'),
(2, 'textbooks'),
(3, 'adults'),
(4, 'youth'),
(5, 'novel'),
(6, 'jokes'),
(7, 'politics');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`bookId`),
  ADD KEY `genreID` (`genreId`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`genreId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `bookId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `genreId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`genreId`) REFERENCES `genre` (`genreId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
