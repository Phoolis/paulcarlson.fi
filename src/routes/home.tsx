import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer";
import {
  Container,
  Box,
  Text,
  Callout,
  Section,
  Link,
  Flex,
} from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import ConnectWithMe from "../components/connect-with-me";

export default function Home() {
  return (
    <Container size="3" p="4">
      <Header />
      <Box>
        <Section>
          <Flex direction="column" gap="5">
            <Text>
              This will be Paul's awe-inspiring and stupefyingly advanced
              website.
            </Text>

            <Callout.Root color="yellow" size="3">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                This site is currently under construction. Please check back
                later.
              </Callout.Text>
            </Callout.Root>

            <Text>
              Meanwhile, you can try a Finnish word-guessing game here:
            </Text>
            <Flex align="center" gap="4">
              <Link href="https://sanuli.paulcarlson.fi">
                <FontAwesomeIcon icon={faGamepad} />
                <Text> Play Sanuli</Text>
              </Link>
            </Flex>
          </Flex>
        </Section>
        <ConnectWithMe />

        <aside className="sidebar">
          <h2 id="about-header">About Me</h2>
          <img src="itsme_paul.jpg" alt="Paul Carlson" />
          <p id="about-text">
            I’m Paul, a developer interested in backend, web development, and
            everything DevOps. This site is a work in progress, but over time
            I’ll add projects, experiments, and write-ups here.
          </p>
        </aside>
      </Box>
      <Footer />
    </Container>
  );
}
