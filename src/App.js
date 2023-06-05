import React,{useContext} from "react";
import "./App.css";
import MainHeader from "./Components/MainHeader/MainHeader";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import AuthContext from "./store/auth-context";
function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader></MainHeader>
      <main>
        {!ctx.isLoggedIn && <Login></Login>}
        {ctx.isLoggedIn && <Home></Home>}
      </main>
    </React.Fragment>
  );
}

export default App;
