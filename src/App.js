import { ChatEngine } from "react-chat-engine";
import "./App.css";
import LoginForm from "./components/login-form";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="f3d40c3d-48f8-4e4b-9325-e00ae688189e"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
    />
  );
};

export default App;
