import paulImg from "../assets/its_me_paul.jpg";
import { Text, Section, Link, Flex, Box } from "@radix-ui/themes";
import { RocketIcon } from "@radix-ui/react-icons";

export default function AboutMeSection() {
  return (
    <Section py="4">
      <Flex
        direction={{ initial: "column", lg: "row" }}
        gap="3"
        align="start"
        justify="center"
      >
        <Box
          style={{
            flex: "1 1 40%",
            maxWidth: "400px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            borderRadius: "var(--radius-3)",
          }}
        >
          <img
            src={paulImg}
            alt="Picture of the site author, Paul Carlson"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Overlay gradient vignette */}
          <Box
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle, transparent 60%,  var(--color-panel) 100%)`,
              pointerEvents: "none",
            }}
          />
        </Box>
        <Flex
          direction="column"
          gap="4"
          justify="center"
          style={{ flex: "1 1 60%" }}
        >
          <Text wrap="balance">
            I’m a developer interested in backend, web development, and
            everything DevOps. This site is a work in progress, but over time
            I’ll add projects, experiments, and write-ups here.
          </Text>
          <Text wrap="balance">
            This will be my awe-inspiring and stupefyingly advanced website.
          </Text>
          <Text wrap="balance">
            Meanwhile, you can try a Finnish word-guessing game here:
          </Text>
          <Flex align="center">
            <Link href="https://sanuli.paulcarlson.fi">
              <RocketIcon /> Play Sanuli
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
