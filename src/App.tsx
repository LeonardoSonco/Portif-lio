// App.jsx
import "./App.css";
import NavMenu from "./components/NavMenu/indexs";
import HomePage from "./pages/Homepage/Homepage";
import SkillPage from "./pages/Skills/indexs";
import WorkPage from "./pages/Work/indexs";
import ContactPage from "./pages/Contact/indexs";
import Footer from "./components/Footer/indexs";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <HomePage />
      <SkillPage />
      <WorkPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
