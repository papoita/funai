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

import Navigation from "../PromptForm";

afterEach(cleanup);

describe("Navigation", () => {
it("renders without crashing", () => {
  render(<Navigation />);
});