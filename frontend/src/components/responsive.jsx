/* eslint-disable import/prefer-default-export */
export const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 1200 },
  //   items: 7
  // },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 7,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 750 },
    items: 6,
    slidesToSlide: 3,
  },
  ipad: {
    breakpoint: { max: 750, min: 464 },
    items: 4,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};
