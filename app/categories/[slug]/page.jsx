"use client";

import Image from "next/image";
import NavBar from "../../Components/NavBar";
import News from "../../Components/News";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

import { Typography } from "@mui/material";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export default function Category({ params }) {
  let [news, setNews] = useState([]);

  const APIKEY = "bf25dbb9ceb6421599f64c6afee302d0";

  const fetchNews = () => {
    if (!categories.includes(params.slug)) {
      return notFound();
    } else {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${params.slug}&apiKey=${APIKEY}`
        )
        .then((res) => {
          setNews(res.data.articles);
        });
    }
  };

  useEffect(() => fetchNews(), []);

  return (
    <div className="App">
      <NavBar />

      

      <div className="container mx-auto mt-5">
        <Typography sx={{ mb: "30px" }} variant="h5" component="h5">Category: {params.slug.toUpperCase()}</Typography>

        <News news={news} />
      </div>
    </div>
  );
}
