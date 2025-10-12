import { Flex, Heading, Separator } from "@radix-ui/themes";

export default function Header() {
  return (
    <Flex direction="column">
      <Heading size="8" align="left">
        Paul Carlson
      </Heading>
      <Separator my="3" size="4" />
    </Flex>
  );
}
