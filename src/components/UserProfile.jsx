import PropTypes from "prop-types";
import { UserFavoriteFood } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
  return (
    <div id="user-profile">
      <UserUsername username={props.username} />
      <b>Age: </b>
      <span>{props.age}</span>
      <UserFavoriteFood />
      {/* Dynamic Rendering */}
      <p>{String(props.isLoggedIn)}</p>
    </div>
  );
}

// Props Validation using prop-types
UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool,
  favoriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
