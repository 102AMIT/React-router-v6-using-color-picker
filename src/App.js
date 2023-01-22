import {Routes , Route} from 'react-router-dom';
import './App.css';
import Pagenotfound from './Components/Pagenotfound';
import ProductsDetails from './Components/ProductsDetails';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Posts from './pages/Posts';

function App() {
  return (
    < >
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/posts" element={<Posts/>} >
          {/* For nested routed (child) for that we need to use <outlet /> in parent  */}
          {/* for the dynamic routing we use : the we need to pass anything after : then it's shows all the data of this route*/}
          <Route path=":childpost" element={<ProductsDetails />} />
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
