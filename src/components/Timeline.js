import "../assets/styles/componentsCSS/Timeline.css";
import { motion } from "framer-motion";
import { timelineVariants } from "../assets/helpers/timelineVariants";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  SmileEmoji,
} from "../assets/icons/timelineIcons";
import { timelineEvents } from "../assets/helpers/timelineEvents";
import { useState, useEffect } from "react";

export default function Timeline() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [totalProgress, setTotalProgress] = useState(0);
  const [showEventList, setShowEventList] = useState(false);
  const totalEvents = timelineEvents.length - 1;
  const eventDuration = 5000;
  const stepSize = 100 / ((eventDuration / 1000) * totalEvents);
  const currentEventIndex = Math.floor(totalProgress / (100 / totalEvents));
  const eventProgress = Math.min(
    (totalProgress % (100 / totalEvents)) +
      currentEventIndex * (100 / totalEvents),
    100
  );

  const { date, description, imgs } = timelineEvents[currentEventIndex];

  //-----Allow the timeline to move automatically
  useEffect(() => {
    let interval;
    if (isPlaying && totalProgress < 100) {
      interval = setInterval(() => {
        setTotalProgress((prev) => {
          if (prev + stepSize <= 100) {
            return prev + stepSize;
          } else {
            setIsPlaying(false);
            return 100;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);

    // eslint-disable-next-line
  }, [isPlaying, currentEventIndex]);

  //-----------Play and Pause the timeline
  const handlePlay = () => {
    setShowIntro(false);
    setIsPlaying(!isPlaying);
  };
  //-----Reset to the beginning of the timeline
  const handleReset = () => {
    setShowIntro(true);
    setIsPlaying(false);
    setTotalProgress(0);
  };
  //-----Allow user to click on the timeline to go to a specific event
  const handleBarClick = (index) => {
    setShowIntro(false);
    setIsPlaying(false);
    setTotalProgress((index / totalEvents) * 100);
  };

  return (
    <div className="timelineSection">
      <div className="timelineAnimation">
        <div className="timelineBar">
          {timelineEvents.map((_, index) => (
            <div
              key={index}
              className="timelineBarEvent"
              style={{
                position: "absolute",
                left: `${(index / totalEvents) * 100}%`,
                width: "2px",
                height: "10px",
                backgroundColor: "var(--BG)",
                cursor: "pointer",
                zIndex: 1,
              }}
              onClick={() => handleBarClick(index)}
            />
          ))}
          <motion.div
            style={{
              position: "absolute",
              width: `${eventProgress}%`,
              height: "10px",
              background: "var(--accent1)",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div className="progressMark" />
          </motion.div>
        </div>
        <div className="timelineBtnDiv">
          <button className="timelineBtn" onClick={handlePlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button className="timelineBtn" onClick={handleReset}>
            Reset
          </button>
        </div>
        <div className="timelineContent">
          {showIntro ? (
            <div className="timelineIntro">
              <h1>
                <span>My Timeline</span>
              </h1>
              <p>
                This is a timeline of notable events in my life. Click play{" "}
                <span>
                  <ArrowUpIcon />
                </span>{" "}
                to see it in action!{" "}
                <span>
                  <SmileEmoji />
                </span>
              </p>
              <br />
              <span>OR</span>
              <br />
              <p>
                TL:DW (Too Long: Didn't Watch){" "}
                <span>
                  <ArrowDownIcon />
                </span>
              </p>
            </div>
          ) : (
            <div className="eventAnimationDiv">
              <div className="eventListInfoAnimation">
                <span>
                  <h2>{date}</h2>
                </span>
                <p>{description}</p>
              </div>
              <div className="eventAnimation">
                {imgs.map((img, index) => {
                  const randomVariant =
                    timelineVariants[
                      Object.keys(timelineVariants)[
                        Math.floor(
                          Math.random() * Object.keys(timelineVariants).length
                        )
                      ]
                    ];
                  return (
                    <motion.div
                      className="eventImgDiv"
                      key={index}
                      {...randomVariant}
                    >
                      <img src={img.src} alt={img.alt} className="eventImg" />
                      {img.caption && (
                        <p className="eventImgCaption">{img.caption}</p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="eventListSection">
        <button
          className="eventListBtn"
          onClick={() => setShowEventList((prev) => !prev)}
        >
          {showEventList ? "Hide Event List" : "Show Event List"}
        </button>
        {showEventList && (
          <div className="eventList">
            <ul className="eventColumn">
              {timelineEvents
                .slice(0, Math.ceil(totalEvents / 2))
                .map((event, index) => (
                  <li className="listItem" key={index}>
                    <span>{event.date}:</span>
                    {event.description}
                  </li>
                ))}
            </ul>
            <ul className="eventColumn">
              {timelineEvents
                .slice(Math.ceil(totalEvents / 2))
                .map((event, index) => (
                  <li className="listItem" key={index}>
                    <span>{event.date}:</span>

                    {event.description}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
