import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
// import Form from './components/Form';
// import ThankYou from './components/ThankYou';

function App() {
  return (
    <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
  );
}

export default App;
