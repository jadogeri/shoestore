import Nav from '../src/Navigation/Nav'
import Products from './Products/Products';
import  Recommended from './Recommended/Recommended';
import Sidebar  from './SideBar/Sidebar';
function App() {
  return (
    <div>
      <Sidebar/>
      <Nav/>
      <Recommended />
      <Products />
      <Products />  <Products />  <Products />  <Products />
      
    </div>
  );
}

export default App;
