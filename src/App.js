import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import authOperations from "./redux/auth/auth-operations";
import Loading from "./components/Loading/Loading";
import AppBar from "./components/AppBar/AppBar";

const Home = lazy(() => import("./views/Home/Home"));
const Register = lazy(() => import("./views/Register/Register"));
const Login = lazy(() => import("./views/Login/Login"));
const Contacts = lazy(() => import("./views/Contacts/Contacts"));

const App = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="container">
      <AppBar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
