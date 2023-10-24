import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SectionWrapper from "../../../../components/SectionWrapper";
import { styles } from "./styles";
import Slide from "@mui/material/Slide";
import childrenImg from "../../../../assets/garden.png";

const About = () => {
  return (
    <SectionWrapper componentId="about">
      <Stack
        component="div"
        sx={styles.container}
        alignItems="center"
        justifyContent="center"
      >
        <Slide in={true} direction="right" timeout={2000}>
          <Box
            component="img"
            alt="children"
            src={childrenImg}
            sx={styles.img}
            className="about__img"
          />
        </Slide>
        <Slide in={true} direction="left" timeout={2000}>
          <Box sx={styles.textWrapper}>
            <Typography variant="body2" letterSpacing={1} lineHeight={1.5}>
              Дитячий садок, де до дитини ставляться чуйно і з повагою.
              <br />
              <br />
              Глибоке розуміння вікових особливостей та потреб дітей і передові
              освітні методики дозволяють нам дати ті знання й навички, що
              необхідні дитині в конкретний момент часу та допоможуть їй стати
              великою особистістю, яка вміє вирішувати складні завдання не
              тільки на іспитах, але й в реальному житті.
            </Typography>
          </Box>
        </Slide>
      </Stack>
    </SectionWrapper>
  );
};

export default About;
