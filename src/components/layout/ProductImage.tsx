import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

interface Types {
  Images: string;
  isHovered: boolean;
  isSelected: string;
}

export default function ProductImage(props: PropsWithChildren<Types>) {
  const { Images, isHovered, isSelected } = props;
  return (
    <Box>
      <Image
        src={isHovered ? isSelected : Images}
        width={400}
        height={500}
        style={{ objectFit: "cover", width: "100%" }}
        alt="image for detail product"
      />
      
    </Box>
  );
}
