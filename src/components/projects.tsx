import { Card, Flex, Section, Heading, Text, Inset } from "@radix-ui/themes";
import { SectionTitle } from "./ui";
import { ScrollArea } from "@radix-ui/themes";
import { BadgeList } from "./badgeList";
import kamppisImg from "../assets/kamppis_screenshot_small.png";
import tgImg from "../assets/ticketguru_screenshot_small.png";
import rpgImg from "../assets/dnd_session_notes_sql_schema.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Kämppis",
      description:
        "A roommate finder mobile app built with Kotlin and React Native.",
      link: "https://github.com/HH-Nat20",
      badges: ["full-stack", "mobile", "group"],
      image: kamppisImg,
    },
    {
      title: "RPG Session Notes",
      description:
        "A note-taking web app for tabletop RPGs built with Java Spring Boot and Thymeleaf.",
      link: "https://github.com/Phoolis/rgp-session-notes/tree/dev?tab=readme-ov-file",
      badges: ["backend", "database"],
      image: rpgImg,
    },
    {
      title: "TicketGuru",
      description: "A Full-stack web service for a ticket sales agency.",
      link: "https://github.com/marttyyriroskis/nat20-ticketguru",
      badges: ["full-stack", "group"],
      image: tgImg,
    },
  ];

  return (
    <Section py="4">
      <SectionTitle>My Projects</SectionTitle>

      <ScrollArea type="auto" scrollbars="horizontal">
        <Flex gap="2">
          {projects.map((project) => (
            <Card
              key={project.title}
              asChild
              size="3"
              style={{ minWidth: "260px" }}
            >
              <a href={project.link}>
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
              </a>
            </Card>
          ))}
        </Flex>
      </ScrollArea>
    </Section>
  );
}
