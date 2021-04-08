import "./App.css";
import { WelcomeScreen } from "./screens";

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
    <div>
      <WelcomeScreen />
    </div>
  );
}

export default App;
