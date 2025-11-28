import { useParams } from "react-router";

import TicketguruPage from "./ticketguruPage";
import MainLayout from "~/layouts/mainLayout";
import ProjectsSection from "~/components/projects";
import TaskManagePage from "./taskmanagePage";
import KamppisPage from "./kamppisPage";
import RpgSessionNotesPage from "./rpgsessionnotesPage";
import type { Route } from "./+types/$slug";
import { projects } from "~/data/projects";

const componentMap: Record<string, React.ComponentType> = {
  kamppis: KamppisPage,
  "rpg-session-notes": RpgSessionNotesPage,
  ticketguru: TicketguruPage,
  taskmanage: TaskManagePage,
};

export function meta({}: Route.MetaArgs) {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return [
      { title: "Project Not Found" },
      {
        name: "description",
        content: "Requested project page could not be found.",
      },
    ];
  }

  return [
    { title: `${project.title} - Paul Carlson` },
    { name: "description", content: project.description },
  ];
}

export default function ProjectRouter() {
  const { slug } = useParams();
  const Component = componentMap[slug ?? ""];

  if (!Component) return <h1>404 - Project Not Found</h1>;

  return (
    <MainLayout>
      <Component />
      <ProjectsSection />
    </MainLayout>
  );
}
