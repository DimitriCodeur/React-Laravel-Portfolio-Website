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
import Video from "./assets/components/Video/Video";
import ClientReview from "./assets/components/ClientReview/ClientReview";
import AboutMe from "./assets/components/AboutMe/AboutMe";
import Footer from "./assets/components/Footer/Footer";

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
      <Video />
      <ClientReview />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
