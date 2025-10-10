import packageJson from "../../package.json";

export default function Version() {
  const lastUpdated = import.meta.env.VITE_LAST_UPDATED;

  return (
    <p id="footer-meta" className="meta">
      Version {" "}
      <a
        href="https://github.com/Phoolis/paulcarlson.fi"
        target="_blank"
        rel="noopener noreferrer"
        className="commit-link"
      >
        {packageJson.version}
      </a>{" "}
      Last updated: {lastUpdated}
    </p>
  );
}
