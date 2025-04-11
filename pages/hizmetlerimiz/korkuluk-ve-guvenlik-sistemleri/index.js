import React from "react";
import Banner from "../../../components/banner/banner";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Korkuluk ve Güvenlik Sistemleri | Dayanıklı Çözümler Erden’de
        </title>
        <meta
          name="description"
          content="Balkon, merdiven ve teraslar için estetik ve sağlam korkuluk sistemleri. Erden Alüminyum ile güvenliği ve şıklığı bir arada sunuyoruz."
        />
        <meta
          property="og:title"
          content="Korkuluk ve Güvenlik Sistemleri | Dayanıklı Çözümler Erden’de"
        />
        <meta
          property="og:description"
          content="Balkon, merdiven ve teraslar için estetik ve sağlam korkuluk sistemleri. Erden Alüminyum ile güvenliği ve şıklığı bir arada sunuyoruz."
        />
      </Head>
      <Banner text="KORKULUK VE GÜVENLİK SİSTEMLERİ" />

      <div className="container">
        <div>
          <div className="about-left-item mt-5">
            <div className="wpo-section-title">
              <p className="text-center">
                Korkuluk ve güvenlik sistemleri, yapıların hem iç hem de dış
                alanlarında güvenliği sağlamak ve estetik bütünlüğü korumak
                amacıyla kullanılan önemli yapı elemanlarıdır. Balkon, merdiven,
                teras ve bahçe gibi alanlarda kullanılan bu sistemler; cam,
                alüminyum, ferforje, paslanmaz çelik ve kompozit gibi farklı
                malzemelerle üretilebilir.
              </p>
              <p>
                <strong>Avantajları:</strong>
              </p>
              <ul>
                <li>
                  <strong>Güvenlik Sağlar:</strong> Özellikle yüksek kotlu
                  alanlarda düşme riskini ortadan kaldırır, çocuklar ve yaşlılar
                  için güvenli bir ortam oluşturur.
                </li>
                <li>
                  <strong>Estetik Çözümler:</strong> Mimari tasarımla bütünleşen
                  modern ve dekoratif korkuluk modelleri sayesinde yapının
                  görselliğini tamamlar.
                </li>
                <li>
                  <strong>Dayanıklı Malzeme:</strong> Paslanmaz çelik, temperli
                  cam, alüminyum gibi dayanıklı malzemelerle uzun yıllar
                  sorunsuz kullanım sağlar.
                </li>
                <li>
                  <strong>Hava Şartlarına Uyum:</strong> Dış ortam koşullarına
                  karşı yüksek dayanım gösterir; solma, paslanma ya da
                  deformasyon oluşmaz.
                </li>
                <li>
                  <strong>Çeşitli Tasarım Seçenekleri:</strong> Projeye özel
                  ölçü, renk ve formda üretim yapılabilir.
                </li>
                <li>
                  <strong>Kolay Bakım:</strong> Kullanılan malzemelerin yapısı
                  sayesinde temizlik ve bakım işlemleri oldukça kolaydır.
                </li>
              </ul>
              <p className="mt-5">
                <strong>Kullanım Alanları:</strong>
              </p>
              <ul>
                <li>Balkon ve teras kenarları</li>
                <li>Merdiven korkulukları</li>
                <li>Bina girişleri ve rampalar</li>
                <li>Çatı katı güvenlik sistemleri</li>
                <li>İşyeri ve kamu alanları çevre güvenliği</li>
              </ul>
              <p className="lead text-muted text-center">
                Korkuluk ve güvenlik sistemleri, hem yapısal bütünlük hem de
                güvenlik açısından kritik bir rol oynar. Estetik ve
                fonksiyonelliği bir arada sunan bu sistemler, yaşam alanlarını
                daha konforlu ve güvenli hale getirir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
