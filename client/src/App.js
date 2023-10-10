import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Form from './components/Form';
import End from './components/End';
import ProtectedRoute from './services/ProtectedRoute'

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/form" element={<ProtectedRoute element={<Form />} />} />
              <Route path="/end" element={<ProtectedRoute element={<End />} />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;

