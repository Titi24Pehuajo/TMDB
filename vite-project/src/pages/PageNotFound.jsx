import React from "react";

import "../styles/pageNotFound.scss";

import ContentWrapper from "../components/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Pagina no encontrada!</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
