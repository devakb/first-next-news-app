import * as React from "react";

import { AppBar, Box, Toolbar, Button, Typography } from "@mui/material";

import Link  from "next/link";

const categoryLists = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology"
];



export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href={`/`}>
            <Typography variant="h6" component="div">
              News
            </Typography>
          </Link>
          <div>
            {categoryLists.map((item, index) => {
              return (
                <>
                  <Link href={`/categories/${item}`} key={index}>
                    <Button color="inherit">
                      {item}
                    </Button>
                  </Link>
                </>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
