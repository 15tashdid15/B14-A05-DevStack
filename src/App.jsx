import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

function App() {
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {

    return <Loader />;

  }
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



  return (
    <>
      <Navbar />

      <Hero />

      <div className="main-content">
        <TechnologyList
          onAdd={addToStack}
          stack={stack}
        />

        <StackSidebar
          stack={stack}
          onRemove={removeFromStack}
          onClear={clearStack}
        />
      </div>
      <InfoSection />

      <Footer />
    </>
  );
}

export default App;