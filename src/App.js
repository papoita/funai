
import './styles/App.scss';
import Navigation from './components/Navigation';
import PromptForm from './components/PromptForm';
import PromptList from './components/PromptList';
const axios = require("axios");

function App() {

  const handlerequest=()=>{
    const data = {
      prompt: "Write a tagline about a dog wearing skis",
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
     };
     
      const key = process.env.REACT_APP_OPENAI_API_KEY
   

     axios.post("https://api.openai.com/v1/engines/text-curie-001/completions", data,  {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
     
    
     }).then((res)=>console.log(res))
  }
  return (
    <div className="App">
      
      <Navigation/>
      <PromptForm />
      <PromptList/>
      <button onClick={()=>{handlerequest()}} >request</button>
    </div>
  );
}

export default App;
