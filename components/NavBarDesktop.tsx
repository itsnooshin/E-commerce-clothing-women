'use client';
import { List } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Box } from '@mui/material';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ListItem } from '@mui/material';
import { useState } from 'react';

const options = [
  'Collection',
  'New In',
  'Modiweek',
  'Plus Size',
  'Sustainability',
];

function NavBarDesktop() {
  const pathName = usePathname();
  const [isHoverd, setIsHovered] = useState(false);

  return (
    <>
  
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <List
              sx={{
                display: 'flex',
                gap: { md: '24px' },
                pt: 0,
                pb: 0,
              }}
            >
              {options.map((option, index) => {
                return (
                  <Link
                    href={`/${hrefLink[index]}`}
                    key={option.name}
                    onMouseOver={() => setIsHovered(option.name)}
                  >
                    <ListItem
                      sx={{
                        '&:hover': {
                          '.MuiListItemText-primary': { color: 'red' },
                        },
                      }}
                    >
                      <ListItemText
                        primary={option.name}
                        sx={{ color: isActive ? 'red' : 'inherit' }}
                      />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>
  
     
    </>
  );
}

export default NavBarDesktop;
