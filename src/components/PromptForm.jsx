import {
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useState } from "react";
const axios = require("axios");

export default function PromptForm(props) {
  const { setResults, setLoading, loading } = props;
  const [thing, setThing] = useState("thing");
  const [topic, setTopic] = useState("any topic");
  const [userInput, setUserInput] = useState(`Write a ${thing} about ${topic}`);

  const [errorMsg, setErrorMsg] = useState("");

  const [id, setId] = useState(0);

  function handleThing(e) {
    e.preventDefault();
    setThing(e.target.innerText);
    setUserInput(`Write a ${e.target.innerText} about ${topic}`);
  }

  function handleTopic(e) {
    e.preventDefault();
    setTopic(e.target.innerText);
    setUserInput(`Write a ${thing} about ${e.target.innerText}`);
  }

  function handleReset(e) {
    e.preventDefault();
    setTopic("any topic");
    setThing("thing")
    setUserInput("");
  }

  function handleChange(e) {
    e.preventDefault();
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const KEY = process.env.REACT_APP_OPENAI_API_KEY;

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
      .then((res) => {
        const data = res.data.choices[0].text;
        setResults((prevResults) => [
          { id:id, prompt: userInput, text: data, time: new Date() },
          ...prevResults,
        ]);
        setId(id + 1);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg(error.message);
      });
  }

  return (
    <section className="prompt-form w-75">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Write a </InputGroup.Text>

        <DropdownButton
          variant="outline-secondary"
          title={thing}
          id="input-group-dropdown-1"
          align="end"
        >
          <Dropdown.Item onClick={handleThing} data-testid="catchline">catchline</Dropdown.Item>
          <Dropdown.Item onClick={handleThing}>poem</Dropdown.Item>
          <Dropdown.Item onClick={handleThing}>story</Dropdown.Item>
        </DropdownButton>

        <InputGroup.Text id="basic-addon2">about </InputGroup.Text>

        <DropdownButton
          variant="outline-secondary"
          title={topic}
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item onClick={handleTopic}>a new bakery</Dropdown.Item>
          <Dropdown.Item onClick={handleTopic}>an apple</Dropdown.Item>

          <Dropdown.Item onClick={handleTopic} data-testid="myfavoritestore">my favorite store</Dropdown.Item>
        </DropdownButton>
      </InputGroup>

      <Form onSubmit={handleSubmit}>
        {errorMsg && <Form.Text>{errorMsg}</Form.Text>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            as="textarea"
            rows={5}
            className="border border-secondary"
            name="text"
            value={userInput}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex my-3">
          <Button className="flex-fill me-1" variant="secondary" type="reset" onClick={handleReset}>
            Reset
          </Button>
          <Button
            className="flex-fill ms-1"
            variant="primary"
            type="submit"
            disabled={loading}
          >
            Submit
          </Button>
        </div>
      </Form>
    </section>
  );
}
