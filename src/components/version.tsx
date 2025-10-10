import packageJson from "../../package.json";

declare const __LAST_UPDATED__: string;

export default function Version() {
  return (
    <p id="footer-meta" className="meta">
      Version{" "}
      <a
        href="https://github.com/Phoolis/paulcarlson.fi"
        target="_blank"
        rel="noopener noreferrer"
        className="commit-link"
      >
        {packageJson.version}
      </a>{" "}
      Last updated: {__LAST_UPDATED__ || "unknown"}
    </p>
  );
}
