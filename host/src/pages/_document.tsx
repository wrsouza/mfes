import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import type { DocumentProps } from 'next/document'

class MyDocument extends Document<DocumentProps> {
  render() {
  return (
    <Html>
      <Head />
      <body style={{ padding: 0, margin: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
  }
}

export default MyDocument;
