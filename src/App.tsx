// styles
import "./App.css";

// hooks
import useToggle from "./useToggle/useToggle";

export default function App() {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return (
    <>
      <button onClick={() => toggle()}>{value}</button>
    </>
  );
}
