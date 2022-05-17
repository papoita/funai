import React from "react";


import {
  render,
  cleanup,
  
} from "@testing-library/react";

import Navigation from "../PromptForm";

afterEach(cleanup);

describe("Navigation", () => {
it("renders without crashing", () => {
  render(<Navigation />);
});
});