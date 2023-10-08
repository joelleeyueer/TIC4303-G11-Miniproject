import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Form from './components/Form';
import End from './components/End';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/form" element={<Form />} />
              <Route exact path="/end" element={<End />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
