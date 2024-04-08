import { AppDispatch, RootState } from "@/src/app/store";
import { getProduct } from "@/src/featuers/product/productSlice";
import Image from "next/image";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "@/src/types/productTypes";
import Link from "next/link";

interface ProductValue {
  items: Product[];
  count: number;
}

const ProductMain = (props: PropsWithChildren<ProductValue>) => {
  const { items, count } = props;

  return (
    <>
      {items?.slice(0, count).map((item) => (
        <Grid item xs={12} sm={6} key={item.id} sx={{ marginBottom: "1rem" }}>
          <Link
            href={{
              pathname: `/collection/all/products/${item.id}`,
              query: { name: `${item.product_name}` },
            }}
            style={{ color: "inherit" }}
          >
            <Image
              src={item.product_img[0]}
              style={{ objectFit: "cover" }}
              alt="image for product"
              width={400}
              height={400}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "6px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                }}
              >
                <Typography sx={{ fontWeight: "700" }}>
                  {item.product_name.split(" ").slice(0, 2).join(" ")}
                </Typography>
                <Typography>
                  {item.product_name.split(" ").slice(2).join(" ")}
                </Typography>

                <Box sx={{ display: "flex", gap: "6px", mt: 1 }}>
                  {item.product_color.map((items) => (
                    <Typography
                      sx={{
                        bgcolor: `${items?.hex}`,
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        display: "inline-block",
                        border: `${
                          items?.hex === "#FFFFFF" ? "1px solid #dad7cd" : null
                        }`,
                      }}
                    ></Typography>
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "700",
                    marginRight: "1rem",
                  }}
                >
                  ${item.procuct_price}
                </Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default ProductMain;
