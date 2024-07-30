// styles
import "./App.css";

// hooks
import useViewportScroll from "./useWindowScroll";

export default function App() {
  const [scroll, scrollTo] = useViewportScroll();

  return (
    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}
