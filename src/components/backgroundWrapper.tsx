import { Box } from "@radix-ui/themes";

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        opacity: 0.85,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="2560"
        height="1440"
        preserveAspectRatio="xMidYMid slice" // keeps aspect ratio, crops instead of squishing
        viewBox="0 0 2560 1440"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          filter: "blur(2px)", // first base blur
          objectFit: "cover", // ensures it behaves like a background image
        }}
      >
        <g mask='url("#SvgjsMask1215")' fill="none">
          <rect
            width="2560"
            height="1440"
            x="0"
            y="0"
            fill='url("#SvgjsRadialGradient1216")'
          ></rect>
          <path
            d="M-89.16 973.76L-89.16 973.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-89.16 973.76L-74.06 1139.27"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-89.16 973.76L95.79 969.8"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-89.16 973.76L48.14 1119.62"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-89.16 973.76L-77.36 1274.91"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-89.16 973.76L40.83 1247.95"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-74.06 1139.27L-74.06 1139.27"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-74.06 1139.27L48.14 1119.62"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-74.06 1139.27L-77.36 1274.91"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-74.06 1139.27L40.83 1247.95"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-74.06 1139.27L95.79 969.8"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-77.36 1274.91L-77.36 1274.91"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-77.36 1274.91L40.83 1247.95"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-77.36 1274.91L-91.69 1413.6"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-77.36 1274.91L48.14 1119.62"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-77.36 1274.91L107.98 1433.74"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-91.69 1413.6L-91.69 1413.6"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-91.69 1413.6L107.98 1433.74"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-91.69 1413.6L40.83 1247.95"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-91.69 1413.6L-74.06 1139.27"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-91.69 1413.6L187.93 1545.63"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M95.79 969.8L95.79 969.8"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M95.79 969.8L48.14 1119.62"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M95.79 969.8L253.92 977.77"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M95.79 969.8L244.71 1124.05"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M48.14 1119.62L48.14 1119.62"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M48.14 1119.62L40.83 1247.95"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M48.14 1119.62L244.71 1124.05"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M40.83 1247.95L40.83 1247.95"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M107.98 1433.74L107.98 1433.74"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M107.98 1433.74L243.63 1421.59"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M107.98 1433.74L187.93 1545.63"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M107.98 1433.74L40.83 1247.95"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M107.98 1433.74L260.83 1307.06"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.92 977.77L253.92 977.77"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.92 977.77L355.61 993.72"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.92 977.77L244.71 1124.05"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.92 977.77L353.85 1089.13"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.92 977.77L48.14 1119.62"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M244.71 1124.05L244.71 1124.05"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M244.71 1124.05L353.85 1089.13"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M244.71 1124.05L355.61 993.72"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M244.71 1124.05L260.83 1307.06"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M260.83 1307.06L260.83 1307.06"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M260.83 1307.06L347.76 1305.94"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M260.83 1307.06L243.63 1421.59"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M260.83 1307.06L381.33 1391.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M260.83 1307.06L40.83 1247.95"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M243.63 1421.59L243.63 1421.59"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M243.63 1421.59L187.93 1545.63"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M187.93 1545.63L187.93 1545.63"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M355.61 993.72L355.61 993.72"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M355.61 993.72L353.85 1089.13"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M353.85 1089.13L353.85 1089.13"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M347.76 1305.94L347.76 1305.94"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M347.76 1305.94L381.33 1391.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M347.76 1305.94L489.06 1281.96"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M381.33 1391.76L381.33 1391.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M381.33 1391.76L243.63 1421.59"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M381.33 1391.76L395.74 1538.11"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M381.33 1391.76L489.06 1281.96"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M395.74 1538.11L395.74 1538.11"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M395.74 1538.11L517.22 1612.46"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M395.74 1538.11L536.73 1423.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M395.74 1538.11L243.63 1421.59"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M538.54 833.49L538.54 833.49"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M538.54 833.49L558.95 946.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M538.54 833.49L695.85 858.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M538.54 833.49L641.15 970.17"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M538.54 833.49L355.61 993.72"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M538.54 833.49L797.97 971.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M558.95 946.33L558.95 946.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M558.95 946.33L641.15 970.17"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M558.95 946.33L695.85 858.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M558.95 946.33L355.61 993.72"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M558.95 946.33L683.14 1121.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M558.95 946.33L797.97 971.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M489.06 1281.96L489.06 1281.96"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M489.06 1281.96L536.73 1423.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M489.06 1281.96L712.5 1288.42"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M489.06 1281.96L683.38 1397.46"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M536.73 1423.15L536.73 1423.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M536.73 1423.15L683.38 1397.46"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M536.73 1423.15L381.33 1391.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M517.22 1612.46L517.22 1612.46"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M695.85 858.56L695.85 858.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M695.85 858.56L641.15 970.17"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M695.85 858.56L840.8 813.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M695.85 858.56L797.97 971.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M695.85 858.56L683.14 1121.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M641.15 970.17L641.15 970.17"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M641.15 970.17L683.14 1121.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M641.15 970.17L797.97 971.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M683.14 1121.15L683.14 1121.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M683.14 1121.15L790.5 1121.7"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M683.14 1121.15L712.5 1288.42"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M683.14 1121.15L797.97 971.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M712.5 1288.42L712.5 1288.42"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M712.5 1288.42L683.38 1397.46"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M712.5 1288.42L826.76 1251.27"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M712.5 1288.42L801.59 1391.86"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M712.5 1288.42L790.5 1121.7"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M712.5 1288.42L536.73 1423.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M683.38 1397.46L683.38 1397.46"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M683.38 1397.46L801.59 1391.86"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M683.38 1397.46L658.55 1558.3"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M658.55 1558.3L658.55 1558.3"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M658.55 1558.3L517.22 1612.46"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M658.55 1558.3L536.73 1423.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M658.55 1558.3L853.24 1565.61"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M658.55 1558.3L801.59 1391.86"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M658.55 1558.3L395.74 1538.11"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M840.8 813.53L840.8 813.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M840.8 813.53L980.41 807.34"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M797.97 971.26L797.97 971.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M797.97 971.26L940.72 965.01"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M797.97 971.26L790.5 1121.7"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M797.97 971.26L840.8 813.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M790.5 1121.7L790.5 1121.7"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M790.5 1121.7L826.76 1251.27"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M790.5 1121.7L964.55 1152.59"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M790.5 1121.7L641.15 970.17"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M826.76 1251.27L826.76 1251.27"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M826.76 1251.27L801.59 1391.86"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M826.76 1251.27L982.3 1246.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M826.76 1251.27L964.55 1152.59"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M801.59 1391.86L801.59 1391.86"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M801.59 1391.86L947.25 1425.11"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M853.24 1565.61L853.24 1565.61"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M853.24 1565.61L981.09 1577.34"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M853.24 1565.61L947.25 1425.11"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M853.24 1565.61L801.59 1391.86"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1003.52 658.62L1003.52 658.62"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1003.52 658.62L1107.74 691.24"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1003.52 658.62L980.41 807.34"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1003.52 658.62L840.8 813.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1003.52 658.62L1125.13 856.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1003.52 658.62L1252.64 685.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M980.41 807.34L980.41 807.34"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M940.72 965.01L940.72 965.01"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M964.55 1152.59L964.55 1152.59"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M964.55 1152.59L982.3 1246.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M964.55 1152.59L1124.45 1128.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M982.3 1246.85L982.3 1246.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M982.3 1246.85L1130.79 1306.16"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M947.25 1425.11L947.25 1425.11"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M947.25 1425.11L1099.63 1418.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M947.25 1425.11L981.09 1577.34"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M981.09 1577.34L981.09 1577.34"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M981.09 1577.34L1124 1550.03"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1107.74 691.24L1107.74 691.24"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1107.74 691.24L1252.64 685.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1107.74 691.24L1125.13 856.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1125.13 856.93L1125.13 856.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1125.13 856.93L1125.24 966.47"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1125.24 966.47L1125.24 966.47"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1125.24 966.47L1124.45 1128.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1125.24 966.47L1290.85 986.95"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1124.45 1128.43L1124.45 1128.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1124.45 1128.43L1270.73 1092.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1130.79 1306.16L1130.79 1306.16"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1130.79 1306.16L1099.63 1418.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1130.79 1306.16L1293.59 1250.23"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1130.79 1306.16L1124.45 1128.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1130.79 1306.16L1268.06 1451.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1099.63 1418.48L1099.63 1418.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1099.63 1418.48L1124 1550.03"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1099.63 1418.48L1268.06 1451.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1124 1550.03L1124 1550.03"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1124 1550.03L1241.43 1588.04"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1124 1550.03L1268.06 1451.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1124 1550.03L947.25 1425.11"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1124 1550.03L1130.79 1306.16"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1285.61 540.93L1285.61 540.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1285.61 540.93L1401.91 553.22"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1285.61 540.93L1252.64 685.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1285.61 540.93L1433.15 696.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1285.61 540.93L1107.74 691.24"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1285.61 540.93L1256.2 805.84"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1285.61 540.93L1543.75 646.32"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1252.64 685.33L1252.64 685.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1252.64 685.33L1256.2 805.84"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1252.64 685.33L1433.15 696.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1252.64 685.33L1404.82 793.42"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1256.2 805.84L1256.2 805.84"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1256.2 805.84L1125.13 856.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1256.2 805.84L1404.82 793.42"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1256.2 805.84L1290.85 986.95"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1256.2 805.84L1107.74 691.24"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1256.2 805.84L1388.11 950.47"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1290.85 986.95L1290.85 986.95"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1290.85 986.95L1388.11 950.47"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1290.85 986.95L1270.73 1092.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1270.73 1092.33L1270.73 1092.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1270.73 1092.33L1293.59 1250.23"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1270.73 1092.33L1388.11 950.47"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1293.59 1250.23L1293.59 1250.23"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1293.59 1250.23L1403.56 1290.7"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1268.06 1451.92L1268.06 1451.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1268.06 1451.92L1241.43 1588.04"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1268.06 1451.92L1454.15 1454.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1241.43 1588.04L1241.43 1588.04"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1401.91 553.22L1401.91 553.22"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1401.91 553.22L1433.15 696.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1401.91 553.22L1543.75 646.32"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1433.15 696.19L1433.15 696.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1433.15 696.19L1404.82 793.42"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1433.15 696.19L1543.75 646.32"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1404.82 793.42L1404.82 793.42"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1388.11 950.47L1388.11 950.47"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1388.11 950.47L1404.82 793.42"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1459.01 1157.67L1459.01 1157.67"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1459.01 1157.67L1553.65 1244.88"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1459.01 1157.67L1585.67 1114.89"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1459.01 1157.67L1403.56 1290.7"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1459.01 1157.67L1293.59 1250.23"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1459.01 1157.67L1270.73 1092.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1403.56 1290.7L1403.56 1290.7"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1403.56 1290.7L1553.65 1244.88"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1403.56 1290.7L1454.15 1454.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1403.56 1290.7L1268.06 1451.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1454.15 1454.85L1454.15 1454.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1454.15 1454.85L1447.98 1548.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1454.15 1454.85L1592.98 1452.01"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1454.15 1454.85L1589.96 1568.74"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1447.98 1548.43L1447.98 1548.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1447.98 1548.43L1589.96 1568.74"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1447.98 1548.43L1592.98 1452.01"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1447.98 1548.43L1268.06 1451.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1583.47 -48.85L1583.47 -48.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1583.47 -48.85L1709.03 -99.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1583.47 -48.85L1688.19 105.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1583.47 -48.85L1573.46 225.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1583.47 -48.85L1848.81 106.54"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1583.47 -48.85L1689.86 246.98"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1573.46 225.43L1573.46 225.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1573.46 225.43L1689.86 246.98"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1573.46 225.43L1585.61 348.2"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1573.46 225.43L1688.19 105.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1585.61 348.2L1585.61 348.2"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1585.61 348.2L1712.07 354.51"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1585.61 348.2L1689.86 246.98"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1585.61 348.2L1603.92 522.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1585.61 348.2L1759.39 492.3"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1585.61 348.2L1688.19 105.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1603.92 522.53L1603.92 522.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1603.92 522.53L1543.75 646.32"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1603.92 522.53L1759.39 492.3"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1543.75 646.32L1543.75 646.32"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1543.75 646.32L1591.37 800.79"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1543.75 646.32L1404.82 793.42"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1543.75 646.32L1759.94 686.51"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1591.37 800.79L1591.37 800.79"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1591.37 800.79L1731.03 832.9"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1591.37 800.79L1569.77 948.83"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1591.37 800.79L1688.03 959.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1591.37 800.79L1404.82 793.42"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1591.37 800.79L1433.15 696.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1569.77 948.83L1569.77 948.83"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1569.77 948.83L1688.03 959.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1569.77 948.83L1585.67 1114.89"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1585.67 1114.89L1585.67 1114.89"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1585.67 1114.89L1553.65 1244.88"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1553.65 1244.88L1553.65 1244.88"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1553.65 1244.88L1734.78 1303.02"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1553.65 1244.88L1592.98 1452.01"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1553.65 1244.88L1693.95 1410.55"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1592.98 1452.01L1592.98 1452.01"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1592.98 1452.01L1693.95 1410.55"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1592.98 1452.01L1589.96 1568.74"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1589.96 1568.74L1589.96 1568.74"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1589.96 1568.74L1708.63 1547.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1589.96 1568.74L1693.95 1410.55"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1589.96 1568.74L1872.87 1538.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1709.03 -99.15L1709.03 -99.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1709.03 -99.15L1688.19 105.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1709.03 -99.15L1848.81 106.54"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1709.03 -99.15L1689.86 246.98"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1688.19 105.92L1688.19 105.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1688.19 105.92L1689.86 246.98"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1688.19 105.92L1848.81 106.54"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1688.19 105.92L1861.82 229.22"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1689.86 246.98L1689.86 246.98"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1689.86 246.98L1712.07 354.51"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1689.86 246.98L1861.82 229.22"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1689.86 246.98L1848.81 106.54"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1712.07 354.51L1712.07 354.51"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1712.07 354.51L1759.39 492.3"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1712.07 354.51L1892.58 383.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1712.07 354.51L1573.46 225.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1759.39 492.3L1759.39 492.3"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1759.39 492.3L1892.58 383.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1759.94 686.51L1759.94 686.51"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1759.94 686.51L1872.28 668.97"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1759.94 686.51L1731.03 832.9"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1731.03 832.9L1731.03 832.9"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1731.03 832.9L1861.75 833.39"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1731.03 832.9L1688.03 959.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1688.03 959.48L1688.03 959.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1688.03 959.48L1848.07 998.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1751.95 1149.24L1751.95 1149.24"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1751.95 1149.24L1896.1 1131.08"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1751.95 1149.24L1734.78 1303.02"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1751.95 1149.24L1585.67 1114.89"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1751.95 1149.24L1852.45 1293.01"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1751.95 1149.24L1848.07 998.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1751.95 1149.24L1688.03 959.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1734.78 1303.02L1734.78 1303.02"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1734.78 1303.02L1693.95 1410.55"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1734.78 1303.02L1852.45 1293.01"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1734.78 1303.02L1873.44 1398.88"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1693.95 1410.55L1693.95 1410.55"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1693.95 1410.55L1708.63 1547.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1693.95 1410.55L1873.44 1398.88"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1708.63 1547.25L1708.63 1547.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1708.63 1547.25L1592.98 1452.01"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1848.81 106.54L1848.81 106.54"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1848.81 106.54L1861.82 229.22"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1848.81 106.54L2013.39 68.81"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1848.81 106.54L2019.37 236.82"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1861.82 229.22L1861.82 229.22"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1861.82 229.22L1892.58 383.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1861.82 229.22L2019.37 236.82"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1861.82 229.22L1712.07 354.51"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1892.58 383.19L1892.58 383.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1872.28 668.97L1872.28 668.97"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1872.28 668.97L1861.75 833.39"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1872.28 668.97L2057.33 639.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1872.28 668.97L2014.44 815.29"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1872.28 668.97L1759.39 492.3"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1861.75 833.39L1861.75 833.39"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1861.75 833.39L2014.44 815.29"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1861.75 833.39L1848.07 998.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1861.75 833.39L1759.94 686.51"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1861.75 833.39L1688.03 959.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1848.07 998.53L1848.07 998.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1848.07 998.53L1896.1 1131.08"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1896.1 1131.08L1896.1 1131.08"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1896.1 1131.08L2000.81 1108.45"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1896.1 1131.08L1852.45 1293.01"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1896.1 1131.08L1999.28 1299.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1852.45 1293.01L1852.45 1293.01"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1852.45 1293.01L1873.44 1398.88"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1852.45 1293.01L1999.28 1299.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1873.44 1398.88L1873.44 1398.88"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1873.44 1398.88L1872.87 1538.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1873.44 1398.88L1999.28 1299.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1873.44 1398.88L2040.82 1399.39"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1872.87 1538.53L1872.87 1538.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1872.87 1538.53L1708.63 1547.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2060.28 -70.85L2060.28 -70.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2060.28 -70.85L2013.39 68.81"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2060.28 -70.85L2172.23 39.58"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2060.28 -70.85L2313.49 -57.54"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2060.28 -70.85L1848.81 106.54"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2060.28 -70.85L2325.4 52.75"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2060.28 -70.85L2019.37 236.82"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2013.39 68.81L2013.39 68.81"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2013.39 68.81L2172.23 39.58"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2013.39 68.81L2019.37 236.82"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2013.39 68.81L1861.82 229.22"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2019.37 236.82L2019.37 236.82"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2019.37 236.82L2176.48 223.59"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2019.37 236.82L2166.83 337.58"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2019.37 236.82L1892.58 383.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2041.93 533.97L2041.93 533.97"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2041.93 533.97L2057.33 639.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2041.93 533.97L2196.35 546.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2041.93 533.97L1892.58 383.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2057.33 639.76L2057.33 639.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2057.33 639.76L2210.4 688.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2057.33 639.76L2196.35 546.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2057.33 639.76L2014.44 815.29"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2014.44 815.29L2014.44 815.29"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2014.44 815.29L2153.17 814.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2014.44 815.29L2054.41 964.81"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2054.41 964.81L2054.41 964.81"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2054.41 964.81L2193.23 993.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2054.41 964.81L2000.81 1108.45"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2054.41 964.81L2179.51 1093.79"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2054.41 964.81L2153.17 814.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2000.81 1108.45L2000.81 1108.45"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2000.81 1108.45L2179.51 1093.79"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2000.81 1108.45L1848.07 998.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1999.28 1299.93L1999.28 1299.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1999.28 1299.93L2040.82 1399.39"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1999.28 1299.93L2000.81 1108.45"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1999.28 1299.93L2182.37 1243.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2040.82 1399.39L2040.82 1399.39"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2040.82 1399.39L2166.75 1440.61"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2040.82 1399.39L2050.42 1609.35"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2040.82 1399.39L2182.37 1243.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2040.82 1399.39L2203.63 1541"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2050.42 1609.35L2050.42 1609.35"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2050.42 1609.35L2203.63 1541"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2050.42 1609.35L1872.87 1538.53"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2050.42 1609.35L2166.75 1440.61"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2050.42 1609.35L1873.44 1398.88"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2172.23 39.58L2172.23 39.58"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2172.23 39.58L2325.4 52.75"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2172.23 39.58L2313.49 -57.54"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2176.48 223.59L2176.48 223.59"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2176.48 223.59L2166.83 337.58"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2166.83 337.58L2166.83 337.58"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2166.83 337.58L2357.71 349.21"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2196.35 546.93L2196.35 546.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2196.35 546.93L2288.25 530.32"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2196.35 546.93L2210.4 688.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2210.4 688.19L2210.4 688.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2210.4 688.19L2341.82 696.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2210.4 688.19L2153.17 814.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2153.17 814.15L2153.17 814.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2193.23 993.56L2193.23 993.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2193.23 993.56L2179.51 1093.79"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2193.23 993.56L2328.47 952.99"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2193.23 993.56L2153.17 814.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2193.23 993.56L2331.59 844.16"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2193.23 993.56L2350.46 1152.34"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2179.51 1093.79L2179.51 1093.79"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2179.51 1093.79L2182.37 1243.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2179.51 1093.79L2350.46 1152.34"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2179.51 1093.79L2328.47 952.99"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2182.37 1243.25L2182.37 1243.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2182.37 1243.25L2326.84 1242.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2166.75 1440.61L2166.75 1440.61"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2166.75 1440.61L2203.63 1541"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2203.63 1541L2203.63 1541"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2313.49 -57.54L2313.49 -57.54"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2313.49 -57.54L2325.4 52.75"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2313.49 -57.54L2473.17 -71.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2325.4 52.75L2325.4 52.75"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2325.4 52.75L2472.68 76.62"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2325.4 52.75L2353.53 239.79"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2325.4 52.75L2473.17 -71.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2325.4 52.75L2469.52 192.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2353.53 239.79L2353.53 239.79"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2353.53 239.79L2357.71 349.21"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2353.53 239.79L2469.52 192.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2353.53 239.79L2176.48 223.59"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2353.53 239.79L2497.48 358.86"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2357.71 349.21L2357.71 349.21"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2357.71 349.21L2497.48 358.86"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2357.71 349.21L2469.52 192.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2288.25 530.32L2288.25 530.32"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2288.25 530.32L2341.82 696.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2288.25 530.32L2210.4 688.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2288.25 530.32L2469.88 511.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2288.25 530.32L2357.71 349.21"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2341.82 696.26L2341.82 696.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2341.82 696.26L2331.59 844.16"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2341.82 696.26L2494.45 698.2"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2331.59 844.16L2331.59 844.16"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2331.59 844.16L2328.47 952.99"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2331.59 844.16L2464.91 855.13"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2331.59 844.16L2153.17 814.15"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2331.59 844.16L2210.4 688.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2328.47 952.99L2328.47 952.99"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2328.47 952.99L2457.97 1008"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2350.46 1152.34L2350.46 1152.34"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2350.46 1152.34L2326.84 1242.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2350.46 1152.34L2454.34 1119.14"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2326.84 1242.85L2326.84 1242.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2322.42 1414.68L2322.42 1414.68"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2322.42 1414.68L2466.26 1405.66"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2322.42 1414.68L2166.75 1440.61"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2322.42 1414.68L2356.34 1573.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2356.34 1573.93L2356.34 1573.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2356.34 1573.93L2464.61 1574.41"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2356.34 1573.93L2203.63 1541"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2473.17 -71.85L2473.17 -71.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2473.17 -71.85L2596.7 -102.38"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2473.17 -71.85L2472.68 76.62"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2472.68 76.62L2472.68 76.62"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2472.68 76.62L2469.52 192.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2472.68 76.62L2626.22 50.08"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2472.68 76.62L2630.45 198.49"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2469.52 192.56L2469.52 192.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2497.48 358.86L2497.48 358.86"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2497.48 358.86L2595.21 402.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2497.48 358.86L2469.88 511.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2497.48 358.86L2469.52 192.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2497.48 358.86L2630.45 198.49"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2469.88 511.92L2469.88 511.92"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2469.88 511.92L2617.13 559.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2494.45 698.2L2494.45 698.2"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2494.45 698.2L2630.97 670.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2494.45 698.2L2464.91 855.13"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2494.45 698.2L2588.48 837.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2464.91 855.13L2464.91 855.13"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2464.91 855.13L2588.48 837.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2464.91 855.13L2457.97 1008"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2457.97 1008L2457.97 1008"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2457.97 1008L2454.34 1119.14"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2457.97 1008L2350.46 1152.34"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2454.34 1119.14L2454.34 1119.14"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2466.26 1405.66L2466.26 1405.66"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2466.26 1405.66L2593.94 1410.37"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2466.26 1405.66L2464.61 1574.41"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2466.26 1405.66L2597.38 1286.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2464.61 1574.41L2464.61 1574.41"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2464.61 1574.41L2620.72 1597.6"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2464.61 1574.41L2593.94 1410.37"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2596.7 -102.38L2596.7 -102.38"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2596.7 -102.38L2745.21 -69.99"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2626.22 50.08L2626.22 50.08"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2626.22 50.08L2630.45 198.49"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2626.22 50.08L2596.7 -102.38"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2630.45 198.49L2630.45 198.49"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2630.45 198.49L2469.52 192.56"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2630.45 198.49L2805.64 221.58"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2595.21 402.76L2595.21 402.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2595.21 402.76L2617.13 559.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2595.21 402.76L2758.41 386.77"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2617.13 559.43L2617.13 559.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2617.13 559.43L2630.97 670.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2630.97 670.25L2630.97 670.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2630.97 670.25L2753.74 683.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2588.48 837.76L2588.48 837.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2588.48 837.76L2654.66 995.28"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2588.48 837.76L2630.97 670.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2588.48 837.76L2739.36 952.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2654.66 995.28L2654.66 995.28"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2654.66 995.28L2739.36 952.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2654.66 995.28L2653.4 1154.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2653.4 1154.26L2653.4 1154.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2653.4 1154.26L2597.38 1286.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2653.4 1154.26L2454.34 1119.14"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2597.38 1286.33L2597.38 1286.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2597.38 1286.33L2593.94 1410.37"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2593.94 1410.37L2593.94 1410.37"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2593.94 1410.37L2760.91 1432.45"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2593.94 1410.37L2620.72 1597.6"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2593.94 1410.37L2762.83 1567.71"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2620.72 1597.6L2620.72 1597.6"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2620.72 1597.6L2762.83 1567.71"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2620.72 1597.6L2760.91 1432.45"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2620.72 1597.6L2466.26 1405.66"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2620.72 1597.6L2356.34 1573.93"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2745.21 -69.99L2745.21 -69.99"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2745.21 -69.99L2787.57 47.94"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2745.21 -69.99L2626.22 50.08"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2745.21 -69.99L2473.17 -71.85"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.57 47.94L2787.57 47.94"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.57 47.94L2626.22 50.08"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.57 47.94L2805.64 221.58"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.57 47.94L2630.45 198.49"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.57 47.94L2596.7 -102.38"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.57 47.94L2472.68 76.62"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2805.64 221.58L2805.64 221.58"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2805.64 221.58L2758.41 386.77"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2805.64 221.58L2626.22 50.08"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2758.41 386.77L2758.41 386.77"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.25 559.19L2787.25 559.19"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.25 559.19L2753.74 683.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.25 559.19L2617.13 559.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.25 559.19L2758.41 386.77"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.25 559.19L2630.97 670.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.25 559.19L2810.55 789.61"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2787.25 559.19L2595.21 402.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2753.74 683.48L2753.74 683.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2753.74 683.48L2810.55 789.61"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2753.74 683.48L2617.13 559.43"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2753.74 683.48L2588.48 837.76"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2810.55 789.61L2810.55 789.61"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2810.55 789.61L2739.36 952.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2739.36 952.25L2739.36 952.25"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2739.36 952.25L2653.4 1154.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2739.36 952.25L2753.74 683.48"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2739.36 952.25L2457.97 1008"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2760.91 1432.45L2760.91 1432.45"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2760.91 1432.45L2762.83 1567.71"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2760.91 1432.45L2597.38 1286.33"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2760.91 1432.45L2466.26 1405.66"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2760.91 1432.45L2653.4 1154.26"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2762.83 1567.71L2762.83 1567.71"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2762.83 1567.71L2464.61 1574.41"
            stroke="var(--color-panel)"
            stroke-width="1.5"
          ></path>
          <circle
            r="5"
            cx="-89.16"
            cy="973.76"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="-74.06"
            cy="1139.27"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="-77.36"
            cy="1274.91"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="-91.69"
            cy="1413.6"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="95.79"
            cy="969.8"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="48.14"
            cy="1119.62"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="40.83"
            cy="1247.95"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="107.98"
            cy="1433.74"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="253.92"
            cy="977.77"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="244.71"
            cy="1124.05"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="260.83"
            cy="1307.06"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="243.63"
            cy="1421.59"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="187.93"
            cy="1545.63"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="355.61"
            cy="993.72"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="353.85"
            cy="1089.13"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="347.76"
            cy="1305.94"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="381.33"
            cy="1391.76"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="395.74"
            cy="1538.11"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="538.54"
            cy="833.49"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="558.95"
            cy="946.33"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="489.06"
            cy="1281.96"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="536.73"
            cy="1423.15"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="517.22"
            cy="1612.46"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="695.85"
            cy="858.56"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="641.15"
            cy="970.17"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="683.14"
            cy="1121.15"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="712.5"
            cy="1288.42"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="683.38"
            cy="1397.46"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="658.55"
            cy="1558.3"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="840.8"
            cy="813.53"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="797.97"
            cy="971.26"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="790.5"
            cy="1121.7"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="826.76"
            cy="1251.27"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="801.59"
            cy="1391.86"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="853.24"
            cy="1565.61"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1003.52"
            cy="658.62"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="980.41"
            cy="807.34"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="940.72"
            cy="965.01"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="964.55"
            cy="1152.59"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="982.3"
            cy="1246.85"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="947.25"
            cy="1425.11"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="981.09"
            cy="1577.34"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1107.74"
            cy="691.24"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1125.13"
            cy="856.93"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1125.24"
            cy="966.47"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1124.45"
            cy="1128.43"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1130.79"
            cy="1306.16"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1099.63"
            cy="1418.48"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1124"
            cy="1550.03"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1285.61"
            cy="540.93"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1252.64"
            cy="685.33"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1256.2"
            cy="805.84"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1290.85"
            cy="986.95"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1270.73"
            cy="1092.33"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1293.59"
            cy="1250.23"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1268.06"
            cy="1451.92"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1241.43"
            cy="1588.04"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1401.91"
            cy="553.22"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1433.15"
            cy="696.19"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1404.82"
            cy="793.42"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1388.11"
            cy="950.47"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1459.01"
            cy="1157.67"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1403.56"
            cy="1290.7"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1454.15"
            cy="1454.85"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1447.98"
            cy="1548.43"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1583.47"
            cy="-48.85"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1573.46"
            cy="225.43"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1585.61"
            cy="348.2"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1603.92"
            cy="522.53"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1543.75"
            cy="646.32"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1591.37"
            cy="800.79"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1569.77"
            cy="948.83"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1585.67"
            cy="1114.89"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1553.65"
            cy="1244.88"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1592.98"
            cy="1452.01"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1589.96"
            cy="1568.74"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1709.03"
            cy="-99.15"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1688.19"
            cy="105.92"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1689.86"
            cy="246.98"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1712.07"
            cy="354.51"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1759.39"
            cy="492.3"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1759.94"
            cy="686.51"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1731.03"
            cy="832.9"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1688.03"
            cy="959.48"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1751.95"
            cy="1149.24"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1734.78"
            cy="1303.02"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1693.95"
            cy="1410.55"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1708.63"
            cy="1547.25"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1848.81"
            cy="106.54"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1861.82"
            cy="229.22"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1892.58"
            cy="383.19"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1872.28"
            cy="668.97"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1861.75"
            cy="833.39"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1848.07"
            cy="998.53"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1896.1"
            cy="1131.08"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1852.45"
            cy="1293.01"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1873.44"
            cy="1398.88"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1872.87"
            cy="1538.53"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2060.28"
            cy="-70.85"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2013.39"
            cy="68.81"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2019.37"
            cy="236.82"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2041.93"
            cy="533.97"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2057.33"
            cy="639.76"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2014.44"
            cy="815.29"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2054.41"
            cy="964.81"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2000.81"
            cy="1108.45"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="1999.28"
            cy="1299.93"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2040.82"
            cy="1399.39"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2050.42"
            cy="1609.35"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2172.23"
            cy="39.58"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2176.48"
            cy="223.59"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2166.83"
            cy="337.58"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2196.35"
            cy="546.93"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2210.4"
            cy="688.19"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2153.17"
            cy="814.15"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2193.23"
            cy="993.56"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2179.51"
            cy="1093.79"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2182.37"
            cy="1243.25"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2166.75"
            cy="1440.61"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2203.63"
            cy="1541"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2313.49"
            cy="-57.54"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2325.4"
            cy="52.75"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2353.53"
            cy="239.79"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2357.71"
            cy="349.21"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2288.25"
            cy="530.32"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2341.82"
            cy="696.26"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2331.59"
            cy="844.16"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2328.47"
            cy="952.99"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2350.46"
            cy="1152.34"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2326.84"
            cy="1242.85"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2322.42"
            cy="1414.68"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2356.34"
            cy="1573.93"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2473.17"
            cy="-71.85"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2472.68"
            cy="76.62"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2469.52"
            cy="192.56"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2497.48"
            cy="358.86"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2469.88"
            cy="511.92"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2494.45"
            cy="698.2"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2464.91"
            cy="855.13"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2457.97"
            cy="1008"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2454.34"
            cy="1119.14"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2466.26"
            cy="1405.66"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2464.61"
            cy="1574.41"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2596.7"
            cy="-102.38"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2626.22"
            cy="50.08"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2630.45"
            cy="198.49"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2595.21"
            cy="402.76"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2617.13"
            cy="559.43"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2630.97"
            cy="670.25"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2588.48"
            cy="837.76"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2654.66"
            cy="995.28"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2653.4"
            cy="1154.26"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2597.38"
            cy="1286.33"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2593.94"
            cy="1410.37"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2620.72"
            cy="1597.6"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2745.21"
            cy="-69.99"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2787.57"
            cy="47.94"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2805.64"
            cy="221.58"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2758.41"
            cy="386.77"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2787.25"
            cy="559.19"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2753.74"
            cy="683.48"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2810.55"
            cy="789.61"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2739.36"
            cy="952.25"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2760.91"
            cy="1432.45"
            fill="var(--color-panel)"
          ></circle>
          <circle
            r="5"
            cx="2762.83"
            cy="1567.71"
            fill="var(--color-panel)"
          ></circle>
          <path
            d="M242.16 1268.05L242.16 1268.05"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M242.16 1268.05L369.05 1309.27"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M242.16 1268.05L228.91 1425.7"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M242.16 1268.05L380.8 1432.06"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M242.16 1268.05L93.32 1452.6"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.81 1578.87L253.81 1578.87"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.81 1578.87L347.84 1603.3"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.81 1578.87L228.91 1425.7"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.81 1578.87L380.8 1432.06"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.81 1578.87L57.74 1572.6"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.81 1578.87L93.32 1452.6"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M253.81 1578.87L369.05 1309.27"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M347.84 1603.3L347.84 1603.3"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M347.84 1603.3L380.8 1432.06"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M347.84 1603.3L228.91 1425.7"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M347.84 1603.3L497.28 1388.68"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M347.84 1603.3L57.74 1572.6"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M502.04 1253.76L502.04 1253.76"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M502.04 1253.76L557.7 1145.78"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M502.04 1253.76L497.28 1388.68"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M502.04 1253.76L369.05 1309.27"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M502.04 1253.76L662.55 1305.22"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M502.04 1253.76L638.27 1131.79"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M502.04 1253.76L380.8 1432.06"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M675.46 1416.63L675.46 1416.63"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M675.46 1416.63L662.55 1305.22"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M675.46 1416.63L807.87 1387.83"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M675.46 1416.63L644.81 1553.68"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M675.46 1416.63L797.41 1545.39"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M675.46 1416.63L497.28 1388.68"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M675.46 1416.63L502.04 1253.76"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M861.43 1120.67L861.43 1120.67"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M861.43 1120.67L948.19 1140.71"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M992.2 1397.03L992.2 1397.03"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M992.2 1397.03L998.99 1297.44"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M992.2 1397.03L1108.91 1426.8"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M992.2 1397.03L1099.45 1309.81"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M992.2 1397.03L807.87 1387.83"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M992.2 1397.03L1096.38 1583.67"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1282.98 1147.49L1282.98 1147.49"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1282.98 1147.49L1266.1 992.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1282.98 1147.49L1113.17 1115.42"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1282.98 1147.49L1420.72 997.11"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1282.98 1147.49L1459.95 1271.9"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1459.95 1271.9L1459.95 1271.9"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1459.95 1271.9L1562.51 1252.89"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1459.95 1271.9L1443.85 1393.39"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1459.95 1271.9L1551 1101.84"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1419.62 1539.67L1419.62 1539.67"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1419.62 1539.67L1543.28 1544.29"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1419.62 1539.67L1443.85 1393.39"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1419.62 1539.67L1238.36 1612.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1419.62 1539.67L1274.99 1400.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1419.62 1539.67L1607.05 1431.9"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1419.62 1539.67L1459.95 1271.9"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1607.05 1431.9L1607.05 1431.9"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1607.05 1431.9L1697.3 1458.28"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1607.05 1431.9L1543.28 1544.29"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1607.05 1431.9L1710.02 1561.92"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1607.05 1431.9L1443.85 1393.39"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1607.05 1431.9L1706.33 1285.96"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1904.02 513.02L1904.02 513.02"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1904.02 513.02L2052.63 504.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1904.02 513.02L1888.36 693.23"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1904.02 513.02L2023.54 660.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2180.7 1130.18L2180.7 1130.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2180.7 1130.18L2182.17 1278.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2180.7 1130.18L2151.96 976.19"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2180.7 1130.18L2299.61 1241.33"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2333.8 -89.9L2333.8 -89.9"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2333.8 -89.9L2328.69 57.71"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2333.8 -89.9L2503.55 -72.88"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2333.8 -89.9L2168.13 50.32"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2333.8 -89.9L2056.85 -93.42"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2333.8 -89.9L2614.84 -63.22"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2456.71 489.24L2456.71 489.24"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2456.71 489.24L2459.1 412.5"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2456.71 489.24L2307.47 515.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2456.71 489.24L2346.44 377.54"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2456.71 489.24L2456.9 692.29"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2456.71 489.24L2606.74 344.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2456.71 489.24L2594.7 673.3"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2456.9 692.29L2456.9 692.29"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2456.9 692.29L2594.7 673.3"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2456.9 692.29L2474.3 837.27"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2456.9 692.29L2618.91 853.73"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2441.25 1539.45L2441.25 1539.45"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2441.25 1539.45L2468.05 1434.11"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2441.25 1539.45L2335.16 1576.55"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2657.45 101.93L2657.45 101.93"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2657.45 101.93L2738.55 74.36"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2657.45 101.93L2647.92 226.48"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2657.45 101.93L2769.93 221.05"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2594.7 673.3L2594.7 673.3"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2594.7 673.3L2618.91 853.73"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2590.24 1575.83L2590.24 1575.83"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2590.24 1575.83L2659.76 1454.16"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2590.24 1575.83L2441.25 1539.45"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2590.24 1575.83L2744.17 1609.53"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2590.24 1575.83L2468.05 1434.11"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2590.24 1575.83L2795.29 1425.12"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2590.24 1575.83L2335.16 1576.55"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2745.63 506.93L2745.63 506.93"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2745.63 506.93L2776.57 659.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2745.63 506.93L2606.74 344.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2745.63 506.93L2594.7 673.3"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2745.63 506.93L2769.93 221.05"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2745.63 506.93L2456.71 489.24"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2745.63 506.93L2647.92 226.48"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2764.97 832.74L2764.97 832.74"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2764.97 832.74L2618.91 853.73"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2764.97 832.74L2780.7 999.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2764.97 832.74L2776.57 659.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2764.97 832.74L2607.75 980.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-44.47 1250.41L-44.47 1250.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-44.47 1250.41L-100.51 1424.98"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-44.47 1250.41L93.32 1452.6"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-44.47 1250.41L242.16 1268.05"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-44.47 1250.41L228.91 1425.7"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-44.47 1250.41L-83.5 1574.73"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-100.51 1424.98L-100.51 1424.98"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-100.51 1424.98L-83.5 1574.73"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-100.51 1424.98L93.32 1452.6"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-83.5 1574.73L-83.5 1574.73"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M-83.5 1574.73L57.74 1572.6"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M93.32 1452.6L93.32 1452.6"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M93.32 1452.6L57.74 1572.6"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M93.32 1452.6L228.91 1425.7"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M57.74 1572.6L57.74 1572.6"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M57.74 1572.6L-100.51 1424.98"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M57.74 1572.6L228.91 1425.7"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M228.91 1425.7L228.91 1425.7"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M228.91 1425.7L380.8 1432.06"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M228.91 1425.7L369.05 1309.27"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M369.05 1309.27L369.05 1309.27"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M369.05 1309.27L380.8 1432.06"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M369.05 1309.27L497.28 1388.68"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M380.8 1432.06L380.8 1432.06"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M557.7 1145.78L557.7 1145.78"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M557.7 1145.78L638.27 1131.79"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M557.7 1145.78L662.55 1305.22"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M557.7 1145.78L369.05 1309.27"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M557.7 1145.78L497.28 1388.68"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M497.28 1388.68L497.28 1388.68"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M497.28 1388.68L380.8 1432.06"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M638.27 1131.79L638.27 1131.79"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M638.27 1131.79L662.55 1305.22"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M662.55 1305.22L662.55 1305.22"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M662.55 1305.22L807.87 1387.83"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M644.81 1553.68L644.81 1553.68"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M644.81 1553.68L797.41 1545.39"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M807.87 1387.83L807.87 1387.83"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M807.87 1387.83L797.41 1545.39"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M807.87 1387.83L998.99 1297.44"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M797.41 1545.39L797.41 1545.39"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M797.41 1545.39L947.17 1606.9"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M797.41 1545.39L992.2 1397.03"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M948.19 1140.71L948.19 1140.71"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M948.19 1140.71L998.99 1297.44"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M948.19 1140.71L1113.17 1115.42"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M948.19 1140.71L1090 1011.12"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M948.19 1140.71L1099.45 1309.81"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M998.99 1297.44L998.99 1297.44"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M998.99 1297.44L1099.45 1309.81"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M998.99 1297.44L1108.91 1426.8"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M947.17 1606.9L947.17 1606.9"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M947.17 1606.9L1096.38 1583.67"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M947.17 1606.9L992.2 1397.03"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1090 1011.12L1090 1011.12"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1090 1011.12L1113.17 1115.42"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1090 1011.12L1266.1 992.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1113.17 1115.42L1113.17 1115.42"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1099.45 1309.81L1099.45 1309.81"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1108.91 1426.8L1108.91 1426.8"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1108.91 1426.8L1099.45 1309.81"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1108.91 1426.8L1096.38 1583.67"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1108.91 1426.8L1274.99 1400.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1108.91 1426.8L1238.36 1612.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1096.38 1583.67L1096.38 1583.67"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1096.38 1583.67L1238.36 1612.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1096.38 1583.67L1274.99 1400.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1096.38 1583.67L1099.45 1309.81"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1266.1 992.18L1266.1 992.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1266.1 992.18L1420.72 997.11"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1274.99 1400.35L1274.99 1400.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1274.99 1400.35L1443.85 1393.39"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1274.99 1400.35L1099.45 1309.81"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1238.36 1612.41L1238.36 1612.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1420.72 997.11L1420.72 997.11"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1420.72 997.11L1551 1101.84"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1420.72 997.11L1594.76 981.17"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1420.72 997.11L1548.59 856.74"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1420.72 997.11L1459.95 1271.9"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1443.85 1393.39L1443.85 1393.39"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1548.59 856.74L1548.59 856.74"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1548.59 856.74L1594.76 981.17"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1548.59 856.74L1696.3 843.21"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1548.59 856.74L1705.67 1008"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1548.59 856.74L1702.5 693.99"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1594.76 981.17L1594.76 981.17"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1594.76 981.17L1705.67 1008"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1594.76 981.17L1551 1101.84"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1594.76 981.17L1695.77 1109.33"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1594.76 981.17L1696.3 843.21"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1551 1101.84L1551 1101.84"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1551 1101.84L1695.77 1109.33"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1551 1101.84L1562.51 1252.89"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1551 1101.84L1705.67 1008"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1562.51 1252.89L1562.51 1252.89"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1562.51 1252.89L1706.33 1285.96"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1562.51 1252.89L1443.85 1393.39"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1543.28 1544.29L1543.28 1544.29"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1543.28 1544.29L1710.02 1561.92"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1543.28 1544.29L1697.3 1458.28"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1543.28 1544.29L1443.85 1393.39"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1543.28 1544.29L1459.95 1271.9"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1702.5 693.99L1702.5 693.99"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1702.5 693.99L1696.3 843.21"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1702.5 693.99L1847.78 801.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1702.5 693.99L1888.36 693.23"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1702.5 693.99L1904.02 513.02"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1696.3 843.21L1696.3 843.21"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1696.3 843.21L1847.78 801.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1696.3 843.21L1705.67 1008"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1696.3 843.21L1875.29 948.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1705.67 1008L1705.67 1008"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1705.67 1008L1695.77 1109.33"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1705.67 1008L1875.29 948.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1695.77 1109.33L1695.77 1109.33"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1695.77 1109.33L1706.33 1285.96"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1695.77 1109.33L1562.51 1252.89"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1695.77 1109.33L1875.29 948.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1706.33 1285.96L1706.33 1285.96"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1706.33 1285.96L1697.3 1458.28"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1697.3 1458.28L1697.3 1458.28"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1697.3 1458.28L1710.02 1561.92"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1710.02 1561.92L1710.02 1561.92"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1710.02 1561.92L1862.38 1546.82"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1710.02 1561.92L1886.4 1445.26"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1888.36 693.23L1888.36 693.23"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1888.36 693.23L1847.78 801.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1888.36 693.23L2023.54 660.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1847.78 801.35L1847.78 801.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1847.78 801.35L1875.29 948.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1875.29 948.35L1875.29 948.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1875.29 948.35L2002.33 993.7"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1902.13 1268L1902.13 1268"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1902.13 1268L2041.38 1293.1"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1902.13 1268L1886.4 1445.26"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1902.13 1268L1706.33 1285.96"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1902.13 1268L2003.58 1458.88"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1902.13 1268L1695.77 1109.33"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1902.13 1268L1697.3 1458.28"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1886.4 1445.26L1886.4 1445.26"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1886.4 1445.26L1862.38 1546.82"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1886.4 1445.26L2003.58 1458.88"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1886.4 1445.26L1697.3 1458.28"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1862.38 1546.82L1862.38 1546.82"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1862.38 1546.82L2003.58 1458.88"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1862.38 1546.82L1697.3 1458.28"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M1862.38 1546.82L1607.05 1431.9"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2056.85 -93.42L2056.85 -93.42"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2056.85 -93.42L2168.13 50.32"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2056.85 -93.42L2328.69 57.71"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2056.85 -93.42L2188.26 242.3"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2056.85 -93.42L2350.42 217.63"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2057.48 358.56L2057.48 358.56"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2057.48 358.56L2155.56 369.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2057.48 358.56L2052.63 504.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2057.48 358.56L2188.26 242.3"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2052.63 504.34L2052.63 504.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2052.63 504.34L2154.56 554.29"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2052.63 504.34L2023.54 660.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2052.63 504.34L2155.56 369.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2052.63 504.34L2163.66 668.38"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2023.54 660.97L2023.54 660.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2023.54 660.97L2163.66 668.38"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2023.54 660.97L2040.18 819.49"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2040.18 819.49L2040.18 819.49"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2040.18 819.49L2182.8 788.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2040.18 819.49L2002.33 993.7"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2040.18 819.49L2151.96 976.19"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2040.18 819.49L1847.78 801.35"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2002.33 993.7L2002.33 993.7"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2002.33 993.7L2151.96 976.19"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2041.38 1293.1L2041.38 1293.1"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2041.38 1293.1L2182.17 1278.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2003.58 1458.88L2003.58 1458.88"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2003.58 1458.88L2150.79 1430.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2003.58 1458.88L2041.38 1293.1"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2168.13 50.32L2168.13 50.32"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2168.13 50.32L2328.69 57.71"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2188.26 242.3L2188.26 242.3"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2188.26 242.3L2155.56 369.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2188.26 242.3L2350.42 217.63"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2188.26 242.3L2168.13 50.32"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2188.26 242.3L2346.44 377.54"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2155.56 369.34L2155.56 369.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2155.56 369.34L2154.56 554.29"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2155.56 369.34L2346.44 377.54"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2155.56 369.34L2307.47 515.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2154.56 554.29L2154.56 554.29"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2154.56 554.29L2163.66 668.38"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2154.56 554.29L2307.47 515.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2154.56 554.29L2023.54 660.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2163.66 668.38L2163.66 668.38"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2163.66 668.38L2182.8 788.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2182.8 788.41L2182.8 788.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2182.8 788.41L2151.96 976.19"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2182.8 788.41L2023.54 660.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2151.96 976.19L2151.96 976.19"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2182.17 1278.34L2182.17 1278.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2182.17 1278.34L2299.61 1241.33"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2150.79 1430.97L2150.79 1430.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2150.79 1430.97L2169.44 1566.63"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2150.79 1430.97L2182.17 1278.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2150.79 1430.97L2041.38 1293.1"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2150.79 1430.97L2332.68 1458.44"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2169.44 1566.63L2169.44 1566.63"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2169.44 1566.63L2335.16 1576.55"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2169.44 1566.63L2332.68 1458.44"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2169.44 1566.63L2003.58 1458.88"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2169.44 1566.63L2441.25 1539.45"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2328.69 57.71L2328.69 57.71"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2328.69 57.71L2350.42 217.63"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2328.69 57.71L2491.76 189.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2350.42 217.63L2350.42 217.63"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2350.42 217.63L2491.76 189.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2350.42 217.63L2346.44 377.54"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2346.44 377.54L2346.44 377.54"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2346.44 377.54L2459.1 412.5"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2346.44 377.54L2307.47 515.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2307.47 515.51L2307.47 515.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2307.47 515.51L2459.1 412.5"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2307.47 515.51L2163.66 668.38"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2359.4 979.24L2359.4 979.24"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2359.4 979.24L2453.39 956.91"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2359.4 979.24L2361.52 1110.1"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2359.4 979.24L2474.3 837.27"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2359.4 979.24L2494.7 1123.65"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2359.4 979.24L2151.96 976.19"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2359.4 979.24L2180.7 1130.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2361.52 1110.1L2361.52 1110.1"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2361.52 1110.1L2494.7 1123.65"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2361.52 1110.1L2299.61 1241.33"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2361.52 1110.1L2453.39 956.91"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2361.52 1110.1L2180.7 1130.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2361.52 1110.1L2182.17 1278.34"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2299.61 1241.33L2299.61 1241.33"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2299.61 1241.33L2332.68 1458.44"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2299.61 1241.33L2494.7 1123.65"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2299.61 1241.33L2150.79 1430.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2332.68 1458.44L2332.68 1458.44"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2332.68 1458.44L2335.16 1576.55"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2332.68 1458.44L2441.25 1539.45"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2332.68 1458.44L2468.05 1434.11"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2335.16 1576.55L2335.16 1576.55"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2335.16 1576.55L2468.05 1434.11"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2503.55 -72.88L2503.55 -72.88"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2503.55 -72.88L2614.84 -63.22"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2491.76 189.18L2491.76 189.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2491.76 189.18L2647.92 226.48"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2491.76 189.18L2657.45 101.93"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2491.76 189.18L2606.74 344.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2459.1 412.5L2459.1 412.5"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2459.1 412.5L2606.74 344.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2474.3 837.27L2474.3 837.27"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2474.3 837.27L2453.39 956.91"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2474.3 837.27L2618.91 853.73"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2474.3 837.27L2607.75 980.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2453.39 956.91L2453.39 956.91"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2494.7 1123.65L2494.7 1123.65"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2494.7 1123.65L2610.35 1145.67"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2494.7 1123.65L2453.39 956.91"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2494.7 1123.65L2607.75 980.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2494.7 1123.65L2590.24 1295.79"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2468.05 1434.11L2468.05 1434.11"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2468.05 1434.11L2590.24 1295.79"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2614.84 -63.22L2614.84 -63.22"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2614.84 -63.22L2657.45 101.93"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2614.84 -63.22L2785.98 -107.45"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2647.92 226.48L2647.92 226.48"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2647.92 226.48L2769.93 221.05"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2647.92 226.48L2606.74 344.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2606.74 344.41L2606.74 344.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2618.91 853.73L2618.91 853.73"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2618.91 853.73L2607.75 980.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2607.75 980.51L2607.75 980.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2607.75 980.51L2453.39 956.91"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2607.75 980.51L2610.35 1145.67"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2610.35 1145.67L2610.35 1145.67"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2610.35 1145.67L2752.35 1124.61"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2610.35 1145.67L2590.24 1295.79"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2610.35 1145.67L2751.89 1286.81"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2590.24 1295.79L2590.24 1295.79"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2590.24 1295.79L2751.89 1286.81"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2590.24 1295.79L2659.76 1454.16"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2659.76 1454.16L2659.76 1454.16"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2659.76 1454.16L2795.29 1425.12"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2785.98 -107.45L2785.98 -107.45"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2785.98 -107.45L2738.55 74.36"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2785.98 -107.45L2657.45 101.93"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2785.98 -107.45L2503.55 -72.88"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2785.98 -107.45L2769.93 221.05"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2738.55 74.36L2738.55 74.36"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2769.93 221.05L2769.93 221.05"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2769.93 221.05L2738.55 74.36"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2769.93 221.05L2606.74 344.41"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2776.57 659.97L2776.57 659.97"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2776.57 659.97L2594.7 673.3"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2776.57 659.97L2618.91 853.73"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2780.7 999.18L2780.7 999.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2780.7 999.18L2752.35 1124.61"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2780.7 999.18L2607.75 980.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2752.35 1124.61L2752.35 1124.61"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2752.35 1124.61L2751.89 1286.81"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2752.35 1124.61L2607.75 980.51"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2752.35 1124.61L2590.24 1295.79"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2752.35 1124.61L2494.7 1123.65"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2751.89 1286.81L2751.89 1286.81"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2751.89 1286.81L2795.29 1425.12"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2751.89 1286.81L2659.76 1454.16"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2751.89 1286.81L2780.7 999.18"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2795.29 1425.12L2795.29 1425.12"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2744.17 1609.53L2744.17 1609.53"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2744.17 1609.53L2659.76 1454.16"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <path
            d="M2744.17 1609.53L2795.29 1425.12"
            stroke="hsl(228.5, 77.2%, 51.5%)"
            stroke-width="1.5"
          ></path>
          <circle
            r="25"
            cx="242.16"
            cy="1268.05"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="253.81"
            cy="1578.87"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="347.84"
            cy="1603.3"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="502.04"
            cy="1253.76"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="675.46"
            cy="1416.63"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="861.43"
            cy="1120.67"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="992.2"
            cy="1397.03"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="1282.98"
            cy="1147.49"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="1459.95"
            cy="1271.9"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="1419.62"
            cy="1539.67"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="1607.05"
            cy="1431.9"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="1904.02"
            cy="513.02"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="2180.7"
            cy="1130.18"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="2333.8"
            cy="-89.9"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="2456.71"
            cy="489.24"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="2456.9"
            cy="692.29"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="2441.25"
            cy="1539.45"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="2657.45"
            cy="101.93"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="2594.7"
            cy="673.3"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="2590.24"
            cy="1575.83"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="2745.63"
            cy="506.93"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle
            r="25"
            cx="2764.97"
            cy="832.74"
            fill='url("#SvgjsRadialGradient1217")'
          ></circle>
          <circle r="5" cx="-44.47" cy="1250.41" fill="#8b9ad9"></circle>
          <circle r="5" cx="-100.51" cy="1424.98" fill="#8b9ad9"></circle>
          <circle r="5" cx="-83.5" cy="1574.73" fill="#8b9ad9"></circle>
          <circle r="5" cx="93.32" cy="1452.6" fill="#8b9ad9"></circle>
          <circle r="5" cx="57.74" cy="1572.6" fill="#8b9ad9"></circle>
          <circle r="5" cx="228.91" cy="1425.7" fill="#8b9ad9"></circle>
          <circle r="5" cx="369.05" cy="1309.27" fill="#8b9ad9"></circle>
          <circle r="5" cx="380.8" cy="1432.06" fill="#8b9ad9"></circle>
          <circle r="5" cx="557.7" cy="1145.78" fill="#8b9ad9"></circle>
          <circle r="5" cx="497.28" cy="1388.68" fill="#8b9ad9"></circle>
          <circle r="5" cx="638.27" cy="1131.79" fill="#8b9ad9"></circle>
          <circle r="5" cx="662.55" cy="1305.22" fill="#8b9ad9"></circle>
          <circle r="5" cx="644.81" cy="1553.68" fill="#8b9ad9"></circle>
          <circle r="5" cx="807.87" cy="1387.83" fill="#8b9ad9"></circle>
          <circle r="5" cx="797.41" cy="1545.39" fill="#8b9ad9"></circle>
          <circle r="5" cx="948.19" cy="1140.71" fill="#8b9ad9"></circle>
          <circle r="5" cx="998.99" cy="1297.44" fill="#8b9ad9"></circle>
          <circle r="5" cx="947.17" cy="1606.9" fill="#8b9ad9"></circle>
          <circle r="5" cx="1090" cy="1011.12" fill="#8b9ad9"></circle>
          <circle r="5" cx="1113.17" cy="1115.42" fill="#8b9ad9"></circle>
          <circle r="5" cx="1099.45" cy="1309.81" fill="#8b9ad9"></circle>
          <circle r="5" cx="1108.91" cy="1426.8" fill="#8b9ad9"></circle>
          <circle r="5" cx="1096.38" cy="1583.67" fill="#8b9ad9"></circle>
          <circle r="5" cx="1266.1" cy="992.18" fill="#8b9ad9"></circle>
          <circle r="5" cx="1274.99" cy="1400.35" fill="#8b9ad9"></circle>
          <circle r="5" cx="1238.36" cy="1612.41" fill="#8b9ad9"></circle>
          <circle r="5" cx="1420.72" cy="997.11" fill="#8b9ad9"></circle>
          <circle r="5" cx="1443.85" cy="1393.39" fill="#8b9ad9"></circle>
          <circle r="5" cx="1548.59" cy="856.74" fill="#8b9ad9"></circle>
          <circle r="5" cx="1594.76" cy="981.17" fill="#8b9ad9"></circle>
          <circle r="5" cx="1551" cy="1101.84" fill="#8b9ad9"></circle>
          <circle r="5" cx="1562.51" cy="1252.89" fill="#8b9ad9"></circle>
          <circle r="5" cx="1543.28" cy="1544.29" fill="#8b9ad9"></circle>
          <circle r="5" cx="1702.5" cy="693.99" fill="#8b9ad9"></circle>
          <circle r="5" cx="1696.3" cy="843.21" fill="#8b9ad9"></circle>
          <circle r="5" cx="1705.67" cy="1008" fill="#8b9ad9"></circle>
          <circle r="5" cx="1695.77" cy="1109.33" fill="#8b9ad9"></circle>
          <circle r="5" cx="1706.33" cy="1285.96" fill="#8b9ad9"></circle>
          <circle r="5" cx="1697.3" cy="1458.28" fill="#8b9ad9"></circle>
          <circle r="5" cx="1710.02" cy="1561.92" fill="#8b9ad9"></circle>
          <circle r="5" cx="1888.36" cy="693.23" fill="#8b9ad9"></circle>
          <circle r="5" cx="1847.78" cy="801.35" fill="#8b9ad9"></circle>
          <circle r="5" cx="1875.29" cy="948.35" fill="#8b9ad9"></circle>
          <circle r="5" cx="1902.13" cy="1268" fill="#8b9ad9"></circle>
          <circle r="5" cx="1886.4" cy="1445.26" fill="#8b9ad9"></circle>
          <circle r="5" cx="1862.38" cy="1546.82" fill="#8b9ad9"></circle>
          <circle r="5" cx="2056.85" cy="-93.42" fill="#8b9ad9"></circle>
          <circle r="5" cx="2057.48" cy="358.56" fill="#8b9ad9"></circle>
          <circle r="5" cx="2052.63" cy="504.34" fill="#8b9ad9"></circle>
          <circle r="5" cx="2023.54" cy="660.97" fill="#8b9ad9"></circle>
          <circle r="5" cx="2040.18" cy="819.49" fill="#8b9ad9"></circle>
          <circle r="5" cx="2002.33" cy="993.7" fill="#8b9ad9"></circle>
          <circle r="5" cx="2041.38" cy="1293.1" fill="#8b9ad9"></circle>
          <circle r="5" cx="2003.58" cy="1458.88" fill="#8b9ad9"></circle>
          <circle r="5" cx="2168.13" cy="50.32" fill="#8b9ad9"></circle>
          <circle r="5" cx="2188.26" cy="242.3" fill="#8b9ad9"></circle>
          <circle r="5" cx="2155.56" cy="369.34" fill="#8b9ad9"></circle>
          <circle r="5" cx="2154.56" cy="554.29" fill="#8b9ad9"></circle>
          <circle r="5" cx="2163.66" cy="668.38" fill="#8b9ad9"></circle>
          <circle r="5" cx="2182.8" cy="788.41" fill="#8b9ad9"></circle>
          <circle r="5" cx="2151.96" cy="976.19" fill="#8b9ad9"></circle>
          <circle r="5" cx="2182.17" cy="1278.34" fill="#8b9ad9"></circle>
          <circle r="5" cx="2150.79" cy="1430.97" fill="#8b9ad9"></circle>
          <circle r="5" cx="2169.44" cy="1566.63" fill="#8b9ad9"></circle>
          <circle r="5" cx="2328.69" cy="57.71" fill="#8b9ad9"></circle>
          <circle r="5" cx="2350.42" cy="217.63" fill="#8b9ad9"></circle>
          <circle r="5" cx="2346.44" cy="377.54" fill="#8b9ad9"></circle>
          <circle r="5" cx="2307.47" cy="515.51" fill="#8b9ad9"></circle>
          <circle r="5" cx="2359.4" cy="979.24" fill="#8b9ad9"></circle>
          <circle r="5" cx="2361.52" cy="1110.1" fill="#8b9ad9"></circle>
          <circle r="5" cx="2299.61" cy="1241.33" fill="#8b9ad9"></circle>
          <circle r="5" cx="2332.68" cy="1458.44" fill="#8b9ad9"></circle>
          <circle r="5" cx="2335.16" cy="1576.55" fill="#8b9ad9"></circle>
          <circle r="5" cx="2503.55" cy="-72.88" fill="#8b9ad9"></circle>
          <circle r="5" cx="2491.76" cy="189.18" fill="#8b9ad9"></circle>
          <circle r="5" cx="2459.1" cy="412.5" fill="#8b9ad9"></circle>
          <circle r="5" cx="2474.3" cy="837.27" fill="#8b9ad9"></circle>
          <circle r="5" cx="2453.39" cy="956.91" fill="#8b9ad9"></circle>
          <circle r="5" cx="2494.7" cy="1123.65" fill="#8b9ad9"></circle>
          <circle r="5" cx="2468.05" cy="1434.11" fill="#8b9ad9"></circle>
          <circle r="5" cx="2614.84" cy="-63.22" fill="#8b9ad9"></circle>
          <circle r="5" cx="2647.92" cy="226.48" fill="#8b9ad9"></circle>
          <circle r="5" cx="2606.74" cy="344.41" fill="#8b9ad9"></circle>
          <circle r="5" cx="2618.91" cy="853.73" fill="#8b9ad9"></circle>
          <circle r="5" cx="2607.75" cy="980.51" fill="#8b9ad9"></circle>
          <circle r="5" cx="2610.35" cy="1145.67" fill="#8b9ad9"></circle>
          <circle r="5" cx="2590.24" cy="1295.79" fill="#8b9ad9"></circle>
          <circle r="5" cx="2659.76" cy="1454.16" fill="#8b9ad9"></circle>
          <circle r="5" cx="2785.98" cy="-107.45" fill="#8b9ad9"></circle>
          <circle r="5" cx="2738.55" cy="74.36" fill="#8b9ad9"></circle>
          <circle r="5" cx="2769.93" cy="221.05" fill="#8b9ad9"></circle>
          <circle r="5" cx="2776.57" cy="659.97" fill="#8b9ad9"></circle>
          <circle r="5" cx="2780.7" cy="999.18" fill="#8b9ad9"></circle>
          <circle r="5" cx="2752.35" cy="1124.61" fill="#8b9ad9"></circle>
          <circle r="5" cx="2751.89" cy="1286.81" fill="#8b9ad9"></circle>
          <circle r="5" cx="2795.29" cy="1425.12" fill="#8b9ad9"></circle>
          <circle r="5" cx="2744.17" cy="1609.53" fill="#8b9ad9"></circle>
        </g>
        <defs>
          <mask id="SvgjsMask1215">
            <rect width="2560" height="1440" fill="#ffffff"></rect>
          </mask>
          <radialGradient
            cx="100%"
            cy="50%"
            r="2659.32"
            gradientUnits="userSpaceOnUse"
            id="SvgjsRadialGradient1216"
          >
            <stop stop-color="var(--accent-1)" offset="0.26"></stop>
            <stop stop-color="var(--accent-2)" offset="0.77"></stop>
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient1217">
            <stop stop-color="#ffffff" offset="0.1"></stop>
            <stop stop-color="var(--gray-3)" offset="0.2"></stop>
            <stop stop-color="var(--accent-9)" offset="1"></stop>
          </radialGradient>
        </defs>
      </svg>

      <Box
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
