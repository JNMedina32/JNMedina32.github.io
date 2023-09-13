import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faIdCard,
  faLaptopCode,
  faAddressBook,
  faBars,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

export const SunIcon = () => <FontAwesomeIcon icon={faSun} size="2x" />;

export const MoonIcon = () => <FontAwesomeIcon icon={faMoon} size="2x" />;

export const HomeIcon = () => (
  <FontAwesomeIcon icon={faHouseChimney} size="2xl" />
);

export const AboutIcon = () => <FontAwesomeIcon icon={faIdCard} size="2xl" />;

export const ProjectsIcon = () => (
  <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
);

export const ContactIcon = () => (
  <FontAwesomeIcon icon={faAddressBook} size="2xl" />
);

export const MenuIcon = () => <FontAwesomeIcon icon={faBars} size="2xl" />;
