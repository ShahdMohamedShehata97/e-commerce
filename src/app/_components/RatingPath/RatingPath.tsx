import React from 'react';
import { AiFillStar } from 'react-icons/ai'; // نستخدم StarIcon من React Icons

const ReviewSummary = () => {
  const totalReviews = 1;
  const ratingData = [
    { stars: 5, percentage: 60 },
    { stars: 4, percentage: 25 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 5 },
    { stars: 1, percentage: 5 },
  ];

  return (
   <div className="bg-white  flex w-full pb-3">
  
  {/* القسم الأيسر */}
  <div className="flex flex-col items-center  flex-1">
    <span className="text-6xl font-bold text-gray-900 leading-none">5</span>

    <div className="flex items-center text-[#ffcc00] text-xl mt-3">
      {[...Array(5)].map((_, i) => (
        <AiFillStar key={i} />
      ))}
    </div>

    <span className="text-xs text-gray-500  font-medium">
      Based on {totalReviews} review
    </span>
  </div>

  {/* القسم الأيمن */}
  <div className="flex flex-col justify-center flex-[3] w-full space-y-2">
    {ratingData.map((data) => (
      <div key={data.stars} className="  w-full flex ">
        
        {/* label */}
        <div className="text-sm text-gray-800 w-14 text-righ flex-shrink-0">
          <span className="font-semibold block">{data.stars}</span>
          <span className="text-gray-600 block"> star</span>
        </div>

        {/* progress bar */}
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#ffcc00] rounded-full"
            style={{ width: `${data.percentage}%` }}
          ></div>
        </div>

        {/* percentage */}
        <div className="text-sm text-gray-500 w-16 text-left pl-4 flex-shrink-0">
          {data.percentage}%
        </div>
      </div>
    ))}
  </div>

</div>
  );
};

export default ReviewSummary;