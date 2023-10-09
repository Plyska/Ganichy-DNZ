import NewspaperIcon from "@mui/icons-material/Newspaper";
import CollectionsIcon from "@mui/icons-material/Collections";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import InfoIcon from "@mui/icons-material/Info";
import { LinkForDrawer } from "../types";
import EggAltTwoToneIcon from "@mui/icons-material/EggAltTwoTone";

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

export const menuList = [
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
    icon: <EggAltTwoToneIcon />,
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
    icon: <EggAltTwoToneIcon />,
  },
];
