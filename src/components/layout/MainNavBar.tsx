import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  Typography,
  IconButton,
  Button,
  Modal,
} from '@mui/material';
import LogoWebsite from './LogoWebsite';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DesktopMenu from './DesktopMenu';
import LogoMobileWebsite from './LogoMobileWebsite';
import IconHeader from '@/src/components/headers/IconHeader';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { PropsWithChildren, useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BannerHeader from '../headers/BannerHeader';
import CloseIcon from '@mui/icons-material/Close';
import MobileMenu from './MobileMenu';
import { Option } from '@/src/types/MenuTypes';
import SearchField from '../headers/SearchField';
import NavBar from './NavBar';

interface MainNavBar {
  options: Option[];
  setIsHovered: (hover: string) => void;
  setIsOpen: (hover: boolean) => void;
}

function MainNavBar(props: PropsWithChildren<MainNavBar>) {
  const { options, setIsHovered, setIsOpen } = props;
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const handleOpenSearch = () => {
    if (!isOpenSearch) {
      setIsOpenSearch(true);
    }
  };
  const handleCloseSearch = () => setIsOpenSearch(false);

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
              {' '}
              <Button
                sx={{
                  color: 'inherit',
                 
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
          <ShoppingBagOutlinedIcon sx={{ cursor: 'pointer' }} />
        </Box>
        {/* menu mobile */}
        {open && (
          <Drawer
            sx={{
              zIndex: 9999,
              display: { xs: 'block', md: 'none' },

              '& .MuiDrawer-paper': {
                width: '100%',
                backgroundColor: 'white',
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <BannerHeader />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.2rem 1rem',
              }}
            >
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '7px 10px',
                }}
              >
                <IconButton
                  onClick={handleDrawerClose}
                  sx={{ cursor: 'pointer' }}
                >
                  <CloseIcon sx={{ color: '#000000' }} />
                </IconButton>
                <SearchIcon />
              </Box>
              <LogoMobileWebsite />
              <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: '9px' }}>
                <FavoriteBorderOutlinedIcon sx={{ cursor: 'pointer' }} />
                <ShoppingBagOutlinedIcon sx={{ cursor: 'pointer' }} />
              </Box>
            </Box>
            <MobileMenu />
          </Drawer>
        )}
      </Toolbar>
      {isOpenSearch && <SearchField />}
    </AppBar>
  );
}

export default MainNavBar;
