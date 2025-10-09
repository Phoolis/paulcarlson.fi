export default function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Paul Carlson</p>
      <p>
        <a
          id="status-link"
          href="https://stats.uptimerobot.com/cPOdsE6Fix"
          className="status-link"
        >
          Status page
        </a>
      </p>
      <p id="footer-meta" className="meta">
        Version: __VERSION__ (
        <a
          href="__HASH_URL__"
          target="_blank"
          rel="noopener noreferrer"
          className="commit-link"
        >
          __HASH__
        </a>
        ) | Last updated: __DATE__
      </p>
    </footer>
  );
}
