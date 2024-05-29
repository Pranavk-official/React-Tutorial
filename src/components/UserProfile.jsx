import { UserFavoriteFood } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
  return (
    <div id="user-profile">
      <UserUsername username="Bob" />
      <b>Age: </b>
      <span>{props.age}</span>
      <UserFavoriteFood />
      {/* Dynamic Rendering */}
    </div>
  );
}
