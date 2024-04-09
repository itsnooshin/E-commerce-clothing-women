import { useState, useEffect, PropsWithChildren } from "react";
import { ColorData } from "../types/productTypes";


function useProductColorHook(product_color: ColorData[]) {
  const allColor = product_color
    .filter((item) => item.hex)
    .map((item) => item.hex);
  const currentColorItem = product_color
    .filter((item) => item.currentColor)
    .map((item) => item.currentColor);
  const [colors, setColors] = useState(allColor);
  const [currentColor, setCurrentColor] = useState(currentColorItem[0]);
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [itemS, setItemS] = useState<string | null>(null);

  const CurrentColor = product_color.find(
    (item) => item.hex === currentColor
  )?.name;
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return {
    colors,
    setColors,
    currentColor,
    setCurrentColor,
    open,
    handleOpen,
    handleClose,
    isSelected,
    setIsSelected,
    isHovered,
    setIsHovered,
    itemS,
    setItemS,
    CurrentColor,
  };
}

export default useProductColorHook;
