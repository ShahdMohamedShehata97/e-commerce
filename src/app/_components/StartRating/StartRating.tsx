import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface RatingProps {
  rating: number; // rating بين 0 و 5
  totalStars?: number; // عادة 5 نجوم
}

const StarRating: React.FC<RatingProps> = ({ rating, totalStars = 5 }) => {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="#FFC107" />); // نجمة كاملة
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#FFC107" />); // نصف نجمة
    } else {
      stars.push(<FaRegStar key={i} color="#FFC107" />); // نجمة فاضية
    }
  }

  return <div className="flex gap-1">{stars}</div>;
};

export default StarRating;