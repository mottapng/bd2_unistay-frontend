import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export const Rating = ({ level }) => {
  const stars = [];
  let realLevel = level;
  const floorNumber = Math.floor(realLevel);
  const decimalPart = realLevel - floorNumber;

  if (decimalPart <= 0.25) {
    realLevel = floorNumber;
  } else if (decimalPart <= 0.75) {
    realLevel = floorNumber + 0.5;
  } else {
    realLevel = Math.ceil(realLevel);
  }

  for (let i = 1; i <= 5; i++) {
    if (i <= realLevel) {
      stars.push(<BsStarFill fontSize={22} color="var(--gray-900)" />);
    } else if (i - 0.5 <= realLevel) {
      stars.push(<BsStarHalf fontSize={22} color="var(--gray-900)" />);
    } else {
      stars.push(<BsStar fontSize={22} color="var(--gray-900)" />);
    }
  }

  return stars;
};