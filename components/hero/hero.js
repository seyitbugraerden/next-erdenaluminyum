import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="static-hero-s3">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-10 col-12">
                <div className="wpo-static-hero-inner">
                  <h2 className="title">
                    Dayanıklılığın ve Estetiğin Buluştuğu Nokta
                  </h2>
                  <p>
                    Erden Alüminyum, modern mimariye uyumlu alüminyum doğrama
                    çözümleriyle yaşam alanlarınıza değer katar. Kaliteli
                    malzeme, titiz işçilik ve zamanında teslimat anlayışımızla
                    hem estetik hem de uzun ömürlü projelere imza atıyoruz.
                  </p>
                  <Link href="/hakkimizda/biz-kimiz" className="theme-btn">
                    BİZ KİMİZ?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
