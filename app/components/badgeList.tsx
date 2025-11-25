import { Badge, Flex, Tooltip } from "@radix-ui/themes";

interface BadgeListProps {
  badges: string[];
}

const badgeColorMap = {
  frontend: "indigo",
  backend: "grass",
  database: "orange",
  mobile: "crimson",
  group: "gray",
  "full-stack": "blue",
  devops: "lime",
} as const;

const badgeTooltipText = {
  frontend:
    "Project focused on the user-facing part of a website or application.",
  backend: "Project focused on the structure or logic of a website or service.",
  database: "Project had a complex database structure.",
  mobile: "Developed for a mobile device.",
  group: "Project required working as a team.",
  "full-stack":
    "Project had substantial work on frontend, backend, and database.",
  devops: "Project supports continuous development and deployment workflows.",
} as const;

export function BadgeList({ badges }: BadgeListProps) {
  return (
    <Flex gap="2" wrap="wrap">
      {badges.map((label) => (
        <Tooltip
          key={label}
          content={
            badgeTooltipText[
              label.toLowerCase() as keyof typeof badgeTooltipText
            ] ?? "No description available"
          }
        >
          <Badge
            key={label}
            color={
              badgeColorMap[
                label.toLowerCase() as keyof typeof badgeColorMap
              ] ?? "gray"
            }
          >
            {label}
          </Badge>
        </Tooltip>
      ))}
    </Flex>
  );
}
