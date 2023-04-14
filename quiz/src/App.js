import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import Quiz from './components/pages/Quiz';
import About from './components/pages/About'
import QuizQuestion from './components/pages/QuizQuestion';

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
            element={<Quiz/>}
          />

          <Route
            path='/About'
            element={<About/>}
          />

          <Route 
            path='/QuizQuestion'
            element={<QuizQuestion/>}
          />
      
        </Routes>
      
      </Container>

      <Footer/>

    </Router>
  );
}

export default App;
