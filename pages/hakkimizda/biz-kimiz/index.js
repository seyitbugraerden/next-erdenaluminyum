import React from "react";
import Head from "next/head";
import Banner from "../../../components/banner/banner";
import About2 from "../../../components/about2/about2";

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>Erden Alüminyum | Kurumsal Kimliğimiz ve Değerlerimiz</title>
        <meta
          name="description"
          content="Erden Alüminyum olarak kalite, güven ve müşteri memnuniyetini ilke ediniyoruz. Kurumsal değerlerimizle sektörde fark yaratıyoruz."
        />
        <meta
          property="og:title"
          content="Erden Alüminyum | Kurumsal Kimliğimiz ve Değerlerimiz"
        />
        <meta
          property="og:description"
          content="Erden Alüminyum olarak kalite, güven ve müşteri memnuniyetini ilke ediniyoruz. Kurumsal değerlerimizle sektörde fark yaratıyoruz."
        />
      </Head>
      <Banner text="BİZ KİMİZ?" />
      <About2 abClass={"section-padding"} />
    </>
  );
};

export default AboutUsPage;
