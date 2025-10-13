import Header from "../components/header";
import Footer from "../components/footer";
import { Box, Container, Flex } from "@radix-ui/themes";
import ConnectWithMe from "../components/connectWithMe";
import ProjectsSection from "../components/projects";

import AboutMeSection from "../components/aboutMe";
import BackgroundWrapper from "../components/backgroundWrapper";

export default function Home() {
  return (
    <BackgroundWrapper>
      <Container
        size="3"
        p="2"
        style={{
          position: "relative",
          borderRadius: "var(--radius-4)",
          overflow: "hidden",
          boxShadow: "var(--shadow-3)",
        }}
      >
        {/* Dim overlay behind content */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)", // adjust dim strength
            zIndex: 0,
          }}
        />

        {/* Foreground content */}
        <Box style={{ position: "relative", zIndex: 1, backdropFilter: "blur(8px)"}}>
          <Header />
          <Flex direction="column" gap="3">
            <AboutMeSection />
            <ProjectsSection />
            <ConnectWithMe />
          </Flex>

          <Footer />
        </Box>
      </Container>
    </BackgroundWrapper>
  );
}
