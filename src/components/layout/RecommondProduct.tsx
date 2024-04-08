import { AppDispatch, RootState } from "@/src/app/store";
import { getProduct } from "@/src/featuers/product/productSlice";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Types {
  category: string;
}

export default function RecommondProduct(props: PropsWithChildren<Types>) {
  const { category } = props;
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (store: RootState) => store.product
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log(category);
  console.log(
    items.filter((items) => items.product_category === category).slice(0, 3)
  );
  const filterProduct = items
    .filter((items) => items.product_category === category)
    .slice(0, 3);
  if (loading) return;
  return (
    <>
      {items && (
        <Box>
          <Typography
            mb={7}
            variant="h5"
            fontFamily={"inherit"}
            fontWeight={600}
          >
            You May Also Like
          </Typography>
          <Grid container spacing={2}>
            {filterProduct.map((item: any) => (
              <Grid item xs={12} md={4}>
                <Link
                  href={{
                    pathname: `/collection/all/products/${item.id}`,
                    query: { name: `${item.product_name}` },
                  }}
                  style={{ color: "inherit" }}
                >
                  <Image
                    src={item.product_img[0]}
                    style={{ objectFit: "cover", width: "100%" }}
                    alt="image for product"
                    width={400}
                    height={400}
                  />
                  {item.product_new && (
                    <Typography
                      sx={{
                        bgcolor: "white",
                        padding: "0.5rem 1.5rem",
                        marginRight: "17rem",
                      }}
                    >
                      New{" "}
                    </Typography>
                  )}
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
                                items?.hex === "#FFFFFF"
                                  ? "1px solid #dad7cd"
                                  : null
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
          </Grid>
        </Box>
      )}
    </>
  );
}
