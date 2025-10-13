import { Link, Text } from "@radix-ui/themes";
import packageJson from "../../package.json";

declare const __LAST_UPDATED__: string;

export default function Version() {
  return (
    <Text size="1" align="right">
      Version{" "}
      <Link
        href="https://github.com/Phoolis/paulcarlson.fi"
        target="_blank"
        rel="noopener noreferrer"
        className="commit-link"
      >
        {packageJson.version}
      </Link>
      <br></br>
      Last updated: {__LAST_UPDATED__ || "unknown"}
    </Text>
  );
}
