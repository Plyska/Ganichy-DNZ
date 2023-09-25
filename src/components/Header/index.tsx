import { useState, KeyboardEvent } from "react";
import logo from "../../assets/logo.png";
import { styles } from "./styles";
import { Link } from "react-router-dom";
import { linksForDrawer } from "../../constants";

import Container from "@mui/material/Container";
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

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleEnter =
    (fn: (event: KeyboardEvent) => void) => (event: KeyboardEvent) => {
      if (event.key === "13") {
        fn(event);
      }
    };

  const toggleDrawer = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Container maxWidth="xl" component="header">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Box component="img" src={logo} alt="logo" width={130} height={100} />
          <Stack direction="column">
            <Typography variant="h5">Ганичівський ЗДО</Typography>
            <Typography variant="body1">Грай. Навчайся. Зростай</Typography>
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
          <Typography fontWeight={500} color="#1976d2">
            Вхід
          </Typography>
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
    </Container>
  );
};

export default Header;
