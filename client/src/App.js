import './App.css';
import { TopNavbar } from './Components/TopNavbar';
import { Products } from './Components/Products';
import { RoadMap } from './Components/RoadMap';
import { Tokens } from './Components/Tokens';


function App() {
  return (
    <div className="w-full">
      <TopNavbar />
      <Products />
      <RoadMap />
      <Tokens />

    </div>
  );
}

export default App;
