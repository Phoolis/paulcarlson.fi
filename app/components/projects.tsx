import { Card, Flex, Section, Heading, Text, Inset } from "@radix-ui/themes";
import { SectionTitle } from "./ui";
import { ScrollArea } from "@radix-ui/themes";
import { BadgeList } from "./badgeList";
import { Link } from "react-router";
import { projects } from "~/data/projects";

export default function ProjectsSection() {

  return (
    <Section py="4">
      <SectionTitle>Some of my projects</SectionTitle>

      <ScrollArea type="auto" scrollbars="horizontal">
        <Flex gap="2">
          {projects.map((project) => (
            <Card
              key={project.title}
              asChild
              size="3"
              style={{ minWidth: "260px" }}
            >
              <Link to={`/projects/${project.slug}`}>
                <Flex
                  direction="column"
                  justify="between"
                  height="100%"
                  gap="2"
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src={project.image}
                      alt={`Image of the ${project.title} project`}
                      style={{
                        width: "100%",
                        height: 160,
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Inset>
                  <Heading mt="-4">{project.title}</Heading>
                  <Text wrap="balance">{project.description}</Text>
                  <BadgeList badges={project.badges} />
                </Flex>
              </Link>
            </Card>
          ))}
        </Flex>
      </ScrollArea>
    </Section>
  );
}
