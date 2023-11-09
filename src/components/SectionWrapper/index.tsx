import Box from "@mui/material/Box";
import { styles } from "./styles";
import { SectionWrapperProps } from "../../types";

const SectionWrapper = ({
  children,
  componentId,
}: React.PropsWithChildren<SectionWrapperProps>): JSX.Element => (
  <Box component="section" sx={styles.container} id={componentId}>
    {children}
  </Box>
);

export default SectionWrapper;
