import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";

function App() {
  const [stack, setStack] = useState([]);

  const addToStack = (technology) => {
    const alreadyAdded = stack.find(
      (item) => item.id === technology.id
    );

    if (!alreadyAdded) {
      setStack([...stack, technology]);
    }
  };

  const removeFromStack = (id) => {
    setStack(
      stack.filter((item) => item.id !== id)
    );
  };

  const clearStack = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <div className="main-content">
        <TechnologyList onAdd={addToStack} />

        <StackSidebar
          stack={stack}
          onRemove={removeFromStack}
          onClear={clearStack}
        />
      </div>
    </>
  );
}

export default App;