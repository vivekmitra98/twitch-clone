const convertViewers = (viewers) => {
  if (viewers < 1000) return viewers;
  if (viewers >= 100000) return Math.floor(viewers / 1000) + "k";
  if (viewers % 1000 === 0) return viewers / 1000 + "k";
  return (viewers / 1000).toFixed(1) + "k";
};

export default convertViewers;
