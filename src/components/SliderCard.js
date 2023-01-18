import React from "react";

function SliderCard({ data }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row md:max-w-full rounded-lg bg-white p-4">
          <img
            className="w-full md:h-52 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={data.urlToImage}
            alt="news-photo"
          />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {data.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">{data.description}</p>
          <p className="text-gray-600 text-xs">{data.author}</p>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
