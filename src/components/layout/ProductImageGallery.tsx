import React, { PropsWithChildren } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import AccordionProduct from "./AccordionProduct";

interface Types {
  options: string[];
  onSelect: (image: string, index: any) => void;
  SelectItem: string | null;
}

export default function ProductImageGallery(props: PropsWithChildren<Types>) {
  const { options, onSelect, SelectItem } = props;
  return (
    <>
      <Box
        sx={{
          overflowY: "scroll",
          height: "500px",
        }}
      >
        {options.map((image, index) => (
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
                border:
                  SelectItem === index.toString() ? "2px solid #ADADAD" : "",
              }}
              alt="image for detail product"
            />
          </Button>
        ))}
      </Box>
    </>
  );
}
