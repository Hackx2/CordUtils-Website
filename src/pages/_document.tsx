import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="../../static/favicon.ico" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
