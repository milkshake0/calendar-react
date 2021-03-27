import CalendarPage from "./components/common/CalendarPage";
import TodoPage from "./components/common/TodoPage";
import "./shared/reset.scss";
import "./shared/style.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CalendarPage} />
          <Route path="/todo" component={TodoPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
