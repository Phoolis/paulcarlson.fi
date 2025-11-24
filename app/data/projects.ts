import kamppisImg from "../assets/kamppis_screenshot_small.png";
import tgImg from "../assets/ticketguru_screenshot_small.png";
import rpgImg from "../assets/dnd_session_notes_sql_schema.png";

export const projects = [
  {
    title: "Kämppis",
    slug: "kamppis",
    description:
      "A roommate finder mobile app built with Kotlin and React Native.",
    badges: ["full-stack", "mobile", "group"],
    image: kamppisImg,
  },
  {
    title: "RPG Session Notes",
    slug: "rpg-session-notes",
    description:
      "A note-taking web app for tabletop RPGs built with Java Spring Boot and Thymeleaf.",
    badges: ["backend", "database"],
    image: rpgImg,
  },
  {
    title: "TicketGuru",
    slug: "ticketguru",
    description: "A Full-stack web service for a ticket sales agency.",
    badges: ["full-stack", "group"],
    image: tgImg,
  },
];
