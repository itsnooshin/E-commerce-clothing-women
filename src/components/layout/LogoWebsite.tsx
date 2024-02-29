import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/Logo.png';
import { Box } from '@mui/material';
function LogoWebsite() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <Link href="/">
        <Image
          priority
          src={Logo}
          alt="Logo for page"
          width={184}
          height={46}
        />
      </Link>
    </Box>
  );
}

export default LogoWebsite;
