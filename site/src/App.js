import React from "react";
import './assets/css/custom.css';
import './assets/css/bootstrap.min.css';
import TopBanner from "./assets/components/TopBanner/TopBanner";
import Services from "./assets/components/Services/Services";
import TopNavigation from "./assets/components/TopNavigation/TopNavigation";
import Analysis from "./assets/components/Analysis/Analysis";
import Summary from "./assets/components/Summary/Summary";
import RecentProject from "./assets/components/RecentProject/RecentProject";
import Course from "./assets/components/Course/Course";

function App() {
  return (
    <div>
      <TopNavigation /> 
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProject />
      <Course />
    </div>
  );
}

export default App;
