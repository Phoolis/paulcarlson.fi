import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Flex, Heading, Separator } from "@radix-ui/themes";

export default function Header() {
  return (
    <Flex direction="column">
      <Flex justify="between" gap="6" p="2">
        <Heading size="8" align="left">
          Paul Carlson
        </Heading>
        <Callout.Root color="yellow" size="1">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            This site is under active development. Please check back later for
            updates.
          </Callout.Text>
        </Callout.Root>
      </Flex>
      <Separator size="4" />
    </Flex>
  );
}
