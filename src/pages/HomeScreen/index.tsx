import Box from "@mui/material/Box";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import { styles } from "./styles";

const HomeScreen = (): JSX.Element => {
  return (
    <Box component="main">
      <Box component="div" sx={styles.heroContainer}>
        <Hero />
      </Box>
      <About />
      <Box component="div" sx={styles.aboutContainer}>
        <Roadmap />
      </Box>
    </Box>
  );
};

export default HomeScreen;
