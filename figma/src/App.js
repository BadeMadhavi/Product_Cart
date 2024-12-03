import { Route,Routes } from "react-router-dom";
import Figma from "./Figma/FigmaFile";
import ProductFile from "./Figma/Product";
import Navigation from "./Figma/Navigation";
import Cart from "./Figma/Cart";
function App(){
  return(
    <div>
    <Navigation/>
    <Routes>
    <Route path="/" element={<Figma/>}/>
    <Route path="/Productfile" element={<ProductFile/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
 </div>
  )
}
export default App;


// import { Route, Routes } from "react-router-dom";
// import Home from "./router/Home";
// import About from "./router/About";
// import Footer from "./router/Footer";
// import Navigation from "./router/Navigation";
// function App(){
//   return(
//      <div>
//       <Navigation/>
//        <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/footer" element={<Footer/>}/>
//       </Routes>
//     </div>
//   )
// }
// export default App;

