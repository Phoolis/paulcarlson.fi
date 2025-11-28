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
          Kämppis is a mobile application designed to connect people looking for
          roommates or shared apartment rooms. The project was developed as part
          of the Software Project 2 course at Haaga-Helia University of Applied
          Sciences. The purpose of Kämppis is to have a positive impact on its
          users’ lives. According to the Finnish Red Cross’s loneliness
          barometer, one-third of young people aged 15–24 feel lonely on a
          monthly basis. At the same time, rising living costs, inflation, and
          planned changes to student housing benefits make shared living an
          increasingly attractive financial option.
        </Text>
        <Text wrap="pretty" size="3" highContrast>
          Kämppis responds to these challenges by offering a platform that helps
          people interested in shared housing find compatible roommates. Kämppis
          works by allowing users to create a personal profile in the app.
          Currently, logging in is done through a GitHub account. Once logged
          in, users can edit their profile, set roommate and room preferences,
          and choose whether they are looking for a roommate for a new shared
          apartment, an empty room in an existing shared apartment, or a new
          roommate for a room they already have available.
        </Text>
        <Text wrap="pretty" size="3" highContrast>
          Users can browse other profiles based on their preferences, such as
          age, gender, location, number of current roommates, or rent. By
          swiping right, a user can show interest in a roommate or room profile;
          swiping left skips it. When two users swipe right on each other—or
          when a user shows interest in a room whose creator has also shown
          interest in them—a chat window opens, allowing them to get to know
          each other. The app itself does not handle practical aspects of
          finding housing; it simply facilitates connections and conversations.
        </Text>
        <Text wrap="pretty" size="3" highContrast>
          Version 1.0 of Kämppis represents the Minimum Viable Product (MVP). It
          includes the core features required for users to create profiles,
          search for suitable roommates, and start conversations. Users can
          create detailed profiles with personal information such as age,
          gender, lifestyle, interests, location, and pets, along with photos.
          They can also create a housing profile and add room profiles for any
          available rooms, inviting current roommates to join the app so that
          all household members are visible.
        </Text>
        <Text wrap="pretty" size="3" highContrast>
          Search criteria let users filter potential matches, and browsing
          displays a concise summary of each profile. More detailed profiles are
          available upon selection. If two users express mutual interest, the
          app creates a connection and enables chat. Group chats are supported
          when matching involves a shared apartment with multiple residents.
          Users can end chats at any time.
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
          See the GitHub pages for more info on Kämppis
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
