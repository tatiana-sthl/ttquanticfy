import './App.css';
import React, { useState, useEffect } from 'react';
import Filters from './components/Filters'; // Assurez-vous que le chemin du fichier Filters.js est correct

const YourComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchData = async (limit, offset) => {
      try {
        const response = await fetch(
          `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-equipements-activites/records?limit=${limit}&offset=${offset}`
        );
        const result = await response.json();
        return result.results;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    };

    const getAllData = async () => {
      setIsLoading(true);
      const limit = 100;
      const totalItems = 484;
      let offset = 0;
      let uniqueNames = new Set(); // Utiliser un ensemble pour stocker les noms uniques
      let allData = [];

      while (offset < totalItems) {
        const result = await fetchData(limit, offset);

        // Filtrer les résultats pour ne conserver que les noms uniques
        const uniqueResults = result.filter(item => {
          const isExcluded = ['Centre Paris Anim\' Marc Sangnier', 'Le CENTQUATRE - PARIS'].includes(item.nom);
          if (!isExcluded && !uniqueNames.has(item.nom)) {
            uniqueNames.add(item.nom);
            return true;
          }
          return false;
        });

        allData = [...allData, ...uniqueResults];
        offset += limit;
      }

      allData.sort((a, b) => a.nom.localeCompare(b.nom));

      setData(allData);
      setFilteredData(allData);
      setTotalResults(uniqueNames.size);
      setIsLoading(false);
    };

    getAllData();
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  const handleFilterChange = filters => {
    // Appliquer les filtres sur les données et mettre à jour l'état des données filtrées
    const filteredResults = data.filter(item => {
      return (
        item.nom.toLowerCase().includes(filters.nom.toLowerCase()) &&
        (filters.type === '' || item.type === filters.type) &&
        (filters.payant === false || item.payant === 'Oui') &&
        (filters.arrondissement === '' || item.arrondissement === filters.arrondissement)
      );
    });

    setFilteredData(filteredResults);
  };

  return (
    <div className='App'>
      <Filters onFilterChange={handleFilterChange} data={data} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="results-container">
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Type</th>
                <th>Payant</th>
                <th>Arrondissement</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(item => (
                <tr key={item.identifiant}>
                  <td>{item.nom}</td>
                  <td>{item.type}</td>
                  <td>{item.payant}</td>
                  <td>{item.arrondissement}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total des résultats uniques : {totalResults}</p>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
