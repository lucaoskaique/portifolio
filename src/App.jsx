import { Suspense, useState } from "react";
import "./App.css";
import Overlay from "./layout/Overlay";
import { FadeIn, LeftMiddle } from "./layout/styles";
import Horseshoes from "./Horseshoes";

function App() {
  const [speed, set] = useState(1);
  return (
    <>
      <Suspense fallback={null}>
        <Horseshoes speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input
          type="range"
          min="0"
          max="10"
          value={speed}
          step="1"
          onChange={(e) => set(e.target.value)}
        />
      </LeftMiddle>
    </>
  );
}

export default App;
