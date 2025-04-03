import React from "react";
import Image from "next/image"; // <-- unutulmuş

const AboutUsPage = () => {
  return (
    <>
      <Image
        src="https://picsum.photos/1920/600"
        width={1920}
        height={300}
        alt="cover_image"
        className="w-100"
        style={{
          filter: "brightness(20%)",
          height: "450px",
          objectFit: "cover",
        }}
      />
    </>
  );
};

export default AboutUsPage;
