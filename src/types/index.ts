import { Breakpoint } from "@mui/material/styles";

type MenuTitle = "Сніданок" | "Обід" | "Вечеря";

export interface LinkForDrawer {
  title: string;
  path: string;
  icon?: React.ReactNode;
}

export interface SectionWrapperProps {
  componentId?: string;
}

export interface MenuItem {
  title: MenuTitle;
  icon: React.ReactNode;
  description: Array<string>;
}

export interface ScheduleItem {
  time: string;
  description: string;
  icon: React.ReactNode;
}

export interface UseDevice {
  device: Breakpoint;
  isDesktop: boolean;
}

export interface TimelineMenuCardProps {
  menu: MenuItem;
}

export interface TimelineScheduleCardProps {
  schedule: ScheduleItem;
}
