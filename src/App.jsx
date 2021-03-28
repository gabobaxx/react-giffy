// Styles
import './App.css';
// Pages
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
// Dependencies
import { Link, Route } from 'wouter';
// Contexts
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <StaticContext.Provider>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" src="/logo.png" alt="Giffy Logo" />
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
