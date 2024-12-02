import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Dashboard from './pages/Dashboard';
import SidePane from './components/SidePane';
import NavSearch from './components/NavSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/navSearch' element={<NavSearch/>}/>
          <Route path='/sidepane' element={<SidePane/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
