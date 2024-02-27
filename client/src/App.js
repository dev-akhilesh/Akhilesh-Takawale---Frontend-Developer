import './App.css';
import { TopNavbar } from './Components/TopNavbar';
import { Products } from './Components/Products';
import { RoadMap } from './Components/RoadMap';
import { Tokens } from './Components/Tokens';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div className="w-full">
      <TopNavbar />
      <Products />
      <RoadMap />
      <Tokens />
      <Footer />
    </div>
  );
}

export default App;
