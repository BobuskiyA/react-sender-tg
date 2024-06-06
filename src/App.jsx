import React from "react";
import { MantineProvider } from "@mantine/core";
import { Form } from "./component/Form";
import "@mantine/core/styles.css";

const App = () => {
  return (
    <MantineProvider>
      <Form />
    </MantineProvider>
  );
};

export default App;
