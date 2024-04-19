import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from '@mui/material/Link';
import {
  Box,
  Menu,
  Button,
  IconButton,
  Avatar,
  Modal,
  Badge,
  Typography,
} from '@mui/material';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useAuth } from '@/src/context/authContext';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Logout } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Person4Icon from '@mui/icons-material/Person4';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { relative } from 'path';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/app/store';
import ModalCart from '../layout/ModalCart';
import Image from 'next/image';
import useProductColorHook from '@/src/hooks/useProductColorHook';
import { ColorData } from '@/src/types/productTypes';
import { addCart, RemoveItem } from '@/src/featuers/cart/cartSlice';
import ProductSearch from './ProductSearch';
import BannerHeader from './BannerHeader';
import CloseIcon from '@mui/icons-material/Close';
import NavBar from '../layout/NavBar';
import { Option } from '@/src/types/MenuTypes';
import LogoWebsite from '../layout/LogoWebsite';
import DesktopMenu from '../layout/DesktopMenu';
import SearchIcon from './SearchField';
import EmptyCart from '../layout/EmptyCart';
import DisplayProductCart from '../layout/DisplayProductCart';
import BadgeNumberShopping from './BadgeNumberShopping';

interface Types {}

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
          marginLeft: 'auto',
          gap: { xs: 1, md: 2 },
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
        }}
      >
        {isLoggedIn ? (
          <>
            <Button
              onClick={handleClick}
              sx={{
                color: '#000000',
                padding: '0px',
                margin: '0px',
                display: 'block',
                minWidth: '0px',
              }}
            >
              <AccountCircleOutlinedIcon sx={{ color: '#404040' }} />
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
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
          {' '}
          <FavoriteBorderOutlinedIcon />
        </Link>
        {/* cart shopping */}
        <BadgeNumberShopping
          badgetItem={badgetItem.toString()}
          handleOpenModal={handleOpenModal}
        />
      </Box>

      <Modal
        open={openModal}
        sx={{
          backdropFilter: 'blur(5px)',
          display: { xs: ' none', md: 'flex' },
          border: 'none',
        }}
      >
        {badgetItem === 0 ? (
          <EmptyCart handleCloseModal={handleCloseModal} />
        ) : (
          <DisplayProductCart
            shopsItem={shopsItem}
            handleCloseModal={handleCloseModal}
            handleRemove={handleRemove}
          />
        )}
      </Modal>
    </>
  );
}

export default IconHeader;
