import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import moment from "moment";

export default function NewsCard({ articale = {} }) {
  return (
    <Card sx={{ maxWidth: 500, width: "90%", height: "100%"  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={articale.urlToImage}
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="caption" component="div" color="text.secondary">
            Published:{" "}
            {moment(articale.publishedAt).format("DD-MM-YYYY h:m:s A")}
          </Typography>
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            color="text.secondary"
          >
            Author: {articale.author}
          </Typography>

          <Typography
            gutterBottom
            sx={{ textTransform: "uppercase", fontWeight: "bold" }}
            variant="subtitle1"
            component="h6"
          >
            {articale.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {articale.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
