import React, { PropsWithChildren } from "react";
import { Box, Button } from "@mui/material";
interface Types {
  colors: string[];
  currentColor: string;
  setCurrentColor: (hover: string) => void;
}

export default function ColorSelector(props: PropsWithChildren<Types>) {
  const { colors, currentColor, setCurrentColor } = props;
  return (
    <>
    
    <Box sx={{ display: "flex", gap: "6px" }}>
      {colors.map((color: any) => (
        <Button
          onClick={() => setCurrentColor(color)}
          key={color}
          sx={{
            background: currentColor === color ? null : color,
            minWidth: "24px",
            minHeight: "24px",
            borderRadius: "50%",
            position: "relative",
            border:
              currentColor === color
                ? `2px solid ${currentColor}`
                : color === "#FFFFFF"
                ? "1px solid gray"
                : null,

            "&::before": {
              content: '""',
              position: "absolute",
              display: "block",
              width: currentColor === color ? "12px" : null,
              height: currentColor === color ? "12px" : null,
              background: currentColor === color ? currentColor : null,
              borderRadius: "50%",
            },
          }}
        ></Button>
      ))}
    </Box>
    </>
  );
}
