const generateRandomNumber = (): number => {
  const rnd = Math.floor(Math.random() * 10) + 1;
  return rnd;
};

export default generateRandomNumber;
