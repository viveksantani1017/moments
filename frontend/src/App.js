import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <Router>
      <div className="moments">
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
