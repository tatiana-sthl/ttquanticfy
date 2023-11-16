import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filters';
import ResultsTable from './components/ResultsTable';

function App() {
  const [allResults, setAllResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [payantFilter, setPayantFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleTypeChange = (value) => {
    setTypeFilter(value);
  };

  const handlePayantChange = (value) => {
    setPayantFilter(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-equipements-activites/records?limit=100&page=${currentPage}`
        );
        const data = await response.json();
  
        // Assurez-vous que la structure de l'objet correspond à vos attentes
        const results = data.results || [];
  
        setAllResults((prevResults) => [...prevResults, ...results]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    // Appliquer les filtres sur les résultats
    const applyFilters = () => {
      const filtered = allResults.filter((result) => {
        const typeMatch = typeFilter ? result.type === typeFilter : true;
        const payantMatch = payantFilter ? result.payant === payantFilter : true;

        return typeMatch && payantMatch;
      });

      setFilteredResults(filtered);
    };

    applyFilters();
  }, [allResults, typeFilter, payantFilter]);

  return (
    <div className="App">
      <Header />
      <Filters onTypeChange={handleTypeChange} onPayantChange={handlePayantChange} />
      <ResultsTable data={filteredResults} />
      <Footer />
    </div>
  );
}

export default App;
