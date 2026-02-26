import numeral from "numeral";

export const formatNumber = (number: number) => numeral(number).format("0,0");
export const formatPrice = (number: number) => `${formatNumber(number)} ₮`;

export const calculatePercentage = (total: number, value: number) => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};
