import Link from 'next/link';
import { NAV_DATA } from '../../lib/navData';
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useAuth } from '@/src/context/authContext';
import AccountCircleOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const options = NAV_DATA;

interface NavID {
  id: number;
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState<NavID | null>(null);
  const { isLoggedIn } = useAuth();
  const hrefLink = options.map((option) =>
    option.name?.toLowerCase().replace(/\s+/g, '-'),
  );

  const ToggleMenu = (itemID: number) => {
    if (itemSelected?.id === itemID) {
      setItemSelected(null);
      setOpen(false);
    } else {
      setItemSelected({ id: itemID });
      setOpen(true);
    }
  };

  return (
    <Box>
      <List>
        {options.map((items, index) => (
          <Box key={items.id}>
            <Box
              sx={{
                display: 'flex',
                p: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Link
                href={`/${
                  hrefLink[index] === 'collection'
                    ? 'collection/all'
                    : hrefLink[index]
                }`}
                key={index}
              >
                <ListItem>
                  <ListItemText primary={items.name} />
                </ListItem>
              </Link>
              <IconButton
                sx={{ color: '#000000' }}
                onClick={() => ToggleMenu(items.id)}
              >
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            {itemSelected?.id === items.id && open && (
              <Box sx={{ pl: 4 }}>
                <List>
                  {items.category?.map((item, index) => (
                    <ListItem key={index}>
                      <Typography
                        sx={{ display: 'flex', flexDirection: 'column' }}
                      >
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </Box>
        ))}
        <Box sx={{ margin: '4px 20px' }}>
          {isLoggedIn ? (
            <Button
              href="/profile"
              sx={{
                width: '100%',
                color: '#ffff',
                background: '#5A6D57',
                textAlign: 'center',
                textTransform: 'capitalize',
              }}
            >
              <AccountCircleOutlinedIcon sx={{ color: '#ffff' }} /> My Account
            </Button>
          ) : (
            <Box sx={{ margin: '0px 10px' }}>
              <Button
                href="/login"
                sx={{
                  display: 'block',
                  width: '100%',
                  color: 'inherit',
                  border: '1px solid #5A6D57',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                }}
              >
                Log In
              </Button>
              <Button
                href="/register"
                sx={{
                  display: 'block',
                  width: '100%',
                  backgroundColor: '#5A6D57',
                  color: '#ffff',
                  mt: '7px',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                }}
              >
                Register
              </Button>
            </Box>
          )}
        </Box>
      </List>
    </Box>
  );
}
export default MobileMenu;
