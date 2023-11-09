import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SectionWrapper from "../../../../components/SectionWrapper";

import Menu from "./Menu";
import Schedule from "./Schedule";
import { styles } from "./styles";

const Roadmap = (): JSX.Element => {
  const [value, setValue] = useState("1");

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <SectionWrapper componentId="roadmap">
      <Box>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab
              icon={<CalendarMonthIcon />}
              label="Розпорядок дня"
              value="1"
            />
            <Tab icon={<RestaurantMenuIcon />} label="Меню" value="2" />
          </TabList>

          <TabPanel value="2" sx={styles.tabpanel}>
            <Menu />
          </TabPanel>
          <TabPanel value="1" sx={styles.tabpanel}>
            <Schedule />
          </TabPanel>
        </TabContext>
      </Box>
    </SectionWrapper>
  );
};

export default Roadmap;
