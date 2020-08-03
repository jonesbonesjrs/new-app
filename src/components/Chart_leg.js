import React from "react";


import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryAxis,
  VictoryBrushContainer,
  VictoryScatter,
  VictoryTooltip,
  VictoryLegend,
  Border,
  VictoryLabel

} from "victory";

// ZoomContainer is the top graph
// BrushContainer is the bottom graph

const sun_data = [
  { x: new Date(1610, 1, 1), y: 36 },
  { x: new Date(1611, 1, 1), y: 34.1 },
  { x: new Date(1612, 1, 1), y: 92.7 },
  { x: new Date(1613, 1, 1), y: 109.6 },
  { x: new Date(1614, 1, 1), y: 121 },
  { x: new Date(1615, 1, 1), y: 80.3 },
  { x: new Date(1616, 1, 1), y: 20.1 },
  { x: new Date(1617, 1, 1), y: 2.3 },
  { x: new Date(1618, 1, 1), y: 1.3 },
  { x: new Date(1619, 1, 1), y: 15 },
  { x: new Date(1620, 1, 1), y: 15 },
  { x: new Date(1621, 1, 1), y: 15 },
  { x: new Date(1622, 1, 1), y: 15 },
  { x: new Date(1623, 1, 1), y: 15 },
  { x: new Date(1624, 1, 1), y: 9.6 },
  { x: new Date(1625, 1, 1), y: 42.4 },
  { x: new Date(1626, 1, 1), y: 26.6 },
  { x: new Date(1627, 1, 1), y: 16.5 },
  { x: new Date(1628, 1, 1), y: 23.2 },
  { x: new Date(1629, 1, 1), y: 18.7 },
  { x: new Date(1630, 1, 1), y: 1 },
  { x: new Date(1631, 1, 1), y: 4.4 },
  { x: new Date(1632, 1, 1), y: 1 },
  { x: new Date(1633, 1, 1), y: 14.3 },
  { x: new Date(1634, 1, 1), y: 3 },
  { x: new Date(1635, 1, 1), y: 4.3 },
  { x: new Date(1636, 1, 1), y: 1 },
  { x: new Date(1637, 1, 1), y: 1 },
  { x: new Date(1638, 1, 1), y: 68.6 },
  { x: new Date(1639, 1, 1), y: 76.8 },
  { x: new Date(1640, 1, 1), y: 15 },
  { x: new Date(1641, 1, 1), y: 1 },
  { x: new Date(1642, 1, 1), y: 47.4 },
  { x: new Date(1643, 1, 1), y: 17.6 },
  { x: new Date(1644, 1, 1), y: 11.6 },
  { x: new Date(1645, 1, 1), y: 1 },
  { x: new Date(1646, 1, 1), y: 1 },
  { x: new Date(1647, 1, 1), y: 1 },
  { x: new Date(1648, 1, 1), y: 1 },
  { x: new Date(1649, 1, 1), y: 1 },
  { x: new Date(1650, 1, 1), y: 1 },
  { x: new Date(1651, 1, 1), y: 1 },
  { x: new Date(1652, 1, 1), y: 4 },
  { x: new Date(1653, 1, 1), y: 0.9 },
  { x: new Date(1654, 1, 1), y: 0.7 },
  { x: new Date(1655, 1, 1), y: 0.5 },
  { x: new Date(1656, 1, 1), y: 0.6 },
  { x: new Date(1657, 1, 1), y: 0.2 },
  { x: new Date(1658, 1, 1), y: 1 },
  { x: new Date(1659, 1, 1), y: 1 },
  { x: new Date(1660, 1, 1), y: 2 },
  { x: new Date(1661, 1, 1), y: 0.8 },
  { x: new Date(1662, 1, 1), y: 1 },
  { x: new Date(1663, 1, 1), y: 1 },
  { x: new Date(1664, 1, 1), y: 1 },
  { x: new Date(1665, 1, 1), y: 1 },
  { x: new Date(1666, 1, 1), y: 1 },
  { x: new Date(1667, 1, 1), y: 1 },
  { x: new Date(1668, 1, 1), y: 1 },
  { x: new Date(1669, 1, 1), y: 1 },
  { x: new Date(1670, 1, 1), y: 1 },
  { x: new Date(1671, 1, 1), y: 0.9 },
  { x: new Date(1672, 1, 1), y: 0.4 },
  { x: new Date(1673, 1, 1), y: 1 },
  { x: new Date(1674, 1, 1), y: 0.2 },
  { x: new Date(1675, 1, 1), y: 1 },
  { x: new Date(1676, 1, 1), y: 1.8 },
  { x: new Date(1677, 1, 1), y: 0.3 },
  { x: new Date(1678, 1, 1), y: 0.2 },
  { x: new Date(1679, 1, 1), y: 1 },
  { x: new Date(1680, 1, 1), y: 0.8 },
  { x: new Date(1681, 1, 1), y: 1 },
  { x: new Date(1682, 1, 1), y: 1 },
  { x: new Date(1683, 1, 1), y: 1 },
  { x: new Date(1684, 1, 1), y: 1.4 },
  { x: new Date(1685, 1, 1), y: 1 },
  { x: new Date(1686, 1, 1), y: 0.6 },
  { x: new Date(1687, 1, 1), y: 0.1 },
  { x: new Date(1688, 1, 1), y: 0.5 },
  { x: new Date(1689, 1, 1), y: 0.2 },
  { x: new Date(1690, 1, 1), y: 1 },
  { x: new Date(1691, 1, 1), y: 1 },
  { x: new Date(1692, 1, 1), y: 1 },
  { x: new Date(1693, 1, 1), y: 1 },
  { x: new Date(1694, 1, 1), y: 1 },
  { x: new Date(1695, 1, 1), y: 0.1 },
  { x: new Date(1696, 1, 1), y: 1 },
  { x: new Date(1697, 1, 1), y: 1 },
  { x: new Date(1698, 1, 1), y: 1 },
  { x: new Date(1699, 1, 1), y: 1 },
  { x: new Date(1700, 1, 1), y: 8.3 },
  { x: new Date(1701, 1, 1), y: 18.3 },
  { x: new Date(1702, 1, 1), y: 26.7 },
  { x: new Date(1703, 1, 1), y: 38.3 },
  { x: new Date(1704, 1, 1), y: 60 },
  { x: new Date(1705, 1, 1), y: 96.7 },
  { x: new Date(1706, 1, 1), y: 48.3 },
  { x: new Date(1707, 1, 1), y: 33.3 },
  { x: new Date(1708, 1, 1), y: 16.7 },
  { x: new Date(1709, 1, 1), y: 13.3 },
  { x: new Date(1710, 1, 1), y: 5 },
  { x: new Date(1711, 1, 1), y: 1 },
  { x: new Date(1712, 1, 1), y: 1 },
  { x: new Date(1713, 1, 1), y: 3.3 },
  { x: new Date(1714, 1, 1), y: 18.3 },
  { x: new Date(1715, 1, 1), y: 45 },
  { x: new Date(1716, 1, 1), y: 78.3 },
  { x: new Date(1717, 1, 1), y: 105 },
  { x: new Date(1718, 1, 1), y: 100 },
  { x: new Date(1719, 1, 1), y: 65 },
  { x: new Date(1720, 1, 1), y: 46.7 },
  { x: new Date(1721, 1, 1), y: 43.3 },
  { x: new Date(1722, 1, 1), y: 36.7 },
  { x: new Date(1723, 1, 1), y: 18.3 },
  { x: new Date(1724, 1, 1), y: 35 },
  { x: new Date(1725, 1, 1), y: 66.7 },
  { x: new Date(1726, 1, 1), y: 130 },
  { x: new Date(1727, 1, 1), y: 203.3 },
  { x: new Date(1728, 1, 1), y: 171.7 },
  { x: new Date(1729, 1, 1), y: 121.7 },
  { x: new Date(1730, 1, 1), y: 78.3 },
  { x: new Date(1731, 1, 1), y: 58.3 },
  { x: new Date(1732, 1, 1), y: 18.3 },
  { x: new Date(1733, 1, 1), y: 8.3 },
  { x: new Date(1734, 1, 1), y: 26.7 },
  { x: new Date(1735, 1, 1), y: 56.7 },
  { x: new Date(1736, 1, 1), y: 116.7 },
  { x: new Date(1737, 1, 1), y: 135 },
  { x: new Date(1738, 1, 1), y: 185 },
  { x: new Date(1739, 1, 1), y: 168.3 },
  { x: new Date(1740, 1, 1), y: 121.7 },
  { x: new Date(1741, 1, 1), y: 66.7 },
  { x: new Date(1742, 1, 1), y: 33.3 },
  { x: new Date(1743, 1, 1), y: 26.7 },
  { x: new Date(1744, 1, 1), y: 8.3 },
  { x: new Date(1745, 1, 1), y: 18.3 },
  { x: new Date(1746, 1, 1), y: 36.7 },
  { x: new Date(1747, 1, 1), y: 66.7 },
  { x: new Date(1748, 1, 1), y: 100 },
  { x: new Date(1749, 1, 1), y: 134.8 },
  { x: new Date(1750, 1, 1), y: 139 },
  { x: new Date(1751, 1, 1), y: 79.5 },
  { x: new Date(1752, 1, 1), y: 79.7 },
  { x: new Date(1753, 1, 1), y: 51.2 },
  { x: new Date(1754, 1, 1), y: 20.3 },
  { x: new Date(1755, 1, 1), y: 16 },
  { x: new Date(1756, 1, 1), y: 17 },
  { x: new Date(1757, 1, 1), y: 54 },
  { x: new Date(1758, 1, 1), y: 79.3 },
  { x: new Date(1759, 1, 1), y: 90 },
  { x: new Date(1760, 1, 1), y: 104.8 },
  { x: new Date(1761, 1, 1), y: 143.2 },
  { x: new Date(1762, 1, 1), y: 102 },
  { x: new Date(1763, 1, 1), y: 75.2 },
  { x: new Date(1764, 1, 1), y: 60.7 },
  { x: new Date(1765, 1, 1), y: 34.8 },
  { x: new Date(1766, 1, 1), y: 19 },
  { x: new Date(1767, 1, 1), y: 63 },
  { x: new Date(1768, 1, 1), y: 116.3 },
  { x: new Date(1769, 1, 1), y: 176.8 },
  { x: new Date(1770, 1, 1), y: 168 },
  { x: new Date(1771, 1, 1), y: 136 },
  { x: new Date(1772, 1, 1), y: 110.8 },
  { x: new Date(1773, 1, 1), y: 58 },
  { x: new Date(1774, 1, 1), y: 51 },
  { x: new Date(1775, 1, 1), y: 11.7 },
  { x: new Date(1776, 1, 1), y: 33 },
  { x: new Date(1777, 1, 1), y: 154.2 },
  { x: new Date(1778, 1, 1), y: 257.3 },
  { x: new Date(1779, 1, 1), y: 209.8 },
  { x: new Date(1780, 1, 1), y: 141.3 },
  { x: new Date(1781, 1, 1), y: 113.5 },
  { x: new Date(1782, 1, 1), y: 64.2 },
  { x: new Date(1783, 1, 1), y: 38 },
  { x: new Date(1784, 1, 1), y: 17 },
  { x: new Date(1785, 1, 1), y: 40.2 },
  { x: new Date(1786, 1, 1), y: 138.2 },
  { x: new Date(1787, 1, 1), y: 220 },
  { x: new Date(1788, 1, 1), y: 218.2 },
  { x: new Date(1789, 1, 1), y: 196.8 },
  { x: new Date(1790, 1, 1), y: 149.8 },
  { x: new Date(1791, 1, 1), y: 111 },
  { x: new Date(1792, 1, 1), y: 100 },
  { x: new Date(1793, 1, 1), y: 78.2 },
  { x: new Date(1794, 1, 1), y: 68.3 },
  { x: new Date(1795, 1, 1), y: 35.5 },
  { x: new Date(1796, 1, 1), y: 26.7 },
  { x: new Date(1797, 1, 1), y: 10.7 },
  { x: new Date(1798, 1, 1), y: 6.8 },
  { x: new Date(1799, 1, 1), y: 11.3 },
  { x: new Date(1800, 1, 1), y: 24.2 },
  { x: new Date(1801, 1, 1), y: 56.7 },
  { x: new Date(1802, 1, 1), y: 75 },
  { x: new Date(1803, 1, 1), y: 71.8 },
  { x: new Date(1804, 1, 1), y: 79.2 },
  { x: new Date(1805, 1, 1), y: 70.3 },
  { x: new Date(1806, 1, 1), y: 46.8 },
  { x: new Date(1807, 1, 1), y: 16.8 },
  { x: new Date(1808, 1, 1), y: 13.5 },
  { x: new Date(1809, 1, 1), y: 4.2 },
  { x: new Date(1810, 1, 1), y: 1 },
  { x: new Date(1811, 1, 1), y: 2.3 },
  { x: new Date(1812, 1, 1), y: 8.3 },
  { x: new Date(1813, 1, 1), y: 20.3 },
  { x: new Date(1814, 1, 1), y: 23.2 },
  { x: new Date(1815, 1, 1), y: 59 },
  { x: new Date(1816, 1, 1), y: 76.3 },
  { x: new Date(1817, 1, 1), y: 68.3 },
  { x: new Date(1818, 1, 1), y: 52.9 },
  { x: new Date(1819, 1, 1), y: 38.5 },
  { x: new Date(1820, 1, 1), y: 24.2 },
  { x: new Date(1821, 1, 1), y: 9.2 },
  { x: new Date(1822, 1, 1), y: 6.3 },
  { x: new Date(1823, 1, 1), y: 2.2 },
  { x: new Date(1824, 1, 1), y: 11.4 },
  { x: new Date(1825, 1, 1), y: 28.2 },
  { x: new Date(1826, 1, 1), y: 59.9 },
  { x: new Date(1827, 1, 1), y: 83 },
  { x: new Date(1828, 1, 1), y: 108.5 },
  { x: new Date(1829, 1, 1), y: 115.2 },
  { x: new Date(1830, 1, 1), y: 117.4 },
  { x: new Date(1831, 1, 1), y: 80.8 },
  { x: new Date(1832, 1, 1), y: 44.3 },
  { x: new Date(1833, 1, 1), y: 13.4 },
  { x: new Date(1834, 1, 1), y: 19.5 },
  { x: new Date(1835, 1, 1), y: 85.8 },
  { x: new Date(1836, 1, 1), y: 192.7 },
  { x: new Date(1837, 1, 1), y: 227.3 },
  { x: new Date(1838, 1, 1), y: 168.7 },
  { x: new Date(1839, 1, 1), y: 143 },
  { x: new Date(1840, 1, 1), y: 105.5 },
  { x: new Date(1841, 1, 1), y: 63.3 },
  { x: new Date(1842, 1, 1), y: 40.3 },
  { x: new Date(1843, 1, 1), y: 18.1 },
  { x: new Date(1844, 1, 1), y: 25.1 },
  { x: new Date(1845, 1, 1), y: 65.8 },
  { x: new Date(1846, 1, 1), y: 102.7 },
  { x: new Date(1847, 1, 1), y: 166.3 },
  { x: new Date(1848, 1, 1), y: 208.3 },
  { x: new Date(1849, 1, 1), y: 182.5 },
  { x: new Date(1850, 1, 1), y: 126.3 },
  { x: new Date(1851, 1, 1), y: 122 },
  { x: new Date(1852, 1, 1), y: 102.7 },
  { x: new Date(1853, 1, 1), y: 74.1 },
  { x: new Date(1854, 1, 1), y: 39 },
  { x: new Date(1855, 1, 1), y: 12.7 },
  { x: new Date(1856, 1, 1), y: 8.2 },
  { x: new Date(1857, 1, 1), y: 43.4 },
  { x: new Date(1858, 1, 1), y: 104.4 },
  { x: new Date(1859, 1, 1), y: 178.3 },
  { x: new Date(1860, 1, 1), y: 182.2 },
  { x: new Date(1861, 1, 1), y: 146.6 },
  { x: new Date(1862, 1, 1), y: 112.1 },
  { x: new Date(1863, 1, 1), y: 83.5 },
  { x: new Date(1864, 1, 1), y: 89.2 },
  { x: new Date(1865, 1, 1), y: 57.8 },
  { x: new Date(1866, 1, 1), y: 30.7 },
  { x: new Date(1867, 1, 1), y: 13.9 },
  { x: new Date(1868, 1, 1), y: 62.8 },
  { x: new Date(1869, 1, 1), y: 123.6 },
  { x: new Date(1870, 1, 1), y: 232 },
  { x: new Date(1871, 1, 1), y: 185.3 },
  { x: new Date(1872, 1, 1), y: 169.2 },
  { x: new Date(1873, 1, 1), y: 110.1 },
  { x: new Date(1874, 1, 1), y: 74.5 },
  { x: new Date(1875, 1, 1), y: 28.3 },
  { x: new Date(1876, 1, 1), y: 18.9 },
  { x: new Date(1877, 1, 1), y: 20.7 },
  { x: new Date(1878, 1, 1), y: 5.7 },
  { x: new Date(1879, 1, 1), y: 10 },
  { x: new Date(1880, 1, 1), y: 53.7 },
  { x: new Date(1881, 1, 1), y: 90.5 },
  { x: new Date(1882, 1, 1), y: 99 },
  { x: new Date(1883, 1, 1), y: 106.1 },
  { x: new Date(1884, 1, 1), y: 105.8 },
  { x: new Date(1885, 1, 1), y: 86.3 },
  { x: new Date(1886, 1, 1), y: 42.4 },
  { x: new Date(1887, 1, 1), y: 21.8 },
  { x: new Date(1888, 1, 1), y: 11.2 },
  { x: new Date(1889, 1, 1), y: 10.4 },
  { x: new Date(1890, 1, 1), y: 11.8 },
  { x: new Date(1891, 1, 1), y: 59.5 },
  { x: new Date(1892, 1, 1), y: 121.7 },
  { x: new Date(1893, 1, 1), y: 142 },
  { x: new Date(1894, 1, 1), y: 130 },
  { x: new Date(1895, 1, 1), y: 106.6 },
  { x: new Date(1896, 1, 1), y: 69.4 },
  { x: new Date(1897, 1, 1), y: 43.8 },
  { x: new Date(1898, 1, 1), y: 44.4 },
  { x: new Date(1899, 1, 1), y: 20.2 },
  { x: new Date(1900, 1, 1), y: 15.7 },
  { x: new Date(1901, 1, 1), y: 4.6 },
  { x: new Date(1902, 1, 1), y: 8.5 },
  { x: new Date(1903, 1, 1), y: 40.8 },
  { x: new Date(1904, 1, 1), y: 70.1 },
  { x: new Date(1905, 1, 1), y: 105.5 },
  { x: new Date(1906, 1, 1), y: 90.1 },
  { x: new Date(1907, 1, 1), y: 102.8 },
  { x: new Date(1908, 1, 1), y: 80.9 },
  { x: new Date(1909, 1, 1), y: 73.2 },
  { x: new Date(1910, 1, 1), y: 30.9 },
  { x: new Date(1911, 1, 1), y: 9.5 },
  { x: new Date(1912, 1, 1), y: 6 },
  { x: new Date(1913, 1, 1), y: 2.4 },
  { x: new Date(1914, 1, 1), y: 16.1 },
  { x: new Date(1915, 1, 1), y: 79 },
  { x: new Date(1916, 1, 1), y: 95 },
  { x: new Date(1917, 1, 1), y: 173.6 },
  { x: new Date(1918, 1, 1), y: 134.6 },
  { x: new Date(1919, 1, 1), y: 105.7 },
  { x: new Date(1920, 1, 1), y: 62.7 },
  { x: new Date(1921, 1, 1), y: 43.5 },
  { x: new Date(1922, 1, 1), y: 23.7 },
  { x: new Date(1923, 1, 1), y: 9.7 },
  { x: new Date(1924, 1, 1), y: 27.9 },
  { x: new Date(1925, 1, 1), y: 74 },
  { x: new Date(1926, 1, 1), y: 106.5 },
  { x: new Date(1927, 1, 1), y: 114.7 },
  { x: new Date(1928, 1, 1), y: 129.7 },
  { x: new Date(1929, 1, 1), y: 108.2 },
  { x: new Date(1930, 1, 1), y: 59.4 },
  { x: new Date(1931, 1, 1), y: 35.1 },
  { x: new Date(1932, 1, 1), y: 18.6 },
  { x: new Date(1933, 1, 1), y: 9.2 },
  { x: new Date(1934, 1, 1), y: 14.6 },
  { x: new Date(1935, 1, 1), y: 60.2 },
  { x: new Date(1936, 1, 1), y: 132.8 },
  { x: new Date(1937, 1, 1), y: 190.6 },
  { x: new Date(1938, 1, 1), y: 182.6 },
  { x: new Date(1939, 1, 1), y: 148 },
  { x: new Date(1940, 1, 1), y: 113 },
  { x: new Date(1941, 1, 1), y: 79.2 },
  { x: new Date(1942, 1, 1), y: 50.8 },
  { x: new Date(1943, 1, 1), y: 27.1 },
  { x: new Date(1944, 1, 1), y: 16.1 },
  { x: new Date(1945, 1, 1), y: 55.3 },
  { x: new Date(1946, 1, 1), y: 154.3 },
  { x: new Date(1947, 1, 1), y: 214.7 },
  { x: new Date(1948, 1, 1), y: 193 },
  { x: new Date(1949, 1, 1), y: 190.7 },
  { x: new Date(1950, 1, 1), y: 118.9 },
  { x: new Date(1951, 1, 1), y: 98.3 },
  { x: new Date(1952, 1, 1), y: 45 },
  { x: new Date(1953, 1, 1), y: 20.1 },
  { x: new Date(1954, 1, 1), y: 6.6 },
  { x: new Date(1955, 1, 1), y: 54.2 },
  { x: new Date(1956, 1, 1), y: 200.7 },
  { x: new Date(1957, 1, 1), y: 269.3 },
  { x: new Date(1958, 1, 1), y: 261.7 },
  { x: new Date(1959, 1, 1), y: 225.1 },
  { x: new Date(1960, 1, 1), y: 159 },
  { x: new Date(1961, 1, 1), y: 76.4 },
  { x: new Date(1962, 1, 1), y: 53.4 },
  { x: new Date(1963, 1, 1), y: 39.9 },
  { x: new Date(1964, 1, 1), y: 15 },
  { x: new Date(1965, 1, 1), y: 22 },
  { x: new Date(1966, 1, 1), y: 66.8 },
  { x: new Date(1967, 1, 1), y: 132.9 },
  { x: new Date(1968, 1, 1), y: 150 },
  { x: new Date(1969, 1, 1), y: 149.4 },
  { x: new Date(1970, 1, 1), y: 148 },
  { x: new Date(1971, 1, 1), y: 94.4 },
  { x: new Date(1972, 1, 1), y: 97.6 },
  { x: new Date(1973, 1, 1), y: 54.1 },
  { x: new Date(1974, 1, 1), y: 49.2 },
  { x: new Date(1975, 1, 1), y: 22.5 },
  { x: new Date(1976, 1, 1), y: 18.4 },
  { x: new Date(1977, 1, 1), y: 39.3 },
  { x: new Date(1978, 1, 1), y: 131 },
  { x: new Date(1979, 1, 1), y: 220.1 },
  { x: new Date(1980, 1, 1), y: 218.9 },
  { x: new Date(1981, 1, 1), y: 198.9 },
  { x: new Date(1982, 1, 1), y: 162.4 },
  { x: new Date(1983, 1, 1), y: 91 },
  { x: new Date(1984, 1, 1), y: 60.5 },
  { x: new Date(1985, 1, 1), y: 20.6 },
  { x: new Date(1986, 1, 1), y: 14.8 },
  { x: new Date(1987, 1, 1), y: 33.9 },
  { x: new Date(1988, 1, 1), y: 123 },
  { x: new Date(1989, 1, 1), y: 211.1 },
  { x: new Date(1990, 1, 1), y: 191.8 },
  { x: new Date(1991, 1, 1), y: 203.3 },
  { x: new Date(1992, 1, 1), y: 133 },
  { x: new Date(1993, 1, 1), y: 76.1 },
  { x: new Date(1994, 1, 1), y: 44.9 },
  { x: new Date(1995, 1, 1), y: 25.1 },
  { x: new Date(1996, 1, 1), y: 11.6 },
  { x: new Date(1997, 1, 1), y: 28.9 },
  { x: new Date(1998, 1, 1), y: 88.3 },
  { x: new Date(1999, 1, 1), y: 136.3 },
  { x: new Date(2000, 1, 1), y: 173.9 },
  { x: new Date(2001, 1, 1), y: 170.4 },
  { x: new Date(2002, 1, 1), y: 163.6 },
  { x: new Date(2003, 1, 1), y: 99.3 },
  { x: new Date(2004, 1, 1), y: 65.3 },
  { x: new Date(2005, 1, 1), y: 45.8 },
  { x: new Date(2006, 1, 1), y: 24.7 },
  { x: new Date(2007, 1, 1), y: 12.6 },
  { x: new Date(2008, 1, 1), y: 4.2 },
  { x: new Date(2009, 1, 1), y: 4.8 },
  { x: new Date(2010, 1, 1), y: 24.9 },
  { x: new Date(2011, 1, 1), y: 80.8 },
  { x: new Date(2012, 1, 1), y: 84.5 },
  { x: new Date(2013, 1, 1), y: 94 },
  { x: new Date(2014, 1, 1), y: 113.3 },
  { x: new Date(2015, 1, 1), y: 69.8 },
  { x: new Date(2016, 1, 1), y: 39.8 },
  { x: new Date(2017, 1, 1), y: 21.7 },
  { x: new Date(2018, 1, 1), y: 7 },
  { x: new Date(2019, 1, 1), y: 3.6 }
  

];

const epi_labels = [
  { x: new Date(1616, 1, 1), y: 20.1, s: 5, label: "New England Infections Epidemic\nDeath Toll:\n60% of Population"},
  { x: new Date(1629, 1, 1), y: 18.7, s: 4, label: "Italian Plague\nDeath Toll:\n280,000"},
  { x: new Date(1632, 1, 1), y: 0, s: 2, label: "Augsburg Plague Epidemic\nDeath Toll:\n13,712"},
  { x: new Date(1633, 1, 1), y: 14.3, s: 1, label: "Massachusetts Smallpox Epidemic\nDeath Toll:\n1,000"},
  { x: new Date(1634, 1, 1), y: 3, s: 2, label: "Wyandot People Epidemic Of Infections\nDeath Toll:\n20,000"},
  { x: new Date(1636, 1, 1), y: 0, s: 2, label: "London Plague Epidemic\nDeath Toll:\n10,400"},
  { x: new Date(1641, 1, 1), y: 0, s: 5, label: "China Plague Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1647, 1, 1), y: 0, s: 4, label: "Great Plague Of Seville\nDeath Toll:\n500,000"},
  { x: new Date(1648, 1, 1), y: 0, s: 4, label: "Central America Yellow Fever Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1656, 1, 1), y: 0.6, s: 5, label: "Naples Plague\nDeath Toll:\n1,250,000"},
  { x: new Date(1663, 1, 1), y: 0, s: 3, label: "Amsterdam Plague Epidemic\nDeath Toll:\n24,148"},
  { x: new Date(1665, 1, 1), y: 0, s: 3, label: "Great Plague Of London\nDeath Toll:\n100,000"},
  { x: new Date(1668, 1, 1), y: 0, s: 2, label: "France Plague\nDeath Toll:\n40,000"},
  { x: new Date(1675, 1, 1), y: 0, s: 2, label: "Malta Plague Epidemic\nDeath Toll:\n11,300"},
  { x: new Date(1676, 1, 1), y: 1.8, s: 4, label: "Spain Plague\nDeath Toll:\nUnknown"},
  { x: new Date(1677, 1, 1), y: 0.3, s: 1, label: "Boston Smallpox Epidemic\nDeath Toll:\n875"},
  { x: new Date(1679, 1, 1), y: 0, s: 4, label: "Great Plague Of Vienna\nDeath Toll:\n76,000"},
  { x: new Date(1681, 1, 1), y: 0, s: 4, label: "Prague Plague Epidemic\nDeath Toll:\n83,000"},
  { x: new Date(1687, 1, 1), y: 0.1, s: 4, label: "South Africa Influenza Outbreak\nDeath Toll:\nUnknown"},
  { x: new Date(1693, 1, 1), y: 0, s: 2, label: "Boston Yellow Fever Epidemic\nDeath Toll:\n3,100"},
  { x: new Date(1699, 1, 1), y: 0, s: 2, label: "Charleston And Philadelphia Yellow Fever Epidemic\nDeath Toll:\n520"},
  { x: new Date(1702, 1, 1), y: 26.7, s: 2, label: "St. Lawrence Valley Smallpox Epidemic\nDeath Toll:\n1,300\nNew York City Yellow Fever Epidemic\nDeath Toll:\n500"},
  { x: new Date(1707, 1, 1), y: 33.3, s: 4, label: "Iceland Smallpox Epidemic\nDeath Toll:\n18,000 (36% of Population)"},
  { x: new Date(1710, 1, 1), y: 5, s: 4, label: "Great Northern War Plague Outbreak\nDeath Toll:\n164,000"},
  { x: new Date(1713, 1, 1), y: 3.3, s: 3, label: "North America Measles Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1720, 1, 1), y: 46.7, s: 3, label: "Great Plague Of Marseille\nDeath Toll:\n100,000"},
  { x: new Date(1721, 1, 1), y: 43.3, s: 2, label: "Boston Smallpox Outbreak\nDeath Toll:\n844"},
  { x: new Date(1730, 1, 1), y: 78.3, s: 2, label: "Cádiz Yellow Fever Epidemic\nDeath Toll:\n2,200"},
  { x: new Date(1732, 1, 1), y: 18.3, s: 3, label: "Thirteen Colonies Influenza Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1733, 1, 1), y: 8.3, s: 3, label: "New France Smallpox Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1735, 1, 1), y: 56.7, s: 3, label: "Diphtheria Epidemic\nDeath Toll:\n20,000"},
  { x: new Date(1738, 1, 1), y: 185, s: 3, label: "Great Plague Of 1738\nDeath Toll:\n50,000\nNorth Carolina Smallpox Epidemic\nDeath Toll:\n9,000"},
  { x: new Date(1739, 1, 1), y: 168.3, s: 3, label: "Thirteen Colonies Measles Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1741, 1, 1), y: 66.7, s: 3, label: "Cartagena Yellow Fever Epidemic\nDeath Toll:\n20,000"},
  { x: new Date(1743, 1, 1), y: 26.7, s: 4, label: "Sicily Plague Epidemic\nDeath Toll:\n45,000"},
  { x: new Date(1747, 1, 1), y: 66.7, s: 2, label: "Thirteen Colonies Measles Outbreak\nDeath Toll:\nUnknown"},
  { x: new Date(1759, 1, 1), y: 90, s: 2, label: "North America Measles Outbreak\nDeath Toll:\nUnknown"},
  { x: new Date(1760, 1, 1), y: 104.8, s: 2, label: "Charleston Smallpox Epidemic\nDeath Toll:\n800"},
  { x: new Date(1761, 1, 1), y: 143.2, s: 3, label: "North America And West Indies Influenza Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1762, 1, 1), y: 102, s: 3, label: "Havana Yellow Fever Epidemic\nDeath Toll:\n8,000"},
  { x: new Date(1763, 1, 1), y: 75.2, s: 2, label: "Pittsburgh Area Smallpox Outbreak\nDeath Toll:\nUnknown"},
  { x: new Date(1770, 1, 1), y: 168, s: 3, label: "Russian Plague Of\nDeath Toll:\n50,000"},
  { x: new Date(1772, 1, 1), y: 110.8, s: 5, label: "Persian Plague\nDeath Toll:\n2,000,000\nNorth America Measles Epidemic\nDeath Toll:\nUnknown"},

  { x: new Date(1775, 1, 1), y: 11.7, s: 3, label: "North American Smallpox Epidemic\nDeath Toll:\n11,000\nEngland Influenza Outbreak\nDeath Toll:\nUnknown"},
  { x: new Date(1778, 1, 1), y: 257.3, s: 3, label: "Spain Dengue Fever Outbreak\nDeath Toll:\nUnknown"},
  { x: new Date(1788, 1, 1), y: 218.2, s: 4, label: "United States Measles Epidemic\nDeath Toll:\nUnknown\nPueblo Indians Smallpox Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1789, 1, 1), y: 196.8, s: 5, label: "New South Wales Smallpox Epidemic\nDeath Toll:\n50-70% of Population"},
  { x: new Date(1793, 1, 1), y: 78.2, s: 2, label: "Philadelphia Yellow Fever Epidemic\nDeath Toll:\n5,000\nUnited States Influenza And Typhus Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1800, 1, 1), y: 24.2, s: 3, label: "Spain Yellow Fever Epidemic\nDeath Toll:\n60,000"},
  { x: new Date(1801, 1, 1), y: 56.7, s: 3, label: "Ottoman Empire And Egypt Bubonic Plague Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1802, 1, 1), y: 75, s: 3, label: "Saintdomingue Yellow Fever Epidemic\nDeath Toll:\n40,000"},
  { x: new Date(1812, 1, 1), y: 8.3, s: 5, label: "Ottoman Plague Epidemic\nDeath Toll:\n300,000\nRussia Typhus Epidemic\nDeath Toll:\n300,000\nEgypt Bubonic Plague Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1813, 1, 1), y: 20.3, s: 3, label: "Caragea'S Plague\nDeath Toll:\n60,000\nMalta Plague Epidemic\nDeath Toll:\n4,500"},
  { x: new Date(1817, 1, 1), y: 68.3, s: 4, label: "First Cholera Pandemic\nDeath Toll:\n100,000\nIreland Typhus Epidemic\nDeath Toll:\n65,000"},
  { x: new Date(1820, 1, 1), y: 24.2, s: 2, label: "Savannah Yellow Fever Epidemic\nDeath Toll:\n700"},
  { x: new Date(1821, 1, 1), y: 9.2, s: 2, label: "Barcelona Yellow Fever Epidemic\nDeath Toll:\n12,500"},
  { x: new Date(1826, 1, 1), y: 59.9, s: 3, label: "Second Cholera Pandemic\nDeath Toll:\n100,000"},
  { x: new Date(1828, 1, 1), y: 108.5, s: 2, label: "New South Wales Smallpox Epidemic\nDeath Toll:\n19,000"},

  { x: new Date(1829, 1, 1), y: 115.2, s: 4, label: "Pacific Northwest Malaria Epidemic\nDeath Toll:\n150,000\nGroningen Epidemic\nDeath Toll:\n2,800\nIran Plague Outbreak\nDeath Toll:\nUnknown"},

  { x: new Date(1831, 1, 1), y: 80.8, s: 3, label: "Plains Indians Smallpox Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1834, 1, 1), y: 19.5, s: 3, label: "Egypt Plague Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1837, 1, 1), y: 227.3, s: 3, label: "Great Plains Smallpox Epidemic\nDeath Toll:\n17,000"},
  { x: new Date(1840, 1, 1), y: 105.5, s: 3, label: "South Africa Smallpox Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1841, 1, 1), y: 63.3, s: 2, label: "Southern United States Yellow Fever Epidemic\nDeath Toll:\n3,498"},
  { x: new Date(1846, 1, 1), y: 102.7, s: 5, label: "Third Cholera Pandemic\nDeath Toll:\n1,000,000"},
  { x: new Date(1847, 1, 1), y: 166.3, s: 3, label: "North American Typhus Epidemic\nDeath Toll:\n20,000\nSouthern United States Yellow Fever Epidemic\nDeath Toll:\n3,400\nInfluenza Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1848, 1, 1), y: 208.3, s: 3, label: "Hawaii Epidemic Of Infections\nDeath Toll:\n10,000"},
  { x: new Date(1850, 1, 1), y: 126.3, s: 2, label: "North America Influenza Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1853, 1, 1), y: 74.1, s: 3, label: "New Orleans Yellow Fever Epidemic\nDeath Toll:\n7,970\nOttoman Empire Plague Epidemic\nDeath Toll:\nUnknown\nCopenhagen Cholera Outbreak\nDeath Toll:\n4,737"},
  { x: new Date(1854, 1, 1), y: 39, s: 2, label: "Broad Street Cholera Outbreak\nDeath Toll:\n616"},
  { x: new Date(1855, 1, 1), y: 12.7, s: 5, label: "Third Plague Pandemic\nDeath Toll:\n12,000,000\nNorfolk Yellow Fever Epidemic\nDeath Toll:\n3,000"},
  { x: new Date(1857, 1, 1), y: 43.4, s: 2, label: "Lisbon Yellow Fever Epidemic\nDeath Toll:\n6,000\nEurope And The Americas Influenza Epidemic\nDeath Toll:\nUnknown\nVictoria Smallpox Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1861, 1, 1), y: 146.6, s: 3, label: "United States Typhoid Fever Epidemic\nDeath Toll:\n80,000"},
  { x: new Date(1862, 1, 1), y: 112.1, s: 3, label: "British Columbia Smallpox Epidemic\nDeath Toll:\n32,000"},
  { x: new Date(1863, 1, 1), y: 83.5, s: 4, label: "Fourth Cholera Pandemic\nDeath Toll:\n600,000"},
  { x: new Date(1867, 1, 1), y: 13.9, s: 1, label: "Sydney Measles Epidemic\nDeath Toll:\n748"},
  { x: new Date(1870, 1, 1), y: 232, s: 4, label: "Europe Smallpox Epidemic\nDeath Toll:\n500,000"},
  { x: new Date(1871, 1, 1), y: 185.3, s: 3, label: "Buenos Aires Yellow Fever Epidemic\nDeath Toll:\n20,000"},
  { x: new Date(1875, 1, 1), y: 28.3, s: 3, label: "Fiji Measles Outbreak\nDeath Toll:\n40,000\nAustralia Scarlet Fever Epidemic\nDeath Toll:\n8,000"},

  { x: new Date(1876, 1, 1), y: 18.9, s: 3, label: "Ottoman Empire Plague Epidemic\nDeath Toll:\n20,000"},
  { x: new Date(1878, 1, 1), y: 5.7, s: 2, label: "New Orleans Yellow Fever Epidemic\nDeath Toll:\n4,046"},
  { x: new Date(1878, 1, 1), y: 5.7, s: 2, label: "Mississippi Valley Yellow Fever Epidemic\nDeath Toll:\n13,000"},
  { x: new Date(1881, 1, 1), y: 90.5, s: 4, label: "Fifth Cholera Pandemic\nDeath Toll:\n298,600"},
  { x: new Date(1885, 1, 1), y: 86.3, s: 2, label: "Montreal Smallpox Epidemic\nDeath Toll:\n3,164"},
  { x: new Date(1889, 1, 1), y: 10.4, s: 5, label: "Flu Pandemic\nDeath Toll:\n1,000,000"},
  { x: new Date(1896, 1, 1), y: 69.4, s: 4, label: "Congo Basin African Trypanosomiasis Epidemic\nDeath Toll:\n500,000\nBombay Plague Epidemic\nDeath Toll:\n20,788"},
  { x: new Date(1899, 1, 1), y: 20.2, s: 4, label: "Sixth Cholera Pandemic\nDeath Toll:\n800,000\nPorto Plague Outbreak\nDeath Toll:\n132"},
  { x: new Date(1900, 1, 1), y: 15.7, s: 4, label: "Uganda African Trypanosomiasis Epidemic\nDeath Toll:\n250,000\nKuru Epidemic\nDeath Toll:\n3,000\nSan Francisco Plague Of\nDeath Toll:\n119\nSydney Bubonic Plague Epidemic\nDeath Toll:\n103"},
  { x: new Date(1903, 1, 1), y: 40.8, s: 1, label: "India Plague Epidemic\nDeath Toll:\n22\nFremantle Plague Epidemic\nDeath Toll:\n4"},
  { x: new Date(1910, 1, 1), y: 30.9, s: 3, label: "Manchurian Plague\nDeath Toll:\n60,000\nChina Plague\nDeath Toll:\n40,000"},
  { x: new Date(1915, 1, 1), y: 79, s: 5, label: "Encephalitis Lethargica Pandemic\nDeath Toll:\n1,500,000"},
  { x: new Date(1916, 1, 1), y: 95, s: 2, label: "United States Polio Epidemic\nDeath Toll:\n7,130"},
  { x: new Date(1918, 1, 1), y: 134.6, s: 5, label: "Spanish Flu\nDeath Toll:\n65,000,000\nRussia Typhus Epidemic\nDeath Toll:\n2,500,000"},
  { x: new Date(1924, 1, 1), y: 27.9, s: 1, label: "Minnesota Smallpox Epidemic\nDeath Toll:\n500\nLos Angeles Pneumonic Plague Outbreak\nDeath Toll:\n30"},
  { x: new Date(1927, 1, 1), y: 114.7, s: 1, label: "Montreal Typhoid Fever Epidemic\nDeath Toll:\n538"},
  { x: new Date(1929, 1, 1), y: 108.2, s: 1, label: "Psittacosis Pandemic\nDeath Toll:\n100"},
  { x: new Date(1937, 1, 1), y: 190.6, s: 1, label: "Croydon Typhoid Outbreak Of\nDeath Toll:\n43\nAustralia Polio Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1940, 1, 1), y: 113, s: 2, label: "Sudan Yellow Fever Epidemic\nDeath Toll:\n1,627"},
  { x: new Date(1942, 1, 1), y: 50.8, s: 3, label: "Egypt Malaria Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1946, 1, 1), y: 154.3, s: 4, label: "China Plague Epidemic\nDeath Toll:\nUnknown\nEgypt Relapsing Fever Epidemic\nDeath Toll:\nUnknown"},
  { x: new Date(1947, 1, 1), y: 214.7, s: 2, label: "Egypt Cholera Epidemic\nDeath Toll:\n10,277"},
  { x: new Date(1948, 1, 1), y: 193, s: 2, label: "United States Polio Epidemic\nDeath Toll:\n9,000"},
  { x: new Date(1957, 1, 1), y: 269.3, s: 5, label: "Influenza Pandemic ('Asian Flu')\nDeath Toll:\n2,500,000"},
  { x: new Date(1960, 1, 1), y: 159, s: 3, label: "Ethiopia Yellow Fever Epidemic\nDeath Toll:\n30,000"},
  { x: new Date(1961, 1, 1), y: 76.4, s: 3, label: "Seventh Cholera Pandemic\nDeath Toll:\nUnknown"},
  { x: new Date(1968, 1, 1), y: 150, s: 5, label: "Hong Kong Flu\nDeath Toll:\n2,500,000"},
  { x: new Date(1971, 1, 1), y: 94.4, s: 1, label: "Staphorst Polio Epidemic\nDeath Toll:\n5"},
  { x: new Date(1972, 1, 1), y: 97.6, s: 2, label: "London Flu\nDeath Toll:\n1,027\nYugoslav Smallpox Outbreak\nDeath Toll:\n35"},
  { x: new Date(1973, 1, 1), y: 54.1, s: 1, label: "Italy Cholera El Tor Epidemic\nDeath Toll:\n24"},
  { x: new Date(1974, 1, 1), y: 49.2, s: 3, label: "Smallpox Epidemic Of India\nDeath Toll:\n15,000"},
  { x: new Date(1977, 1, 1), y: 39.3, s: 3, label: "Soviet Flu\nDeath Toll:\n20,000"},
  { x: new Date(1979, 1, 1), y: 220.1, s: 1, label: "Sverdlovsk Anthrax Leak\nDeath Toll:\n105"},
  { x: new Date(1981, 1, 1), y: 198.9, s: 5, label: "Hiv/Aids Pandemic\nDeath Toll:\n32,000,000"},
  { x: new Date(1984, 1, 1), y: 60.5, s: 1, label: "Western Sahara Plague\nDeath Toll:\n64"},
  { x: new Date(1986, 1, 1), y: 14.8, s: 2, label: "Oju Yellow Fever Epidemic\nDeath Toll:\n5,600"},
  { x: new Date(1987, 1, 1), y: 33.9, s: 1, label: "Mali Yellow Fever Epidemic\nDeath Toll:\n145"},
  { x: new Date(1991, 1, 1), y: 203.3, s: 3, label: "Bangladesh Cholera Epidemic\nDeath Toll:\n9,000"},
  { x: new Date(1994, 1, 1), y: 44.9, s: 1, label: "Plague In India\nDeath Toll:\n56"},
  { x: new Date(1996, 1, 1), y: 11.6, s: 2, label: "West Africa Meningitus Epidemic\nDeath Toll:\n10,000\nUnited Kingdom Bse Outbreak\nDeath Toll:\n178"},
  { x: new Date(1998, 1, 1), y: 88.3, s: 1, label: "Malaysia Nipah Virus Outbreak\nDeath Toll:\n105"},
  { x: new Date(2000, 1, 1), y: 173.9, s: 1, label: "Central America Dengue Epidemic\nDeath Toll:\n40"},
  { x: new Date(2001, 1, 1), y: 170.4, s: 1, label: "Nigeria Cholera Epidemic\nDeath Toll:\n400\nSouth Africa Cholera Epidemic\nDeath Toll:\n139"},

  { x: new Date(2002, 1, 1), y: 163.6, s: 2, label: "Sars Outbreak\nDeath Toll:\n774"},
  { x: new Date(2003, 1, 1), y: 99.3, s: 1, label: "Algeria Plague Outbreak\nDeath Toll:\n1"},
  { x: new Date(2003, 1, 1), y: 99.3, s: 2, label: "Avian Influenza Outbreaks In The S\nDeath Toll:\n455"},
  { x: new Date(2004, 1, 1), y: 65.3, s: 2, label: "Indonesia Dengue Epidemic\nDeath Toll:\n658\nAfghanistan Leishmaniasis Epidemic\nDeath Toll:\nUnknown\nSudan Ebola Outbreak\nDeath Toll:\n7\nSenegal Cholera Outbreak\nDeath Toll:\n2"},
  { x: new Date(2005, 1, 1), y: 45.8, s: 1, label: "Dengue Outbreak In Singapore\nDeath Toll:\n27"},

  { x: new Date(2006, 1, 1), y: 24.7, s: 2, label: "Philippines Dengue Epidemic\nDeath Toll:\n1,000\nLuanda Cholera Epidemic\nDeath Toll:\n1,200\nEast Africa Rift Valley Fever Outbreak\nDeath Toll:\n394"},
  
  { x: new Date(2007, 1, 1), y: 12.6, s: 2, label: "Ethiopia Cholera Epidemic\nDeath Toll:\n684\nMweka Ebola Epidemic\nDeath Toll:\n187\nPuerto Rico, Dominican Republic, And Mexico Dengue Fever Epidemic\nDeath Toll:\n183"},

  { x: new Date(2008, 1, 1), y: 4.2, s: 2, label: "Zimbabwean Cholera Outbreak\nDeath Toll:\n4,293\nChina Hand, Foot, And Mouth Disease Epidemic\nDeath Toll:\n3,322\nCambodia Dengue Epidemic\nDeath Toll:\n407"},
  { x: new Date(2009, 1, 1), y: 4.8, s: 4, label: "Swine Flu Pandemic\nDeath Toll:\n284,000\nWest African Meningitis Outbreak\nDeath Toll:\n1,100"},
  { x: new Date(2010, 1, 1), y: 24.9, s: 3, label: "S Haiti Cholera Outbreak\nDeath Toll:\n10,075\nDemocratic Republic Of The Congo Measles Outbreak\nDeath Toll:\n4,500"},
  { x: new Date(2011, 1, 1), y: 80.8, s: 1, label: "Vietnam Hand, Foot And Mouth Disease Epidemic\nDeath Toll:\n170\nDengue Outbreak In Pakistan\nDeath Toll:\n350"},
  { x: new Date(2012, 1, 1), y: 84.5, s: 2, label: "Middle East Respiratory Syndrome Coronavirus Outbreak\nDeath Toll:\n862\nYellow Fever Outbreak In Darfur, Sudan\nDeath Toll:\n171"},
  { x: new Date(2013, 1, 1), y: 94, s: 3, label: "Western African Ebola Virus Epidemic\nDeath Toll:\n11,323\nAvian Influenza Epidemic\nDeath Toll:\n616"},
  { x: new Date(2014, 1, 1), y: 113.3, s: 2, label: "Madagascar Plague Outbreak\nDeath Toll:\n292"},
  { x: new Date(2015, 1, 1), y: 69.8, s: 2, label: "Indian Swine Flu Outbreak\nDeath Toll:\n2,035\nZika Virus Epidemic\nDeath Toll:\n53"},
  { x: new Date(2016, 1, 1), y: 39.8, s: 3, label: "Yemen Cholera Outbreak\nDeath Toll:\n3,886\nAngola And Dr Congo Yellow Fever Outbreak\nDeath Toll:\n498"},
  { x: new Date(2017, 1, 1), y: 21.7, s: 3, label: "United States Flu Season\nDeath Toll:\n61,000\nGorakhpur Japanese Encephalitis Outbreak\nDeath Toll:\n1,317"},
  { x: new Date(2018, 1, 1), y: 7, s: 2, label: "Kivu Ebola Epidemic\nDeath Toll:\n2,272\nNipah Virus Outbreak In Kerala\nDeath Toll:\n17"},
  { x: new Date(2019, 1, 1), y: 3.6, s: 4, label: "Covid Pandemic\nDeath Toll:\n682,044\nMeasles Outbreak In The Democratic Republic Of The Congo\nDeath Toll:\n6,400\nDengue Fever Epidemic\nDeath Toll:\n3,930"}
  
];

const fam_labels = [
  { x: new Date(1618, 1, 1), y: 1.3, s: 3, label: "Famine\nItaly\n1618–1622\nDeath Toll:Unknown"},
  { x: new Date(1619, 1, 1), y: 15, s: 4, label: "Tokugawa period Famine\nJapan\n1619\nDeath Toll:Unknown"},
  { x: new Date(1628, 1, 1), y: 23.2, s: 3, label: "Famine\nItaly\n1628–1632\nDeath Toll:Unknown"},
  { x: new Date(1630, 1, 1), y: 1, s: 4, label: "Famine in north-west China\nChina\n1630–1631\nDeath Toll:Unknown"},
  { x: new Date(1631, 1, 1), y: 4.4, s: 5, label: "Deccan Famine of 1630–32\nIndia\n1630–1632\nDeath Toll:7,400,000"},
  { x: new Date(1634, 1, 1), y: 3, s: 5, label: "Famines in Europe caused by Thirty Years' War\nEurope\n1618–1648\nDeath Toll:Unknown"},
  { x: new Date(1640, 1, 1), y: 15, s: 3, label: "Kan'ei Great Famine\nJapan\n1640–1643\nDeath Toll:75,000"},
  { x: new Date(1648, 1, 1), y: 1, s: 2, label: "Famine\nItaly\n1648–1649\nDeath Toll:Unknown"},
  { x: new Date(1649, 1, 1), y: 1, s: 1, label: "Famine in northern England \nEngland\n1649\nDeath Toll:Unknown"},
  { x: new Date(1650, 1, 1), y: 1, s: 2, label: "Famine in the east of France \nFrance\n1650–1652\nDeath Toll:Unknown"},
  { x: new Date(1651, 1, 1), y: 1, s: 2, label: "Cromwellian conquest of Ireland Famine\nIreland\n1651–1653\nDeath Toll:Unknown"},
  { x: new Date(1653, 1, 1), y: 0.9, s: 4, label: "Polish Famine\nPoland\n1648–1660\nDeath Toll:Unknown"},
  { x: new Date(1661, 1, 1), y: 0.8, s: 4, label: "Famine due to lack of any rainfall for two years\nIndia\n1661\nDeath Toll:Unknown"},
  { x: new Date(1670, 1, 1), y: 1, s: 4, label: "Plague and Famines\nSpain\n1670s – 1680s\nDeath Toll:Unknown"},
  { x: new Date(1671, 1, 1), y: 0.9, s: 2, label: "Kyungshin Famine\nKorea\n1670–1671\nDeath Toll:Unknown"},
  { x: new Date(1672, 1, 1), y: 0.4, s: 2, label: "Famine in Southern Italy\nItaly\n1672\nDeath Toll:Unknown"},
  { x: new Date(1678, 1, 1), y: 0.2, s: 2, label: "Famine\nItaly\n1678–1679\nDeath Toll:Unknown"},
  { x: new Date(1680, 1, 1), y: 0.8, s: 3, label: "Famine in Sardinia\nItaly (present day)\n1680\nDeath Toll:80,000"},
  { x: new Date(1685, 1, 1), y: 1, s: 3, label: "Famine in Sahel\nWest Africa\n1680s\nDeath Toll:Unknown"},
  { x: new Date(1690, 1, 1), y: 1, s: 3, label: "Famines Through Scotland\nScotland\n1690s\nDeath Toll:120,000"},
  { x: new Date(1693, 1, 1), y: 1, s: 2, label: "Famine\nItaly\n1693–1695\nDeath Toll:Unknown"},
  { x: new Date(1694, 1, 1), y: 1, s: 5, label: "French Grande Famine\nFrance\n1693–1694\nDeath Toll:1,300,000"},
  { x: new Date(1695, 1, 1), y: 0.1, s: 4, label: "Great Famine of Estonia/Sweden \nThe Swedish Empire, of which Swedish Estonia and Swedish Livonia were dominions at that time\n1695–1697\nDeath Toll:162,500"},
  { x: new Date(1696, 1, 1), y: 1, s: 4, label: "Great Famine of Finland\nFinland, then part of Sweden proper\n1696–1697\nDeath Toll:150,000"},
  { x: new Date(1702, 1, 1), y: 26.7, s: 5, label: "Famine in Deccan \nIndia\n1702–1704\nDeath Toll:2,000,000"},
  { x: new Date(1708, 1, 1), y: 16.7, s: 4, label: "Famine in East Prussia, killed 41% of its population\nEast Prussia\n1708–1711\nDeath Toll:250,000"},
  { x: new Date(1709, 1, 1), y: 13.3, s: 1, label: "Famine\nItaly\n1709\nDeath Toll:Unknown"},
  { x: new Date(1710, 1, 1), y: 5, s: 4, label: "Grande Famine De 1709\nFrance\n1709–1710\nDeath Toll:600,000"},
  { x: new Date(1716, 1, 1), y: 78.3, s: 1, label: "Famine\nItaly\n1716\nDeath Toll:Unknown"},
  { x: new Date(1722, 1, 1), y: 36.7, s: 1, label: "Famine\nArabia\n1722\nDeath Toll:Unknown"},
  { x: new Date(1724, 1, 1), y: 35, s: 1, label: "Famine\nItaly\n1724\nDeath Toll:Unknown"},
  { x: new Date(1727, 1, 1), y: 203.3, s: 2, label: "Famine in the English Midlands\nEngland\n1727–1728\nDeath Toll:Unknown"},
  { x: new Date(1732, 1, 1), y: 18.3, s: 3, label: "Ky?h? famine\nJapan\n1732–1733\nDeath Toll:145,000"},
  { x: new Date(1738, 1, 1), y: 185, s: 5, label: "Famine in West Africa, half the population of Timbuktu died of starvation\nWest Africa\n1738–1756\nDeath Toll:Unknown"},
  { x: new Date(1740, 1, 1), y: 121.7, s: 4, label: "Irish Famine (1740–41)\nIreland\n1740–1741\nDeath Toll:Unknown"},
  { x: new Date(1750, 1, 1), y: 139, s: 4, label: "Famine in the Senegambia region \nSenegal, Gambia (present day)\n1750–1756\nDeath Toll:Unknown"},
  { x: new Date(1764, 1, 1), y: 60.7, s: 1, label: "Famine in Naples\nItaly (present day)\n1764\nDeath Toll:Unknown"},
  { x: new Date(1767, 1, 1), y: 63, s: 1, label: "Famine\nItaly\n1767\nDeath Toll:Unknown"},
  { x: new Date(1769, 1, 1), y: 176.8, s: 6, label: "Great Bengal famine of 1770, 10 million dead (one third of population)\nIndia, Bangladesh (present day)\n1769–1773\nDeath Toll:10,000,000"},
  { x: new Date(1770, 1, 1), y: 168, s: 3, label: "Famines in Czech lands killed hundreds of thousands people\nCzech Republic (present day)\n1770–1771\nDeath Toll:100,000"},
  { x: new Date(1771, 1, 1), y: 136, s: 2, label: "Famine in Saxony and southern Germany\nGermany\n1771–1772\nDeath Toll:Unknown"},
  { x: new Date(1773, 1, 1), y: 58, s: 1, label: "Famine in Sweden\nSweden\n1773\nDeath Toll:Unknown"},
  { x: new Date(1779, 1, 1), y: 209.8, s: 1, label: "Famine in Rabat\nMorocco\n1779\nDeath Toll:Unknown"},
  { x: new Date(1780, 1, 1), y: 141.3, s: 4, label: "Great Tenmei famine\nJapan\n1780s\nDeath Toll:520,000"},
  { x: new Date(1782, 1, 1), y: 64.2, s: 3, label: "Famine in Iceland caused by Laki eruption killed one-fifth of Iceland's population\nIceland\n1782\nDeath Toll:Unknown"},
  { x: new Date(1783, 1, 1), y: 38, s: 6, label: "Chalisa famine\nIndia\n1783–1784\nDeath Toll:11,000,000"},
  { x: new Date(1784, 1, 1), y: 17, s: 2, label: "Widespread famine throughout Egypt\nEgypt\n1784\nDeath Toll:Unknown"},
  { x: new Date(1785, 1, 1), y: 40.2, s: 2, label: "Famine in Tunisia\nTunisia\n1784–1785\nDeath Toll:Unknown"},
  { x: new Date(1788, 1, 1), y: 218.2, s: 3, label: "French Revolution Famine\nFrance\n1788\nDeath Toll:Unknown"},
  { x: new Date(1789, 1, 1), y: 196.8, s: 2, label: "Famine in Ethiopia afflicted 'amhara/tigray north'\nEthiopia\n1789\nDeath Toll:Unknown"},
  { x: new Date(1790, 1, 1), y: 149.8, s: 6, label: "Skull Famine\nIndia\n1789–1793\nDeath Toll:11,000,000"},
  { x: new Date(1801, 1, 1), y: 56.7, s: 1, label: "Famine\nItaly\n1801\nDeath Toll:Unknown"},
  { x: new Date(1804, 1, 1), y: 79.2, s: 4, label: "Austrian Galice Famines\nPoland, Ukraine (present day)\n1804-1872, 1913\nDeath Toll:475,000"},
  { x: new Date(1810, 1, 1), y: 1, s: 6, label: "Famine\nChina\n1810\nDeath Toll:11,250,000"},
  { x: new Date(1811, 1, 1), y: 2.3, s: 6, label: "Famine\nChina\n1811\nDeath Toll:11,250,000"},
  { x: new Date(1812, 1, 1), y: 8.3, s: 2, label: "Madrid Famines\nSpain\n1811–1812\nDeath Toll:20,000"},
  { x: new Date(1815, 1, 1), y: 59, s: 1, label: "Eruption of Tambora. Subsequent famines\nIndonesia\n1815\nDeath Toll:10,000"},
  { x: new Date(1816, 1, 1), y: 76.3, s: 3, label: "Year Without a Summer\nEurope\n1816–1817\nDeath Toll:65,000"},
  { x: new Date(1830, 1, 1), y: 117.4, s: 2, label: "Famine, killed 42% of population\nCape Verde\n1830–1833\nDeath Toll:30,000"},
  { x: new Date(1833, 1, 1), y: 13.4, s: 3, label: "Tenpo famine\nJapan\n1833–1837\nDeath Toll:Unknown"},
  { x: new Date(1837, 1, 1), y: 227.3, s: 4, label: "Agra famine of 1837–38\nIndia\n1837–1838\nDeath Toll:800,000"},
  { x: new Date(1845, 1, 1), y: 65.8, s: 4, label: "Highland Potato Famine\nScotland\n1845–1857\nDeath Toll:Unknown"},
  { x: new Date(1846, 1, 1), y: 102.7, s: 6, label: "Famine\nChina\n1846\nDeath Toll:11,250,000"},
  { x: new Date(1847, 1, 1), y: 166.3, s: 1, label: "Maria Da Forte Famine\nPortugal\n1847\nDeath Toll:Unknown"},
  { x: new Date(1848, 1, 1), y: 208.3, s: 5, label: "Great Irish Famine\nIreland\n1845–1849\nDeath Toll:1,000,000"},
  { x: new Date(1849, 1, 1), y: 182.5, s: 6, label: "Famine\nChina\n1849\nDeath Toll:11,250,000"},
  { x: new Date(1850, 1, 1), y: 126.3, s: 3, label: "Demak and Grobogan Famine\nIndonesia\n1849–1850\nDeath Toll:83,000"},
  { x: new Date(1860, 1, 1), y: 182.2, s: 5, label: "Upper Doab famine of 1860–61\nIndia\n1860–1861\nDeath Toll:2,000,000"},
  { x: new Date(1862, 1, 1), y: 112.1, s: 6, label: "Taiping Rebellion, drought, and famine\nChina\n1850–1873\nDeath Toll:20,000,000"},
  { x: new Date(1863, 1, 1), y: 83.5, s: 2, label: "Famine in Cape Verde\nCape Verde\n1863–1867\nDeath Toll:30,000"},
  { x: new Date(1866, 1, 1), y: 30.7, s: 5, label: "Orissa famine of 1866\nIndia\n1866\nDeath Toll:1,000,000"},
  { x: new Date(1867, 1, 1), y: 13.9, s: 4, label: "Famine in French Algeria\nFrench Algeria\n1866–1868\nDeath Toll:820,000"},
  { x: new Date(1868, 1, 1), y: 62.8, s: 3, label: "Finnish famine of 1866–1868. About 15% of the entire population died\nFinland\n1866–1868\nDeath Toll:150,000"},
  { x: new Date(1869, 1, 1), y: 123.6, s: 2, label: "Swedish famine of 1867–1869.\nSweden\n1867–1869\nDeath Toll:Unknown"},
  { x: new Date(1869, 1, 1), y: 123.6, s: 5, label: "Rajputana famine of 1869\nIndia\n1869\nDeath Toll:1,500,000"},
  { x: new Date(1871, 1, 1), y: 185.3, s: 5, label: "Persian famine of 1870–1872\nIran\n1870–1872\nDeath Toll:1,500,000"},
  { x: new Date(1873, 1, 1), y: 110.1, s: 2, label: "Famine in Anatolia caused by drought and floods\nTurkey (present day)\n1873–1874\nDeath Toll:Unknown"},
  { x: new Date(1874, 1, 1), y: 74.5, s: 2, label: "Bihar famine of 1873–74\nIndia\n1873–1874\nDeath Toll:Unknown"},
  { x: new Date(1876, 1, 1), y: 18.9, s: 6, label: "Famine in India, China, Brazil, Northern Africa (and other countries)\nIndia, China, Brazil, Northern Africa (and other countries).\n1876–1879\nDeath Toll:12,000,000"},
  { x: new Date(1878, 1, 1), y: 5.7, s: 1, label: "St. Lawrence Island famine, Alaska\nUnited States\n1878–1880\nDeath Toll:1,000"},
  { x: new Date(1879, 1, 1), y: 10, s: 1, label: "Irish Famine (1740–41)\nIreland\n1879\nDeath Toll:Unknown"},
  { x: new Date(1888, 1, 1), y: 11.2, s: 3, label: "Famine in Orrisa, Ganjam and Northern Bihar\nIndia\n1888–1889\nDeath Toll:150,000"},
  { x: new Date(1890, 1, 1), y: 11.8, s: 5, label: "Etheopian Great Famine\nEthiopia\n1888–1892\nDeath Toll:1,000,000"},
  { x: new Date(1891, 1, 1), y: 59.5, s: 4, label: "Russian Famine\nRussia\n1891–1892\nDeath Toll:450,000"},
  { x: new Date(1895, 1, 1), y: 106.6, s: 4, label: "Famine during the Cuban War of Independence\nCuba\n1895–1898\nDeath Toll:250,000"},
  { x: new Date(1897, 1, 1), y: 43.8, s: 2, label: "Famine in northern China leading in part to the Boxer Rebellion\nChina\n1896–1897\nDeath Toll:Unknown"},
  { x: new Date(1899, 1, 1), y: 20.2, s: 5, label: "Indian Famine\nIndia\n1896–1902\nDeath Toll:2,000,000"},
  { x: new Date(1902, 1, 1), y: 8.5, s: 2, label: "Famine in Cape Verde\nCape Verde\n1900–1903\nDeath Toll:16,000"},
  { x: new Date(1905, 1, 1), y: 105.5, s: 2, label: "Famine in Spain.\nSpain\n1904–1906\nDeath Toll:Unknown"},
  { x: new Date(1907, 1, 1), y: 102.8, s: 6, label: "Famines in east-central China\nChina\n1907\nDeath Toll:12,500,000"},
  { x: new Date(1911, 1, 1), y: 9.5, s: 6, label: "Famines in east-central China\nChina\n1911\nDeath Toll:12,500,000"},
  { x: new Date(1914, 1, 1), y: 16.1, s: 4, label: "WW1 Famine\nGermany\n1914–1919\nDeath Toll:212,000"},
  { x: new Date(1915, 1, 1), y: 79, s: 4, label: "WW1 Famine\nLebanon\n1914–1918\nDeath Toll:200,000"},
  { x: new Date(1916, 1, 1), y: 95, s: 1, label: "Winter famine in Russia\nRussia\n1916–1917\nDeath Toll:Unknown"},
  { x: new Date(1917, 1, 1), y: 173.6, s: 4, label: "Famine in German East Africa\nGerman East Africa\n1917\nDeath Toll:300,000"},
  { x: new Date(1918, 1, 1), y: 134.6, s: 5, label: "Persian famine of 1917–1919\nIran\n1917–1919\nDeath Toll:6,000,000"},
  { x: new Date(1919, 1, 1), y: 105.7, s: 2, label: "Rumanura Famine\nRwanda and Burundi (present day)\n1918–1919\nDeath Toll:Unknown"},
  { x: new Date(1920, 1, 1), y: 62.7, s: 2, label: "Kazakh Famine\nTurkestan\n1919–1922\nDeath Toll:Unknown"},
  { x: new Date(1921, 1, 1), y: 43.5, s: 4, label: "Famine in northern China\nChina\n1920–1921\nDeath Toll:500,000"},
  { x: new Date(1921, 1, 1), y: 43.5, s: 5, label: "Russian famine of 1921\nRussia\n1921\nDeath Toll:5,000,000"},
  { x: new Date(1922, 1, 1), y: 23.7, s: 2, label: "Famine in Cape Verde\nCape Verde\n1920–1922\nDeath Toll:24,500"},
  { x: new Date(1922, 1, 1), y: 23.7, s: 5, label: "1921–1922 famine in Tatarstan\nRussia\n1921–1922\nDeath Toll:1,250,000"},
  { x: new Date(1924, 1, 1), y: 27.9, s: 2, label: "Volga German Famine\nRussia\n1924–1925\nDeath Toll:Unknown"},
  { x: new Date(1925, 1, 1), y: 74, s: 2, label: "Minor famine in Ireland due to heavy rain\nIrish Free State\n1924–1925\nDeath Toll:Unknown"},
  { x: new Date(1928, 1, 1), y: 129.7, s: 2, label: "Ruanda-Buruni Famine\nRwanda and Burundi (present day)\n1928–1929\nDeath Toll:Unknown"},
  { x: new Date(1929, 1, 1), y: 108.2, s: 5, label: "Chinese famine of 1942–43\nChina\n1928–1930\nDeath Toll:6,500,000"},
  { x: new Date(1930, 1, 1), y: 59.4, s: 2, label: "Famine\nMadagascar\n1930–1931\nDeath Toll:32,000"},
  { x: new Date(1932, 1, 1), y: 18.6, s: 5, label: "Soviet famine of 1932–1933, including famine in Ukraine\nRussian SFSR and Ukrainian SSR\n1932–1933\nDeath Toll:1,250,000"},
  { x: new Date(1936, 1, 1), y: 132.8, s: 5, label: "Famine in China\nChina\n1936\nDeath Toll:5,000,000"},
  { x: new Date(1940, 1, 1), y: 113, s: 5, label: "Warsaw Ghetto Famine\nOccupied Poland\n1940–1945\nDeath Toll:Unknown"},
  { x: new Date(1940, 1, 1), y: 113, s: 4, label: "Morroco Fammine\nMorocco\n1940–1948\nDeath Toll:200,000"},
  { x: new Date(1940, 1, 1), y: 113, s: 2, label: "Famine in Cape Verde\nCape Verde\n1940–1943\nDeath Toll:20,000"},
  { x: new Date(1941, 1, 1), y: 79.2, s: 5, label: "Leningrad Siege Famine (WW2)\nRussia\n1941–1944\nDeath Toll:1,000,000"},
  { x: new Date(1941, 1, 1), y: 79.2, s: 4, label: "Greek Famine (WW2)\nGreece\n1941–1944\nDeath Toll:300,000"},
  { x: new Date(1942, 1, 1), y: 50.8, s: 5, label: "Iranian famine of 1942–1943\nIran\n1942–1943\nDeath Toll:3,000,000"},
  { x: new Date(1942, 1, 1), y: 50.8, s: 5, label: "Chinese famine of 1942–43\nHenan, China\n1942–1943\nDeath Toll:2,500,000"},
  { x: new Date(1943, 1, 1), y: 27.1, s: 5, label: "Bengal famine of 1943\nBengal, India\n1943\nDeath Toll:2,100,000"},
  { x: new Date(1943, 1, 1), y: 27.1, s: 2, label: "Ruzagayura famine \nRwanda and Burundi (present day)\n1943–1944\nDeath Toll:44,000"},
  { x: new Date(1943, 1, 1), y: 27.1, s: 1, label: "Famine in Hadhramaut\nYemen (present day)\n1943–1945\nDeath Toll:10,000"},
  { x: new Date(1944, 1, 1), y: 16.1, s: 5, label: "Java under Japanese occupation\nJava, Indonesia\n1944–1945\nDeath Toll:2,400,000"},
  { x: new Date(1944, 1, 1), y: 16.1, s: 2, label: "Dutch famine of 1944 during World War II\nNetherlands\n1944\nDeath Toll:20,000"},
  { x: new Date(1945, 1, 1), y: 55.3, s: 5, label: "Vietnamese Famine of 1945\nVietnam\n1945\nDeath Toll:1,400,000"},
  { x: new Date(1946, 1, 1), y: 154.3, s: 4, label: "German (Hungerwinter)\nGermany\n1946-1947\nDeath Toll:Unknown"},
  { x: new Date(1947, 1, 1), y: 214.7, s: 3, label: "Soviet Famine of 1947\nSoviet Union\n1946–1947\nDeath Toll:125,000"},
  { x: new Date(1948, 1, 1), y: 193, s: 2, label: "Famine in Cape Verde\nCape Verde\n1946–1948\nDeath Toll:30,000"},
  { x: new Date(1949, 1, 1), y: 190.7, s: 1, label: "Nyasaland Famine 1949\nMalawi\n1949\nDeath Toll:200"},
  { x: new Date(1950, 1, 1), y: 118.9, s: 1, label: "1950 Canadian caribou famine\nCanada\n1950\nDeath Toll:60"},
  { x: new Date(1958, 1, 1), y: 261.7, s: 3, label: "Famine in Tigray\nEthiopia\n1958\nDeath Toll:100,000"},
  { x: new Date(1959, 1, 1), y: 225.1, s: 6, label: "The Great Chinese Famine\nChina (mainland)\n1959–1961\nDeath Toll:27,000,000"},
  { x: new Date(1966, 1, 1), y: 66.8, s: 3, label: "Lombok Famine\nIndonesia\n1966–1967\nDeath Toll:50,000"},
  { x: new Date(1967, 1, 1), y: 132.9, s: 5, label: "Biafran famine \nNigeria\n1967–1970\nDeath Toll:2,000,000"},
  { x: new Date(1968, 1, 1), y: 150, s: 5, label: "Sahel Famine\nMauritania, Mali, Chad, Niger and Burkina Faso\n1968–1972\nDeath Toll:1,000,000"},
  { x: new Date(1972, 1, 1), y: 97.6, s: 3, label: "Ethiopian Famine\nEthiopia\n1972–1973\nDeath Toll:60,000"},
  { x: new Date(1974, 1, 1), y: 49.2, s: 4, label: "Bangladesh famine of 1974\nBangladesh\n1974\nDeath Toll:800,000"},
  { x: new Date(1975, 1, 1), y: 22.5, s: 5, label: "Khmer Rouge Famine\nCambodia\n1975–1979\nDeath Toll:1,750,000"},
  { x: new Date(1980, 1, 1), y: 218.9, s: 2, label: "Caused by drought and conflict\nUganda\n1980–1981\nDeath Toll:30,000"},
  { x: new Date(1982, 1, 1), y: 162.4, s: 3, label: "Famine caused by the Mozambican Civil War\nMozambique\n1982–1985\nDeath Toll:100,000"},
  { x: new Date(1983, 1, 1), y: 91, s: 4, label: "1983–1985 famine in Ethiopia\nEthiopia\n1983–1985\nDeath Toll:500,000"},
  { x: new Date(1984, 1, 1), y: 60.5, s: 4, label: "Famine caused by drought, economic crisis and the Second Sudanese Civil War\nSudan\n1984–1985\nDeath Toll:240,000"},
  { x: new Date(1988, 1, 1), y: 123, s: 3, label: "Famine caused by the Second Sudanese Civil War\nSudan\n1988\nDeath Toll:100,000"},
  { x: new Date(1991, 1, 1), y: 203.3, s: 4, label: "Famine in Somalia caused by drought and civil war\nSomalia\n1991–1992\nDeath Toll:300,000"},
  { x: new Date(1993, 1, 1), y: 76.1, s: 2, label: "1993 Sudan famine\nSudan\n1993\nDeath Toll:Unknown"},
  { x: new Date(1994, 1, 1), y: 44.9, s: 5, label: "North Korean famine\nNorth Korea\n1994–1998\nDeath Toll:2,250,000"},
  { x: new Date(1998, 1, 1), y: 88.3, s: 3, label: "1998 Sudan famine caused by war and drought\nSudan\n1998\nDeath Toll:70,000"},
  { x: new Date(1999, 1, 1), y: 136.3, s: 2, label: "Famine in Ethiopia. The situation worsened by Eritrean–Ethiopian War\nEthiopia\n1998–2000\nDeath Toll:Unknown"},
  { x: new Date(2000, 1, 1), y: 173.9, s: 5, label: "Second Congo War\nDemocratic Republic of the Congo\n1998–2004\nDeath Toll:2,700,000"},
  { x: new Date(2003, 1, 1), y: 99.3, s: 4, label: "Famine during the War in Darfur\nSudan\n2003–2005\nDeath Toll:200,000"},
  { x: new Date(2005, 1, 1), y: 45.8, s: 3, label: "2005–06 Niger food crisis\nNiger and West Africa\n2005–2006\nDeath Toll:Unknown"},
  { x: new Date(2011, 1, 1), y: 80.8, s: 4, label: "Famine in Somalia, brought on by the 2011 East Africa drought\nSomalia\n2011–2012\nDeath Toll:285,000"},
  { x: new Date(2012, 1, 1), y: 84.5, s: 1, label: "Famine in West Africa, brought on by the 2012 Sahel drought\nSenegal, Gambia, Niger, Mauritania, Mali, Burkina Faso\n2012\nDeath Toll:Unknown"},
  { x: new Date(2016, 1, 1), y: 39.8, s: 1, label: "Famine in Yemen, arising from the blockade of Yemen by Saudi Arabia\nYemen\n2016–present\nDeath Toll:Unknown"},
  { x: new Date(2017, 1, 1), y: 21.7, s: 1, label: "Famine in South Sudan Famine in Somalia, due to 2017 Somalian drought.\nSouth Sudan, Unity State, Somalia, and Nigeria.\n2017–present\nDeath Toll:Unknown"}
  
];


const maunder_sun = sun_data.filter(item => (item.x >= new Date(1645, 1, 1)) & (item.x <= new Date(1715, 1, 1)));
const maunder_fam = fam_labels.filter(item => (item.x >= new Date(1645, 1, 1)) & (item.x <= new Date(1715, 1, 1)));
const maunder_epi = epi_labels.filter(item => (item.x >= new Date(1645, 1, 1)) & (item.x <= new Date(1715, 1, 1)));

const dalton_sun = sun_data.filter(item => (item.x >= new Date(1790, 1, 1)) & (item.x <= new Date(1820, 1, 1)));
const dalton_fam = fam_labels.filter(item => (item.x >= new Date(1790, 1, 1)) & (item.x <= new Date(1820, 1, 1)));
const dalton_epi = epi_labels.filter(item => (item.x >= new Date(1790, 1, 1)) & (item.x <= new Date(1820, 1, 1)));

const modern_sun = sun_data.filter(item => (item.x >= new Date(1914, 1, 1)) & (item.x <= new Date(2008, 1, 1)));
const modern_fam = fam_labels.filter(item => (item.x >= new Date(1914, 1, 1)) & (item.x <= new Date(2008, 1, 1)));
const modern_epi = epi_labels.filter(item => (item.x >= new Date(1914, 1, 1)) & (item.x <= new Date(2008, 1, 1)));

class Chart extends React.Component {
  state = {
    dataId: 1,
    data: epi_labels,
    fillcolor: "#900C3F",
    dataID_sun: 1,
    sun: sun_data,
    sun_fill: 'gray'
  };


  constructor(props) {
    super(props);

    this.state = {};
  }

  changeData(){
    if (this.state.dataId === 1) {
    this.setState(state => ({
      dataId: 2,
      fillcolor: "#07AD3C",
      textcolor: "Black"
    }));
      if (this.state.dataID_sun === 2){
        this.setState(state => ({
        data: maunder_fam        
        }));
      } else if (this.state.dataID_sun === 3){
        this.setState(state => ({
        data: dalton_fam        
        }));
      } else if (this.state.dataID_sun === 4){
        this.setState(state => ({
        data: modern_fam       
      }));
      }else {
        this.setState(state => ({
          data: fam_labels
        }));
      }
  
    } else {
      this.setState(state => ({
        dataId: 1,
        fillcolor: "#900C3F",
        textcolor: "White"
      }));
      if (this.state.dataID_sun === 2){
        this.setState(state => ({
          data: maunder_epi        
        }));
      } else if (this.state.dataID_sun === 3){
        this.setState(state => ({
          data: dalton_epi       
        }));
      } else if (this.state.dataID_sun === 4){
        this.setState(state => ({
          data: modern_epi       
        }));
      }else {
        this.setState(state => ({
          data: epi_labels
        }));
      }
    }
  }
  changeSun(){
    if (this.state.dataID_sun === 1) {
      this.setState(state => ({
        dataID_sun: 2,
        sun: maunder_sun,
        sun_fill: 'pink'
      }));
    } else if (this.state.dataID_sun === 2) {
      this.setState(state => ({
        dataID_sun: 3,
        sun: dalton_sun,
        sun_fill: 'pink'
      }));
    } else if (this.state.dataID_sun === 3) {
      this.setState(state => ({
        dataID_sun: 4,
        sun: modern_sun,
        sun_fill: '#AFC29F'
      }));
    } else  {
      this.setState(state => ({
        dataID_sun: 1,
        sun: sun_data,
        sun_fill: 'gray'
      }));
    }
  }
  // Triggered by onZoomDomainChange and
  // alters VictoryBrushContainer brushDomain prop
  handleZoom(domain) {
    this.setState({ selectedDomain: domain });
  }

  // Triggered by onBrushDomainChange and
  // alters VictoryZoomContainer zoomDomain prop
  handleBrush(domain) {
    this.setState({ zoomDomain: domain });
  }

  render() {
    console.log(this.state.data_sun)
    return (
      <div>
        <p>Epidemics, Grand Solar Minimums, Sunspots, and Pandemics</p>

        <button
          onClick={() => this.changeSun()}
          style={{
            backgroundColor: this.state.sun_fill,
            padding: 20,
            color: "black",
            fontSize: 12,
            margin: "auto"
          }}
        >
          Cycle Period of Time
        </button>
        <button
          onClick={() => this.changeData()}
          style={{
            backgroundColor: this.state.fillcolor,
            padding: 20,
            color: this.state.textcolor,
            fontSize: 12,
            margin: "auto"
          }}
        >
          Cycle Pandemic and Famine
        </button>
        <VictoryChart
          width={1800}
          height={700}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryZoomContainer
              responsive={false}
              zoomDimension="x"
              zoomDomain={this.state.zoomDomain}
              allowZoom={true}
              onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }           
        >
          <VictoryLegend
            x = {125}
            y = {50}
            borderComponent={<Border width={300}/>}
            title = "Size of Bubble Represents Event Severity"
            orientation = "vertical"
            style={{ border: { stroke: "black" }, title: {fontSize: 16 } }}
            data={[
              { name: "Pandemic", symbol: { fill: "#900C3F" } },
              { name: "Famine", symbol: {fill: "#07AD3C"}}
          ]}
          
          />
          <VictoryLine
            style={{
              data: { stroke: "#89a203" }
            }}
            width={1200}
            data={this.state.sun} x = "x" y = "y"  
          />  
          <VictoryScatter 

            size={({ datum }) => datum.s * 2.5 + 1 }
            style={{ data: { fill: this.state.fillcolor } }}
            symbol ="circle"
            data =  {this.state.data} x = "x" y = "y"
            labelComponent={
              <VictoryTooltip
              orientation="top"
              pointerLength={10}
              />}
          />
        </VictoryChart>
          
        <VictoryChart
          padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
          width={1800}
          height={110}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryBrushContainer
              responsive={false}
              brushDimension="x"
              brushDomain={this.state.selectedDomain}
              onBrushDomainChange={this.handleBrush.bind(this)}
            />
          }
        >
          <VictoryAxis
            tickValues={[
              new Date(1610, 1, 1),
              new Date(1650, 1, 1),
              new Date(1700, 1, 1),
              new Date(1750, 1, 1),
              new Date(1800, 1, 1),
              new Date(1850, 1, 1),
              new Date(1900, 1, 1),
              new Date(1950, 1, 1),
              new Date(2000, 1, 1)
            ]}
            tickFormat={x => new Date(x).getFullYear()}
          />
          
          <VictoryLine
            style={{
              data: { stroke: "#89a203" }
            }}
            data={this.state.sun} x = "x" y = "y"
          />
          <VictoryScatter 
            size={({ datum }) => datum.s * 0.75 + 1 }
            style={{ data: { fill: this.state.fillcolor } }}
            symbol ="circle"
            data =  {this.state.data} x = "x" y = "y"
            labels={() => ''} // the label component doesn't show if I remove this
            labelComponent={
              <VictoryTooltip
              orientation="top"
              pointerLength={10}
              />}
          />
          <VictoryLine
              style={{ data: { stroke: "#FF5733" } }}
              data={[
                { x: new Date(1645, 1, 1), y: 0 },
                { x: new Date(1645, 1, 1), y: 275 }
              ]}
          />  
          <VictoryLine
              style={{ data: { stroke: "#FF5733" } }}
              data={[
                { x: new Date(1715, 1, 1), y: 0 },
                { x: new Date(1715, 1, 1), y: 275 }
              ]}
          />  
          <VictoryScatter
            domain={[-10, 10]}
            size = {0}
            data={[
              { x: new Date(1675, 1, 1), y: 200 },
            ]}
            labels={() => ["Maunder Minimum"]}
            labelComponent={
            <VictoryLabel 
                backgroundStyle={{ fill: "pink" }}
                backgroundPadding={10}
              
            />}
          />
          <VictoryLine
              style={{ data: { stroke: "#FF5733" } }}
              data={[
                { x: new Date(1790, 1, 1), y: 0 },
                { x: new Date(1790, 1, 1), y: 275 }
              ]}
          />  
          <VictoryLine
              style={{ data: { stroke: "#FF5733" } }}
              data={[
                { x: new Date(1820, 1, 1), y: 0 },
                { x: new Date(1820, 1, 1), y: 275 }
              ]}
          />  
          <VictoryScatter
            domain={[-10, 10]}
            size = {0}
            data={[
              { x: new Date(1805, 1, 1), y: 200 },
            ]}
            labels={() => ["Dalton Minimum"]}
            labelComponent={
            <VictoryLabel 
                backgroundStyle={{ fill: "pink" }}
                backgroundPadding={8}
              
            />}
          />
                    
          <VictoryLine
              style={{ data: { stroke: "green" } }}
              data={[
                { x: new Date(1914, 1, 1), y: 0 },
                { x: new Date(1914, 1, 1), y: 275 }
              ]}
          />  
          <VictoryLine
              style={{ data: { stroke: "green" } }}
              data={[
                { x: new Date(2008, 1, 1), y: 0 },
                { x: new Date(2008, 1, 1), y: 275 }
              ]}
          />  
          <VictoryScatter
            domain={[-10, 10]}
            size = {0}
            data={[
              { x: new Date(1930, 1, 1), y: 200 },
            ]}
            labels={() => ["Modern Maximum"]}
            labelComponent={
            <VictoryLabel 
                backgroundStyle={{  fill: "#AFC29F", opacity: 0.4}}
                backgroundPadding={8}
              
            />}
          />


        </VictoryChart>

      </div>
    );
  }
}

export default Chart;
