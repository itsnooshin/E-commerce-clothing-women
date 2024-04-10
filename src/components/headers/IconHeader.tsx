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
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "@/src/context/authContext";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Logout } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Person4Icon from "@mui/icons-material/Person4";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { relative } from "path";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/app/store";

function IconHeader() {
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch<AppDispatch>();
  // const itemToAdd = {
  //   id: id,
  //   name: product_name,
  //   image: product_img[0],
  //   quantity: 1,
  //   price: 9.99,
  //   color: "red",
  // };
  const shopsItem = useSelector((store: RootState) => store.cart.items);
  const badgetItem = shopsItem.length;
  // const handle = () => {
  //   dispatch(addCart(itemToAdd));
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { isLoggedIn, logout } = useAuth();

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
        <Link href="/search" color="inherit" underline="none">
          {" "}
          <SearchOutlinedIcon />
        </Link>

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
        <Box sx={{}}></Box>
      </Box>

      <Modal open={openModal}>
        <Box
          sx={{
            background: "white",
            width: "500px",
            height: "700px",
            position: "absolute" as "absolute",
            top: "0px",
            right: "0rem",
            padding: "2rem",
          }}
        >
          this is modal
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
      </Modal>
    </>
  );
}

export default IconHeader;
// if cart is empty the styke shoudl change
