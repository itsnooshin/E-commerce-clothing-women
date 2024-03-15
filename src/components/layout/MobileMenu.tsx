import Link from "next/link";
import { NAV_DATA } from "../../lib/navData";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const options = NAV_DATA;

function MobileMenu() {
  console.log(options);

  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const hrefLink = options.map((option) =>
    option.name?.toLowerCase().replace(/\s+/g, "-")
  );

  const ToggleMenu = (itemID) => {
    // setOpen((isActive) => !isActive);
    if (itemSelected === itemID) {
      setItemSelected(null);
      setOpen(false);
    } else {
      setItemSelected(itemID);
      setOpen(true);
    }
  };

  return (
    <Box>
      <List>
        {options.map((items, index) => (
          <>
            <Box
              sx={{
                display: "flex",
                p: 1,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Link href={`/${hrefLink[index]}`}>
                <ListItem>
                  <ListItemText primary={items.name} />
                </ListItem>
              </Link>
              <IconButton
                sx={{ color: "#000000" }}
                onClick={() => ToggleMenu(items.id)}
              >
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            {itemSelected === items.id && open && (
              <Box sx={{ pl: 4 }}>
                <List>
                  {items.category?.map((item) => (
                    <ListItem>
                      <Typography
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </>
        ))}

        <Box sx={{ margin: "0px 10px" }}>
          <Button
            href="/login"
            sx={{
              display: "block",
              width: "100%",
              color: "inherit",
              border: "1px solid #5A6D57",
              textAlign: "center",
            }}
          >
            Log In
          </Button>
          <Button
            href="/register"
            sx={{
              display: "block",
              width: "100%",
              backgroundColor: "#5A6D57",
              color: "#ffff",
              mt: "7px",
              textAlign: "center",
            }}
          >
            Register
          </Button>
        </Box>
      </List>
    </Box>
  );
}
export default MobileMenu;
