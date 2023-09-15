'use client';

import NewsCard from './NewsCard';
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export default function News({news}) {


    return (
        <div className="flex flex-wrap gap-y-5">

            {news.length > 0 ? news.map((articale, index) => (
                articale.urlToImage && <div className="w-full md:w-6/12 lg:w-3/12 flex-shrink">
                     <NewsCard key={index} articale={articale} />
                </div>
            )): <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>}
        </div>
    );
  }