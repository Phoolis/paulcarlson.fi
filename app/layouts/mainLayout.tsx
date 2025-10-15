import { Box, Container, Flex } from "@radix-ui/themes";
import Header from "../components/header";
import Footer from "../components/footer";
import BackgroundWrapper from "../components/backgroundWrapper";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BackgroundWrapper>
      <Container
        size="3"
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "var(--radius-4)",
          overflow: "hidden",
          boxShadow: "var(--shadow-3)",
        }}
      >
        {/* Dim + blur overlay */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            backdropFilter: "blur(10px)",
            zIndex: 0,
          }}
        />

        <Box
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Box
            pl="2"
            pr="2"
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header />
            <Flex direction="column" gap="3" style={{ flex: 1 }}>
              {children}
            </Flex>
            <Footer />
          </Box>
        </Box>
      </Container>
    </BackgroundWrapper>
  );
}
