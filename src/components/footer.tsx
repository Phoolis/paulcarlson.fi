import Version from "./version";

export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Paul Carlson</p>
      <p>
        <a
          id="status-link"
          href="https://stats.uptimerobot.com/cPOdsE6Fix"
          className="status-link"
        >
          Status page
        </a>
      </p>
      <Version />
    </footer>
  );
}
