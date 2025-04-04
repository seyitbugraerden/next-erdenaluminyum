import React from "react";
import CountUp from "react-countup";
import icon from "/public/images/call.svg";
import abimg1 from "/public/images/about-right-1.jpg";
import abimg2 from "/public/images/about-right-2.jpg";
import Link from "next/link";
import Image from "next/image";

const About2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="Arkitek-about-section-s2 section-padding">
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
      <span id="counter" className="d-none" />
    </section>
  );
};

export default About2;
