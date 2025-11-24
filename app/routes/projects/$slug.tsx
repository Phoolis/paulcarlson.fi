import { useParams } from "react-router";

import TicketguruPage from "./ticketguruPage";
import MainLayout from "~/layouts/mainLayout";

const componentMap: Record<string, React.ComponentType> = {
  //kamppis: KamppisPage,
  //"rpg-session-notes": RpgSessionNotesPage,
  ticketguru: TicketguruPage,
};

export default function ProjectRouter() {
  const { slug } = useParams();

  const Component = componentMap[slug ?? ""];

  if (!Component) return <h1>404 - Project Not Found</h1>;

  return (
    <MainLayout>
      <Component />
    </MainLayout>
  );
}
