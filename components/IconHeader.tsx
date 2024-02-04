import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from 'next/link';

function IconHeader() {
  return (
    <div className="flex gap-5">
      <Link href="/search">
        <SearchOutlinedIcon />
      </Link>
      <Link href="/login">
        <PersonOutlineOutlinedIcon />
      </Link>
      <Link href="/wishlist">
        <FavoriteBorderOutlinedIcon />
      </Link>
      <Link href="">
        <ShoppingBagOutlinedIcon />
      </Link>
    </div>
  );
}

export default IconHeader;
