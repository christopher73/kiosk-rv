import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {
  MedicareQuestionScreen,
  AgeQuestionScreen,
  MedicaidQuestionScreen,
  VideoCallScreen,
  WelcomeScreen,
} from "./screens";

function App() {
  /**
   *
   * @param {*} value
   * @returns
   */
  function formatValue(value) {
    return [...value]
      .reduce((acc, ch, i) => {
        if ((i + 1) % 3 === 0) {
          return acc + " - " + ch;
        } else {
          return acc + ch;
        }
      })
      .trim();
  }
  console.log(formatValue("123456789"));
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomeScreen} />
        <Route exact path="/age-question" component={AgeQuestionScreen} />
        <Route
          exact
          path="/medicare-question"
          component={MedicareQuestionScreen}
        />
        <Route
          exact
          path="/medicaid-question"
          component={MedicaidQuestionScreen}
        />
        <Route exact path="/video-call" component={VideoCallScreen} />
      </Switch>
    </Router>
  );
}

export default App;
