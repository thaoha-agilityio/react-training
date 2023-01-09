import Home from './pages/Home';

import { AppProvider } from './contexts/AppContext';

import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
