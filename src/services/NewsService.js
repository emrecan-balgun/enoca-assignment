import axios from 'axios';

const API_KEY = "e6e52597346b4baea4b616ac3a097f25";

const BASE_URL = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;

const getNews = async () => {
    return await axios.get(BASE_URL);
}

const getNewsByPage = async (pageNumber) => {
    return await axios.get(`${BASE_URL}&page=${pageNumber}`);
}

const getNewsByQuery = async (query) => {
    return await axios.get(`${BASE_URL}&q=${query}`);
}

const getBusinessNews = async () => {
    return await axios.get(`${BASE_URL}&category=business`);
}

const getHealthNews = async () => {
    return await axios.get(`${BASE_URL}&category=health`);
}

const getEntertainmentNews = async () => {
    return await axios.get(`${BASE_URL}&category=entertainment`);
}

const getGeneralNews = async () => {
    return await axios.get(`${BASE_URL}&category=general`);
}

const getScienceNews = async () => {
    return await axios.get(`${BASE_URL}&category=science`);
}

const getSportsNews = async () => {
    return await axios.get(`${BASE_URL}&category=sports`);
}

const getTechnologyNews = async () => {
    return await axios.get(`${BASE_URL}&category=technology`);
}


export { getNews, getNewsByPage, getNewsByQuery, getBusinessNews, getHealthNews, getEntertainmentNews, getGeneralNews, getScienceNews, getSportsNews, getTechnologyNews };