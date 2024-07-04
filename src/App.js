import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation.component';
import LoadingBar from './components/loadingSpinner/loadingSpinner';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? <LoadingBar/> : 
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
      }
    </>
  );
}

export default App;
