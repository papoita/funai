import { useState } from "react";
import "./styles/App.scss";
import Navigation from "./components/Navigation";
import PromptForm from "./components/PromptForm";
import PromptList from "./components/PromptList";

function App() {
  const [result, setResult] = useState([]);

  return (
    <div className="App">
      <Navigation />
      <PromptForm result={result} setResult={setResult} />
      <PromptList result={result} />
    </div>
  );
}

export default App;
