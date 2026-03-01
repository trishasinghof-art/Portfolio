import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Introduction from '../pages/Introduction/Introduction';
import Skills from '../pages/Skills/Skills';
import WebAdventures from '../pages/WebAdventures/WebAdventures';
import DesignGallery from '../pages/DesignGallery/DesignGallery';
import About from '../pages/About/About';
import Interact from '../pages/interact/interact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/web-adventures" element={<WebAdventures />} />
      <Route path="/design-gallery" element={<DesignGallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/interact" element={<Interact />} />
    </Routes>
  );
}

export default AppRoutes;
