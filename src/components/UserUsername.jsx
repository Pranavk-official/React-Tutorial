// import React from "react";
import PropTypes from "prop-types";

export function UserUsername(props) {
  // console.log(props.username)
  return (
    <>
      <b>Username: </b>
      <span>{props.username}</span>
    </>
  );
}

UserUsername.propTypes = {
  username: PropTypes.string,
};
