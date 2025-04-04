import React from "react";
import ContactForm from "../ContactFrom";
import Link from "next/link";

const Contactpage = () => {
  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-placeholder"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Adres</h2>
                      <p>
                        Şeyh Osman, Yüzüncü Yıl Yeni Sanayi Sitesi No:40
                        Merkez/Yozgat
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-email"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>E-Posta</h2>
                      <p>***</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-phone-call"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>İletişim</h2>
                      <Link href="tel:+905433299556">+90 543 329 95 56</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="wpo-contact-map-section">
        <div className="wpo-contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d322.16045388659614!2d34.788657832516556!3d39.8086958302959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4080710f61812a67%3A0xea5ca9adf003d52b!2zRVJERU4gQUzDnE3EsE5ZVU0!5e0!3m2!1str!2str!4v1743794764038!5m2!1str!2str"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </section>
  );
};

export default Contactpage;
