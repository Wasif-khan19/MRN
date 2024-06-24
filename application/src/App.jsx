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
import Accepted_Ids from './Components/Pages/AcceptedIds';
import WatchlistScreen from './Components/Pages/WatchlistScreen';
import DocumentVerification2 from './Components/Pages/DocumentVerification2';
import DataRetention from './Components/Pages/DataRetention';
import DocumentsSupport from './Components/Pages/DocumentsSupport';
import House from './Components/ui/House';
import ExtractedFields from './Components/Pages/ExtractedFields';
import AppShowcase from './Components/Pages/AppShowcase';
import ApiCredentials from './Components/Pages/ApiCredentials';
import GenerateApiToken from './Components/Pages/GenerateApiToken';
import OfflineToken from './Components/Pages/OfflineToken';
import ColourCustomization from './Components/Pages/CustomizeClient';
import CustomizeClient from './Components/Pages/CustomizeClient';


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
            <Route path='/accepted-ids' element={<Accepted_Ids/>} />
            <Route path='/watchlist-screen' element={<WatchlistScreen/>} />
            <Route path='/document-verification2' element={<DocumentVerification2/>} />

            <Route path='/house' element={<House/>} />

            <Route path='/data-retention' element={<DataRetention/>} />
            <Route path='/documents-support' element={<DocumentsSupport/>} />
            <Route path='/extracted-fields' element={<ExtractedFields/>} />
            <Route path='/app-showcase' element={<AppShowcase/>} />
            <Route path='/api-credentials' element={<ApiCredentials/>} />

            <Route path='/generate-token' element={<GenerateApiToken/>} />
            <Route path='/offline-token' element={<OfflineToken/>} />
            <Route path='/customize-client' element={<CustomizeClient/>} />
            

          </Routes>
        </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
