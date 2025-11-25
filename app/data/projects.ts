import kamppisImg from "../assets/kamppis_screenshot_small.png";
import tgImg from "../assets/ticketguru_screenshot_small.png";
import rpgImg from "../assets/dnd_session_notes_sql_schema.png";
import tskmngImg from "../assets/taskmanage_workflow_runs.png";

export const projects = [
  {
    title: "Kämppis",
    slug: "kamppis",
    description:
      "A roommate finder mobile app built with Kotlin and React Native.",
    badges: ["full-stack", "mobile", "group", "devops"],
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
    badges: ["full-stack", "group", "devops"],
    image: tgImg,
  },
  {
    title: "Task Manager",
    slug: "taskmanage",
    description:
      "An application built for learning DevOps practices including CI/CD pipelines, containerization, and cloud deployment.",
    badges: ["devops"],
    image: tskmngImg,
  },
];
