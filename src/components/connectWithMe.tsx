import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Link, Section, Text } from "@radix-ui/themes";
import { SectionTitle } from "./ui";

export default function ConnectWithMe() {
  return (
    <Section py="4">
      <SectionTitle>Connect with me</SectionTitle>
      <Flex gap="4">
        <Link
          href="https://www.linkedin.com/in/paul-carlson-pc86/"
          target="_blank"
          color="blue"
          underline="hover"
          size="6"
        >
          <LinkedInLogoIcon style={{ width: "36px", height: "36px" }} />{" "}
          LinkedIn
        </Link>
        <Link
          href="https://github.com/Phoolis"
          target="_blank"
          color="gray"
          underline="hover"
          size="6"
        >
          <GitHubLogoIcon style={{ width: "36px", height: "36px" }} /> GitHub
        </Link>
      </Flex>
    </Section>
  );
}
