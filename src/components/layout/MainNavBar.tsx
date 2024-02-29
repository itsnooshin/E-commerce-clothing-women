import { AppBar, Toolbar, Box } from '@mui/material';
import LogoWebsite from '../LogoWebsite';
import DesktopMenu from './DesktopMenu';
import LogoMobileWebsite from '../LogoMobileWebsite';
// import IconHeader from './IconHeader';
import NavBarMobile from './NavBarMobile';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { PropsWithChildren } from 'react';

interface Option {
  name?: string;
  category?: string[];
  featured?: string[];
  More?: string[];
  nameCat?: string;
  nameFeat?: string;
  nameMore?: string;
  imageData?: string[];
  imageDescription?: string[];
}

interface MainNavBar {
  options: Option[];
  setIsHovered: (hover: string) => void;
  setIsOpen: (hover: boolean) => void;
}

function MainNavBar(props: PropsWithChildren<MainNavBar>) {
  const { options, setIsHovered, setIsOpen } = props;
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#ffff',
        boxShadow: 'none',
        color: '#404040',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'space-between', md: 'space-around' },
          p: '10px 0',
        }}
      >
        <LogoWebsite />

        <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: '9px' }}>
          <MenuOutlinedIcon />
          <SearchIcon />
        </Box>

        <DesktopMenu
          options={options}
          setIsHovered={setIsHovered}
          setIsOpen={setIsOpen}
        />

        <LogoMobileWebsite />
        <Box>
          {/* <IconHeader /> */}
        </Box>
        <NavBarMobile />
      </Toolbar>
    </AppBar>
  );
}

export default MainNavBar;
