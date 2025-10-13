import paulImg from "../assets/its_me_paul.jpg";
import { Text, Section, Link, Flex, Box, Button } from "@radix-ui/themes";
import { RocketIcon } from "@radix-ui/react-icons";

export default function AboutMeSection() {
  return (
    <Section py="4">
      <Flex
        direction={{ initial: "column", lg: "row" }}
        gap="5"
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
          <Text wrap="pretty" size="4" color="teal" highContrast>
            I’m an aspiring software developer interested in backend, web
            development, and everything DevOps. This site is a work in progress,
            but over time I’ll add projects, experiments, and write-ups here.
          </Text>
          <Text wrap="pretty" size="3" highContrast>
            With a background in biotechological research in cell biology in
            Helsinki University, solving complex problems is what I live and
            breathe for. Now I've fully thrown myself into learning software
            development, and I'm currently into my 3rd year studying Business IT
            in the Haaga-Helia University of Applied Sciences.
          </Text>
          <Text wrap="pretty" size="3" highContrast>
            Building something useful for the end-user, while learning along the
            way.
          </Text>
          <Text wrap="pretty" size="3" highContrast>
            As this site is still being developed, you can amuse yourself by
            playing a Finnish word-guessing game <em>à la</em> wordle here:
          </Text>
          <Flex gap="3" align="center">
            <Button size="3" variant="ghost">
              <Link href="https://sanuli.paulcarlson.fi">
                <RocketIcon /> Play Sanuli
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
