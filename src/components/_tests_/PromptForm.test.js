import React from "react";
import { render, cleanup } from "@testing-library/react";

import PromptForm from "../PromptForm";

afterEach(cleanup);

describe("PromptForm", () => {
  it("renders without crashing", () => {
    render(<PromptForm />);
  });

  it("renders the submit button", () => {
    render(<PromptForm />);
  });
});
