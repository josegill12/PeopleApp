// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className>
      <h1 className='text-3xl font-bold underline'> Hello world!</h1>
      <Header />

      <Outlet />


      <h1>Footer</h1>
    </div>

  );
}

export default App;
