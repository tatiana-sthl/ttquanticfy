// ResultsTable.js

const ResultsTable = ({ data1, data2, data3 }) => {
    // Extraire les données spécifiques pour les espaces verts
    const espacesVertsData = data2?.results?.map((result) => ({
      nom: result.nom,
      type: result.type,
      adresse: result.adresse,
      arrondissement: result.arrondissement,
    })) || [];
  
    // Extraire les données spécifiques pour les équipements et activités
    const equipementsData = data1?.results?.map((result) => ({
      nom: result.nom,
      type: result.type,
      payant: result.payant || 'Non', // Si la propriété payant n'est pas définie, affichez 'Non'
      adresse: result.adresse,
      arrondissement: result.arrondissement,
    })) || [];
  
    // Extraire les données spécifiques pour les fontaines à boire
    const fontainesData = data3?.results?.map((result) => ({
      typeObjet: result.type_objet,
      modele: result.modele,
      dispo: result.dispo,
      voie: result.voie,
      commune: result.commune,
    })) || [];
  
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
              <th>Adresse</th>
              <th>Arrondissement</th>
            </tr>
          </thead>
          <tbody>
            {/* Afficher les données pour les espaces verts */}
            {espacesVertsData.map((item, index) => (
              <tr key={index}>
                <td>{item.nom}</td>
                <td>{item.type}</td>
                <td>{item.adresse}</td>
                <td>{item.arrondissement}</td>
              </tr>
            ))}
            {/* Répéter le processus pour les équipements et activités */}
            {equipementsData.map((item, index) => (
              <tr key={index}>
                <td>{item.nom}</td>
                <td>{item.type}</td>
                <td>{item.adresse}</td>
                <td>{item.arrondissement}</td>
              </tr>
            ))}
            {/* Répéter le processus pour les fontaines à boire */}
            {fontainesData.map((item, index) => (
              <tr key={index}>
                <td>{item.typeObjet}</td>
                <td>{item.modele}</td>
                <td>{item.dispo}</td>
                <td>{item.voie} - {item.commune}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ResultsTable;
  