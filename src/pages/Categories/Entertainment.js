import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/Header";
import News from "../../components/News";
import SearchQuery from "../../components/SearchQuery";

import { getEntertainmentNews } from "../../services/NewsService";
import { changeData, changeSearch } from "../../store/news/newsSlice";

function Entertainment() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news.data);
  const searchQuery = useSelector((state) => state.news.search);

  const cleanSearchQuery = () => {
    dispatch(changeSearch(""));
  };

  const fetchData = async () => {
    try {
      const response = await getEntertainmentNews();
      dispatch(changeData(response.data.articles));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cleanSearchQuery();
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col pt-4">
        {searchQuery.length > 0 && <SearchQuery searchQuery={searchQuery} />}
        <News data={newsData} />
      </div>
    </>
  );
}

export default Entertainment;
