import "./App.css";
import Hero from "./components/Hero";
import Lunchservices from "./components/Lunchservices";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Location from "./components/Location";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => {
      setIsLoading(true);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="spinner">{<PropagateLoader color="#e84393" />}</div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Products />
          <Lunchservices />
          <Location />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
