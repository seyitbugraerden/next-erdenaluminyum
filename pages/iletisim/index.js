import React from "react";
import Contactpage from "../../components/Contactpage/Contactpage";
import Banner from "../../components/banner/banner";
import Head from "next/head";

const IletisimPage = () => {
  return (
    <>
      <Head>
        <title>Erden Alüminyum İletişim | Cam Balkon ve Cephe Çözümleri</title>
        <meta
          name="description"
          content="Cam balkon, cephe kaplama ve alüminyum doğrama sistemleri hakkında bilgi ve teklif almak için hemen bizimle iletişime geçin."
        />
        <meta
          property="og:title"
          content="Erden Alüminyum İletişim | Cam Balkon ve Cephe Çözümleri"
        />
        <meta
          property="og:description"
          content="Cam balkon, cephe kaplama ve alüminyum doğrama sistemleri hakkında bilgi ve teklif almak için hemen bizimle iletişime geçin."
        />
      </Head>
      <Banner text="İLETİŞİM" />
      <Contactpage />
    </>
  );
};

export default IletisimPage;
