import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} - Digitec Shop</title>
      <link rel="canonical" href="http://digitex-shop.com/" />
    </Helmet>
  );
};

export default Meta;
