import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Service from './component/service/Service';
import About from './component/about/About';
import Contract from './component/contract/Contract';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Header></Header>
 <Switch>
   <Route path='/home'>
     <Home></Home>
   </Route>
   <Route path='/service'>
     <Service></Service>
     </Route>
   <Route path='/about'>
     <About></About>
   </Route>
   <Route path='/contract'>
     <Contract></Contract>
   </Route>
 </Switch>
 <Footer></Footer>
 </BrowserRouter>
    </div>
  );
}

export default App;
