import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from "/public/images/logo.svg";
import Image from "next/image";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;

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
                  <Link onClick={ClickHandler} href="/">
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
                  <Link onClick={ClickHandler} href="/">
                    HİZMETLERİMİZ
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link onClick={ClickHandler} href="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/team">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/team-single/Wade-Warren"
                      >
                        Team Single
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/shop">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/product-single/Bev-Accent-Chair"
                      >
                        Shop Single
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/cart">
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/checkout">
                        Checkout
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/pricing">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/404">
                        404 Error
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/register">
                        Register
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
