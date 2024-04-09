import { Product } from "@/src/types/productTypes";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import React, { PropsWithChildren, useEffect, useState } from "react";
import AccordionProduct from "./AccordionProduct";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SizeGuidModal from "./SizeGuidModal";
import Image from "next/image";
import Footer from "@/src/components/layout/Footer";
import RecommondProduct from "./RecommondProduct";
import { getProduct } from "@/src/featuers/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/app/store";
import Products from "@/src/components/layout/Products";

interface Types {
  product: Product;
}

export default function ProductDeatilHome(props: PropsWithChildren<Types>) {
  const { product } = props;

  const {
    id,
    procuct_price,
    product_bestsellere,
    product_category,
    product_color,
    product_description,
    product_img,
    product_new,
    product_size,
    product_name,
  } = product;

  const allColor = product_color
    .filter((item) => item.hex)
    .map((item) => item.hex);
  const currentColorItem = product_color
    .filter((item) => item.currentColor)
    .map((item) => item.currentColor);

  const [colors, setColors] = useState(allColor);
  const [currentColor, setCurrentColor] = useState(currentColorItem[0]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const CurrentColor = product_color.find(
    (item) => item.hex === currentColor
  )?.name;

    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector(
      (store: RootState) => store.product
    );

    useEffect(() => {
      dispatch(getProduct());
    }, [dispatch]);

    console.log(
      items
        .filter((items) => items.product_category === product_category)
        .slice(0, 3)
    );
    const filterProduct = items
      .filter((items) => items.product_category === product_category)
      .slice(0, 3);

    if (loading) return;

  return (
    <>
      <Container>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={2}>
            <Box
              sx={{
                overflowY: "scroll",
                height: "500px",
              }}
            >
              {product_img.map((image) => (
                <Image
                  key={image}
                  src={image}
                  width={120}
                  height={120}
                  style={{ objectFit: "cover" }}
                  alt="image for detail product"
                />
              ))}
            </Box>
            <Box
              sx={{
                bgcolor: "#F0F2EF",
                marginTop: "3rem",
                width: "560px",
                // height: "400px",
                marginBottom: "10rem",
              }}
            >
              <AccordionProduct />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box>
              <Image
                src={product_img[0]}
                width={400}
                height={500}
                style={{ objectFit: "cover", width: "100%" }}
                alt="image for detail product"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontFamily={"inherit"}
              >
                {product_name.split(" ").slice(0, 2).join(" ")}
              </Typography>
              <Typography sx={{ width: "580px" }}>
                {product_description}
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography>Color : {CurrentColor}</Typography>

              <Box sx={{ display: "flex", gap: "6px" }}>
                <Box sx={{ display: "flex", gap: "6px" }}>
                  {colors.map((color) => (
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
                          background:
                            currentColor === color ? currentColor : null,
                          borderRadius: "50%",
                        },
                      }}
                    ></Button>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 7,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  width: "550px",
                }}
              >
                <Button onClick={handleOpen} sx={{ color: "#868686" }}>
                  Size Guide
                </Button>
                {open && (
                  <SizeGuidModal open={open} handleClose={handleClose} />
                )}
              </Box>
              <FormControl sx={{ m: 1, width: "550px", marginLeft: 0 }}>
                <Select
                  sx={{
                    marginBottom: 0,
                    width: 550,
                    height: 50,
                  }}
                  displayEmpty
                  value={""}
                  MenuProps={{
                    disableScrollLock: true,
                    PaperProps: {},
                  }}
                  renderValue={(selectedSize) => {
                    if (selectedSize.length === 0) {
                      return (
                        <Typography sx={{ fontWeight: "bold" }}>
                          Size
                        </Typography>
                      );
                    }
                    return selectedSize;
                  }}
                >
                  {product_size.map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#5A6D57",
                  width: "550px",
                }}
              >
                <Button
                  sx={{
                    color: "#fff",
                    padding: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  Add to cart ${procuct_price}
                </Button>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"550px"}
              color={"#868686"}
              marginTop={"2rem"}
            >
              <Box display={"flex"} alignItems={"center"} gap={"4px"}>
                <LocalShippingOutlinedIcon />
                <Typography>Easy Return</Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={"4px"}>
                <FavoriteBorderOutlinedIcon sx={{ color: "#000000" }} />
                <Typography>Add to Wish List</Typography>
              </Box>
            </Box>
            {/* background item */}
            <Box
              bgcolor={"#F0F2EF"}
              width={"550px"}
              marginTop={"2rem"}
              // height={"500px"}
              padding={"2rem 1rem"}
            >
              <Typography
                variant="h6"
                sx={{
                  borderBottom: "1px solid #ADADAD",
                  paddingBottom: "1rem",
                }}
              >
                Cuproluxe
              </Typography>
              <Typography sx={{ paddingTop: "1rem" }}>
                Our CuproLuxe is a regenerated cellulose fabric made from cotton
                waste. This fabric is made in a zero-waste closed loop process,
                and is 100% biodegradable. Cupro is breathable, quick drying and
                durable. This OEKO-TEX®, FSC, and GRS certified material is made
                in Turkey.
              </Typography>
              <Box sx={{ display: "flex", gap: "12px", marginTop: "1rem" }}>
                <Box>
                  <Typography sx={{ background: "#ffff", padding: "0.7rem" }}>
                    Quick Dry
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ background: "#ffff", padding: "0.7rem" }}>
                    breathable
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ background: "#ffff", padding: "0.7rem" }}>
                    machine washable
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            marginBottom: "5rem",
          }}
        >
         
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
                {filterProduct.map((item) => (
                  <Grid item xs={12} md={4}>
                    <Products
                      item={item}
                      link={`/product/${item.id}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
}