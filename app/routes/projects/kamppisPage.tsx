import {
  Box,
  Container,
  Flex,
  Heading,
  Inset,
  Link,
  Section,
  Text,
} from "@radix-ui/themes";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { projects } from "~/data/projects";
import { BadgeList } from "~/components/badgeList";

const project = projects.find((p) => p.slug === "kamppis")!;

export default function KamppisPage() {
  return (
    <Section py="4">
      <Container size="1">
        <Flex justify="center" py="2">
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src={project.image}
              alt={`Image of the ${project.title} project`}
              style={{
                maxWidth: "fit-content",
                height: 400,
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </Inset>
        </Flex>
      </Container>

      <Box
        py="5"
        p="4"
        style={{
          background: "var(--gray-a2)",
          borderRadius: "var(--radius-3)",
        }}
      >
        <Heading mt="-4">{project.title}</Heading>
        <Text wrap="balance">{project.description}</Text>
        <BadgeList badges={project.badges} />
      </Box>
      <Flex
        p="2"
        direction="column"
        gap="4"
        justify="center"
        style={{ flex: "1 1 60%" }}
      >
        <Text wrap="pretty" size="3" highContrast>
          To be continued...
        </Text>
        {/* <Flex justify="center">
          <Link
            href="https://taskmanage.paulcarlson.fi"
            target="_blank"
            color="blue"
            underline="hover"
            size="6"
          >
            Try Task Manager here
            <OpenInNewWindowIcon
              style={{ width: "36px", height: "36px" }}
            />{" "}
          </Link>
        </Flex> */}
        <Text wrap="pretty" size="2" highContrast align="center">
          See the GitHub pages for more info for now
        </Text>
        <Flex justify="center">
          <Link
            href="https://github.com/HH-Nat20"
            target="_blank"
            color="gray"
            underline="hover"
            size="6"
          >
            Kamppis GitHub Overview
            <GitHubLogoIcon style={{ width: "36px", height: "36px" }} />
          </Link>
        </Flex>
      </Flex>
    </Section>
  );
}
