import NewspaperIcon from "@mui/icons-material/Newspaper";
import CollectionsIcon from "@mui/icons-material/Collections";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import InfoIcon from "@mui/icons-material/Info";
import { LinkForDrawer, MenuItem, ScheduleItem } from "../types";
import EggAltTwoToneIcon from "@mui/icons-material/EggAltTwoTone";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";

import LightModeIcon from "@mui/icons-material/LightMode";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import ExtensionIcon from "@mui/icons-material/Extension";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

export const linksForDrawer: LinkForDrawer[] = [
  {
    title: "Новини",
    icon: <NewspaperIcon />,
    path: "/news",
  },
  {
    title: "Галерея",
    icon: <CollectionsIcon />,
    path: "/gallery",
  },
  {
    title: "Установчі документи",
    icon: <DocumentScannerIcon />,
    path: "/documents",
  },
  {
    title: "Інформація для батьків",
    icon: <InfoIcon />,
    path: "/info-for-parent",
  },
];

export const menuList: MenuItem[] = [
  {
    title: "Сніданок",
    description: ["Kаша молочна", "Омлет", "Яйце варене", "Млинці з повидлом"],
    icon: <EggAltTwoToneIcon />,
  },
  {
    title: "Обід",
    description: [
      "Борщ",
      "Cуп овочевий",
      "Суп гречаний",
      "Суп гороховий",
      "Суп рисовий",
      "Розсольник",
      "Каша (гречана, рисова, перлова)",
      "Картопляне пюре",
      "Котлета",
      "Картопляне рагу з мясом",
      "Рисові тефтелі з мясом",
      "Голубці",
      "Горохове пюре",
      "Парові котлети",
      "Пельмені",
      "Кнедлики з м'ясом та капустою",
      "Салат із сезонних овочів",
    ],
    icon: <SoupKitchenIcon />,
  },
  {
    title: "Вечеря",
    description: [
      "Kаша молочна",
      "Булочки з творогом та варенням",
      "Млинці",
      "Оладки",
      "Гомбовці з варенням",
    ],
    icon: <DinnerDiningIcon />,
  },
];

export const scheduleList: ScheduleItem[] = [
  {
    time: "8:00 - 8:45",
    description: "Збір групи (В понеділок огляд педіатра)",
    icon: <LightModeIcon />,
  },
  {
    time: "8:45 - 9:00",
    description: "Ранкова зарядка",
    icon: <FitnessCenterIcon />,
  },
  {
    time: "9:00 - 9:30",
    description: "Сніданок",
    icon: <EggAltTwoToneIcon />,
  },
  {
    time: "9:30 - 11:00",
    description: "Заняття першої половини дня",
    icon: <AutoStoriesIcon />,
  },
  {
    time: "11:00 - 12:00",
    description: "Прогулянка",
    icon: <DirectionsRunIcon />,
  },
  {
    time: "12:00 - 12:30",
    description: "Обід",
    icon: <SoupKitchenIcon />,
  },
  {
    time: "12:30 - 13:00",
    description: "Підготовка до сну",
    icon: <AccessAlarmIcon />,
  },
  {
    time: "13:00 - 15:30",
    description: "Денний сон",
    icon: <LocalHotelIcon />,
  },
  {
    time: "15:30 - 17:30",
    description: "Творчість, читання казок, ігри",
    icon: <ExtensionIcon />,
  },
  {
    time: "17:30 - 18:00",
    description: "Вечеря",
    icon: <DinnerDiningIcon />,
  },
  {
    time: "18:00 - 19:00",
    description: "Зустрічаємо батьків",
    icon: <FamilyRestroomIcon />,
  },
];
