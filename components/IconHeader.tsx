import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

function IconHeader() {
  return (
    <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 2  ,   alignItems : 'center' }}>
      <Link href="/search" color="inherit" underline="none">
        {' '}
        <SearchOutlinedIcon />
      </Link>
      <Link href="/search" color="inherit" underline="none">
        {' '}
        <PersonOutlineOutlinedIcon />
      </Link>
      <Link href="/search" color="inherit" underline="none">
        {' '}
        <FavoriteBorderOutlinedIcon />
      </Link>
      <Link href="/search" color="inherit" underline="none">
        {' '}
        <ShoppingBagOutlinedIcon />
      </Link>
    </Box>
  );
}

export default IconHeader;
