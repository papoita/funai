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

  xit("renders the submit button", () => {
    render(<PromptForm />);
  });

 xit("defaults input in textarea to predetermined text when no option in the dropdown is selected", () => {
    const { getByText } = render(<PromptForm />);

    return waitForElement(() =>
      getByText("Write a thing about any topic")
    ).then(() => {
      fireEvent.click(getByText("Write a thing about any topic"));
      expect(getByText("Write a thing about any topic")).toBeInTheDocument();
    });
  });

  xit("text in textarea changes to sentence selected with dropdown word selection in thing option", () => {
    // ...
  });

  xit("text in textarea changes to sentence selected with dropdown word selection in topic option", () => {
    // ...
  });

  xit("when submit button is clicked axios post event is fired", () => {
    // ...
  });

  xit("renders the reset button", () => {
    render(<PromptForm />);
  });

  xit("when reset btn is clicked the textarea gets errased/emptied", () => {
    render(<PromptForm />);
  });
});
