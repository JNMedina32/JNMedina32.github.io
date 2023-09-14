import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "../../assets/styles/componentsCSS/Music.css";
import piano from "../../assets/images/interestsImgs/piano.jpg";
import { useEffect, useState } from "react";

const notesSequence = ["E", "D#", "E", "D#", "E", "B", "D", "C", "A"];
const pianoKeys = ["C", "D", "E", "F", "G", "A", "B", "C"];

export default function Music() {
  const [currentNote, setCurrentNote] = useState(-1);

  const playNotes = () => {
    let noteIndex = 0;
    const intervalId = setInterval(() => {
      setCurrentNote(noteIndex);
      noteIndex += 1;
      if (noteIndex >= notesSequence.length) {
        clearInterval(intervalId);
      }
    }, 500); // Adjust the interval to change the speed of the playback
  };

  useEffect(() => {
    playNotes();
  }, []);

  return (
    <div className="musicAnimation">
      <div className="musicNotesContainer"></div>
      <div className="piano">
        {notesSequence.map((note, index) => (
          <motion.div
            key={index}
            className={`pianoKey ${note}`}
            style={{
              backgroundColor: currentNote === index ? "yellow" : "white",
            }}
          />
        ))}
      </div>
    </div>
  );
}
