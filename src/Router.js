import {Route, BrowserRouter as Router, Routes, Navigate} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';

import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import ResetPassword from './pages/Auth/ResetPassword';
import NotFound from './pages/NotFound';
import SignOut from './pages/Auth/SignOut';
import AccountSettings from './pages/AccountSettings';
import NewItemPost from './pages/Item/NewItemPost';
import ViewItem from './pages/Item/ViewItem';

const AppRouter = () => {
  return <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/SignIn" element={<SignIn/>}/>
      <Route exact path="/SignUp" element={<SignUp/>}/>
      <Route exact path="/SignOut" element={<SignOut/>}/>
      <Route exact path="/ResetPassword" element={<ResetPassword/>}/>
      <Route path="/item" element={<ViewItem/>}/>
      {/* Private Route is only accessible when a user is logged in */}
      <Route exact path='/AccountSettings' element={<PrivateRoute from="/AccountSettings"/>}>
        <Route exact path='/AccountSettings' element={<AccountSettings/>}/>
      </Route>
      <Route exact path='/NewItemPost' element={<PrivateRoute from="/NewItemPost"/>}>
        <Route exact path='/NewItemPost' element={<NewItemPost/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
</Router>
}

export default AppRouter;
