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
export const noteSequence = [
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
export const sheetMusicSequence = [];
export const MusicNoteBlack = () => (
  <div className="noteContainer" style={{position: "relative", display: "grid", height: "55px", background: "transparent",}}>
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
          position: absolute;
          justify-self: end;
          align-self: end;
          rotate: -45deg;
        }
      `}
    </style>
    <div className="noteStem"></div>
    <div className="noteHead"></div>
  </div>
);
export const MusicNoteWhite = () => (
  <div className="noteContainer" style={{position: "relative", display: "grid", height: "55px"}}>
    <style>
      {`
        .noteHeadWhite {
          width: 14px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid #000;
          background-color: #FFF;
          position: absolute;
          justify-self: end;
          align-self: end;
          rotate: -45deg;
        }
      `}
    </style>
    <div className="noteStem"></div>
    <div className="noteHeadWhite"></div>
  </div>
);
