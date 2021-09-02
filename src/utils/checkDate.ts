export const differenceDate = (lastTimeUser: any) => {
  const nowTime = new Date();
  // @ts-ignore
  return parseInt((nowTime - lastTimeUser) / (1000 * 60 * 60 * 24), 10);
};

export const isHisTurn = (lastTime: any) => {
  return lastTime
    ? differenceDate(JSON.parse(lastTime)) > 0
      ? true
      : false
    : false;
};
