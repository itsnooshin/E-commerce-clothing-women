import { Box, List, ListItemText, ListItem } from '@mui/material';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface Option {
  name?: string;
}
interface DesktopMenu {
  options: Option[];
  isActive: boolean;
  setIsHovered: (hover: string) => void;
  setIsOpen: (hover: boolean) => void;
  hrefLink: string[];
}

function DesktopMenu(props: PropsWithChildren<DesktopMenu>) {
  const { options, isActive, setIsHovered, hrefLink, setIsOpen } = props;

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <List
        sx={{
          display: 'flex',
          gap: { md: '24px' },
          p: '0px 0px',
        }}
      >
        {options.map((option, index) => {
          return (
            <Link
              href={`/${hrefLink[index]}`}
              key={option.name}
              onMouseOver={() => {
                setIsHovered(option.name!);
                setIsOpen(true);
              }}
            >
              <ListItem>
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
  );
}

export default DesktopMenu;
