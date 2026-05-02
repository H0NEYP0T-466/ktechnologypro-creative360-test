import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Reviews from './pages/Reviews/Reviews';
import Blog from './pages/Blog/Blog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/case-studies" element={<Projects />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/articles" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
