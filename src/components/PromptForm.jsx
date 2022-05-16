import { useState } from "react";
const axios = require("axios");

export default function PromptForm(props) {
  const { result, setResult } = props;
  const [userInput, setUserInput] = useState("");

  const placeholderString = "Write a catchline for a new bakery";

  function handleChange(e) {
    e.preventDefault();
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const key = process.env.REACT_APP_OPENAI_API_KEY;

    console.log("you clicked submit");
    const data = {
      prompt: userInput,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      echo: true,
    };

    axios
      .post(
        "https://api.openai.com/v1/engines/text-curie-001/completions",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
        }
      )
      .then(
        (res) => {
          const data = res.data.choices[0].text;
          console.log(data);
          const newResult = [{ text: data, time: new Date() }, ...result];
          setResult(newResult);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <section className="newPrompt">
      <form
        method="post"
        action="/submit"
        className="newprompt_form"
        onSubmit={handleSubmit}
      >
        {/* onClick={()=>{handlerequest()}} */}
        <textarea
          className="form_textarea"
          name="text"
          placeholder={placeholderString}
          value={userInput}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="submit" className="form_input"></input>
      </form>
    </section>
  );
}
