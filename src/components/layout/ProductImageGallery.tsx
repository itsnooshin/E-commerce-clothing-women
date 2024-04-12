import React, { PropsWithChildren } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

interface Types {
  images: string[];
  onSelect: (image  :string , index : any) => void;
  itemS: string | null;
}

export default function ProductImageGallery(props: PropsWithChildren<Types>) {
  const { images, itemS, onSelect } = props;
  return (
    <>
      {images.map((image, index) => (
        <Button
          key={index}
          onClick={() => {
            onSelect(image, index);
          }}
        >
          <Image
            key={image}
            src={image}
            width={120}
            height={120}
            style={{
              objectFit: "cover",
              border: itemS === index.toString() ? "2px solid #ADADAD" : "",
            }}
            alt="image for detail product"
          />
        </Button>
      ))}
    </>
  );
}
