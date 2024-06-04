// import { UserDetails } from "./components/UserDetails";

export default function App() {
  // NOT_VERIFIED | VERIFIED | ACCOUNT_DISABLED
  const USER_STATUS = "NOT_VERIFIED";

  if (USER_STATUS === "NOT_VERIFIED") {
    return (
      <div>
        <span>You are not verified, Please verify your email!</span>
      </div>
    );
  } else if (USER_STATUS === "VERIFIED") {
    return (
      <div>
        <span>
          You are verified, Congrats click here to access your dashboard!!
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>Your account is disabled</span>
      </div>
    );
  }
}
