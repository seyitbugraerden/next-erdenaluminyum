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
          {Array.from({ length: 47 }).map((_, i) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-2 p-4">
              <Link href={`/media/${i + 1}.jpeg`} target="_blank" className="gallery_hover">
                <Image
                  key={i}
                  src={`/media/${i + 1}.jpeg`}
                  width={300}
                  height={300}
                  alt={`Referans Icon ${i + 1}`}
                  id="img__gallery"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
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
