import {Route, BrowserRouter as Router, Routes, Navigate} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';

import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import ResetPassword from './pages/Auth/ResetPassword';
import NotFound from './pages/NotFound';



const AppRouter = () => {

  return <Router>
    <Routes>
      <Route exact path='/' element={<PrivateRoute/>}>
        {/* Private Routes */}
        <Route exact path='/' element={<Home/>}/>
      </Route>
      <Route exact path="/SignIn" element={<SignIn/>}/>
      <Route exact path="/SignUp" element={<SignUp/>}/>
      <Route exact path="/ResetPassword" element={<ResetPassword/>}/>
      {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
</Router>
}

export default AppRouter;
