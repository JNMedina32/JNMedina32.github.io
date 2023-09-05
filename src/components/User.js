import { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import { motion, useAnimation } from "framer-motion";
import SFBase from "../assets/images/SFBase.jpg";
import SFRunRight from "../assets/images/SFRunRight.jpg";
import SFRunLeft from "../assets/images/SFRunLeft.jpg";
import SFJumpRight from "../assets/images/SFJumpRight.jpg";
import SFJumpLeft from "../assets/images/SFJumpLeft.jpg";
import "../assets/styles/User.css";

export default function User() {
  const [figureState, setFigureState] = useState(SFBase);
  const controls = useAnimation();
  const {userState, userDispatch } = useContext(UserContext);
  const { userPosition } = userState;
  const [jumping, setJumping] = useState(false);
  const [keysPressed, setKeysPressed] = useState({});


  const jumpUp = async () => {
    setJumping(true);

    await controls.start({ y: "-50px", transition: { duration: 0.3 } });
    await controls.start({ y: "0px", transition: { duration: 0.3 } });
    setJumping(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeysPressed({ ...keysPressed, [e.key]: true });
    };

    const handleKeyUp = (e) => {
      const { [e.key]: value, ...remainingKeys } = keysPressed;
      setKeysPressed(remainingKeys);
    };

    const handleMovement = () => {
      if (keysPressed["ArrowRight"] || keysPressed["d"]) {
        setFigureState(SFRunRight);
        userDispatch({
          type: "userPosition",
          payload: {
            x: userState.userPosition.x + 10,
            y: userState.userPosition.y,
          }
        });
      }

      if (keysPressed["ArrowLeft"] || keysPressed["a"]) {
        setFigureState(SFRunLeft);
        userDispatch({
          type: "userPosition",
          payload: {
            x: userState.userPosition.x - 10,
            y: userState.userPosition.y,
          }
        });
      }

      if (keysPressed[" "] && !jumping) {
        if (keysPressed["ArrowRight"] || keysPressed["d"]) {
          setFigureState(SFJumpRight);
          jumpUp();
        } else if (keysPressed["ArrowLeft"] || keysPressed["a"]) {
          setFigureState(SFJumpLeft);
          jumpUp();
        } else {
          jumpUp();
        }
      }
    };

    const interval = setInterval(handleMovement, 40);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [jumping, keysPressed, userState, userDispatch]);

  const userStyle = {
    left: `${userPosition.x}px`,
    bottom: `${userPosition.y}px`,
  };

  return (
    <motion.div className="user" style={userStyle} animate={controls}>
      <img src={figureState} alt="SFStandRight" />
    </motion.div>
  );
}
