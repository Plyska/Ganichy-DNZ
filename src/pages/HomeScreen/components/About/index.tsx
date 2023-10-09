import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SectionWrapper from "../../../../components/SectionWrapper";
import { styles } from "./styles";
import childrenImg from "../../../../assets/children.png";
import { motion } from "framer-motion";
import { slideIn } from "../../../../utils/motion";

const About = () => {
  return (
    <Stack
      component="div"
      sx={styles.container}
      alignItems="center"
      justifyContent="center"
    >
      {/* <Box
        component="img"
        alt="children"
        src={childrenImg}
        sx={styles.img}
        className="about__img"
      /> */}

      <Box sx={styles.textWrapper}>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
        >
          <Typography
            sx={{ border: "1px solid" }}
            variant="body2"
            letterSpacing={1}
            lineHeight={1.5}
          >
            Дитячий садок, де до дитини ставляться чуйно і з повагою.
            <br />
            <br />
            Глибоке розуміння вікових особливостей та потреб дітей і передові
            освітні методики дозволяють нам дати ті знання й навички, що
            необхідні дитині в конкретний момент часу та допоможуть їй стати
            великою особистістю, яка вміє вирішувати складні завдання не тільки
            на іспитах, але й в реальному житті.
          </Typography>
        </motion.div>
      </Box>
    </Stack>
  );
};

export default SectionWrapper(<About />, "about");
