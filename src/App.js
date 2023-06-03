import GlobalStyle  from "./Global"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./reset.css"
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import NuevoVideo from "./pages/NuevoVideo";
import NuevaCategoria from "./pages/NuevaCategoria";


function App() {

  return (
    <Router>
    <GlobalStyle />
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/NuevoVideo" element={<NuevoVideo/>}/>
        <Route path="/NuevaCategoria" element={<NuevaCategoria/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
