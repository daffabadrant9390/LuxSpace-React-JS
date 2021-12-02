import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const dataLists = props.list;
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {/* Looping to show breadcrumb */}
          {dataLists.map((data, index) => {
            const arias =
              index === dataLists.length - 1
                ? { "aria-label": "current-page" }
                : {};
            return (
              <li key={data.url}>
                <Link to={data.url} {...arias}>
                  {data.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

Breadcrumb.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Breadcrumb;
