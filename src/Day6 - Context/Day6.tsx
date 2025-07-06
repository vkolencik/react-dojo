import { useState } from "react";
import { ThemeProvider } from "./ThemeContext";
import { ThemedButton6 } from "./ThemedButton";

function Counter() {
  const [n, setN] = useState(0);
  console.log("Counter render");
  return <button onClick={() => setN(n + 1)}>count: {n}</button>;
}

export const Day6 = () => (
  <ThemeProvider>
    <Counter />
    <ThemedButton6 />
  </ThemeProvider>
);
