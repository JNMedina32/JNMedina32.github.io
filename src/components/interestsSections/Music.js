import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import TrebleClef from "../../assets/images/interestsImgs/trebleClef.jpg";
import musicNoteBlack from "../../assets/images/interestsImgs/musicNoteBlack.jpg";
import musicNoteWhite from "../../assets/images/interestsImgs/musicNoteWhite.png";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import "../../assets/styles/componentsCSS/Music.css";
import { useEffect, useState } from "react";
import { noteSequence, pianoKeys } from "../../assets/helpers/pianoNotes";

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
            <img src={musicNoteBlack} className="note" id="noteOne" />
            <img src={musicNoteBlack} className="note" id="noteTwo" />
            <img src={musicNoteBlack} className="note" id="noteThree" />
            <img src={musicNoteBlack} className="note" id="noteFour" />
            <img src={musicNoteBlack} className="note" id="noteFive" />
            <img src={musicNoteBlack} className="note" id="noteSix" />
            <img src={musicNoteBlack} className="note" id="noteSeven" />
            <img src={musicNoteBlack} className="note" id="noteEight" />
            <img src={musicNoteWhite} className="note" id="noteNine" />
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
