import type { Route } from "./+types/home";
import AboutMeSection from "~/components/aboutMe";
import ProjectsSection from "~/components/projects";
import ConnectWithMe from "~/components/connectWithMe";
import MainLayout from "~/layouts/mainLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Paul Carlson's homepage" },
    { name: "description", content: "Welcome my personal website!" },
  ];
}

export default function Home() {
  return (
    <MainLayout>
      <AboutMeSection />
      <ProjectsSection />
      <ConnectWithMe />
    </MainLayout>
  );
}
