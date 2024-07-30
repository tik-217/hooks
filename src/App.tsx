// styles
import "./App.css";

// hooks
import useViewportSize from "./useViewportSize";

export default function App() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
