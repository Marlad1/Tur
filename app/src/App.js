import './App.css';
import MainPage from './pages/mainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutePage from './pages/routePage/RoutePage';
import ItemPage from './pages/itemPage/ItemPage';
import BottomMenu from './components/bottomMenu/BottomMenu';

function App() {
	return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/route' element={<RoutePage />} />
          <Route path='/place/:id' element={<ItemPage />} />
        </Routes>
        <BottomMenu />
      </div>
    </Router>
	);
}

export default App;
