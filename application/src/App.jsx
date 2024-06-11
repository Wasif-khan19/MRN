import { TooltipProvider } from '@radix-ui/react-tooltip';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword';
import Dashbaord from './Components/Dashboard';
import Login from './Components/Login';
import ResetPassword from './Components/ResetPassword';
import Signup from './Components/Signup';
import Transaction from './Components/Transaction';
import Home from './Components/Home';
import Userlogin from './Components/Userlogin';

function App() {
  return (
    <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashbaord />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
            <Route path='/resetPassword/:token' element={<ResetPassword />} />
            <Route path='/transaction' element={<Transaction/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/userlogin' element={<Userlogin/>} />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
