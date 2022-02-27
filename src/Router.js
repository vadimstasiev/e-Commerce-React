import {Route, BrowserRouter as Router, Routes, Navigate} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';

import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import ResetPassword from './pages/Auth/ResetPassword';
import NotFound from './pages/NotFound';
import SignOut from './pages/Auth/SignOut';
import AccountSettings from './pages/AccountSettings';
import ItemCreate from './pages/Item/ItemCreate';
import ViewItem from './pages/Item/ViewItem';
import ViewPersonalListings from './pages/Item/ViewPersonalListings';

const AppRouter = () => {
  return <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/SignIn" element={<SignIn/>}/>
      <Route exact path="/SignUp" element={<SignUp/>}/>
      <Route exact path="/SignOut" element={<SignOut/>}/>
      <Route exact path="/ResetPassword" element={<ResetPassword/>}/>
      <Route path="/item/:id" element={<ViewItem/>}/>
      {/* Private Route is only accessible when a user is logged in */}
      <Route exact path='/AccountSettings' element={<PrivateRoute from="/AccountSettings"/>}>
        <Route exact path='/AccountSettings' element={<AccountSettings/>}/>
      </Route>
      <Route exact path='/ItemCreate' element={<PrivateRoute from="/ItemCreate"/>}>
        <Route exact path='/ItemCreate' element={<ItemCreate/>}/>
      </Route>
      <Route path='/ItemCreate/edit/:id' element={<PrivateRoute from="/ItemCreate/edit/:id"/>}>
        <Route path='/ItemCreate/edit/:id' element={<ItemCreate/>}/>
      </Route>
      <Route path='/ViewPersonal' element={<PrivateRoute from="/ViewPersonal"/>}>
        <Route path='/ViewPersonal' element={<ViewPersonalListings/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
</Router>
}

export default AppRouter;
