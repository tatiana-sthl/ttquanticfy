// Filters.js
import React, { useState } from 'react';

const Filters = ({ onEspacesVertsFilterChange, onEquipementsFilterChange, onFontainesFilterChange }) => {
  const [espaceVertsFilters, setEspaceVertsFilters] = useState({
    type: "",
    payant: "",
    arrondissement: "",
    statutOuverture: "",
    disponibilite: "",
  });

  const [equipementsFilters, setEquipementsFilters] = useState({
    type: "",
    payant: "",
    arrondissement: "",
    statutOuverture: "",
    disponibilite: "",
  });

  const [fontainesFilters, setFontainesFilters] = useState({
    typeObjet: "",
    modele: "",
    dispo: "",
    voie: "",
    commune: "",
  });

  const types = ["Lieux de culte", "Promenades ouvertes"];
  const payants = ["Oui", "Non"];
  const arrondissements = ["75007", "75011"];
  const statutsOuverture = ["Ouvert 24h", "Fermé"];
  const disponibilites = ["Oui", "Non"];

  const handleEspacesVertsFilterChange = (event) => {
    const { name, value } = event.target;
    setEspaceVertsFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    onEspacesVertsFilterChange(espaceVertsFilters); // Ajoutez ceci pour mettre à jour les filtres dans ResultsTable
  };

  const handleEquipementsFilterChange = (event) => {
    const { name, value } = event.target;
    setEquipementsFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    onEquipementsFilterChange(equipementsFilters); // Ajoutez ceci pour mettre à jour les filtres dans ResultsTable
  };

  const handleFontainesFilterChange = (event) => {
    const { name, value } = event.target;
    setFontainesFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    onFontainesFilterChange(fontainesFilters); // Ajoutez ceci pour mettre à jour les filtres dans ResultsTable
  };

  return (
    <div>
      <h2>Filtres</h2>

      <h3>Espaces Verts</h3>
      <label>Type :</label>
      <select name="type" onChange={handleEspacesVertsFilterChange}>
        <option value="">Tous</option>
        {types.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>

      <label>Payant :</label>
      <select name="payant" onChange={handleEspacesVertsFilterChange}>
        <option value="">Tous</option>
        {payants.map((payant, index) => (
          <option key={index} value={payant}>{payant}</option>
        ))}
      </select>

      <label>Arrondissement :</label>
      <select name="arrondissement" onChange={handleEspacesVertsFilterChange}>
        <option value="">Tous</option>
        {arrondissements.map((arrondissement, index) => (
          <option key={index} value={arrondissement}>{arrondissement}</option>
        ))}
      </select>

      <label>Statut d'ouverture :</label>
      <select name="statutOuverture" onChange={handleEspacesVertsFilterChange}>
        <option value="">Tous</option>
        {statutsOuverture.map((statut, index) => (
          <option key={index} value={statut}>{statut}</option>
        ))}
      </select>

      <label>Disponibilité :</label>
      <select name="disponibilite" onChange={handleEspacesVertsFilterChange}>
        <option value="">Tous</option>
        {disponibilites.map((disponibilite, index) => (
          <option key={index} value={disponibilite}>{disponibilite}</option>
        ))}
      </select>

      <h3>Equipements et Activités</h3>
      <label>Type :</label>
      <select name="type" onChange={handleEquipementsFilterChange}>
        <option value="">Tous</option>
        {types.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>

      <label>Payant :</label>
      <select name="payant" onChange={handleEquipementsFilterChange}>
        <option value="">Tous</option>
        {payants.map((payant, index) => (
          <option key={index} value={payant}>{payant}</option>
        ))}
      </select>

      <label>Arrondissement :</label>
      <select name="arrondissement" onChange={handleEquipementsFilterChange}>
        <option value="">Tous</option>
        {arrondissements.map((arrondissement, index) => (
          <option key={index} value={arrondissement}>{arrondissement}</option>
        ))}
      </select>

      <label>Statut d'ouverture :</label>
      <select name="statutOuverture" onChange={handleEquipementsFilterChange}>
        <option value="">Tous</option>
        {statutsOuverture.map((statut, index) => (
          <option key={index} value={statut}>{statut}</option>
        ))}
      </select>

      <label>Disponibilité :</label>
      <select name="disponibilite" onChange={handleEquipementsFilterChange}>
        <option value="">Tous</option>
        {disponibilites.map((disponibilite, index) => (
          <option key={index} value={disponibilite}>{disponibilite}</option>
        ))}
      </select>

      <h3>Fontaines à Boire</h3>
      <label>Type d'objet :</label>
      <select name="typeObjet" onChange={handleFontainesFilterChange}>
        <option value="">Tous</option>
        {/* Ajoutez des options spécifiques aux fontaines à boire ici */}
      </select>

      <label>Modèle :</label>
      <select name="modele" onChange={handleFontainesFilterChange}>
        <option value="">Tous</option>
        {/* Ajoutez des options spécifiques aux fontaines à boire ici */}
      </select>

      <label>Disponibilité :</label>
      <select name="dispo" onChange={handleFontainesFilterChange}>
        <option value="">Tous</option>
        {/* Ajoutez des options spécifiques aux fontaines à boire ici */}
      </select>

      <label>Voie :</label>
      <select name="voie" onChange={handleFontainesFilterChange}>
        <option value="">Tous</option>
        {/* Ajoutez des options spécifiques aux fontaines à boire ici */}
      </select>

      <label>Commune :</label>
      <select name="commune" onChange={handleFontainesFilterChange}>
        <option value="">Tous</option>
        {/* Ajoutez des options spécifiques aux fontaines à boire ici */}
      </select>
    </div>
  );
}

export default Filters;
