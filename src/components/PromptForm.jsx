import { useState } from "react";
const axios = require("axios");

export default function PromptForm(props) {
  const { setResults } = props;
  const [userInput, setUserInput] = useState("");

  const placeholderString = "Write a catchline for a new bakery";

  function handleChange(e) {
    e.preventDefault();
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const KEY = process.env.REACT_APP_OPENAI_API_KEY;

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
            Authorization: `Bearer ${KEY}`,
          },
        }
      )
      .then(
        (res) => {
          const data = res.data.choices[0].text;
          console.log(data);
          setResults((prevResults) => [
            { text: data, time: new Date() },
            ...prevResults,
          ]);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <section className="prompt-form">
      <form
        method="post"
        action="/submit"
        className="form"
        onSubmit={handleSubmit}
      >
        <textarea
          className="form-textarea"
          name="text"
          placeholder={placeholderString}
          value={userInput}
          onChange={handleChange}
        ></textarea>
        <button type="reset" className="form-reset">Reset</button>
        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </section>
  );
}
