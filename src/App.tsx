// App.jsx
import "./App.css";
import Header from "./components/Header/indexs";
import HomePage from "./pages/Homepage/Homepage";
import SkillPage from "./pages/Skills/indexs";
import WorkPage from "./pages/Work/indexs";
import ContactPage from "./pages/Contact/indexs";
import Footer from "./components/Footer/indexs";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <SkillPage />
      <WorkPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
