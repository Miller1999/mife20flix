import GlobalStyle  from "./Global"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./reset.css"
import Home from "./pages/Home";
import Page404 from "./pages/Page404";




function App() {
  return (
    <Router>
    <GlobalStyle />
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
