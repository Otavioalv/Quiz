import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar/>

      <Container customClass="min-height">

        <Routes>
      
          <Route
            path='/'
            element={<Home/>}
          />

          <Route
            path='/Quiz'
            element={<p>Quiz</p>}
          />

          <Route
            path='/About'
            element={<p>Sobre</p>}
          />
      
        </Routes>
      
        </Container>

      <Footer/>

    </Router>
  );
}

export default App;
