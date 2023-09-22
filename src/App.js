import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/header/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
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
      </main>
    </>
  );
}

export default App;
