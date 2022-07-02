import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html dir="ltr" lang="ja-JP">
        <Head>
          {/* windows */}
          <meta content="/site-tile-70x70.png" name="msapplication-square70x70logo" />
          <meta content="/site-tile-150x150.png" name="msapplication-square150x150logo" />
          <meta content="/site-tile-310x150.png" name="msapplication-wide310x150logo" />
          <meta content="/site-tile-310x310.png" name="msapplication-square310x310logo" />
          <meta content="#000" name="msapplication-TileColor" />
          {/* safari */}
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="#000" name="apple-mobile-web-app-status-bar-style" />
          <meta content="myapp" name="apple-mobile-web-app-title" />
          <link href="/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
          {/* 一般 */}
          <meta content="myapp" name="application-name" />
          <meta content="#000" name="theme-color" />
          <meta content="this is myapp" name="description" />
          <link href="/icon-192x192.png" rel="icon" sizes="192x192" />
          <link href="/favicon.ico" rel="icon" />
          <link href="/manifest.json" rel="manifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
