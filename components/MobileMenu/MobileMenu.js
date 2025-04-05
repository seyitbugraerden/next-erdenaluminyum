import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
  {
    id: 1,
    title: "ANA SAYFA",
    link: "/",
  },

  {
    id: 3,
    title: "HAKKIMIZDA",
    link: "/hakkimizda/biz-kimiz",
    submenu: [
      {
        id: 31,
        title: "Biz Kimiz?",
        link: "/hakkimizda/biz-kimiz",
      },
      {
        id: 3222,
        title: "Referanslarımız",
        link: "/hakkimizda/referanslarimiz",
      },
      {
        id: 322,
        title: "Galeri",
        link: "/hakkimizda/galeri",
      },
    ],
  },

  {
    id: 6,
    title: "HİZMETLERİMİZ",
    link: "/hizmetlerimiz/cam-balkon-sistemleri",
    submenu: [
      {
        id: 61,
        title: "CAM BALKON SİSTEMLERİ",
        link: "/hizmetlerimiz/cam-balkon-sistemleri",
      },
      {
        id: 62,
        title: "ALÜMİNYUM DOĞRAMA UYGULAMARI",
        link: "/hizmetlerimiz/aluminyum-dograma-uygulamalari",
      },
      {
        id: 64,
        title: "DIŞ CEPHE KAPLAMA SİSTEMLERİ",
        link: "/hizmetlerimiz/dis-cephe-kaplama-sistemleri",
      },
      {
        id: 65,
        title: "CEPHE GİYDİRME SİSTEMLERİ",
        link: "/hizmetlerimiz/cephe-giydirme-sistemleri",
      },
      {
        id: 66,
        title: "KORKULUK VE GÜVENLİK SİSTEMLERİ",
        link: "/hizmetlerimiz/korkuluk-ve-guvenlik-sistemleri",
      },
    ],
  },
  {
    id: 88,
    title: "İLETİŞİM",
    link: "/iletisim",
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, mn) => {
            return (
              <ListItem
                className={item.id === openId ? "active" : null}
                key={mn}
              >
                {item.submenu ? (
                  <Fragment>
                    <p
                      onClick={() =>
                        setOpenId(item.id === openId ? 0 : item.id)
                      }
                    >
                      {item.title}
                      <i
                        className={
                          item.id === openId
                            ? "fa fa-angle-up"
                            : "fa fa-angle-down"
                        }
                      ></i>
                    </p>
                    <Collapse
                      in={item.id === openId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List className="subMenu">
                        <Fragment>
                          {item.submenu.map((submenu, i) => {
                            return (
                              <ListItem key={i}>
                                <Link
                                  onClick={ClickHandler}
                                  className="active"
                                  href={submenu.link}
                                >
                                  {submenu.title}
                                </Link>
                              </ListItem>
                            );
                          })}
                        </Fragment>
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <Link className="active" href={item.link}>
                    {item.title}
                  </Link>
                )}
              </ListItem>
            );
          })}
        </ul>
      </div>

      <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
