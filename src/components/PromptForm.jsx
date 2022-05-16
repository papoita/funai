import { Form, Button } from "react-bootstrap";
import { useState } from "react";
const axios = require("axios");

export default function PromptForm(props) {
  const { setResults } = props;
  const [userInput, setUserInput] = useState("");

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
            { prompt:userInput, text: data, time: new Date() },
            ...prevResults,
          ]);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <section className="prompt-form w-75">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Write a catchline about..</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            className="border border-secondary"
            name="text"
            placeholder="Write a catchline for a new bakery"
            value={userInput}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex my-3">
          <Button className="flex-fill me-1" variant="secondary" type="reset">
            Reset
          </Button>
          <Button className="flex-fill ms-1" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </section>
  );
}
