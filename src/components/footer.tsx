import {
  Flex,
  Text,
  Separator,
  Button,
  Link,
  Box,
} from "@radix-ui/themes";
import { BarChartIcon } from "@radix-ui/react-icons";
import Version from "./version";

export default function Footer() {
  return (
    <Box>
      <Separator orientation="horizontal" size="4" mb="4" />
      <Flex direction="row" justify="between" gap="2" align="center">
        <Text>&copy; {new Date().getFullYear()} Paul Carlson</Text>
        <Button size="3" color="green">
          <Link
            href="https://stats.uptimerobot.com/cPOdsE6Fix"
            underline="none"
          >
            <BarChartIcon /> Status page
          </Link>
        </Button>
        <Version />
      </Flex>
    </Box>
  );
}
