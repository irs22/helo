import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Downloads from './pages/Downloads/Downloads';
import NotFound from './pages/404 Not Found/NotFound';
import './styles/main.scss';
import Mathematics from './pages/Subjects/si/Mathematics';
import Science from './pages/Subjects/si/Science';
import History from './pages/Subjects/si/History';
import Sinhala from './pages/Subjects/si/Sinhala';
import English from './pages/Subjects/si/English';
import Buddhism from './pages/Subjects/si/Buddhism';
import Commerce from './pages/Subjects/si/Commerce';
import Tamil from './pages/Subjects/si/Tamil';
import Japanese from './pages/Subjects/si/Japanese';
import SinhalaLit from './pages/Subjects/si/SinhalaLit';
import EnglishLit from './pages/Subjects/si/EnglishLit';
import Music from './pages/Subjects/si/Music';
import Art from './pages/Subjects/si/Art';
import Dancing from './pages/Subjects/si/Dancing';
import ICT from './pages/Subjects/si/ICT';
import Health from './pages/Subjects/si/Health';
import MathematicsEn from './pages/Subjects/en/Mathematics';
import ScienceEn from './pages/Subjects/en/Science';
import ICTEn from './pages/Subjects/en/ICT';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="*" element={<NotFound />} />


          {/* Route for Subjects{Sinhala} */}
          <Route path="/downloads/si/Mathematics" element={<Mathematics />} />
          <Route path="/downloads/si/Science" element={<Science />} />
          <Route path="/downloads/si/History" element={<History />} />
          <Route path="/downloads/si/Sinhala Language" element={<Sinhala />} />
          <Route path="/downloads/si/English" element={<English />} />
          <Route path="/downloads/si/Buddhism" element={<Buddhism />} />
          <Route path="/downloads/si/Commerce" element={<Commerce />} />
          <Route path="/downloads/si/Tamil" element={<Tamil />} />
          <Route path="/downloads/si/Japanese" element={<Japanese />} />
          <Route path="/downloads/si/Sinhala Lit:" element={<SinhalaLit />} />
          <Route path="/downloads/si/English Lit:" element={<EnglishLit />} />
          <Route path="/downloads/si/Music" element={<Music />} />
          <Route path="/downloads/si/Art" element={<Art />} />
          <Route path="/downloads/si/Dancing" element={<Dancing />} />
          <Route path="/downloads/si/ICT" element={<ICT />} />
          <Route path="/downloads/si/Health" element={<Health />} />
          {/* Route for Subjects{English} */}
          <Route path="/downloads/en/Mathematics" element={<MathematicsEn />} />
          <Route path="/downloads/en/Science" element={<ScienceEn />} />
          <Route path="/downloads/en/English" element={<English />} />
          <Route path="/downloads/en/English Lit:" element={<EnglishLit />} />
          <Route path="/downloads/en/ICT" element={<ICTEn />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
