'use client';
import { List } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Box } from '@mui/material';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ListItem } from '@mui/material';

const options = [
  'Collection',
  'New In',
  'Modiweek',
  'Plus Size',
  'Sustainability',
];

function NavBarDesktop() {
  const pathName = usePathname();

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
          {options.map((option) => {
            const hrefLink = option.toLowerCase().replace(/\s+/g, '-');
            const isActive = pathName.startsWith(`/${hrefLink}`);
            return (
              <Link href={hrefLink}>
                <ListItem>
                  <ListItemText
                    primary={option}
                    sx={{ color: isActive ? '#5A6D57' : 'inherit' }}
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
