import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="min-h-screen h-full" data-theme="lofi">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
