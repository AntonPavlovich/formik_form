import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route path='/sign_up' component={SignUpPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
