import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { PropsWithChildren } from "react";

interface Types {
  value: string | undefined;
  options: string[];
  onSelect: (value: string) => void;
  colorSelect: string;
}

export default function ProductColorChanger(props: PropsWithChildren<Types>) {
  const { value, options, colorSelect, onSelect } = props;
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography>Color : {value}</Typography>

      <Box sx={{ display: "flex", gap: "6px" }}>
        <Box sx={{ display: "flex", gap: "6px" }}>
          {options.map((color: any) => (
            <Button
              onClick={() => onSelect(color)}
              key={color}
              sx={{
                background: colorSelect === color ? null : color,
                minWidth: "24px",
                minHeight: "24px",
                borderRadius: "50%",
                position: "relative",
                border:
                  colorSelect === color
                    ? `2px solid ${colorSelect}`
                    : color === "#FFFFFF"
                    ? "1px solid gray"
                    : null,

                "&::before": {
                  content: '""',
                  position: "absolute",
                  display: "block",
                  width: colorSelect === color ? "12px" : null,
                  height: colorSelect === color ? "12px" : null,
                  background: colorSelect === color ? colorSelect : null,
                  borderRadius: "50%",
                },
              }}
            ></Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
