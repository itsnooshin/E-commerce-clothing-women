import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

interface Types {
  isHovered: boolean;
  isSelected: string;
  productImage: string;
}

export default function DetailImage(props: PropsWithChildren<Types>) {
  const { isHovered, isSelected, productImage } = props;
  return (
    <Box>
      <Image
        src={isHovered ? isSelected : productImage}
        width={400}
        height={500}
        style={{ objectFit: "cover", width: "100%" }}
        alt="image for detail product"
      />
    </Box>
  );
}
