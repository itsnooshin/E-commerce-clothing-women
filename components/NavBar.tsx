import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

export default function NavBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return <>{matches ? <NavBarMobile /> : <NavBarDesktop />}</>;
}
