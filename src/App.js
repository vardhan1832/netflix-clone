import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { logout,login , selectUser } from "./features/userSlice";
import { useDispatch , useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const user=useSelector(selectUser)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          uid:user.uid,
          email: user.email
        }))
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe
  },[dispatch])
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
