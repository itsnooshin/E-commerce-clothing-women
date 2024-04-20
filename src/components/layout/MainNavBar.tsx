import { AppBar, Drawer } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import { Modal } from '@mui/material';
import LogoWebsite from './LogoWebsite';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DesktopMenu from './DesktopMenu';
import LogoMobileWebsite from './LogoMobileWebsite';
import IconHeader from '@/src/components/headers/IconHeader';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { PropsWithChildren, useState } from 'react';
import { Option } from '@/src/types/MenuTypes';
import SearchField from '../headers/SearchField';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/app/store';
import EmptyCart from './EmptyCart';
import DisplayProductCart from './DisplayProductCart';
import { RemoveItem } from '@/src/featuers/cart/cartSlice';
import NavigationDropMenuMobile from '../headers/NavigationDropMenuMobile';
import BadgeNumberShopping from '../headers/BadgeNumberShopping';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloseIcon from '@mui/icons-material/Close';
import EmptyCartMobile from '../headers/EmptyCartMobile';
import DisplayCartMobile from './DisplayCartMobile';

interface MainNavBar {
  options: Option[];
  setIsHovered: (hover: string) => void;
  setIsOpen: (hover: boolean) => void;
}

function MainNavBar(props: PropsWithChildren<MainNavBar>) {
  const { options, setIsHovered, setIsOpen } = props;

  const shopsItem = useSelector((store: RootState) => store.cart.items);
  const badgetItem = shopsItem.length;

  const [openDrawerMobile, setOpenDrawerMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = (id: any) => dispatch(RemoveItem(id));
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleCloseSearch = () => setIsOpenSearch(false);

  const handleOpenSearch = () => {
    if (!isOpenSearch) {
      setIsOpenSearch(true);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#ffff',
        boxShadow: 'none',
        color: '#404040',
        width: '100%',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'space-between', md: 'space-around' },
          p: { xs: '0px 20px', md: '0' },
        }}
      >
        <LogoWebsite />
        {/* left side mobile */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
          }}
        >
          <IconButton onClick={handleDrawerOpen}>
            <MenuOutlinedIcon sx={{ cursor: 'pointer', color: '#000000' }} />
          </IconButton>
          {/* search Icon mobile nav */}
          {isOpenSearch ? (
            <>
              <Button
                sx={{
                  color: 'inherit',
                  padding: 0,
                  minWidth: '0px',
                }}
                onClick={handleCloseSearch}
              >
                <CloseIcon />
              </Button>
            </>
          ) : (
            <Button
              onClick={handleOpenSearch}
              sx={{
                color: 'inherit',
                padding: 0,
                minWidth: '0px',
              }}
            >
              {' '}
              <SearchOutlinedIcon />
            </Button>
          )}
        </Box>
        <DesktopMenu
          options={options}
          setIsHovered={setIsHovered}
          setIsOpen={setIsOpen}
        />
        <Box
          sx={{
            gap: { xs: 1, md: 2 },
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
          }}
        >
          {isOpenSearch ? (
            <>
              <Button
                sx={{
                  color: 'inherit',
                  padding: '0px',
                  margin: '0px',
                  display: 'block',
                  minWidth: '0px',
                }}
                onClick={handleCloseSearch}
              >
                <CloseIcon />
              </Button>
            </>
          ) : (
            <Button
              onClick={handleOpenSearch}
              sx={{
                color: 'inherit',
                padding: '0px',
                margin: '0px',
                display: 'block',
                minWidth: '0px',
              }}
            >
              {' '}
              <SearchOutlinedIcon />
            </Button>
          )}
          <IconHeader />
        </Box>
        <Box>
          <LogoMobileWebsite />
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: '9px' }}>
          <FavoriteBorderOutlinedIcon sx={{ cursor: 'pointer' }} />
          <BadgeNumberShopping
            badgetItem={badgetItem.toString()}
            handleOpenModal={handleOpenModal}
          />
        </Box>
        <Drawer
          open={openModal}
          sx={{
            display: { xs: 'flex', md: 'none' },
            '& .MuiDrawer-paper': {
              width: '100%',
              backgroundColor: 'white',
            },
          }}
        >
          {/* <EmptyCart handleCloseModal={handleCloseModal}  /> */}
          {badgetItem === 0 ? (
            <EmptyCartMobile handleCloseModal={handleCloseModal} />
          ) : (
            <DisplayCartMobile
              shopsItem={shopsItem}
              handleCloseModal={handleCloseModal}
              handleRemove={handleRemove}
            />
          )}
        </Drawer>
        {/* <Modal open={openModal} sx={{ display: 'flex', border: 'none' }}>
          {badgetItem === 0 ? (
            <EmptyCart handleCloseModal={handleCloseModal} />
          ) : (
            <DisplayProductCart
              shopsItem={shopsItem}
              handleCloseModal={handleCloseModal}
              handleRemove={handleRemove}
            />
          )}
        </Modal> */}

        <NavigationDropMenuMobile
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
      </Toolbar>
      {isOpenSearch && <SearchField />}
    </AppBar>
  );
}

export default MainNavBar;
