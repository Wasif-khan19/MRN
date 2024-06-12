import { TooltipProvider } from '@radix-ui/react-tooltip';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './Components/auth/ForgotPassword';
import Dashbaord from './Components/Pages/Dashboard';
import Login from './Components/auth/Login';
import ResetPassword from './Components/auth/ResetPassword';
import Signup from './Components/auth/Signup';
import Transaction from './Components/Pages/Transaction';
import Home from './Components/Pages/Home';
import Userlogin from './Components/Pages/Userlogin';
import IdentifyVerification from './Components/Pages/IdentifyVerification';

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
            <Route path='/identify-verification' element={<IdentifyVerification/>} />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
