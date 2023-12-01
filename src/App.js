import './App.css';
import Home from './components/Home';
import Box from './components/Box';
import CardPage from './components/CardPage';
import Work from './components/Work';
import Features from './components/Features';

function App() {
  return (
    <div className="max-w-full ">
    <Home />
    <Box/>
    <CardPage/>
    <Work/>
    <Features/>
    </div>
  );
}

export default App;
