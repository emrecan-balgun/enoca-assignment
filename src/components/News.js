import React from "react";

import NewsCard from "./NewsCard";

function News({ data }) {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {data.map((item, index) => {
        return <NewsCard key={index} data={item} />;
      })}
    </div>
  );
}

export default News;
