// import Image from 'next/image';
'use client';

import NavBar from '@/components/NavBar';
import BannerHeader from '@/components/BannerHeader';
import { AppBar, Container, Toolbar } from '@mui/material';

export default function Home() {
  return (
    <>
      <BannerHeader />
      <Container maxWidth="xl">
        <NavBar />
      </Container>
    </>
  );
}

// icons
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'; cancel
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import InstagramIcon from '@mui/icons-material/Instagram';

//import CopyrightIcon from '@mui/icons-material/Copyright';
//import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
// import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
//import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
