import HeaderComp from "./components/headerComp/HeaderComp";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Switch from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <HeaderComp></HeaderComp>
          <Route path='/proj'>
            <div>Hello there..</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
