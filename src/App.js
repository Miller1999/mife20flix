import GlobalStyle  from "./Global"
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import "./reset.css"
function App() {
  return (
    <>
    <GlobalStyle />
    <Header/>
    <Banner/>
    <Footer/>
    </>
  );
}

export default App;
