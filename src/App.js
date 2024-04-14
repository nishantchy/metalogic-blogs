import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyRoutes from "./routes";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="font-worksans">
      <Navbar />
      <MyRoutes />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
