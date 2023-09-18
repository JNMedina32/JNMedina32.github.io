import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import TrebleClef from "../../assets/images/interestsImgs/trebleClef.jpg";
import { useAnimate, useInView } from "framer-motion";
import "../../assets/styles/componentsCSS/Music.css";
import { useEffect } from "react";
import {
  pianoSequence,
  pianoKeys,
  MusicNoteBlack,
  MusicNoteWhite,
  sheetMusicSequence,
  musicNotesSequence,
} from "../../assets/helpers/pianoNotes";

export default function Music() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(pianoSequence, { repeat: Infinity, repeatDelay: 0.5 });
      animate(sheetMusicSequence, { repeat: Infinity, repeatDelay: 0.5 });
      animate(musicNotesSequence, { repeat: Infinity });
    }
  }, [isInView]);

  return (
    <section className="musicAnimation" ref={scope}>
      <div className="sheetMusicContainer">
        <img src={TrebleClef} alt="treble clef" className="trebleClef" />
        <div className="sheetMusic">
          <div className="sheetSpace"></div>
          <div className="sheetSpace"></div>
          <div className="sheetSpace"></div>
          <div className="sheetSpace"></div>
          <div className="sheetSpace noteLine">
            <div className="furElise">
              <p className="note" id="noteOne">
                <MusicNoteBlack note={"E"} />
              </p>
              <p className="note" id="noteTwo">
                <MusicNoteBlack note={"D#"} />
              </p>
              <p className="note" id="noteThree">
                <MusicNoteBlack note={"E"} />
              </p>
              <p className="note" id="noteFour">
                <MusicNoteBlack note={"D#"} />
              </p>
              <p className="note" id="noteFive">
                <MusicNoteBlack note={"E"} />
              </p>
              <p className="note" id="noteSix">
                <MusicNoteBlack note={"B"} />
              </p>
              <p className="note" id="noteSeven">
                <MusicNoteBlack note={"D"} />
              </p>
              <p className="note" id="noteEight">
                <MusicNoteBlack note={"C"} />
              </p>
              <p className="note" id="noteNine">
                <MusicNoteWhite note={"A"} />
              </p>
            </div>
          </div>
          <div className="sheetSpace"></div>
        </div>
      </div>
      <div className="musicNotesContainer">
        <div className="eaMusicNote">
          <FontAwesomeIcon
            icon={faMusic}
            size="xl"
            className="musicIcon"
            id="A"
          />
        </div>
        <div className="eaMusicNote">
          <FontAwesomeIcon
            icon={faMusic}
            size="xl"
            className="musicIcon"
            id="B"
          />
        </div>
        <div className="eaMusicNote">
          <FontAwesomeIcon
            icon={faMusic}
            size="xl"
            className="musicIcon"
            id="C"
          />
        </div>
        <div className="eaMusicNote">
          <FontAwesomeIcon
            icon={faMusic}
            size="xl"
            className="musicIcon"
            id="D"
          />
        </div>
        <div className="eaMusicNote Sharp">
          <FontAwesomeIcon
            icon={faMusic}
            size="xl"
            className="musicIcon"
            id="Dsharp"
          />
        </div>
        <div className="eaMusicNote">
          <FontAwesomeIcon
            icon={faMusic}
            size="xl"
            className="musicIcon"
            id="E"
          />
        </div>
      </div>
      <div className="piano">
        {pianoKeys.map((note, index) => (
          <div key={index} className={`pianoKey ${note}`}></div>
        ))}
      </div>
    </section>
  );
}
