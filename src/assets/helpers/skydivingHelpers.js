export const altStyles = (type, index) => {
  switch (type) {
    case "clouds":
      if (index % 2 === 1) {
        return { zIndex: 1, top: "10px" };
      } else {
        return { zIndex: 0, top: "-20px" };
      }
    case "trees":
      if (index % 2 === 0) {
        return { zIndex: 1, top: "-35px", left: "10px" };
      } else {
        return { zIndex: 1, top: "-28px", left: "5px" };
      }
    default:
      return { zIndex: 0, top: "-20px" };
  }
};
