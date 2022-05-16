import { useState } from "react";
import "./styles/App.scss";
import Navigation from "./components/Navigation";
import PromptForm from "./components/PromptForm";
import PromptList from "./components/PromptList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <Navigation />
      <main className="d-flex flex-column align-items-center my-5">
        <PromptForm setResults={setResults} />
        <PromptList results={results} />
      </main>
    </>
  );
}

export default App;
