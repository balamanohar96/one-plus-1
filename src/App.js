import Header from "./components/navbar/Header";
import Carousal from "./components/carousal/Carousal";
import Child1 from "./components/section1/Child1";
import Child2 from "./components/section2/Child2"
import Child3 from "./components/section3/Child3";
import Child4 from "./components/section4/Child4";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<div> <Carousal/> <Child1/> <Child2/> <Child3/> <Child4/> </div>}></Route>
        <Route path="/oneTopia" element={<Child4></Child4>}></Route>
        <Route path="/phone" element={<Child1></Child1>}></Route>
        <Route path="/audio" element={<Child2></Child2>}></Route>
        <Route path="/accessories" element={<Child2></Child2>}></Route>

      </Routes>
      
      
      
    </BrowserRouter>
  );
}

export default App;
