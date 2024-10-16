import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);
  const handleSignOut = () => {
    setUser(undefined); // Reset user state to log out
  };
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} onSignout={handleSignOut} />;
  }
}

export default App;