// initialUserState
export const initialStateDark = {
  home: "dark",
  about: "dark",
  projects: "dark",
  blogs: "dark",
  contact: "dark",
  userPosition: { x: 0, y: 19 },
};

export const initialStateLight = {
  home: "light",
  about: "light",
  projects: "light",
  blogs: "light",
  contact: "light",
  userPosition: { x: 0, y: 19 },
};

// userReducer for managing user position & page theme
export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "home":
      return { ...state, home: payload };
    case "about":
      return { ...state, about: payload };
    case "projects":
      return { ...state, projects: payload };
    case "blogs":
      return { ...state, blogs: payload };
    case "contact":
      return { ...state, contact: payload };
    case "userPosition": 
      return { ...state, userPosition: payload };
    case "masterLightOn":
      return initialStateLight;
    case "masterLightOff":
      return initialStateDark;
    default:
      return state;
  }
};
