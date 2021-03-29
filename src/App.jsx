// Modules
import React from 'react';
import { Link, Route } from 'wouter';
// Styles
import './App.css';
// Pages
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
// Contexts
import Pepito from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

const ligadura = () => 'hello world';
ligadura();

export default function App() {
  return (
    <Pepito.Provider value={{ name: 'midudev', suscribeteAlCanal: true }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="/logo.png" />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </Pepito.Provider>
  );
}

// hola como estas mariana 0
