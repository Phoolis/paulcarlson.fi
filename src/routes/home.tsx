import Header from "../components/header";
import Footer from "../components/footer";
import {
  Container,
  Flex,
} from "@radix-ui/themes";
import ConnectWithMe from "../components/connectWithMe";
import ProjectsSection from "../components/projects";

import AboutMeSection from "../components/aboutMe";

export default function Home() {
  return (
    <Container size="3" p="2">
      <Header />
      <Flex direction="column" gap="3">
        <AboutMeSection />
        <ProjectsSection />
        <ConnectWithMe />
      </Flex>

      <Footer />
    </Container>
  );
}
