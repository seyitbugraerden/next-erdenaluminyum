import React from "react";
import CountUp from "react-countup";
import abimg1 from "/public/images/about-right-3.jpg";
import abimg2 from "/public/images/about-right-4.jpg";
import Link from "next/link";
import Image from "next/image";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="Arkitek-about-section-s4 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <div className="about-text">
              <span>Hakkımızda</span>
              <h2>Alüminyumda Tecrübe ve Güvenin Adresi</h2>
              <p>
                Erden Alüminyum olarak, yılların verdiği tecrübe ve uzmanlıkla
                alüminyum doğrama, cephe sistemleri ve yapı çözümleri alanında
                kaliteli hizmet sunmaktayız. Modern mimari anlayışını estetik ve
                dayanıklılıkla birleştirerek, yaşam ve iş alanlarınıza değer
                katıyoruz.
              </p>
              <p>
              Müşteri memnuniyetini ön planda tutarak, yenilikçi ve güvenilir alüminyum çözümleri sunuyoruz. Her projede kalite standartlarımızı koruyor en başarılı çözümleri sunuyoruz.
              </p>
             
              <Link onClick={ClickHandler} href="/hakkimizda/biz-kimiz" className="theme-btn" style={{marginTop:"60px"}}>
                Daha Fazla
              </Link>
            </div>
          </div>
          <div className="col-lg-7 col-12 order-2 ">
            <div className="about-right-content">
              <div className="info">
                <h3>
                  <CountUp end={15} enableScrollSpy />+
                </h3>
                <p>Yıllık Deneyim</p>
              </div>
              <div className="images">
                <Image src={abimg1} alt="" />
              </div>
              <div className="bg-img">
                <Image src={abimg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span id="counter" className="d-none" />
    </section>
  );
};

export default About;
