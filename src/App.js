import './App.css';
import { useDispatch } from 'react-redux';
import { getCountries } from './redux/contries/countries';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        type="submit"
        onClick={() => dispatch(getCountries())}
      >
        click me
      </button>
    </div>
  );
}

export default App;
