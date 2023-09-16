import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import TrebleClef from "../../assets/images/interestsImgs/trebleClef.jpg";
import { useAnimate, useInView, stagger } from "framer-motion";
import "../../assets/styles/componentsCSS/Music.css";
import { useEffect } from "react";
import { noteSequence, pianoKeys, MusicNoteBlack, MusicNoteWhite } from "../../assets/helpers/pianoNotes";

export default function Music() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(noteSequence);
    }
  }, [isInView]);

  return (
    <section className="musicAnimation" ref={scope}>
      <div className="sheetMusicContainer">
        <img src={TrebleClef} alt="treble clef" className="trebleClef" />
        <div className="sheetMusic">
          <div className="sheetSpace six"></div>
          <div className="sheetSpace five"></div>
          <div className="sheetSpace four"></div>
          <div className="sheetSpace three"></div>
          <div className="sheetSpace two">
            <div className="furElise">
              <p className="note" id="noteOne" ><MusicNoteBlack /></p>
              <p className="note" id="noteTwo" ><MusicNoteBlack /></p>
              <p className="note" id="noteThree" ><MusicNoteBlack /></p>
              <p className="note" id="noteFour" ><MusicNoteBlack /></p>
              <p className="note" id="noteFive" ><MusicNoteBlack /></p>
              <p className="note" id="noteSix" ><MusicNoteBlack /></p>
              <p className="note" id="noteSeven" ><MusicNoteBlack /></p>
              <p className="note" id="noteEight" ><MusicNoteBlack /></p>
              <p className="note" id="noteNine" ><MusicNoteWhite /></p>
            </div>
          </div>
          <div className="sheetSpace one"></div>
        </div>
      </div>
      <div className="musicNotesContainer"></div>
      <div className="piano">
        {pianoKeys.map((note, index) => (
          <div key={index} className={`pianoKey ${note}`}>

          </div>
        ))}
      </div>
    </section>
  );
}
