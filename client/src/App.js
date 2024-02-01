import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import DailyStatusUpdate from './pages/DailyStatusUpdate';
import Tasks from './pages/Tasks';
import Message from './pages/Message';
import CreateRequest from './pages/CreateRequest';
import ApplyLeave from './pages/ApplyLeave';
import Curriculum from './pages/Curriculum';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/NewDailyStatusUpdate' element={<DailyStatusUpdate/>} />
        <Route path='/UserTasks' element={<Tasks/>} />
        <Route path='/UserMessages' element={<Message/>} />
        <Route path='/NewRequest' element={<CreateRequest/>} />
        <Route path='/NewLeave' element={<ApplyLeave/>} />
        <Route path='/curriculum' element={<Curriculum/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
