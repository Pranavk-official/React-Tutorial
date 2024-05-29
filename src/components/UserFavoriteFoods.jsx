import { createElement } from "react";


/**
 * Old way of creating child elements
 */



export function UserFavoriteFood() {
  return createElement(
    "section",
    null,
      <span>Favorite Foods</span>,
      <br />,
      <ul>
        <li>Sushi</li>
        <li>Biriyani</li>
        <li>Tandoori</li>
      </ul>
  );
}
