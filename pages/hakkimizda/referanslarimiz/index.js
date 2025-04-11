import React from "react";
import Banner from "../../../components/banner/banner";
import Image from "next/image";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <>
      {" "}
      <Head>
        <title>
          Erden Alüminyum Referansları | Güvenilir Proje Ortaklarımız
        </title>
        <meta
          name="description"
          content="Erden Alüminyum’un cam balkon, cephe ve doğrama alanındaki güçlü referanslarını keşfedin. Memnun müşteri portföyümüzü inceleyin."
        />
        <meta
          property="og:title"
          content="Erden Alüminyum Referansları | Güvenilir Proje Ortaklarımız"
        />
        <meta
          property="og:description"
          content="Erden Alüminyum’un cam balkon, cephe ve doğrama alanındaki güçlü referanslarını keşfedin. Memnun müşteri portföyümüzü inceleyin."
        />
      </Head>
      <Banner text="Referanslarımız" />
      <section className="container mb-5">
        <div className="row">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-2 p-4">
              <Link href="/logo.png" target="_blank" className="gallery_hover">
                <Image
                  key={i}
                  src="/logo.png"
                  width={300}
                  height={300}
                  alt={`Referans Icon ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "contain",
                    scale: ".7",
                    transformOrigin: "center",
                  }}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
