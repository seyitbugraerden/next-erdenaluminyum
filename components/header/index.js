import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Image from "next/image";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <header id="header" className={`${props.topbarClass}`}>
      <div className={`wpo-site-header ${props.hclass} px-5`}>
        <nav className="navigation navbar navbar-expand-lg container">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <div>
              <div className="navbar-header">
                <Link className="navbar-brand img_1" href="/">
                  <Image
                    src="/logo_white.png"
                    alt="logo"
                    width={320}
                    height={40}
                    className=""
                  />
                </Link>
                <Link className="navbar-brand img_2" href="/">
                  <Image src="/logo.png" alt="logo" width={320} height={40} />
                </Link>
              </div>
            </div>
            <div className="d-lg-none dl-block">
              <div className="mobail-menu">
                <MobileMenu />
              </div>
            </div>
            <div
              id="navbar"
              className="collapse navbar-collapse navigation-holder"
            >
              <button className="menu-close">
                <i className="ti-close"></i>
              </button>
              <ul className="nav navbar-nav mb-2 mb-lg-0">
                <li className="menu-item-has-children">
                  <Link onClick={ClickHandler} href="/">
                    Ana Sayfa
                  </Link>
                </li>
                <li className="menu-item-has-children">
                  <Link onClick={ClickHandler} href="/hakkimizda/biz-kimiz">
                    HAKKIMIZDA
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link onClick={ClickHandler} href="/hakkimizda/biz-kimiz">
                        Biz Kimiz?
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/hakkimizda/referanslarimiz"
                      >
                        Referanslarımız
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/hakkimizda/galeri">
                        Galeri
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link
                    disabled
                    onClick={ClickHandler}
                    href="/hizmetlerimiz/cam-balkon-sistemleri"
                  >
                    HİZMETLERİMİZ
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/hizmetlerimiz/cam-balkon-sistemleri"
                      >
                        Cam Balkon Sistemleri
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/hizmetlerimiz/aluminyum-dograma-uygulamalari"
                      >
                        Alüminyum Doğrama Uygulamaları
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/hizmetlerimiz/dis-cephe-kaplama-sistemleri"
                      >
                        Dış Cephe Kaplama Sistemleri
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/hizmetlerimiz/cephe-giydirme-sistemleri"
                      >
                        Cephe Giydirme Sistemleri
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/hizmetlerimiz/korkuluk-ve-guvenlik-sistemleri"
                      >
                        Korkuluk ve Güvenlik Sistemleri
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/iletisim">
                    İLETİŞİM
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
