import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/header/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
