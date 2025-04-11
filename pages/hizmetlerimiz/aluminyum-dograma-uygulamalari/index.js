import React from "react";
import Banner from "../../../components/banner/banner";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Alüminyum Doğrama Sistemleri | Erden Alüminyum Kalitesiyle
        </title>
        <meta
          name="description"
          content="Yüksek dayanıklılığa sahip, estetik ve uzun ömürlü alüminyum doğrama çözümleri. Erden Alüminyum ile yapılarınıza değer katın."
        />
        <meta
          property="og:title"
          content="Alüminyum Doğrama Sistemleri | Erden Alüminyum Kalitesiyle"
        />
        <meta
          property="og:description"
          content="Yüksek dayanıklılığa sahip, estetik ve uzun ömürlü alüminyum doğrama çözümleri. Erden Alüminyum ile yapılarınıza değer katın."
        />
      </Head>
      <Banner text="ALÜMİNYUM DOĞRAMA UYGULAMARI" />

      <div className="container">
        <div>
          <div className="about-left-item mt-5">
            <div className="wpo-section-title">
              <p className="text-center">
                Alüminyum doğrama sistemleri, modern mimarinin vazgeçilmez yapı
                elemanları arasında yer alır. Hafif, dayanıklı ve estetik
                yapısıyla öne çıkan alüminyum, pencere, kapı ve cephe
                uygulamalarında üstün performans sunar. Isı ve ses yalıtımı
                sağlayan profilleri ile hem konut hem de ticari yapılar için
                ideal çözümler üretir.
              </p>
              <p>
                <strong>Avantajları:</strong>
              </p>
              <ul>
                <li>
                  <strong>Dayanıklılık:</strong> Alüminyum, paslanmaz ve çürümez
                  yapısıyla uzun ömürlü bir kullanım sunar. Zorlu hava
                  koşullarına karşı yüksek direnç gösterir.
                </li>
                <li>
                  <strong>Hafif ve Güçlü:</strong> Malzeme olarak hafif olmasına
                  rağmen taşıyıcı gücü yüksektir. Bu sayede büyük açıklıklarda
                  dahi güvenle kullanılabilir.
                </li>
                <li>
                  <strong>Isı Yalıtımı:</strong> Isı bariyerli (termal break)
                  sistemlerle yüksek yalıtım sağlar, enerji tasarrufuna katkıda
                  bulunur.
                </li>
                <li>
                  <strong>Estetik Görünüm:</strong> Modern mimariye uygun ince
                  profiller ve geniş cam yüzeylerle şık bir görünüm sunar.
                </li>
                <li>
                  <strong>Renk ve Kaplama Seçenekleri:</strong> Elektrostatik
                  boya ve eloksal kaplama sayesinde farklı renk ve dokularda
                  üretilebilir, mimari bütünlüğe uyum sağlar.
                </li>
                <li>
                  <strong>Bakım Kolaylığı:</strong> Temizliği ve bakımı oldukça
                  kolaydır; uzun yıllar boyunca ilk günkü görünümünü korur.
                </li>
              </ul>
              <p className="mt-5">
                <strong>Kullanım Alanları:</strong>
              </p>
              <ul>
                <li>Pencere ve kapı sistemleri</li>
                <li> Vitrin ve mağaza girişleri</li>
                <li> Ofis bölme sistemleri</li>
                <li> Kış bahçeleri ve teras kapatmaları</li>
                <li> Ticari bina ve konut projeleri</li>
              </ul>
              <p className="lead text-muted text-center">
                Alüminyum doğrama sistemleri, modern yapıların hem teknik
                ihtiyaçlarını karşılar hem de estetik açıdan zengin çözümler
                sunar. Projeye özel ölçülerde üretim ve montaj hizmeti ile
                maksimum uyum ve performans sağlanır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
