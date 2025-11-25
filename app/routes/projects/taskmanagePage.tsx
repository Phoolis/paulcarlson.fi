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

const project = projects.find((p) => p.slug === "taskmanage")!;

export default function TaskManagePage() {
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
          Task Manager is a full-stack task management application built as a
          learning project for DevOps practices. It follows a monorepo structure
          containing a Node.js/Express backend and a React frontend, both
          written in TypeScript and sharing dependencies through npm workspaces.
          The application includes user authentication, task CRUD operations,
          status and priority management, and search/filter features.
        </Text>
        <Text wrap="pretty" size="3" highContrast>
          The project’s purpose is to provide a practical environment for
          practicing CI/CD, Docker usage, and cloud deployment. Its architecture
          uses a RESTful API backend connected to a PostgreSQL database, with
          the frontend communicating via HTTP and JWT-based authorization.
        </Text>
        <Text wrap="pretty" size="3" highContrast>
          The deliverable is a fully functional CI/CD pipeline including
          automated testing and building of both the frontend and the backend,
          and subsequent upload into DockerHub as Docker images. Integrates
          static code analysis and dependency scanning for detecting
          vulnerabilities.
        </Text>
        <Flex justify="center">
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
        </Flex>
        <Text wrap="pretty" size="2" highContrast align="center">
          The DevOps part is visible in the GitHub Actions page
        </Text>
        <Flex justify="center">
          <Link
            href="https://github.com/Phoolis/task-manage/actions"
            target="_blank"
            color="gray"
            underline="hover"
            size="6"
          >
            GitHub Actions
            <GitHubLogoIcon style={{ width: "36px", height: "36px" }} />
          </Link>
        </Flex>
      </Flex>
    </Section>
  );
}
