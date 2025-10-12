import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Link, Section, Text } from "@radix-ui/themes";
import { SectionTitle } from "./ui";

export default function ConnectWithMe() {
  return (
    <Section py="4">
      <SectionTitle>Connect with me</SectionTitle>
      <Flex gap="2">
        <Link
          href="https://www.linkedin.com/in/paul-carlson-pc86/"
          target="_blank"
          color="blue"
          underline="hover"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <Text> LinkedIn</Text>
        </Link>
        <Link
          href="https://github.com/Phoolis"
          target="_blank"
          color="gray"
          underline="hover"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </Link>
      </Flex>
    </Section>
  );
}
