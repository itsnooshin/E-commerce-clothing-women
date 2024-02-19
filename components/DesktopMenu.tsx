import { Box, List, ListItemText, ListItem } from '@mui/material';
import Link from 'next/link';

interface Option {
  name: string;
}
interface DesktopMenu {
  options: Option[];
  isActive: boolean;
  setIsHovered: (hover: string) => void;
  hrefLink: string[];
}

const DesktopMenu: React.FC<DesktopMenu> = ({
  options,
  isActive,
  setIsHovered,
  hrefLink,
}) => {
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
  );
};

export default DesktopMenu;
