import React from "react";
import Link from "next/link";
import Logo from "/public/images/logo-2.svg";
import Services from "../../api/Services";
import Image from "next/image";

const Footer2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="wpo-site-footer-s2">
      <div className="shape-1">
        <svg width="596" height="590" viewBox="0 0 596 590" fill="none">
          <path d="M148 590L596 0H0L148 590Z" />
        </svg>
      </div>
      <div className="shape-2">
        <svg width="328" height="510" viewBox="0 0 328 510" fill="none">
          <path d="M62 0L328 226V510H62L0 472L62 0Z" />
        </svg>
      </div>
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12 order-2 order-md-1">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>İletişim</h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        <i className="fi flaticon-email"></i>
                        erdenaluminyum@gmail.com
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        <i className="fi flaticon-phone-call"></i>+90 543 329 95
                        56
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        <i className="fi flaticon-placeholder"></i>Şeyh Osman
                        Mahallesi Yeni Sanayi Sitesi, 66100 Merkez/Yozgat
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12 order-1 order-md-2">
              <div className="widget about-widget">
                <div className="logo widget-title mb-5">
                  <Image src="/logo_white.png" alt="logo" width={240} height={60} />
                </div>
                <p>
                  Estetik ve dayanıklılığı bir arada sunan ürünlerimizle,
                  projelerinize değer katıyoruz.
                </p>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      <i className="ti-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12 order-3">
              <div className="widget link-widget s2">
                <div className="widget-title">
                  <h3>Hizmetlerimiz</h3>
                </div>
                <ul>
                  {Services.slice(0, 5).map((service, Sitem) => (
                    <li key={Sitem}>
                      <Link
                        onClick={ClickHandler}
                        href={"/service/[slug]"}
                        as={`/service/${service.slug}`}
                      >
                        {service.sTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
