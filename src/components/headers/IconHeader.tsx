import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from '@mui/material/Link';
import { Box, Menu, Button, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAuth } from '@/src/context/authContext';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Logout } from '@mui/icons-material';
import Person4Icon from '@mui/icons-material/Person4';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/app/store';
import { RemoveItem } from '@/src/featuers/cart/cartSlice';
import { addCart } from '@/src/featuers/cart/cartSlice';
import { setCartItems } from '@/src/featuers/cart/cartSlice';
import EmptyCart from '../layout/EmptyCart';
import DisplayProductCart from '../layout/DisplayProductCart';
import BadgeNumberShopping from './BadgeNumberShopping';

function IconHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch<AppDispatch>();
  const shopsItem = useSelector((store: RootState) => store.cart.items);
  // local storage
  useEffect(() => {
    const getItemCard = localStorage.getItem('cartItem');
    if (getItemCard) {
      dispatch(setCartItems(JSON.parse(getItemCard)));
    }
  }, [dispatch]);

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

  const handleRemove = (id: any) => {
    dispatch(RemoveItem(id));
  };

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
        
        <Link href={isLoggedIn ? '/wishlist' : '/login'} color="inherit" underline="none">
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
          display: { xs: ' none', md: 'flex' },
          border: 'none',
        }}
      >
        <Box>
          {badgetItem === 0 ? (
            <EmptyCart handleCloseModal={handleCloseModal} />
          ) : (
            <DisplayProductCart
              shopsItem={shopsItem}
              handleCloseModal={handleCloseModal}
              handleRemove={handleRemove}
            />
          )}
        </Box>
      </Modal>
    </>
  );
}

export default IconHeader;
