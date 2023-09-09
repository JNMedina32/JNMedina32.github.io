import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessBishop,
  faChessKnight,
  faChessRook,
  faChessKing,
} from "@fortawesome/free-regular-svg-icons";
import "../../assets/styles/componentsCSS/Chessboard.css";
import { motion, animate } from "framer-motion";
import { knightMoves, rookMoves } from "../../assets/helpers/chessMotions";

export default function Chessboard() {
  return (
    <motion.div className="chessboard">
      <div className="chessboardRow 1">
        <div className="chessboardSquare 1"></div>

        <div className="chessboardSquare 2">
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              variants={rookMoves}
              className="motionDiv"
              initial="initial"
              animate="animate"
            >
              <FontAwesomeIcon
                icon={faChessRook}
                size="lg"
                className="whitePiece"
              />
            </motion.div>
          </div>
        </div>
        <div className="chessboardSquare 3">
          <FontAwesomeIcon
            icon={faChessBishop}
            size="lg"
            className="whitePiece"
          />
        </div>
        <div className="chessboardSquare 4">
          <FontAwesomeIcon
            icon={faChessBishop}
            size="lg"
            className="blackPiece"
          />
        </div>
      </div>
      <div className="chessboardRow 2">
        <div className="chessboardSquare 1"></div>
        <div className="chessboardSquare 2">
          <div
            style={{
              backgroundColor: "tan",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              variants={knightMoves}
              className="motionDiv"
              initial="intial"
              animate="animate"
            >
              <FontAwesomeIcon
                icon={faChessKnight}
                size="lg"
                className="blackPiece"
              />
            </motion.div>
          </div>
        </div>

        <div className="chessboardSquare 3"></div>
        <div className="chessboardSquare 4"></div>
      </div>
      <div className="chessboardRow 3">
        <div className="chessboardSquare 1"></div>
        <div className="chessboardSquare 2"></div>
        <div className="chessboardSquare 3">
          <FontAwesomeIcon
            icon={faChessKing}
            size="lg"
            className="whitePiece"
          />
        </div>
        <div className="chessboardSquare 4"></div>
      </div>
      <div className="chessboardRow 4">
        <div className="chessboardSquare 1">
          <FontAwesomeIcon
            icon={faChessKing}
            size="lg"
            className="blackPiece"
          />
        </div>
        <div className="chessboardSquare 2"></div>
        <div className="chessboardSquare 3"></div>
        <div className="chessboardSquare 4"></div>
      </div>
    </motion.div>
  );
}
