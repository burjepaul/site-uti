import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
