import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFaceGrinBeam,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

export const PlaneIcon = () => (
  <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
);

export const ArrowDownIcon = () => (
  <FontAwesomeIcon icon={faArrowDown} size="lg" />
);
export const ArrowUpIcon = () => <FontAwesomeIcon icon={faArrowUp} size="lg" />;

export const SmileEmoji = () => (
  <FontAwesomeIcon icon={faFaceGrinBeam} size="lg" />
);

