import React from "react";
import './assets/css/custom.css';
import './assets/css/bootstrap.min.css';
import TopBanner from "./assets/components/TopBanner/TopBanner";
import Services from "./assets/components/Services/Services";
import TopNavigation from "./assets/components/TopNavigation/TopNavigation";

function App() {
  return (
    <div>
      <TopNavigation /> 
      <TopBanner />
      <Services />
    </div>
  );
}

export default App;
