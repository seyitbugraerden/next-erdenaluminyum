import React from "react";
import Banner from "../../../components/banner/banner";
import Image from "next/image";
import Link from "next/link";

const GalleryPage = () => {
  return (
    <>
      <Banner text="GALERİ" />
      <section className="container mb-5">
        <div className="row">
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-4">
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

export default GalleryPage;
