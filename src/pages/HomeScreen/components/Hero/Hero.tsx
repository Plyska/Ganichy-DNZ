import Box from "@mui/material/Box";
import { styles } from "./styles";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../../utils/motion";
import SectionWrapper from "../../../../components/SectionWrapper";

const Hero = (): JSX.Element => {
  return (
    <Stack
      component="div"
      alignItems="center"
      justifyContent="space-around"
      sx={styles.container}
    >
      <Box>
        <motion.div variants={textVariant()} initial="hidden" animate="show">
          <Typography color="primary" align="center" variant="h2">
            Вас вітає
          </Typography>
          <Typography color="primary" variant="h1" align="center">
            Ганичівський ЗДО
          </Typography>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0, 2)}
          initial="hidden"
          animate="show"
        >
          <Typography color="primary" variant="h3" align="center">
            Сучасний дитячий садок з індивідуальним підходом до дітей.
          </Typography>
        </motion.div>
      </Box>

      <motion.div
        variants={fadeIn("", "", 0, 2)}
        initial="hidden"
        animate="show"
      >
        <Box component="a" href="#about">
          <Box sx={styles.scrollBtn}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={styles.scrollBtnBall}
            />
          </Box>
        </Box>
      </motion.div>
    </Stack>
  );
};

export default SectionWrapper(<Hero />, "hero");