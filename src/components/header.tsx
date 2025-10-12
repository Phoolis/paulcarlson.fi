import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Flex, Heading, Separator } from "@radix-ui/themes";

export default function Header() {
  return (
    <Flex direction="column" mt="2">
      <Flex justify="start" gap="6">
        <Heading size="8" align="left">
          Paul Carlson
        </Heading>
        <Callout.Root color="yellow" size="1">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            This site is currently under construction. Please check back later.
          </Callout.Text>
        </Callout.Root>
      </Flex>
      <Separator my="3" size="4" />
    </Flex>
  );
}
