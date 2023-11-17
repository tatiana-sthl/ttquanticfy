// import React, { useEffect, useState } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Filters from './components/Filters';
// import ResultsTable from './components/ResultsTable';

// function App() {
//   const [allResults, setAllResults] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);
//   const [typeFilter, setTypeFilter] = useState("");
//   const [payantFilter, setPayantFilter] = useState("");

//   const handleTypeChange = (value) => {
//     setTypeFilter(value);
//   };

//   const handlePayantChange = (value) => {
//     setPayantFilter(value);
//   };

//   useEffect(() => {
//     const fetchResults = async () => {
//       try {
//         const response = await fetch(
//           `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-equipements-activites/records?limit=100&page=${currentPage}`
//         );
//         const data = await response.json();

//         const results = data.results || [];

//         // Mise à jour du nombre total de résultats
//         setTotalResults(data.total_count);

//         // Concaténer les nouveaux résultats avec les résultats existants
//         setAllResults((prevResults) => [...prevResults, ...results]);

//         // Passer à la page suivante si tous les résultats ne sont pas encore récupérés
//         if (allResults.length < totalResults) {
//           setCurrentPage((prevPage) => prevPage + 1);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Appeler la fonction pour la première fois
//     fetchResults();
//   }, [currentPage, allResults, totalResults]);

//   return (
//     <div className="App">
//       <Header />
//       <Filters onTypeChange={handleTypeChange}
//         onPayantChange={handlePayantChange}/>
//       <ResultsTable data={allResults} />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([]);
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
      let allData = [];

      while (offset < totalItems) {
        const result = await fetchData(limit, offset);
        allData = [...allData, ...result];
        offset += limit;
      }

      setData(allData);
      setTotalResults(totalItems);
      setIsLoading(false);
    };

    getAllData();
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {data.map(item => (
              <li key={item.identifiant}>
                <strong>Nom:</strong> {item.nom}, <strong>Payant:</strong> {item.payant}
              </li>
            ))}
          </ul>
          <p>Total des résultats : {totalResults}</p>
        </div>
      )}
    </div>
  );
};

export default YourComponent;

