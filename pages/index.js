import { useState } from "react";

import { Button, Box, makeStyles, useTheme } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { compose, spacing, palette } from "@material-ui/system";
import { style } from "styled-system";
import { Label, Input } from "@rebass/forms";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: {
      [theme.breakpoints.up("xs")]: "100%",
      [theme.breakpoints.up("sm")]: "50%",
      [theme.breakpoints.up("md")]: "25%",
    },
  },
}));

export default function Home() {
  const [count, setCount] = useState(0);
  const c = useStyles();
  const theme = useTheme();
  return (
    <>
      <Input type="date" width="300px" m={3}></Input>
      <Box
        display="flex"
        bgcolor="teal"
        //justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box className={c.root}>
          <Button variant="contained" color="primary">
            kkk
          </Button>
        </Box>
        <Box className={c.root}>
          <Button variant="contained" color="primary">
            kkk
          </Button>
        </Box>
        <Box className={c.root}>
          <Button variant="contained" color="primary">
            kkk
          </Button>
        </Box>
        <Box className={c.root}>
          <Button variant="contained" color="primary">
            kkk
          </Button>
        </Box>
        <Box className={c.root}>
          <Button variant="contained" color="primary">
            kkk
          </Button>
        </Box>
        <Box className={c.root}>
          <Button variant="contained" color="primary">
            kkk
          </Button>
        </Box>
      </Box>
    </>
  );
}
