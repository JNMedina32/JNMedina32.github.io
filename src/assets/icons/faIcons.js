import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faIdCard,
  faLaptopCode,
  faNewspaper,
  faAddressBook,
  faArrowDown,
  faArrowUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFaceGrinBeam,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

export const PlaneIcon = () => (
  <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
);

export const HomeIcon = () => (
  <FontAwesomeIcon icon={faHouseChimney} size="2xl" />
);

export const AboutIcon = () => <FontAwesomeIcon icon={faIdCard} size="2xl" />;

export const ProjectsIcon = () => (
  <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
);

export const BlogsIcon = () => (
  <FontAwesomeIcon icon={faNewspaper} size="2xl" />
);

export const ContactIcon = () => (
  <FontAwesomeIcon icon={faAddressBook} size="2xl" />
);

export const MenuIcon = () => <FontAwesomeIcon icon={faBars} size="2xl" />;

export const ArrowDownIcon = () => (
  <FontAwesomeIcon icon={faArrowDown} size="lg" />
);
export const ArrowUpIcon = () => <FontAwesomeIcon icon={faArrowUp} size="lg" />;

export const SmileEmoji = () => (
  <FontAwesomeIcon icon={faFaceGrinBeam} size="lg" />
);

export const LightOnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-lightbulb-fill"
    viewBox="0 0 16 16"
  >
    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
  </svg>
);

export const LightOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-lightbulb"
    viewBox="0 0 16 16"
  >
    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
  </svg>
);

export const MasterOnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="currentColor"
    className="bi bi-lightbulb-fill"
    viewBox="0 0 16 16"
  >
    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
  </svg>
);

export const MasterOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="currentColor"
    className="bi bi-lightbulb"
    viewBox="0 0 16 16"
  >
    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
  </svg>
);
