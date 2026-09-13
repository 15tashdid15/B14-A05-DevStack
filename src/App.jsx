import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";

function App() {
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const addToStack = (technology) => {
    const alreadyAdded = stack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.info(`${technology.name} is already added`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack`);
  };

  const removeFromStack = (id) => {
    const removed = stack.find(
      (item) => item.id === id
    );

    setStack(
      stack.filter((item) => item.id !== id)
    );

    toast.error(`${removed.name} removed`);
  };

  const clearStack = () => {
    setStack([]);
    toast.warning("Stack cleared");
  };

  if (loading) {
    return (
      <div className="loading">
        Loading technologies...
      </div>
    );
  }

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