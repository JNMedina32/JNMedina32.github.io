import React from "react";
import ArmySalute from "../images/timelineImgs/ArmySalute.jpg";
import RiggerBadge from "../images/timelineImgs/RiggerBadge.jpg";
import MePacking from "../images/timelineImgs/MePacking824.jpg";
import RedHat from "../images/timelineImgs/RedHat.jpg";
import BasicTrainingCert from "../images/timelineImgs/BasicTrainingCert.jpg";
import AirborneCert from "../images/timelineImgs/AirborneCert.jpg";
import SCFCodingAcademy from "../images/timelineImgs/SCFCodingAcademy.jpg";
import Pern from "../images/timelineImgs/PERN.jpg";
import JumpmasterCert from "../images/timelineImgs/JumpmasterCert.jpg";
import MasterBlaster from "../images/timelineImgs/MasterBlasters.jpg";
import PathfinderCert from "../images/timelineImgs/PathfinderCert.jpg";
import E6Rank from "../images/timelineImgs/E6Rank.jpg";
import firstDeployment from "../images/timelineImgs/1stDeployment.jpeg";

import QatarTraining from "../images/timelineImgs/QatarTraining.jpg";
import QatarPic from "../images/timelineImgs/Qatar.jpg";
import QatarMap from "../images/timelineImgs/QatarMap.jpg";
import QatarFlag from "../images/timelineImgs/QatarFlag.jpg";
import MFFBadge from "../images/timelineImgs/MFFBadge.jpg";
import MFFCert from "../images/timelineImgs/MFFCert.jpg";
import Arcom from "../images/timelineImgs/ARCOM.jpg";
import FCCCert1 from "../images/timelineImgs/FCCCert1.jpg";
import FCCCert2 from "../images/timelineImgs/FCCCert2.jpg";
import Tampa from "../images/timelineImgs/Tampa.png";
import CodingCampGraduates from "../images/timelineImgs/CodingCampGraduates3.jpg";
import SCFCodingCert from "../images/timelineImgs/SCFCodingCert.jpeg";

export const timelineEvents = [
  {
    date: "Jul 2008",
    description: "Enlisted in the US Army as a 92R Parachute Rigger",
    imgs: [
      {
        src: ArmySalute,
        caption: "",
        alt: "Image of US Soldier saluting the American Flag",
      },
    ],
  },
  {
    date: "Oct 2008 - Nov 2008",
    description: "Graduated Basic Training, then Graduated Airborne School",
    imgs: [
      {
        src: BasicTrainingCert,
        caption: "My Basic Training Diploma",
        alt: "US Army Basic Training Certification",
      },
      {
        src: AirborneCert,
        caption: "My Airborne School Diploma",
        alt: "US Military Airborne Certification",
      },
    ],
  },
  {
    date: "Feb 2009",
    description:
      "Graduated Advanced Individual Training, was sent to first duty station: Joint Base Elmendorf-Richardson, AK",
    imgs: [
      {
        src: RedHat,
        caption: "Iconic 'Red Hat' for Parachute Riggers",
        alt: "Image of US Army Parachute Rigger Red Hat",
      },
      {
        src: RiggerBadge,
        caption: "Parachute Rigger Badge",
        alt: "Image of an US Army Parachute Rigger Badge",
      },
    ],
  },
  {
    date: "Jul 2011",
    description:
      "Honorably Discharged from Active Duty, began Active Army Reserves",
    imgs: [
      {
        src: MePacking,
        caption: (
          <>
            "This is ME packing a parachute for{" "}
            <a
              href="https://www.dvidshub.net/image/790718/army-reserve-parachute-riggers-ready-operation-toy-drop"
              target="_blank"
            >
              Operation Toy Drop
            </a>{" "}
            with the Army Reserves, 2012."
          </>
        ),
        alt: "Image of me packing a parachute",
      },
    ],
  },
  {
    date: "Feb 2013",
    description:
      "Graduated from Advanced Airborne School, becoming a Jumpmaster",
    imgs: [
      {
        src: JumpmasterCert,
        caption: "My Advanced Airborne School (Jumpmaster) Diploma",
        alt: "US Army Advanced Airborne School Certification",
      },
    ],
  },
  {
    date: "Nov 2014",
    description: "Promoted to E6, Graduated from Pathfinder School",
    imgs: [
      {
        src: E6Rank,
        caption: "Promoted to E-6/Staff Sergeant",
        alt: "Image of US Army E-6/Staff Sergeant Rank",
      },
      {
        src: PathfinderCert,
        caption: "My Pathfinder School Diploma",
        alt: "US Army Pathfinder School Certification",
      },
    ],
  },
  {
    date: "Sep 2015",
    description: "Deployed to Qatar in support of Operation Inherent Resolve",
    imgs: [
      {
        src: QatarMap,
        caption: "First deployment to Qatar",
        alt: "Image of Qatar on a map",
      },
      {
        src: firstDeployment,
        caption: "First deployment to Qatar",
        alt: "Image of me in Qatar",
      },
    ],
  },
  {
    date: "Nov 2016",
    description: "Graduated from Military Free Fall School",
    imgs: [
      {
        src: MFFCert,
        caption:
          "The one military school I desired above all others, Military FreeFall!",
        alt: "US Army Military FreeFall Certification",
      },
      {
        src: MFFBadge,
        caption: "Military FreeFall Badge",
        alt: "Image of US Army Military FreeFall Badge",
      },
    ],
  },
  {
    date: "Feb 2017",
    description:
      "Deployed to Qatar a second time in support of Operation Inherent Resolve",
    imgs: [
      {
        src: QatarFlag,
        caption: "Qatar's National Flag",
        alt: "Image of the Flag of Qatar",
      },
      {
        src: Arcom,
        caption: "My Army Commendation Medal",
        alt: "Image of US Army Commendation Medal",
      },
    ],
  },
  {
    date: "May 2018",
    description:
      "Left home, family, and country by accepting a contracting job in Qatar",
    imgs: [
      {
        src: QatarPic,
        caption:
          "My friend Nazeh and I in Qatari Thobes during Qatar's National Day.",
      },
      {
        src: QatarTraining,
        caption:
          "One of the Qatar Military Groups I Trained with the assistance of US Army Riggers",
        alt: "Image of US Soldiers and Qatar Soldiers",
      },
    ],
  },
  {
    date: "Aug 2021",
    description: "Started exploring coding amidst Covid-19 slowdown",
    imgs: [
      {
        src: FCCCert1,
        caption:
          "First Certification I ever received in the Software Developement field",
        alt: "Image of FreeCodeCamp Responsive Web Design Certification",
      },
      {
        src: FCCCert2,
        caption:
          "Second Certification I ever received in the Software Developement field",
        alt: "Image of FreeCodeCamp JavaScript Algorithms and Data Structures Certification",
      },
    ],
  },
  {
    date: "Feb 2023",
    description:
      "Moved back to the US to pursue a career in Software Engineering",
    imgs: [
      {
        src: Tampa,
        caption: "Moved back to Florida, US",
        alt: "Image of Tampa, Florida on a map",
      },
    ],
  },
  {
    date: "Mar 2023",
    description: "Enrolled in a coding bootcamp to learn the PERN stack",
    imgs: [
      {
        src: SCFCodingAcademy,
        caption: (
          <>
            The Coding Academy I enrolled in,{" "}
            <a href="https://coding.scf.edu/coding-bootcamp/" target="_blank">
              State College of Florida Coding Academy
            </a>
          </>
        ),
        alt: "Image of State College of Florida Coding Academy",
      },
      {
        src: Pern,
        caption:
          "The stack I learned: Postgres | Express | React | Node (PERN)",
        alt: "Image of PERN stack",
      },
    ],
  },
  {
    date: "Sep 2023",
    description: (
      <h2>
        FULL-STACK <span>SOFTWARE ENGINEER</span>!
      </h2>
    ),
    imgs: [
      {
        src: SCFCodingCert,
        caption: "My State College of Florida Coding Academy Certification",
        alt: "Image of State College of Florida Coding Academy Certification",
      },
      {
        src: CodingCampGraduates,
        caption: "My Coding Bootcamp Graduating Class",
        alt: "Image of my Coding Bootcamp Graduates",
      },
    ],
  },
];
