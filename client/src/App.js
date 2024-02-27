import './App.css';
import { TopNavbar } from './Components/TopNavbar';
import { Products } from './Components/Products';
import { RoadMap } from './Components/RoadMap';

function App() {
  return (
    <div className="w-full">
      <TopNavbar />
      <Products />
      <RoadMap />
    </div>
  );
}

export default App;
