import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Fragment } from "react";
import "./App.css";
import CellList from "./components/CellList/CellList";

const App = () => {
  return (
    <Fragment>
      <CellList />
    </Fragment>
  );
};

export default App;
