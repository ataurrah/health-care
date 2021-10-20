import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Service from './component/service/Service';
import About from './component/about/About';
import Contract from './component/contract/Contract';
import Footer from './component/footer/Footer';
import Notfound from './component/notfound/Notfound';
import Registation from './component/registation/Registation';
import Login from './component/login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
  <AuthProvider>
 <BrowserRouter>
 <Header></Header>
 <Switch>
   <Route exact path='/'>
     <Home></Home>
   </Route>
   <Route path='/home'>
     <Home></Home>
   </Route>
   <PrivateRoute path='/service'>
     <Service></Service>
     </PrivateRoute>
   <Route path='/about'>
     <About></About>
   </Route>
   <Route path='/contract'>
     <Contract></Contract>
   </Route>
   <Route path='/registation'>
     <Registation></Registation>
   </Route>
   <Route path='/login'>
    <Login></Login>
   </Route>
   <Route path='*'>
   <Notfound></Notfound>
   </Route>
 </Switch>
 <Footer></Footer>
 </BrowserRouter>
 </AuthProvider>
    </div>
  );
}

export default App;
