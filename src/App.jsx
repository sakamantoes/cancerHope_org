import { Routes, Route } from "react-router-dom";
import Testimonies from "./pages/Testimonies";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Footer from "./component/Footer";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <div className="m-auto min-h-screen max-w-[1020px] relative">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/testimonie/:id" element={<Testimonies />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
