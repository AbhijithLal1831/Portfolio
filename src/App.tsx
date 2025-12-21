import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BentoGrid from "./Components/BentoGrid";
import TechStack from "./Components/TechStack";
import Certifications from "./Components/Certifications";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <TechStack />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
