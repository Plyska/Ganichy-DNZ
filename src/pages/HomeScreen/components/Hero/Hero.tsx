import Box from "@mui/material/Box";
import { styles } from "./styles";
import { Stack, Typography } from "@mui/material";
import SectionWrapper from "../../../../components/SectionWrapper";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";

const Hero = (): JSX.Element => {
  return (
    <SectionWrapper componentId="hero">
      <Stack
        component="div"
        alignItems="center"
        justifyContent="space-around"
        sx={styles.container}
      >
        <Box>
          <Slide timeout={1500} in={true}>
            <Box component="div">
              <Typography color="primary" align="center" variant="h2">
                Вас вітає
              </Typography>
              <Typography color="primary" variant="h1" align="center">
                Ганичівський ЗДО
              </Typography>
            </Box>
          </Slide>
          <Fade timeout={1500} in={true}>
            <Typography color="primary" variant="h3" align="center">
              Сучасний дитячий садок з індивідуальним підходом до дітей.
            </Typography>
          </Fade>
        </Box>
      </Stack>
    </SectionWrapper>
  );
};

export default Hero;
