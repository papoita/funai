import React from "react";
import axios from "axios";

import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
  prettyDOM,
  queryByAltText,
  queryByText,
  getByText,
  getAllByTestId,
  getByAltText,
  getByPlaceholderText,
  getByDisplayValue,
} from "@testing-library/react";

import PromptForm from "../PromptForm";

afterEach(cleanup);

describe("PromptForm", () => {
it("renders without crashing", () => {
  render(<PromptForm />);
});

it("renders the submit button", () => {
  render(<PromptForm />);
});

it("defaults input in textarea to predetermined text when no option in the dropdown is selected", () => {
  const { getByText } = render(<PromptForm />);

  return waitForElement(() => getByText("Write a thing about any topic")).then(() => {
    fireEvent.click(getByText("Write a thing about any topic"));
    expect(getByText("Write a thing about any topic")).toBeInTheDocument();
  });
});


it("text in textarea changes to sentence selected with dropdown word selection in thing option", () => {
  // ...
});

it("text in textarea changes to sentence selected with dropdown word selection in topic option", () => {
  // ...
});

it("when submit button is clicked axios post event is fired", () => {
  // ...
});

it("renders the reset button", () => {
  render(<PromptForm />);
});

it("when reset btn is clicked the textarea gets errased/emptied", () => {
  render(<PromptForm />);
});

});



  