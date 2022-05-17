import React from "react";


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

import PromptList from "../PromptForm";

afterEach(cleanup);

describe("PromptList", () => {
it("renders without crashing", () => {
  render(<PromptList />);
});

it("after submit btn is clicked triggers a loading giff while waiting for axios response", () => {
  render(<PromptList />);
});

xit("after submit btn is clicked renders the axios response", () => {
  render(<PromptList />);
});

xit("after submit btn is clicked for a second time renders another article with the new response", () => {
  render(<PromptList />);
});



});