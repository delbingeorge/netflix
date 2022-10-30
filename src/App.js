import "./App.css";
import Faq from "./pages/Faq/Faq";
import Footer from "./pages/Footer/Footer";
import Hero from "./pages/Hero/Hero";
import Info from "./pages/Info/Info";

function App() {
    return (
        <div className="App">
            <Hero />
            <Info />
            <Faq />
            <Footer />
        </div>
    );
}

export default App;
