import { Card, Flex, Section, Heading, Text } from "@radix-ui/themes";
import { SectionTitle } from "./ui";
import { ScrollArea } from "@radix-ui/themes";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Kamppis",
      description:
        "A roommate finder mobile app built with Kotlin and React Native.",
      link: "/projects/kamppis",
    },
    {
      title: "RPG Session Notes",
      description:
        "A note-taking web app for tabletop RPGs build with Kotlin Ktor.",
      link: "/projects/rpg-notes",
    },
    {
      title: "TicketGuru",
      description: "Full-stack web service for a ticket sales agency.",
      link: "/projects/ticketguru",
    },
  ];

  return (
    <Section py="4">
      <SectionTitle>Projects</SectionTitle>

      <ScrollArea type="always" scrollbars="horizontal">
        <Flex gap="2">
          {projects.map((project) => (
            <Card
              key={project.title}
              asChild
              size="3"
              style={{ minWidth: "260px" }}
            >
              <a href={project.link}>
                <Flex direction="column">
                  <Heading>{project.title}</Heading>
                  <Text>{project.description}</Text>
                </Flex>
              </a>
            </Card>
          ))}
        </Flex>
      </ScrollArea>
    </Section>
  );
}
