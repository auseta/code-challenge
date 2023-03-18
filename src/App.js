
import './App.css';
import MoviesContextProvider from './components/contexts/MoviesContext';
import Home from './components/screens/Home';

function App() {
  return (
    <MoviesContextProvider>
      <Home />
    </MoviesContextProvider>
  );
}

export default App;
