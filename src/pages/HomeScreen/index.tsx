import Box from "@mui/material/Box";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import { styles } from "./styles";

const HomeScreen = (): JSX.Element => {
  return (
    <Box component="main">
      <Box component="div" sx={styles.heroContainer}>
        <Hero />
      </Box>
      <Box component="div" sx={styles.aboutContainer}>
        <About />
      </Box>
    </Box>
  );
};

export default HomeScreen;
