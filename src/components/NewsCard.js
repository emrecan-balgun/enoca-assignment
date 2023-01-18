import React from "react";

function NewsCard({ data }) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={data.url}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <img className="rounded-t-lg" src={data.urlToImage} alt="news_img" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.description}
          </p>
          <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            {data.author}
          </span>
        </div>
      </a>
    </div>
  );
}

export default NewsCard;
