import {createContext} from "react";

export const ThemeContext = createContext();


const lightShade = '#F1F0E4';
const lightAccent = '#A3A39E';
const main = '#CD4445';
const darkAccent = '#8B8F81';
const darkShade = '#383849';

export const themes = {
  home: {
    backgroundColor: lightShade,
    color: darkShade,
  },
  navbar: {
    backgroundColor: lightShade,
    color: main,
  },
  navbarInvert: {
    backgroundColor: lightShade,
    color: darkShade,
  },
};