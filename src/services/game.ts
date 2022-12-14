const api = {
  question: "Select animals",
  allwords: [
    "hole",
    "sofa",
    "pear",
    "tiger",
    "oatmeal",
    "square",
    "nut",
    "cub",
    "shirt",
    "tub",
    "cow",
  ],
  goodwords: ["tiger", "cow"],
};

export const getGame = () => {
  return Promise.resolve(api);
};
