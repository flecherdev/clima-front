import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather'
import Location from './components/Location'
import Forecast from './components/Forecast'
import Current from './components/Current'

function App() {
  return (
    <div className="App">
      <h1>Clima app</h1>
      <Location></Location>
    </div>
  );
}

export default App;
