import React from "react";
import { NavLink } from "react-router-dom";

const SlideButtons = (props) => {
  return (
    <div className="slide-buttons">
      {props.left && (
        <NavLink to={props.left}>
          <span className="slide-buttons__left">&lt;</span>
        </NavLink>
      )}
      {props.right && (
        <NavLink to={props.right}>
          <span className="slide-buttons__right">&gt;</span>
        </NavLink>
      )}
    </div>
  );
};

export default SlideButtons;
