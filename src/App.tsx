// import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import About from "./components/About";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
Box;

function App() {
  return (
    <>
      <Navbar />
      <Box id="home">
        <Jumbotron />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="skills">
        <Skills />
      </Box>
      <Footer />
    </>
  );
}

export default App;
