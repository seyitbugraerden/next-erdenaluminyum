import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }
    return renderPage();
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="description"
            content="  Erden Alüminyum, alüminyum doğrama, cam balkon sistemleri, PVC
            kapı-pencere ve metal işleri alanında kaliteli ve güvenilir çözümler
            sunar. Estetik, dayanıklı ve profesyonel uygulamalarla
            hizmetinizdeyiz."
          />
          <meta
            name="keywords"
            content="alüminyum doğrama, metal doğrama atölyesi, cam balkon sistemleri, PVC kapı pencere, alüminyum kapı, alüminyum pencere, alüminyum korkuluk, alüminyum işler, metal imalat, özel metal tasarım, alüminyum sistemler, doğrama atölyesi, Erden Alüminyum, alüminyum atölyesi"
          />
          <meta name="author" content="Kerim Erden" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Erden Alüminyum | Cam Balkon & Alüminyum Doğrama</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
