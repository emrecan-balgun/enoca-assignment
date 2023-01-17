import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import { changeData } from '../store/news/newsSlice';
import { getNewsByPage } from "../services/NewsService";

function Paginiation({ data }) {
  const { totalResult, perPage } = data;
  const newsData = useSelector((state) => state.news.data);

  const dispatch = useDispatch();
  const pages = Math.ceil(totalResult / perPage);

  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = async (activePage) => {
    try {
      const response = await getNewsByPage(activePage);
      dispatch(changeData(response.data.articles));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        {newsData.length > 0 && pageNumbers.map((number, key) => (
          <li key={key} onClick={() => handleClick(number)}>
            <span
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Paginiation;
