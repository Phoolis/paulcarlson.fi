import { Heading } from "@radix-ui/themes";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Heading as="h2" size="4" weight="bold" mb="2">
      {children}
    </Heading>
  );
}
