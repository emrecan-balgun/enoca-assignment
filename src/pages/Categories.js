import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

import Header from "../components/Header";
import News from "../components/News";
import SearchQuery from "../components/SearchQuery";

import { getNews } from "../services/NewsService";
import { changeData, changeSearch } from "../store/news/newsSlice";

function Categories() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news.data);
  const searchQuery = useSelector((state) => state.news.search);

  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState();

  const getAuthors = () => {
    const list = newsData.map((item) => item.author);
    const uniqueAuthors = [...new Set(list)];
    const options = uniqueAuthors.map((item) => ({
      value: item,
      label: item,
    }));
    setAuthors(options);
  }

  const cleanSearchQuery = () => {
    dispatch(changeSearch(""));
  };

  const fetchData = async () => {
    try {
      const response = await getNews();
      dispatch(changeData(response.data.articles));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cleanSearchQuery();
    fetchData();
    getAuthors();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col pt-4">
        {searchQuery.length > 0 && <SearchQuery searchQuery={searchQuery} />}
        <div className="flex flex-row gap-10">
          <div className="w-1/4">
            <DropdownList
                data={authors}
                dataKey='id'
                textField='label'
                defaultValue={'Choose authors'}
                onChange={(value) => { setSelectedAuthor(value.label)}}
              />
          </div>
          <div className="w-3/4"><News data={newsData.filter((item) => item.author === selectedAuthor)} /></div>
        </div>
      </div>
    </>
  );
}

export default Categories;
