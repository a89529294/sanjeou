import React from "react";
import Image from "next/image";

function MarqueeImage({
  src,
  height,
}: {
  // src: StaticImageData;
  src: string;
  height: string;
}) {
  //   const [imgWidth, setImageWidth] = useState("200px");
  return (
    <div
      className={`relative ml-7 last:mr-7 ${height} sm:ml-2 w-32`}
      //   style={{ width: imgWidth }}
    >
      <Image
        src={src}
        layout="fill"
        objectFit="contain"
        // onLoadingComplete={({ naturalWidth, naturalHeight }) => {
        //   // TODO detect on mobile then use 32 instead of 64
        //   setImageWidth((naturalWidth / naturalHeight) * 64 + "px");
        // }}
        priority
      />
    </div>
  );
}

export default MarqueeImage;
