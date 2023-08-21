export const generateId = () => {
  let numRange = 60;

  return Math.random() * numRange + 1;
};
