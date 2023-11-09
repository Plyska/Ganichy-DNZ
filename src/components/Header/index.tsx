import { useState } from "react";
import logo from "../../assets/logo.png";
import { styles } from "./styles";
import { Link } from "react-router-dom";
import { linksForDrawer } from "../../constants";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Link as TypographyLink } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { handleEnter } from "../../utils";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Box component="section" sx={styles.container}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px="3rem"
        py="0.5rem"
        width="100%"
        maxWidth="1600px"
      >
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Box component="img" src={logo} alt="logo" sx={styles.logo} />
          <Stack direction="column" spacing={0.5}>
            <Typography color="primary" variant="h4">
              Ганичівський ЗДО
            </Typography>
            <Typography color="primary" variant="h5">
              Грай. Навчайся. Зростай
            </Typography>
          </Stack>
        </Stack>

        <Stack
          sx={styles.linksContainer}
          spacing={styles.linksSpacing}
          divider={<Divider orientation="vertical" flexItem />}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          {linksForDrawer.map((link) => (
            <TypographyLink
              key={link.title}
              fontWeight={500}
              component={Link}
              underline="hover"
              to={link.path}
            >
              {link.title}
            </TypographyLink>
          ))}
          <TypographyLink
            sx={styles.loginButn}
            fontWeight={500}
            underline="hover"
          >
            Вхід
          </TypographyLink>
        </Stack>

        <Box sx={styles.mobileDrawerContainer}>
          <IconButton
            onClick={toggleDrawer}
            color="inherit"
            aria-label="Відкрити меню"
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <SwipeableDrawer
            anchor="right"
            open={isMenuOpen}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
          >
            <Box
              sx={{
                width: 250,
              }}
              role="presentation"
              onClick={toggleDrawer}
              onKeyDown={handleEnter(toggleDrawer)}
            >
              <List>
                {linksForDrawer.map((link, index) => (
                  <ListItem key={link.title} sx={{ my: 1 }} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{link.icon}</ListItemIcon>
                      <TypographyLink
                        fontWeight={500}
                        component={Link}
                        underline="hover"
                        to={link.path}
                        color="black"
                      >
                        {link.title}
                      </TypographyLink>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </SwipeableDrawer>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
