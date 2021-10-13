import { Button } from "@mui/material";
import React from "react";

const App: React.FC = () => {
  const [number, setNumber] = React.useState(0);

  return (
    <div>
      Hello wakacito!
      <Button variant="contained" onClick={() => setNumber(number + 1)}>
        Click me
      </Button>
      <p>{number}</p>
    </div>
  );
};

export default App;
