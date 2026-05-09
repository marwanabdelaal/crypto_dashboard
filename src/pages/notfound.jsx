import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="loading-bar">
      <Link to={'/'}>
        <img src="/notfound.svg" alt="notfound" />
      </Link>
    </div>
  );
};

export default NotFoundPage;
