import "./App.css";
import Navbar from "../src/components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Science from "./components/pages/Science";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/science" exact component={Science} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
