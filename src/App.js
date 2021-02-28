import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather'
import Location from './components/Location'

function App() {
  return (
    <div className="App">
      <h1>Clima app</h1>
      <Location></Location>
      {/* <Weather></Weather> */}
    </div>
  );
}

export default App;
