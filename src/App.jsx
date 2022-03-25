import { Header } from './components/header/Header';
import { Main } from './components/homepage/Main';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Details } from './pages/detailPage/Details';
import { NotFound } from './pages/NotFound';
import React from 'react';

function App() {
  const [countries, setCountries] = React.useState([]);

  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
