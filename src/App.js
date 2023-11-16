import './App.css';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import jsonData from './datas/ilots-de-fraicheur-equipements-activites.json';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filters';
import ResultsTable from './components/ResultsTable';


function App() {
  const [typeFilter, setTypeFilter] = useState("");
  const [payantFilter, setPayantFilter] = useState("");

  const handleTypeChange = (value) => {
    setTypeFilter(value);
  };

  const handlePayantChange = (value) => {
    setPayantFilter(value);
  };

  return (
    <div className="App">
      <Header />
      <Filters
        onTypeChange={handleTypeChange}
        onPayantChange={handlePayantChange}
      />
      <ResultsTable data={jsonData} typeFilter={typeFilter} payantFilter={payantFilter} />
      
      <Footer />
    </div>
  );
}

export default App;