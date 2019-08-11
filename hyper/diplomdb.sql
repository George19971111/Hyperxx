-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 09 2019 г., 15:22
-- Версия сервера: 10.1.38-MariaDB
-- Версия PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `diplomdb`
--

-- --------------------------------------------------------

--
-- Структура таблицы `blockpit`
--

CREATE TABLE `blockpit` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `blockpit`
--

INSERT INTO `blockpit` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/900.png', 'kcas-750 GM', 75000),
(2, 'static/img/901.png', 'ax-860 ai', 42899),
(3, 'static/img/902.png', 'gtr gameflow', 65000),
(4, 'static/img/903.png', 'classic dsx1 power', 18000),
(5, 'static/img/904.png', 'atx 400w', 25000),
(6, 'static/img/905.png', 'fatality 1000w', 91000),
(7, 'static/img/906.png', 'swsa 500w', 65000),
(8, 'static/img/907.png', 'kcass1-10000w', 110000),
(9, 'static/img/908.png', 'firestorm-750w', 73000),
(10, 'static/img/909.png', 'rgb1250w', 120000),
(11, 'static/img/910.png', 'corsair gs800', 78000),
(12, 'static/img/911.png', 'thor1200w', 110000),
(13, 'static/img/912.png', 'mars-gaming 650w', 55000),
(14, 'static/img/913.png', 'corsair rm1000x', 35000),
(15, 'static/img/914.png', 'corsair rm500x', 40000);

-- --------------------------------------------------------

--
-- Структура таблицы `computerforbuy`
--

CREATE TABLE `computerforbuy` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `computerforbuy`
--

INSERT INTO `computerforbuy` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/6.png', 'ASER PREMIA', 260000),
(2, 'static/img/10.png', 'APEX ASPERAS', 200000),
(3, 'static/img/11.png', 'asus x2001', 600000),
(4, 'static/img/3.png', 'Asus x1001', 300000),
(5, 'static/img/7.png', 'Aser x5001', 1000000),
(6, 'static/img/8.png', 'sartoon', 140000),
(7, 'static/img/9.png', 'salihq1', 320999),
(8, 'static/img/9.png', 'releft', 100000),
(9, 'static/img/5.png', 'windalert', 770000),
(10, 'static/img/6.png', 'Windalert x2', 900000),
(11, 'static/img/3000.png', 'hyperx pc', 430000),
(12, 'static/img/3001.png', 'red line xenon', 600000),
(13, 'static/img/3002.png', 'geforce preview', 840999),
(14, 'static/img/3003.png', 'avp ', 693000),
(15, 'static/img/3004.png', 'rbg gamingpro', 1000000),
(16, 'static/img/3005.png', 'hyper dx', 340000),
(17, 'static/img/3006.png', 'pospition gaming', 500000),
(18, 'static/img/3007.png', 'starcraft gamingceries', 740000),
(19, 'static/img/3008.png', 'starcraft gamingcies x', 790000),
(20, 'static/img/3009.png', 'intel pirplegame', 950000),
(21, 'static/img/3010.png', 'supersteelseries', 340000),
(22, 'static/img/3011.png', 'acer g200', 700000),
(23, 'static/img/3013.png', 'white acer hope', 290000),
(24, 'static/img/3014.png', 'delux ', 500000),
(25, 'static/img/3012.png', 'redgraduate', 970000);

-- --------------------------------------------------------

--
-- Структура таблицы `computers`
--

CREATE TABLE `computers` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(20) NOT NULL,
  `cost` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `computers`
--

INSERT INTO `computers` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/6.png', 'HYPERPC EARLKASE', 616000),
(2, 'static/img/11.png', 'HYPERPC 1000D', 684000),
(3, 'static/img/3.png', 'HYPERPC NOCTIS', 634000),
(4, 'static/img/7.png', 'HYPERPC CONCEPT 1', 407850),
(5, 'static/img/6.png', 'HYPERPC SPEC', 383000),
(6, 'static/img/7.png', 'HYPERPC EARLKASErx', 502530),
(7, 'static/img/8.png', 'RAZER EXPRESS', 546000),
(8, 'static/img/9.png', 'RAZER ARHONE', 647000),
(9, 'static/img/10.png', 'HYPERX 2000', 502000),
(10, 'static/img/11.png', 'HYPERX 5000', 374000);

-- --------------------------------------------------------

--
-- Структура таблицы `confcomps`
--

CREATE TABLE `confcomps` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL,
  `videocarta` varchar(25) NOT NULL,
  `processor` varchar(25) NOT NULL,
  `materinskayaplata` varchar(25) NOT NULL,
  `opetativnayapamat` varchar(25) NOT NULL,
  `zvookovaia` varchar(25) NOT NULL,
  `harddisk` varchar(25) NOT NULL,
  `blockpit` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `confcomps`
--

INSERT INTO `confcomps` (`id`, `img`, `name`, `cost`, `videocarta`, `processor`, `materinskayaplata`, `opetativnayapamat`, `zvookovaia`, `harddisk`, `blockpit`) VALUES
(1, 'static/img/6.png', 'HYPERPC EARLKASE', 616000, 'GTX 759 TITAN', 'core i7 7500k', 'asusrock x100', 'tridentx', 'xenonaudio el', 'sdd samsund drive', 'kcass1-10000w'),
(2, 'static/img/11.png', 'HYPERPC 1000D', 684000, 'MSI MICRO12', 'razen ironx', 'asusrock gameseriae', 'geil', 'audiocard edition', '5220 pro micron', 'rgb1250w'),
(3, 'static/img/3.png', 'HYPERPC NOCTIS', 191900, 'asus rock xr201', 'cpu xeon gamex2', 'ASUS PROV', 'g.skill tridentz rgb', 'autoend pcx32', 'sdd samsund drive', 'kcas-750 GM'),
(4, 'static/img/7.png', 'HYPERPC CONCEPT 1', 289900, 'asus rrrr121', 'core i7kd 8000', 'gigbyte series home', 'Hyperx ddr4 8 gb', 'ngones audioacuss x64', 'seagate 256gb', 'classic dsx1 power'),
(5, 'static/img/6.png', 'HYPERPC SPEC', 191900, 'Gigabyte X212', 'core duo reborn', 'laga 1151', 'Hyperx ddr4 16 gb', 'rookaudio soundedd', 'toshiba 1000', 'atx 400w'),
(6, 'static/img/7.png', 'HYPERPC EARLKASErx', 117100, 'MSI ORANIC X121', 'core i7 ultimate game', 'asus rokfmgame', 'crusial x200', 'soundcard delux', 'wd 1.0TB', 'fatality 1000w'),
(7, 'static/img/8.png', 'RAZER EXPRESS', 200000, 'MSI MS1', 'core xeon i7 71k2', 'msi z1702', 'Hyperx ddr4/dimm 24000', 'audiocard edition', 'wd 0.5tb', 'swsa 500w'),
(8, 'static/img/9.png', 'RAZER ARHONE', 500000, 'GeForce GTX 1080', 'razen ironx', 'msi z1702 gray', 'tridentx', 'logitechaudio ellon', 'sdd wd 1000', 'kcass1-10000w'),
(9, 'static/img/10.png', 'HYPERX 2000', 400000, 'GeForce GTX 1080TI', 'razen gameedit19921', 'ASUS PROV lux', 'corsair led 2x8gb', 'xenonaudio el', 'harddisk x64', 'firestorm-750w'),
(10, 'static/img/11.png', 'HYPERX 5000', 600000, 'GeForce GTX 950', 'razen homeedit', 'ASUS PROV', 'Hyperx ddr8x4 16 gb', 'soundtruck audioedition', 'wd 500gb', 'corsair gs800');

-- --------------------------------------------------------

--
-- Структура таблицы `datauser`
--

CREATE TABLE `datauser` (
  `id` int(11) NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `harddisk`
--

CREATE TABLE `harddisk` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `harddisk`
--

INSERT INTO `harddisk` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/800.png', 'harddisk x64', 12000),
(2, 'static/img/801.png', 'wd 1000', 54000),
(3, 'static/img/802.png', 'seagate 1000gb', 65000),
(4, 'static/img/803.png', 'seagate 500gb', 35000),
(5, 'static/img/804.png', 'seagate 256gb', 15000),
(6, 'static/img/805.png', 'wd 500gb', 24000),
(7, 'static/img/806.png', 'toshiba 1000', 94000),
(8, 'static/img/807.png', 'toshiba 500', 43000),
(9, 'static/img/808.png', 'wd 1.0TB', 63000),
(10, 'static/img/810.png', 'wd 0.3tb', 12000),
(11, 'static/img/810.png', 'wd 0.5tb', 25000),
(12, 'static/img/811.png', 'sdd wd 1000', 85000),
(13, 'static/img/812.png', 'sdd samsund solid', 75000),
(14, 'static/img/813.png', 'sdd samsund drive', 85000),
(15, 'static/img/814.png', '5220 pro micron', 55000);

-- --------------------------------------------------------

--
-- Структура таблицы `klaviaturimishki`
--

CREATE TABLE `klaviaturimishki` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `klaviaturimishki`
--

INSERT INTO `klaviaturimishki` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/86.png', 'hp gaming r2', 80000),
(2, 'static/img/81.png', 'steelserias carbon', 85000),
(3, 'static/img/85.png', 'acer editionx2', 40000),
(4, 'static/img/84.png', 'seelserias r2d2', 100000),
(5, 'static/img/87.png', 'reazen omen', 29000),
(6, 'static/img/88.png', 'razer greended', 40000),
(7, 'static/img/89.png', 'razer blueded', 40000),
(8, 'static/img/90.png', 'rasen omen21', 30000),
(9, 'static/img/91.png', 'raser openergame', 60000),
(10, 'static/img/92.png', 'razer or20001', 20000),
(11, 'static/img/93.png', 'corsair gaming mise', 50499),
(12, 'static/img/94.png', 'corsair pro rea', 60000),
(13, 'static/img/95.png', 'logitech 2042', 15000),
(14, 'static/img/1000.png', 'steelseriae gamingrgb', 75000),
(15, 'static/img/1001.png', 'delux graured', 89000),
(16, 'static/img/1002.png', 'poseidon gaming', 53000),
(17, 'static/img/1003.png', 'steelseries agreen', 100000),
(18, 'static/img/1004.png', 'MSI VGOR', 74000),
(19, 'static/img/1005.png', 'razer completeed', 99999),
(20, 'static/img/1006.png', 'tesoro excalibur', 87000),
(21, 'static/img/1007.png', 'tesoro excalibur white', 87000);

-- --------------------------------------------------------

--
-- Структура таблицы `klaviaturyconf`
--

CREATE TABLE `klaviaturyconf` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `klaviaturyconf`
--

INSERT INTO `klaviaturyconf` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/86.png', 'hp gaming r2', 80000),
(2, 'static/img/81.png', 'steelserias carbon', 85000),
(3, 'static/img/85.png', 'acer editionx2', 40000),
(4, 'static/img/84.png', 'seelserias r2d2', 100000),
(5, 'static/img/1000.png', 'steelseriae gamingrgb', 75000),
(6, 'static/img/1001.png', 'delux graured', 89000),
(7, 'static/img/1002.png', 'poseidon gaming', 53000),
(8, 'static/img/1003.png', 'steelseries agreen', 100000),
(9, 'static/img/1004.png', 'MSI VGOR', 74000),
(10, 'static/img/1005.png', 'razer completeed', 99999),
(11, 'static/img/1006.png', 'tesoro excalibur', 87000),
(12, 'static/img/1007.png', 'tesoro excalibur white', 87000);

-- --------------------------------------------------------

--
-- Структура таблицы `kovrikydliaconf`
--

CREATE TABLE `kovrikydliaconf` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `kovrikydliaconf`
--

INSERT INTO `kovrikydliaconf` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/2000.png', 'gamecorp racken', 12000),
(2, 'static/img/2001.png', 'gxt 2007', 15000),
(3, 'static/img/2003.png', 'gcomfort mouse', 5000),
(4, 'static/img/2004.png', 'steelseries x1ga', 9000),
(5, 'static/img/2005.png', 'gcomfort mouse edit', 15000),
(6, 'static/img/2006.png', 'control', 18000),
(7, 'static/img/2007.png', 'black element', 6500),
(8, 'static/img/2008.png', 'electronic controll', 26000),
(9, 'static/img/2009.png', 'cougar controlx3', 32000),
(10, 'static/img/2010.png', 'rxt 207', 9500),
(11, 'static/img/2011.png', 'handconf blue', 4000),
(12, 'static/img/2012.png', 'handconf black', 4000),
(13, 'static/img/2013.png', 'black body', 5400);

-- --------------------------------------------------------

--
-- Структура таблицы `materinskiepl`
--

CREATE TABLE `materinskiepl` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `materinskiepl`
--

INSERT INTO `materinskiepl` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/202.png', 'asusrock x100', 60000),
(2, 'static/img/510.png', 'ASUS PROV', 55000),
(3, 'static/img/511.png', 'MSI VLGD', 65000),
(4, 'static/img/512.png', 'gigabyte series pro', 95000),
(5, 'static/img/513.png', 'gigbyte series home', 25000),
(6, 'static/img/514.png', 'laga 1151', 140000),
(7, 'static/img/515.png', 'asus rokfmgame', 98300),
(8, 'static/img/516.png', 'msi z1702', 120000),
(9, 'static/img/517.png', 'msi z1702 gray', 120000),
(10, 'static/img/510.png', 'ASUS PROV lux', 30000),
(11, 'static/img/518.png', 'msi gamepro little', 69000),
(12, 'static/img/519.png', 'msi 11121x110', 72000),
(13, 'static/img/520.png', 'asusrock gameseriae', 110000);

-- --------------------------------------------------------

--
-- Структура таблицы `monikiconf`
--

CREATE TABLE `monikiconf` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `monikiconf`
--

INSERT INTO `monikiconf` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/60.png', 'msi optix g24c hd', 95000),
(2, 'static/img/61.png', 'HP OMEN X35', 200000),
(3, 'static/img/62.png', 'asus 32 full hd', 210000),
(4, 'static/img/63.png', 'asus middle 24', 100000),
(5, 'static/img/64.png', 'OXEN 24X32HD', 300000),
(6, 'static/img/65.png', 'Asus x1001', 200000),
(7, 'static/img/66.png', 'samsung hd1291', 760000),
(8, 'static/img/67.png', 'Msi opensorce32', 165445),
(9, 'static/img/68.png', 'agon gedition1', 320000),
(10, 'static/img/69.png', 'BENQ JCLOSE', 210000),
(11, 'static/img/70.png', 'alicnware x212', 300000),
(12, 'static/img/71.png', 'hp game edition', 210999);

-- --------------------------------------------------------

--
-- Структура таблицы `monitori`
--

CREATE TABLE `monitori` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `monitori`
--

INSERT INTO `monitori` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/60.png', 'msi optix g24c hd', 95000),
(2, 'static/img/61.png', 'HP OMEN X35', 200000),
(3, 'static/img/62.png', 'asus 32 full hd', 210000),
(4, 'static/img/63.png', 'asus middle 24', 100000),
(5, 'static/img/64.png', 'OXEN 24X32HD', 300000),
(6, 'static/img/65.png', 'Asus x1001', 200000),
(7, 'static/img/66.png', 'samsung hd1291', 760000),
(8, 'static/img/67.png', 'Msi opensorce32', 165445),
(9, 'static/img/68.png', 'agon gedition1', 320000),
(10, 'static/img/69.png', 'BENQ JCLOSE', 210000),
(11, 'static/img/70.png', 'alicnware x212', 300000),
(12, 'static/img/71.png', 'hp game edition', 210999),
(13, 'static/img/72.png', 'hp 32x24hd', 120000),
(14, 'static/img/73.png', 'asus expalne2', 54000);

-- --------------------------------------------------------

--
-- Структура таблицы `mouseconf`
--

CREATE TABLE `mouseconf` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `mouseconf`
--

INSERT INTO `mouseconf` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/96.png', 'razer tgba1', 51000),
(2, 'static/img/87.png', 'reazen omen', 29000),
(3, 'static/img/88.png', 'razer greended', 40000),
(4, 'static/img/89.png', 'razer blueded', 40000),
(5, 'static/img/90.png', 'rasen omen21', 30000),
(6, 'static/img/91.png', 'raser openergame', 60000),
(7, 'static/img/92.png', 'razer or20001', 20000),
(8, 'static/img/93.png', 'corsair gaming mise', 50499),
(9, 'static/img/94.png', 'corsair pro rea', 60000),
(10, 'static/img/95.png', 'logitech 2042', 15000);

-- --------------------------------------------------------

--
-- Структура таблицы `naushniki`
--

CREATE TABLE `naushniki` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `naushniki`
--

INSERT INTO `naushniki` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/100.png', 'omen headphones2', 60400),
(2, 'static/img/101.png', 'palmnext x404', 40200),
(3, 'static/img/102.png', 'alcatroz zeta', 80999),
(4, 'static/img/103.png', 'RIG 800', 150000),
(5, 'static/img/104.png', 'logitech x2012', 18200),
(6, 'static/img/105.png', 'logitech blue x2012', 18200),
(7, 'static/img/106.png', 'logitech black x500', 25000),
(8, 'static/img/107.png', 'steelseries arcane', 95219),
(9, 'static/img/108.png', 'steelseries arcane black', 95219),
(10, 'static/img/109.png', 'steelseries gameover', 75000),
(11, 'static/img/160.png', 'groverhend', 76000),
(12, 'static/img/161.png', 'headphones gaming', 70000),
(13, 'static/img/162.png', 'helycopters head', 120000),
(14, 'static/img/163.png', 'tir3', 110000),
(15, 'static/img/164.png', 'steelseries alphagame', 43000),
(16, 'static/img/165.png', 'steelseries berta', 95000),
(17, 'static/img/166.png', 'iconimagine', 21000),
(18, 'static/img/167.png', 'steelseries airplane', 45949),
(19, 'static/img/168.png', 'aser blood', 78000),
(20, 'static/img/169.png', 'bloody ', 58999);

-- --------------------------------------------------------

--
-- Структура таблицы `naushnikiconf`
--

CREATE TABLE `naushnikiconf` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `naushnikiconf`
--

INSERT INTO `naushnikiconf` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/100.png', 'omen headphones2', 60400),
(2, 'static/img/101.png', 'palmnext x404', 40200),
(3, 'static/img/102.png', 'alcatroz zeta', 80999),
(4, 'static/img/103.png', 'RIG 800', 150000),
(5, 'static/img/104.png', 'logitech x2012', 18200),
(6, 'static/img/105.png', 'logitech blue x2012', 18200),
(7, 'static/img/106.png', 'logitech black x500', 25000),
(8, 'static/img/107.png', 'steelseries arcane', 95219),
(9, 'static/img/108.png', 'steelseries arcane black', 95219),
(10, 'static/img/109.png', 'steelseries gameover', 75000),
(11, 'static/img/160.png', 'groverhend', 76000),
(12, 'static/img/161.png', 'headphones gaming', 70000),
(13, 'static/img/162.png', 'helycopters head', 120000),
(14, 'static/img/163.png', 'tir3', 110000),
(15, 'static/img/164.png', 'steelseries alphagame', 43000),
(16, 'static/img/165.png', 'steelseries berta', 95000),
(17, 'static/img/166.png', 'iconimagine', 21000),
(18, 'static/img/167.png', 'steelseries airplane', 45949),
(19, 'static/img/168.png', 'aser blood', 78000),
(20, 'static/img/169.png', 'bloody ', 58999);

-- --------------------------------------------------------

--
-- Структура таблицы `operativka`
--

CREATE TABLE `operativka` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `operativka`
--

INSERT INTO `operativka` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/600.png', 'Hyperx dd2 32 gb', 41000),
(2, 'static/img/601.png', 'g.skill tridentz rgb', 64000),
(3, 'static/img/602.png', 'Hyperx ddr4 8 gb', 24850),
(4, 'static/img/603.png', 'Hyperx ddr4 16 gb', 32000),
(5, 'static/img/604.png', 'crusial x200', 10000),
(6, 'static/img/605.png', 'Hyperx ddr4/dimm 24000', 85000),
(7, 'static/img/606.png', 'tridentx', 21000),
(8, 'static/img/607.png', 'corsair led 2x8gb', 49000),
(9, 'static/img/608.png', 'geil', 96000),
(10, 'static/img/609.png', 'Hyperx ddr8x4 16 gb', 110000),
(11, 'static/img/610.png', 'corsair vengerance', 47000),
(12, 'static/img/604.png', 'Hyperx ddr2 2.5 gb', 10000),
(13, 'static/img/604.png', 'Hyperx 2gb game1', 12000),
(14, 'static/img/604.png', 'Hyperx 2gb game2', 16000),
(15, 'static/img/604.png', 'Hyperx dd2 1gb', 8000),
(16, 'static/img/604.png', 'hyperx ddr1 1.5gb', 11000);

-- --------------------------------------------------------

--
-- Структура таблицы `prossesor`
--

CREATE TABLE `prossesor` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `prossesor`
--

INSERT INTO `prossesor` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/203.png', 'core i7 7500k', 120000),
(2, 'static/img/410.png', 'core i3 2500', 40000),
(3, 'static/img/411.png', 'core 2 duo ', 12000),
(4, 'static/img/412.png', 'core i7kd 8000', 120000),
(5, 'static/img/413.png', 'cpu xeon game', 200000),
(6, 'static/img/413.png', 'cpu xeon gamex2', 230000),
(7, 'static/img/412.png', 'core i7 6300', 95000),
(8, 'static/img/414.png', 'xeon xeon E5-2600', 43000),
(9, 'static/img/414.png', 'xeon xeon E5-2500', 35000),
(10, 'static/img/413.png', 'core duo reborn', 29000),
(11, 'static/img/412.png', 'core i7 ultimate game', 75000),
(12, 'static/img/415.png', 'core xeon i7 71k2', 85000),
(13, 'static/img/416.png', 'razen ironx', 110000),
(14, 'static/img/417.png', 'razen gameedit19921', 50000),
(15, 'static/img/417.png', 'razen gameedit', 70000),
(16, 'static/img/417.png', 'razen homeedit', 43000);

-- --------------------------------------------------------

--
-- Структура таблицы `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('39YC9rsKdTJ6Ewoie0DQy9hNoMIc_upO', 1557128612, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('58ru5VK56eflfdkaYhnQYaj7wvmL3bSN', 1557214821, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('80wCWudfGqByqjYkw3P_pE2Zt3Gt0xUX', 1557177525, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('HI98VPRt-A073XAiEKOTF020TXTDTAId', 1557169833, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('M1MakjK-5nSFZ63MwXjtbYJ6lu_Moau2', 1557177512, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('SY0wf92_8YShWFSqThSCHbbQi3T8uDGz', 1557176560, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('V6cL1RnF76QLObWUOqbHfauZt8lNihgo', 1557169884, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('WEkOMkgGEBRMFqguhBHNhdBjuiYjODE_', 1557177593, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('Xkb7EeeQpFTX2lT1X_HQKTEw9Oxoqdkd', 1557175371, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('hxhHi4SRktU8uRc-qKkXne9Qt5Bs_Y8x', 1557141981, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('oeU_JoOA0TxrgtLA087lbf3w__d6mMVu', 1557170248, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('rcyzz-Wa_clfT72-tJk0PNdki5DfDa_j', 1557173835, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('tt25VADt7mufQNDfEb1gklgwGqZo_f1H', 1557177530, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}');

-- --------------------------------------------------------

--
-- Структура таблицы `userdata`
--

CREATE TABLE `userdata` (
  `id` int(11) NOT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `mail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `userdata`
--

INSERT INTO `userdata` (`id`, `login`, `password`, `mail`) VALUES
(1, 'erewrew', '123321', 'erwrwerewewrege@mail.ru'),
(2, 'erewrew', '123321', 'erwrwerewewrege@mail.ru'),
(3, 'vartan', '123321', 'vartan_kikabitze1997@mail.ru'),
(4, 'alisher', '123321', 'aliher33312#@mail.ru'),
(5, 'sula', '123321', 'sula@mial.ru');

-- --------------------------------------------------------

--
-- Структура таблицы `videocard`
--

CREATE TABLE `videocard` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `videocard`
--

INSERT INTO `videocard` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/200.png', 'GTX 759 TITAN', 145000),
(2, 'static/img/204.png', 'GeForce GTX 1030', 60000),
(3, 'static/img/205.png', 'GeForce GTX 1080', 150000),
(4, 'static/img/206.png', 'GeForce GTX 950', 40000),
(5, 'static/img/207.png', 'GeForce 710GT', 24000),
(6, 'static/img/208.png', 'asus rock xr201', 60000),
(7, 'static/img/209.png', 'asus rrrr121', 140000),
(8, 'static/img/210.png', 'Gigabyte X212', 40000),
(9, 'static/img/211.png', 'Gigabyte X213', 98000),
(10, 'static/img/212.png', 'MSI ORANIC X121', 98230),
(11, 'static/img/213.png', 'MSI CLEANINX ROOF', 12000),
(12, 'static/img/214.png', 'msi opensourse2', 87312),
(13, 'static/img/214.png', 'MSI MS1', 123000),
(14, 'static/img/215.png', 'MSI MICRO12', 150000),
(15, 'static/img/217.png', 'GeForce GTX 1080TI', 213000),
(16, 'static/img/218.png', 'GeForce GTX 1030TI', 85000);

-- --------------------------------------------------------

--
-- Структура таблицы `zvookoviekarty`
--

CREATE TABLE `zvookoviekarty` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` varchar(25) NOT NULL,
  `cost` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `zvookoviekarty`
--

INSERT INTO `zvookoviekarty` (`id`, `img`, `name`, `cost`) VALUES
(1, 'static/img/700.png', 'ngones audioacuss x32', 32000),
(2, 'static/img/701.png', 'ngones audioacuss x64', 65000),
(3, 'static/img/702.png', 'rookaudio soundedd', 23000),
(4, 'static/img/703.png', 'soundcard delux', 67000),
(5, 'static/img/704.png', 'audiocard edition', 43000),
(6, 'static/img/705.png', 'logitechaudio ellon', 51000),
(7, 'static/img/703.png', 'xenonaudio el', 75000),
(8, 'static/img/701.png', 'soundtruck audioedition', 24000),
(9, 'static/img/703.png', 'autoend pcx32', 65000),
(10, 'static/img/700.png', 'autoend pcx64', 98000);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `blockpit`
--
ALTER TABLE `blockpit`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `computerforbuy`
--
ALTER TABLE `computerforbuy`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `computers`
--
ALTER TABLE `computers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `confcomps`
--
ALTER TABLE `confcomps`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `datauser`
--
ALTER TABLE `datauser`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `harddisk`
--
ALTER TABLE `harddisk`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `klaviaturimishki`
--
ALTER TABLE `klaviaturimishki`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `klaviaturyconf`
--
ALTER TABLE `klaviaturyconf`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `kovrikydliaconf`
--
ALTER TABLE `kovrikydliaconf`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `materinskiepl`
--
ALTER TABLE `materinskiepl`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `monikiconf`
--
ALTER TABLE `monikiconf`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `monitori`
--
ALTER TABLE `monitori`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `mouseconf`
--
ALTER TABLE `mouseconf`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `naushniki`
--
ALTER TABLE `naushniki`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `naushnikiconf`
--
ALTER TABLE `naushnikiconf`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `operativka`
--
ALTER TABLE `operativka`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `prossesor`
--
ALTER TABLE `prossesor`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Индексы таблицы `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `videocard`
--
ALTER TABLE `videocard`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `zvookoviekarty`
--
ALTER TABLE `zvookoviekarty`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `blockpit`
--
ALTER TABLE `blockpit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `computerforbuy`
--
ALTER TABLE `computerforbuy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT для таблицы `computers`
--
ALTER TABLE `computers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `confcomps`
--
ALTER TABLE `confcomps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `datauser`
--
ALTER TABLE `datauser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `harddisk`
--
ALTER TABLE `harddisk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `klaviaturimishki`
--
ALTER TABLE `klaviaturimishki`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT для таблицы `klaviaturyconf`
--
ALTER TABLE `klaviaturyconf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `kovrikydliaconf`
--
ALTER TABLE `kovrikydliaconf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `materinskiepl`
--
ALTER TABLE `materinskiepl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `monikiconf`
--
ALTER TABLE `monikiconf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `monitori`
--
ALTER TABLE `monitori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `mouseconf`
--
ALTER TABLE `mouseconf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `naushniki`
--
ALTER TABLE `naushniki`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `naushnikiconf`
--
ALTER TABLE `naushnikiconf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `operativka`
--
ALTER TABLE `operativka`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `prossesor`
--
ALTER TABLE `prossesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `videocard`
--
ALTER TABLE `videocard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `zvookoviekarty`
--
ALTER TABLE `zvookoviekarty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
