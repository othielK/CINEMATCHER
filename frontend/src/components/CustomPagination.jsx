/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
// import { Pagination } from "@material-ui/lab";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Pagination } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

export default function CustomPagination({ setPage, pageNumber }) {
  // const classes = useStyles();

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        color: "white",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <div id="pagination_number">
          <Pagination
            count={pageNumber}
            color="primary"
            variant="outlined"
            onChange={(e) => handlePageChange(e.target.textContent)}
          />
        </div>
      </ThemeProvider>
    </div>
  );
}
CustomPagination.propTypes = {
  setPage: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
};
