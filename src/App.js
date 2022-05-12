import './App.css';
import Image from './grocery1.jpg';
import ImageTwo from './grocery2.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
  <div className='app'>
    <div className='container'>
      <img src = { Image } width='200px' alt='Shopping'/>
    </div>

    <div className='container'>
      <h1>Grocery List</h1>
    </div>
    <GroceryList/>

    <div className='container'>
      <img src = { ImageTwo } width='200px' alt='Man Shopping'/>
    </div>

  </div>
  );
}

export default App;
