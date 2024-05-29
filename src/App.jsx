import { UserProfile } from "./components/UserProfile";

export default function App() {
  return (
    <div>
      <h1>Root Component</h1>
      <UserProfile
        username="Bob"
        age={24}
        isLoggedIn={true}
        favoriteFoods={[
          {
            name: "Sushi",
          },
          {
            name: "Biriyani",
          },
          {
            name: "Upma",
          },
        ]}
      />
    </div>
  );
}
