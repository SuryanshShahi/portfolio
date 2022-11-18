import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from "./Home";
import XYZ from "./hello";
import { CursorProvider } from "react-cursor-custom";

function App() {
  useEffect(() => {
    document.title = `Join with Epic Home Service`;
  });

  return (
    <div className="App">
      <Switch>
        <CursorProvider color={"#888"} noRing={false} ringSize={35}>
          <Route exact path="/" component={Home} />
          <Route exact path="/hello" component={XYZ} />

          <Redirect to="/" />
        </CursorProvider>
      </Switch>
    </div>
  );
}

export default App;
