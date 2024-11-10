import Abouts from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Searchbars from "./Components/Search";

function App(){
  
        return(
            <div>
                <Navbar></Navbar>
                <Searchbars></Searchbars>
                <Products></Products>
                <Abouts></Abouts>
                <Contact></Contact>
            </div>
        )
        
    
}
export default App