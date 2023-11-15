// filters.js

const Filters = () => {
  // Exemple d'options pour chaque filtre
  const types = ["Lieux de culte", "Promenades ouvertes"];
  const payants = ["Oui", "Non"];
  const arrondissements = ["75007", "75011"];
  const statutsOuverture = ["Ouvert 24h", "Fermé"];
  const disponibilites = ["Oui", "Non"];

  return (
    <div>
      <h2>Filtres</h2>
      <label>Type :</label>
      <select>
        {types.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>

      <label>Payant :</label>
      <select>
        {payants.map((payant, index) => (
          <option key={index} value={payant}>{payant}</option>
        ))}
      </select>

      <label>Arrondissement :</label>
      <select>
        {arrondissements.map((arrondissement, index) => (
          <option key={index} value={arrondissement}>{arrondissement}</option>
        ))}
      </select>

      <label>Statut d'ouverture :</label>
      <select>
        {statutsOuverture.map((statut, index) => (
          <option key={index} value={statut}>{statut}</option>
        ))}
      </select>

      <label>Disponibilité :</label>
      <select>
        {disponibilites.map((disponibilite, index) => (
          <option key={index} value={disponibilite}>{disponibilite}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
