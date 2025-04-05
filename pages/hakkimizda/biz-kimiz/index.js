import React from "react";
import Banner from "../../../components/banner/banner";
import About2 from "../../../components/about2/about2";

const AboutUsPage = () => {
  return (
    <>
      <Banner text="BİZ KİMİZ?" />
      <About2 abClass={"section-padding"} />
      <div className="container">
        <div>
          <div className="about-left-item">
            <div className="wpo-section-title">
              <h2 className="text-center">
                Gücümüz Alüminyum, Hedefimiz Mükemmellik!
              </h2>
              <p className="lead text-muted text-center">
                Erden Alüminyum olarak, sektördeki yıllara dayanan tecrübemizle,
                kaliteli ve sürdürülebilir çözümler üretmeyi misyon edindik.
                Yenilikçi yaklaşımımız ve müşteri memnuniyeti odaklı hizmet
                anlayışımızla, sadece ürün değil güven de sunuyoruz. Modern
                üretim tesislerimiz, deneyimli kadromuz ve güçlü iş
                ortaklarımızla, alüminyumun olduğu her noktada değer
                yaratıyoruz. Yalnızca bugünün değil, geleceğin de ihtiyaçlarını
                karşılamak için çalışıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
