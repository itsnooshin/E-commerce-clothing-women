import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Link from "@mui/material/Link";
import {
  Box,
  Menu,
  Button,
  IconButton,
  Avatar,
  Modal,
  Badge,
  Typography,
} from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import { useAuth } from "@/src/context/authContext";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Logout } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Person4Icon from "@mui/icons-material/Person4";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { relative } from "path";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/app/store";
import ModalCart from "../layout/ModalCart";
import Image from "next/image";
import useProductColorHook from "@/src/hooks/useProductColorHook";
import { ColorData } from "@/src/types/productTypes";
import { addCart, RemoveItem } from "@/src/featuers/cart/cartSlice";
import ProductSearch from "./ProductSearch";
import BannerHeader from "./BannerHeader";
import CloseIcon from "@mui/icons-material/Close";
import NavBar from "../layout/NavBar";
import { Option } from "@/src/types/MenuTypes";
import LogoWebsite from "../layout/LogoWebsite";
import DesktopMenu from "../layout/DesktopMenu";
import SearchIcon from "./SearchField";

interface Types {

}

function IconHeader(props: PropsWithChildren<Types>) {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const shopsItem = useSelector((store: RootState) => store.cart.items);
  const badgetItem = shopsItem.length;
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { isLoggedIn, logout } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((store: RootState) => store.product.items);

  const handleRemove = (id: any) => {
    dispatch(RemoveItem(id));
  };

  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const handleOpenSearch = () => setIsOpenSearch(true);
  const handleCloseSearch = () => setIsOpenSearch(false);

  return (
    <>
      <Box
        sx={{
          marginLeft: "auto",
          gap: { xs: 1, md: 2 },
          display: { xs: "none", md: "flex" },
          alignItems: "center",
        }}
      >
       
 
        {/* <SearchIcon /> */}
        {/* {isOpenSearch ? <p>hhh</p> : ""} */}

        {isLoggedIn ? (
          <>
            <Button
              onClick={handleClick}
              sx={{
                color: "#000000",
                padding: "0px",
                margin: "0px",
                display: "block",
                minWidth: "0px",
              }}
            >
              <AccountCircleOutlinedIcon sx={{ color: "#404040" }} />
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Link href="/profile">
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonOutlineOutlinedIcon fontSize="small" />
                  </ListItemIcon>
                  My account
                </MenuItem>
              </Link>
              <MenuItem onClick={logout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Link href="/login" color="inherit" underline="none">
            <Person4Icon />
          </Link>
        )}
        <Link href="/wishlist" color="inherit" underline="none">
          {" "}
          <FavoriteBorderOutlinedIcon />
        </Link>
        {/* cart shopping */}
        <Badge
          badgeContent={badgetItem.toString()}
          sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "#5A6D57",
            },
          }}
        >
          <Link
            component="button"
            color="inherit"
            underline="none"
            onClick={handleOpenModal}
          >
            <ShoppingBagOutlinedIcon />
          </Link>
        </Badge>
       
      </Box>

    

      <Modal open={openModal}>
        {/* <Box
          sx={{
            background: "white",
            width: "500px",
            height: "700px",
            position: "absolute" as "absolute",
            top: "0px",
            right: "0rem",
            padding: "2rem",
            display: "flex",
            // justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",

            gap: "2rem",
            paddingTop: "6rem",
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Your Shopping Bag is Empty
          </Typography>

          <Box sx={{ width: "250px", textAlign: "center" }}>
            <Typography>
              Discover Modimal And Add Products To your Bag
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              gap: "2rem",
            }}
          >
            <Button
              sx={{
                background: "#5A6D57",
                color: "white",
                borderRadius: 0,
                textTransform: "capitalize",
                padding: "0.5rem 3rem",
              }}
            >
              Collection
            </Button>
            <Button
              sx={{
                background: "#5A6D57",
                color: "white",
                borderRadius: 0,
                padding: "0.5rem 3rem",
                textTransform: "capitalize",
              }}
            >
              New In
            </Button>
            <Button
              sx={{
                background: "#5A6D57",
                color: "white",
                borderRadius: 0,
                padding: "0.5rem 3rem",
                textTransform: "capitalize",
              }}
            >
              Best Sellers
            </Button>
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
        </Box> */}
        {badgetItem === 0 ? (
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
              // justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",

              gap: "2rem",
              paddingTop: "6rem",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Your Shopping Bag is Empty
            </Typography>

            <Box sx={{ width: "250px", textAlign: "center" }}>
              <Typography>
                Discover Modimal And Add Products To your Bag
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                gap: "2rem",
              }}
            >
              <Button
                sx={{
                  background: "#5A6D57",
                  color: "white",
                  borderRadius: 0,
                  textTransform: "capitalize",
                  padding: "0.5rem 3rem",
                }}
              >
                Collection
              </Button>
              <Button
                sx={{
                  background: "#5A6D57",
                  color: "white",
                  borderRadius: 0,
                  padding: "0.5rem 3rem",
                  textTransform: "capitalize",
                }}
              >
                New In
              </Button>
              <Button
                sx={{
                  background: "#5A6D57",
                  color: "white",
                  borderRadius: 0,
                  padding: "0.5rem 3rem",
                  textTransform: "capitalize",
                }}
              >
                Best Sellers
              </Button>
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
        ) : (
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

            <Typography variant="h6" textAlign={"center"} fontWeight={600}>
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
                      // justifyContent: "center",
                      flexDirection: "column",
                      gap: "0.7rem",
                    }}
                  >
                    {" "}
                    <Typography sx={{ fontWeight: "600" }}>
                      {items.name.split(" ").slice(0, 2).join(" ")}
                    </Typography>
                    <Typography>Size : S</Typography>
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
                        $160
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
        )}
      </Modal>

    </>
  );
}

export default IconHeader;
// if cart is empty the styke shoudl change
