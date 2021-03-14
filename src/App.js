import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddOperation from "./components/AddOperation";
import Operation from "./components/Operation";
import OperationsList from "./components/OperationsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav m-auto">
          <li className="nav-item">
            <AddOperation/>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/operations"]} component={OperationsList } />
          <Route exact path="/add" component={AddOperation} />
          <Route path="/operations/:id" component={Operation} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
