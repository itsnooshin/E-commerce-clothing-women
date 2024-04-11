"use client";
import BannerHeader from "@/src/components/headers/BannerHeader";
import NavBar from "@/src/components/layout/NavBar";
import { getSingleproduct } from "@/src/helper";
import { Product } from "@/src/types/productTypes";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, useEffect, useState } from "react";
import SizeGuidModal from "./SizeGuidModal";
import Breadcrumb from "../headers/Breadcrumb";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccordionProduct from "./AccordionProduct";
import Footer from "./Footer";
import RecommondProduct from "./RecommondProduct";
import useProductColorHook from "@/src/hooks/useProductColorHook";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/app/store";

import { addCart } from "@/src/featuers/cart/cartSlice";
import { LoadingButton } from "@mui/lab";
import ModalCart from "./ModalCart";

interface ProductValue {
  product: Product;
}

export default function ProductDetail(props: PropsWithChildren<ProductValue>) {
  const { product } = props;

  // const item = useSelector((store: RootState) => store.cart);
  const [size, setSize] = useState("Size");
  // const [isLoading, setIsLoading] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  const {
    id,
    product_color,
    procuct_price,
    product_name,
    product_img,
    product_description,
    product_size,
    product_category,
  } = product;
  // console.log(product);

  const {
    colors,
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
  } = useProductColorHook(product_color);

  const dispatch = useDispatch<AppDispatch>();
  const itemToAdd = {
    id: id,
    name: product_name,
    image: product_img[0],
    quantity: 1,
    price: procuct_price,
    color: CurrentColor,
    size: size,
  };
  console.log(itemToAdd);
  const shops = useSelector((store: RootState) => store.cart.items);
  console.log(shops);
  const handle = () => {
    if (size === "Size") return;
    setOpenModal(true);
    dispatch(addCart(itemToAdd));
    // setIsLoading(false);
  };
  const shopsItem = useSelector((store: RootState) => store.cart.items);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setIsModalOpen(true);
  //   }, 2000);
  // }, [isLoading]);

  return (
    <>
      <BannerHeader />
      <NavBar />
      <Box sx={{ pt: 3 }}>
        <Container sx={{ paddingLeft: 0 }}>
          <Breadcrumb name={product_name} />
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={2}>
              <Box
                sx={{
                  overflowY: "scroll",
                  height: "500px",
                }}
              >
                {product_img.map((image, index) => (
                  <Button
                    key={index}
                    onClick={() => {
                      setIsSelected(image);
                      setIsHovered(true);
                      setItemS(
                        itemS === index.toString() ? null : index.toString()
                      );
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
                          itemS === index.toString() ? "2px solid #ADADAD" : "",
                      }}
                      alt="image for detail product"
                    />
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  bgcolor: "#F0F2EF",
                  marginTop: "3rem",
                  width: "560px",
                  marginBottom: "10rem",
                }}
              >
                <AccordionProduct />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Box>
                <Image
                  src={isHovered ? isSelected : product_img[0]}
                  width={400}
                  height={500}
                  style={{ objectFit: "cover", width: "100%" }}
                  alt="image for detail product"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
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
                    onChange={handleChange}
                    value={size}
                    displayEmpty
                    MenuProps={{
                      PaperProps: {},
                    }}
                    renderValue={(selectedSize) => {
                      if (selectedSize.length === 0) {
                        return (
                          <Typography sx={{ fontWeight: "800 !important" }}>
                            {size}
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
                    onClick={handle}
                    sx={{
                      color: "#fff",
                      padding: "0.5rem",
                      textAlign: "center",
                    }}
                  >
                    Add to cart ${procuct_price}
                  </Button>
                </Box>
                <Modal open={openModal}>
                  <Box
                    sx={{
                      background: "white",
                      width: "500px",
                      // height: "100vh",
                      minHeight: 0,
                      height: "100vh",
                      overflow: "auto",
                      position: "absolute" as "absolute",
                      top: "0px",
                      right: "0rem",
                      padding: " 3rem 1.5rem",
                      display: "flex",
                      // justifyContent: "center",
                      flexDirection: "column",
                      // alignItems: "center",

                      gap: "2rem",
                      paddingTop: "3rem",
                    }}
                  >
                    <Button
                      onClick={handleCloseModal}
                      sx={{
                        color: "black",
                        position: "absolute" as "absolute",
                        left: "0rem",
                        top: "1rem",
                      }}
                    >
                      <CloseIcon />
                    </Button>

                    <Typography
                      variant="h6"
                      textAlign={"center"}
                      fontWeight={600}
                    >
                      Your Cart
                    </Typography>
                    {shopsItem.map((items) => (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            // justifyContent: "center",
                            gap: "1rem",
                          }}
                        >
                          <Box sx={{ position: "relative" }}>
                            <Image
                              src={items.image}
                              width={142}
                              height={142}
                              alt="image selected"
                              style={{
                                objectFit: "cover",
                              }}
                            />
                            <Box
                              sx={{
                                background: "white",
                                position: "absolute",
                                top: "0.4rem",
                                right: "0.4rem",
                                padding: "0.3rem 1rem",
                              }}
                            >
                              1
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.7rem",
                            }}
                          >
                            {" "}
                            <Typography sx={{ fontWeight: "600" }}>
                              {items.name.split(" ").slice(0, 2).join(" ")}
                            </Typography>
                            <Typography>Size : {items.size}</Typography>
                            <Typography>Color : {items.color}</Typography>
                            <Box
                              sx={{
                                display: "flex",
                              }}
                            >
                              <Typography> - 1 + </Typography>
                              <Typography
                                sx={{
                                  fontWeight: "600",
                                  position: "absolute" as "absolute",
                                  right: "3rem",
                                }}
                              >
                                ${items.price}
                              </Typography>
                            </Box>
                            <Button
                              sx={{
                                color: "black",
                                position: "absolute" as "absolute",
                                // right: "0rem",
                                right: "0rem",
                                // top: "0",
                              }}
                            >
                              <CloseIcon />
                            </Button>
                          </Box>
                        </Box>

                        {/* item - 1 + ==> quantity */}
                        {/* item chanta selected  */}
                      </>
                    ))}
                    <Button
                      sx={{
                        background: "#5A6D57",
                        color: "white",
                        borderRadius: 0,
                        padding: "0.5rem 3rem",
                        textTransform: "capitalize",
                      }}
                    >
                      Check Out
                    </Button>
                  </Box>
                </Modal>
                {/* <Modal open={openModal}>
                  <Box
                    sx={{
                      background: "white",
                      width: "500px",
                      height: "700px",
                      position: "absolute" as "absolute",
                      top: "0px",
                      right: "0rem",
                      padding: "2rem",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h6" fontWeight={600}>
                      Your Shopping Bag is Empty
                    </Typography>
                    <Box>
                      <Typography>
                        discover modimal and add products to your Bag
                      </Typography>
                    </Box>
                    <Button
                      onClick={handleCloseModal}
                      sx={{
                        color: "black",
                        position: "absolute" as "absolute",
                        right: "0rem",
                        top: "1rem",
                      }}
                    >
                      <CloseIcon />
                    </Button>
                  </Box>
                </Modal> */}
                {/* {isModalOpen && <ModalCart />} */}
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
                  Our CuproLuxe is a regenerated cellulose fabric made from
                  cotton waste. This fabric is made in a zero-waste closed loop
                  process, and is 100% biodegradable. Cupro is breathable, quick
                  drying and durable. This OEKO-TEX®, FSC, and GRS certified
                  material is made in Turkey.
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
              // width: "100%",
              // height: "400px",

              marginBottom: "5rem",
            }}
          >
            <RecommondProduct category={product_category} />
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
