import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import ScrollToTop from "./scrollToTop";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Header from "./components/header"; 
import Footer from "./components/footer";
import Careers from './pages/careers';

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeader =
    location.pathname !== "/"

  return (
    <>
      {showHeader && <Header />}
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/industries' element={< Industries/>} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='careers' element={<Careers />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


