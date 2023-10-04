import Box from "@mui/material/Box";
import { styles } from "./styles";

const SectionWrapper = (component: any, componentId: string) => () => {
  return (
    <Box component="section" sx={styles.container} id={componentId}>
      {component}
    </Box>
  );
};

export default SectionWrapper;
