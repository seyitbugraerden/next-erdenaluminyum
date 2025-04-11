import React from "react";
import Banner from "../../../components/banner/banner";
import Head from "next/head";

const Index = () => {
  return (
    <>
      {" "}
      <Head>
        <title>
          Cam Balkon Sistemleri | Estetik ve Konfor Erden Alüminyum'da
        </title>
        <meta
          name="description"
          content="Modern tasarıma sahip cam balkon sistemleri ile yaşam alanlarınızı dört mevsim kullanın. Şık, dayanıklı ve fonksiyonel çözümler sunuyoruz."
        />
        <meta
          property="og:title"
          content="Cam Balkon Sistemleri | Estetik ve Konfor Erden Alüminyum'da"
        />
        <meta
          property="og:description"
          content="Modern tasarıma sahip cam balkon sistemleri ile yaşam alanlarınızı dört mevsim kullanın. Şık, dayanıklı ve fonksiyonel çözümler sunuyoruz."
        />
      </Head>
      <Banner text="CAM BALKON SİSTEMLERİ" />
      <div className="container">
        <div>
          <div className="about-left-item mt-5">
            <div className="wpo-section-title">
              <p className="text-center">
                Cam balkon sistemleri, yaşam alanlarının konforunu artırmak ve
                dış etkenlerden korunmayı sağlamak amacıyla geliştirilen modern
                ve estetik bir cephe kapatma çözümüdür. Balkonları dört mevsim
                kullanılabilir hale getiren bu sistemler, mekânlara değer
                katarken aynı zamanda enerji verimliliğine de katkıda bulunur.
              </p>
              <p>
                <strong>Avantajları:</strong>
              </p>
              <ul>
                <li>
                  <strong>Isı ve Ses Yalıtımı:</strong> Kullanılan cam ve
                  sızdırmazlık malzemeleri sayesinde dışarıdan gelen gürültü ve
                  ısı değişimleri minimize edilir. Bu da hem yaşam kalitesini
                  artırır hem de enerji tasarrufu sağlar.
                </li>
                <li>
                  <strong>Manzara Kaybı Olmadan Koruma:</strong> Panoramik görüş
                  açısı sunan şeffaf yapısıyla doğallıktan ödün vermeden koruma
                  sağlar.
                </li>
                <li>
                  <strong>Katlanabilir veya Sürgülü Sistemler:</strong> İhtiyaca
                  göre katlanabilir veya sürgülü cam seçenekleri sunularak
                  kullanım kolaylığı ve esneklik sağlanır.
                </li>
                <li>
                  <strong>Kolay Temizlik ve Bakım:</strong> Cam panellerin içe
                  doğru açılabilir yapısı sayesinde temizliği zahmetsizdir.
                </li>
                <li>
                  <strong>Güvenlik:</strong> Temperli camlar ve kaliteli
                  alüminyum profiller ile güvenli bir yapı sunar.
                </li>
                <li>
                  <strong>Estetik ve Değer Katma:</strong> Modern tasarımıyla
                  binaların dış görünümünü estetik olarak tamamlar ve
                  gayrimenkul değerini artırır.
                </li>
              </ul>
              <p className="mt-5">
                <strong>Kullanım Alanları:</strong>
              </p>
              <ul>
                <li>Konut balkonları</li>
                <li>Kafe ve restoran terasları</li>
                <li>Ofis açık alanları</li>
                <li>Kış bahçeleri</li>
                <li>Verandalar</li>
              </ul>
              <p className="lead text-muted text-center">
                Cam balkon sistemleri, kullanıcıya hem konfor hem de estetik
                kazandıran uzun ömürlü bir çözümdür. Projeye özel ölçü alımı ve
                isteğe göre farklı cam, profil ve renk seçenekleri ile her
                mekâna özel çözümler sunulmaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
