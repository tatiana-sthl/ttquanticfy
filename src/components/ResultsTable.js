// ResultsTable.js
import React from 'react';

const ResultsTable = ({ data, typeFilter, payantFilter }) => {
  // Filtrer les données en fonction des filtres
  const filteredData = applyFilters(data, { type: typeFilter, payant: payantFilter });

  return (
    <div>
      <h2>Résultats</h2>
      {/* Afficher les résultats dans un tableau */}
      <table>
        <thead>
          <tr>
            {/* En-têtes du tableau */}
            <th>Nom</th>
            <th>Type</th>
            <th>Payant</th>
            {/* Ajoutez d'autres en-têtes si nécessaire */}
          </tr>
        </thead>
        <tbody>
          {/* Afficher les données filtrées */}
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.nom}</td>
              <td>{item.type}</td>
              <td>{item.payant}</td>
              {/* Ajoutez d'autres colonnes si nécessaire */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const applyFilters = (data, filters) => {
  return data.filter((item) => {
    // Ajoutez ici la logique de filtrage pour chaque propriété
    const typeMatch = filters.type ? item.type === filters.type : true;
    const payantMatch = filters.payant ? item.payant === filters.payant : true;
    // Ajoutez d'autres conditions pour les autres filtres

    // Retourner vrai uniquement si toutes les conditions sont satisfaites
    return typeMatch && payantMatch;
  });
};

export default ResultsTable;
