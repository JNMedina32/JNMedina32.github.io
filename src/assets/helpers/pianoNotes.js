import { stagger } from "framer-motion";

export const pianoKeys = [
  "A",
  "sharp",
  "B",
  "C",
  "sharp",
  "D",
  "Dsharp",
  "E",
  "F",
  "sharp",
  "G",
  "sharp",
];

export const pianoSequence = [
  [
    ".E",
    { backgroundColor: ["#FFF", "#000", "#FFF"] },
    { duration: 0.5, ease: "linear" },
  ],
  [
    ".Dsharp",
    { backgroundColor: ["#000", "#FFF", "#000"] },
    { duration: 0.5, ease: "linear" },
  ],
  [
    ".E",
    { backgroundColor: ["#FFF", "#000", "#FFF"] },
    { duration: 0.5, ease: "linear" },
  ],
  [
    ".Dsharp",
    { backgroundColor: ["#000", "#FFF", "#000"] },
    { duration: 0.5, ease: "linear" },
  ],
  [
    ".E",
    { backgroundColor: ["#FFF", "#000", "#FFF"] },
    { duration: 0.5, ease: "linear" },
  ],
  [
    ".B",
    { backgroundColor: ["#FFF", "#000", "#FFF"] },
    { duration: 0.5, ease: "linear" },
  ],
  [
    ".D",
    { backgroundColor: ["#FFF", "#000", "#FFF"] },
    { duration: 0.5, ease: "linear" },
  ],
  [
    ".C",
    { backgroundColor: ["#FFF", "#000", "#FFF"] },
    { duration: 0.5, ease: "linear" },
  ],
  [
    ".A",
    { backgroundColor: ["#FFF", "#000", "#FFF"] },
    { duration: 0.5, ease: "linear" },
  ],
];

export const musicNotesSequence = [
  ["#E", { opacity: [0, 1, 0], y: [0, -45] }, { duration: 1, ease: "easeInOut" }],
  ["#Dsharp", { opacity: [0, 1, 0], y: [0, -45] }, { duration: 1, ease: "easeInOut", at: 0.5 }],
  ["#E", { opacity: [0, 1, 0], y: [0, -45] }, { duration: 1, ease: "easeInOut", at: 1 }],
  ["#Dsharp", { opacity: [0, 1, 0], y: [0, -45] }, { duration: 1, ease: "easeInOut", at: 1.5 }],
  ["#E", { opacity: [0, 1, 0], y: [0, -45] }, { duration: 1, ease: "easeInOut", at: 2 }],
  ["#B", { opacity: [0, 1, 0], y: [0, -45] }, { duration: 1, ease: "easeInOut", at: 2.5 }],
  ["#D", { opacity: [0, 1, 0], y: [0, -45] }, { duration: 1, ease: "easeInOut", at: 3 }],
  ["#C", { opacity: [0, 1, 0], y: [0, -45] }, { duration: 1, ease: "easeInOut", at: 3.5 }],
  ["#A", { opacity: [0, 1, 0], y: [0, -45] }, { duration: 1, ease: "easeInOut", at: 4 }],
];

export const sheetMusicSequence = [
  [
    ".note",
    { opacity: [0, 1] },
    { duration: 0.5, ease: "linear", delay: stagger(0.5) },
  ],
];

export const MusicNoteBlack = ({ note }) => (
  <div
    className="noteContainer"
    style={{
      position: "relative",
      display: "grid",
      height: "55px",
      background: "transparent",
    }}
  >
    <style>
      {`
        .noteStem {
          width: 2px;
          height: 90%;
          background-color: #000;
          justify-self: end;
        }
        .noteHead {
          width: 14px;
          height: 12px;
          border-radius: 50%;
          background-color: #000;
          color: #FFF;
          position: absolute;
          justify-self: end;
          align-self: end;
          rotate: -45deg;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 10px;
        }
      `}
    </style>
    <div className="noteStem"></div>
    <div className="noteHead">{note}</div>
  </div>
);

export const MusicNoteWhite = ({ note }) => (
  <div
    className="noteContainer"
    style={{ position: "relative", display: "grid", height: "55px" }}
  >
    <style>
      {`
        .noteHeadWhite {
          width: 14px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid #000;
          background-color: #FFF;
          color: #000;
          position: absolute;
          justify-self: end;
          align-self: end;
          rotate: -45deg;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 10px;
        }
      `}
    </style>
    <div className="noteStem"></div>
    <div className="noteHeadWhite">{note}</div>
  </div>
);
