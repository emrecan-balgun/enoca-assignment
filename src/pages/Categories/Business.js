import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import withLoading from "../../hoc/withLoading";
import Header from "../../components/Header";
import News from "../../components/News";
import SearchQuery from "../../components/SearchQuery";
import { getBusinessNews } from "../../services/NewsService";
import { changeData, changeSearch } from "../../store/news/newsSlice";

function Business({ setLoading, loading }) {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news.data);
  const searchQuery = useSelector((state) => state.news.search);

  const cleanSearchQuery = () => {
    dispatch(changeSearch(""));
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getBusinessNews();
      dispatch(changeData(response.data.articles));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cleanSearchQuery();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default withLoading(Business);
