import "@radix-ui/themes/styles.css";
import "./styles.css";
import { Outlet, Scripts, ScrollRestoration } from "react-router";
import { Theme, ThemePanel } from "@radix-ui/themes";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>paulcarlson.fi</title>
      </head>
      <body>
        <Theme
          appearance="dark"
          accentColor="blue"
          grayColor="sand"
          radius="large"
          scaling="110%"
        >
          {children}
          <ScrollRestoration />
          <Scripts />
          <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
