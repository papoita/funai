import React from "react";


import {
  render,
  cleanup,
} from "@testing-library/react";

import PromptList from "../PromptForm";

afterEach(cleanup);

describe("PromptList", () => {
it("renders without crashing", () => {
  render(<PromptList />);
});


});