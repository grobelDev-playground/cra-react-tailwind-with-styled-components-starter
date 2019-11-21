import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

// Style 1: Only requires the tw import.
const Paragraph = tw.p`flex justify-center text-white items-center bg-gray-500`;

// Style 2: Requires both the styled and tw imports.
const Button = styled.button`
  ${tw`bg-blue-300 hover:bg-blue-700 text-white p-2 rounded`};
`;

function App() {
  return (
    <div className="App">
      <Paragraph>Hello CRA-Tailwind-StyledComponents!</Paragraph>
      <Button>Button</Button>
    </div>
  );
}

export default App;
