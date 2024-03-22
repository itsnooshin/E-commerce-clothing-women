import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Link from "@mui/material/Link";
import { Box, Menu, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { useAuth } from "@/src/context/authContext";
import MenuItem from "@mui/material/MenuItem";
import PersonAdd from "@mui/icons-material/PersonAdd";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Logout } from "@mui/icons-material";


function IconHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { isLoggedIn } = useAuth();
  // if loggin use
  return (
    <>
      <Box
        sx={{
          marginLeft: "auto",
          gap: { xs: 1, md: 2 },
          display: { xs: "none", md: "flex" },
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
              <PersonOutlineOutlinedIcon />
            </Button>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonOutlineOutlinedIcon fontSize="small" />
                </ListItemIcon>
                My account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Link href="/login" color="inherit" underline="none">
            <PersonOutlineOutlinedIcon />
          </Link>
        )}

        <Link href="/wishlist" color="inherit" underline="none">
          {" "}
          <FavoriteBorderOutlinedIcon />
        </Link>
        <Link href="/cart" color="inherit" underline="none">
          {" "}
          <ShoppingBagOutlinedIcon />
        </Link>
      </Box>
    </>
  );
}

export default IconHeader;
