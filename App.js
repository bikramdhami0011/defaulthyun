
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';




function App() {
  return (
   <>
   <Navbar  home='Home' link="About"/>
  <div className="container my-4">
  {/* <TextForm head=" text analysis here" /> */}
  <About ></About>
  </div>
   
   
    </>
  );
}

export default App;
