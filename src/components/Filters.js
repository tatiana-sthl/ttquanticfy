// Filters.js
import React, { useState } from 'react';

const Filters = ({ onTypeChange, onPayantChange }) => {
  const [typeFilter, setTypeFilter] = useState("");
  const [payantFilter, setPayantFilter] = useState("");

  const types = ["Type1", "Type2"]; // Remplacez par vos types réels
  const payants = ["Oui", "Non"]; // Remplacez par vos valeurs réelles

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setTypeFilter(value);
    onTypeChange(value);
  };

  const handlePayantChange = (event) => {
    const { value } = event.target;
    setPayantFilter(value);
    onPayantChange(value);
  };

  return (
    <div>
      <h2>Filtres</h2>

      <label>Type :</label>
      <select name="type" onChange={handleTypeChange}>
        <option value="">Tous</option>
        {types.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>

      <label>Payant :</label>
      <select name="payant" onChange={handlePayantChange}>
        <option value="">Tous</option>
        {payants.map((payant, index) => (
          <option key={index} value={payant}>{payant}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
