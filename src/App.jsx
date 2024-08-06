import React from "react";
import FullWidthSection from "./components/Section";
import CreativeSection from "./components/CreativeSection";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div>
      <HeroSection />
      <FullWidthSection />
      <CreativeSection />
    </div>
  );
};

export default App;
