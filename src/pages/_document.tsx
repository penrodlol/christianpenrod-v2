import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body
          className="font-serif font-extrabold tracking-wide text-1 bg-3 selection:bg-1
                     before:fixed before:content-[''] before:-inset-8 before:z-10
                     before:opacity-[0.075] before:bg-[length:5rem_5rem] before:bg-hero-pattern"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
