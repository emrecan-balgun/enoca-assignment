import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import News from "../components/News";
import NewsSlider from "../components/NewsSlider";
import Paginiation from "../components/Paginiation";
import SearchQuery from "../components/SearchQuery";
import withLoading from "../hoc/withLoading";
import { getNews } from "../services/NewsService";
import { changeData, changeSearch } from "../store/news/newsSlice";

function Home({ setLoading, loading }) {
  const dispatch = useDispatch();

  const [totalResult, setTotalResult] = useState(0);
  const perPage = 20;

  const newsData = useSelector((state) => state.news.data);
  const searchQuery = useSelector((state) => state.news.search);

  const cleanSearchQuery = () => {
    dispatch(changeSearch(""));
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getNews();
      dispatch(changeData(response.data.articles));
      setTotalResult(response.data.totalResults);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    cleanSearchQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col gap-8 pt-4">
        {searchQuery.length > 0 && <SearchQuery searchQuery={searchQuery} />}
        <NewsSlider data={newsData.slice(0, 3)} />
        <News data={newsData.slice(3)} />
        {!searchQuery.length > 0 && (
          <Paginiation data={{ totalResult, perPage }} />
        )}
      </div>
    </>
  );
}

export default withLoading(Home);
