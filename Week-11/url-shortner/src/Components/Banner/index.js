import React from "react";
import bannerImg from "../../images/undraw_link_shortener.svg";

const index = () => {
  return (
    <div className="banner">
      <div>
        <h1 className="banner-header">More than just shortner Links</h1>
        <p></p>
      </div>
      <img src={bannerImg} alt="banner" />
    </div>
  );
};

export default index;
