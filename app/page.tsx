'use client';

import axios from 'axios';
import Image from 'next/image'
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { useEffect, useState } from 'react';


export default function Home() {

  
  let [news, setNews] = useState([]);

  const APIKEY = "bf25dbb9ceb6421599f64c6afee302d0";

  const fetchNews = () => {
      axios.get(`https://newsapi.org/v2/everything?q=information+technology&apiKey=${APIKEY}`).then((res) => { 
          setNews(res.data.articles);
      });
  }

  useEffect(() => {
      fetchNews();
  }, []);

  return (
    <div className="App">
      <NavBar />

      <div className="container mx-auto mt-5">
        <News news={news}/>
      </div>
    </div>
  )
}
