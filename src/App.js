import './App.css';
import { Navbar, Cover, Footer, Welcome, JoinTheClub, FaqSection, RoadMap, Artist } from './components';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <Cover />
        <Welcome />
        <JoinTheClub />
        <RoadMap />
        <Artist />
        <FaqSection />
        <Footer />
      </BrowserRouter>,

    </div>
  );
}
export default App;