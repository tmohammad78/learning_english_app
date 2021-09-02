export const differenceDate = (lastTimeUser: any) => {
  const nowTime = new Date();
  // @ts-ignore
  return parseInt((nowTime - lastTimeUser) / (1000 * 60 * 60 * 24), 10);
};

export const isAfter1Day = (lastTime: any) => {
  return differenceDate(lastTime) > 0 ? true : false;
};
