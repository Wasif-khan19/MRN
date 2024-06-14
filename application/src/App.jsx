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
import IdentityVerification2 from './Components/Pages/IdentityVerification2';
import ReportsCreate from './ReportsCreate';
import IdentityVerification3 from './Components/Pages/IdentityVerification3';
import DocumentVerification from './Components/Pages/DocumentVerification';


function App() {
  return (
    <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashbaord />} />
            <Route path='/forgot-Password' element={<ForgotPassword />} />
            <Route path='/reset-Password/:token' element={<ResetPassword />} />
            <Route path='/transaction' element={<Transaction/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/user-login' element={<Userlogin/>} />
            <Route path='/identity-verification' element={<IdentifyVerification/>} />
            <Route path='/identity-verification2' element={<IdentityVerification2/>} />
            <Route path='/identity-verification3' element={<IdentityVerification3/>} />
            <Route path='/report-create' element={<ReportsCreate/>} />
            <Route path='/document-verification' element={<DocumentVerification/>} />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
