// ...

const applyFilters = (data, filters) => {
    // Vérifier si des filtres sont définis
    if (!filters) {
      return data;
    }
  
    // Filtrer les données en fonction des filtres
    return data.filter((item) => {
      // Ajoutez ici la logique de filtrage pour chaque propriété
      const typeMatch = filters.type ? item.type === filters.type : true;
      const payantMatch = filters.payant ? item.payant === filters.payant : true;
      const arrondissementMatch = filters.arrondissement ? item.arrondissement === filters.arrondissement : true;
      // ... Ajoutez d'autres conditions pour les autres filtres
  
      // Retourner vrai uniquement si toutes les conditions sont satisfaites
      return typeMatch && payantMatch && arrondissementMatch;
    });
  };

const ResultsTable = ({ data1, data2, data3, espacesVertsFilters, equipementsFilters, fontainesFilters }) => {
    const espacesVertsData = data2?.results?.map((result) => ({
      nom: result.nom,
      type: result.type,
      adresse: result.adresse,
      arrondissement: result.arrondissement,
    })) || [];
  
    const equipementsData = data1?.results?.map((result) => ({
      nom: result.nom,
      type: result.type,
      payant: result.payant || 'Non',
      adresse: result.adresse,
      arrondissement: result.arrondissement,
    })) || [];
  
    const fontainesData = data3?.results?.map((result) => ({
      typeObjet: result.type_objet,
      modele: result.modele,
      dispo: result.dispo,
      voie: result.voie,
      commune: result.commune,
    })) || [];
  
    // Filter data based on filters
    const filteredEspacesVertsData = applyFilters(espacesVertsData, espacesVertsFilters);
    const filteredEquipementsData = applyFilters(equipementsData, equipementsFilters);
    const filteredFontainesData = applyFilters(fontainesData, fontainesFilters);
  
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
            {filteredEspacesVertsData.map((item, index) => (
              <tr key={index}>
                <td>{item.nom}</td>
                <td>{item.type}</td>
                <td>{item.adresse}</td>
                <td>{item.arrondissement}</td>
              </tr>
            ))}
            {/* Répéter le processus pour les équipements et activités */}
            {filteredEquipementsData.map((item, index) => (
              <tr key={index}>
                <td>{item.nom}</td>
                <td>{item.type}</td>
                <td>{item.adresse}</td>
                <td>{item.arrondissement}</td>
              </tr>
            ))}
            {/* Répéter le processus pour les fontaines à boire */}
            {filteredFontainesData.map((item, index) => (
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
  
  // ...
  
  
  export default ResultsTable;
  