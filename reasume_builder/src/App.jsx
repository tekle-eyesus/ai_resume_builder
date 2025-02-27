import { useUser } from "@clerk/clerk-react";
import "./App.css";
import { Navigate, Outlet } from "react-router";
import Header from "./header";

function App() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
