"use client";
import React, { useState } from "react";
import Banner from "../../../components/banner/banner";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import Head from "next/head";

const GalleryPage = () => {
  const imageCount = 47;
  const imageSources = Array.from({ length: imageCount }).map(
    (_, i) => `/media/${i + 1}.jpeg`
  );

  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);

  const handleImageClick = (index) => {
    setSlideIndex(index + 1); // FsLightbox 1-indexed
    setToggler(!toggler); // toggle lightbox
  };

  return (
    <>
      <Head>
        <title>
          Erden Alüminyum Proje Galerisi | Cam Balkon ve Cephe Sistemleri
        </title>
        <meta
          name="description"
          content="Tamamladığımız cam balkon, cephe kaplama ve alüminyum doğrama projelerini galerimizde inceleyin. Estetik ve işçilik bir arada."
        />
        <meta
          property="og:title"
          content="Erden Alüminyum Proje Galerisi | Cam Balkon ve Cephe Sistemleri"
        />
        <meta
          property="og:description"
          content="Tamamladığımız cam balkon, cephe kaplama ve alüminyum doğrama projelerini galerimizde inceleyin. Estetik ve işçilik bir arada."
        />
      </Head>
      <Banner text="GALERİ" />
      <section className="container mb-5">
        <div className="row">
          {imageSources.map((src, i) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-2 p-4"
              key={i}
              onClick={() => handleImageClick(i)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={src}
                width={300}
                height={300}
                alt={`Galeri Fotoğrafı ${i + 1}`}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  transformOrigin: "center",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <FsLightbox toggler={toggler} sources={imageSources} slide={slideIndex} />
    </>
  );
};

export default GalleryPage;
