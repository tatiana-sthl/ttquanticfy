import React, { useState } from 'react';

const Filters = ({ onTypeChange, onPayantChange }) => {
  const [typeFilter, setTypeFilter] = useState("");
  const [payantFilter, setPayantFilter] = useState("");

  const types = ["Type1", "Type2"]; // Remplacez par vos types réels

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setTypeFilter(value);
    onTypeChange(value);
  };

  const handlePayantChange = (event) => {
    const { checked } = event.target;
    setPayantFilter(checked ? "Oui" : "Non");
    onPayantChange(checked ? "Oui" : "Non");
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
      <div>
        <label>
          <input
            type="checkbox"
            name="payant"
            checked={payantFilter === "Oui"}
            onChange={handlePayantChange}
          />
          Oui
        </label>
        <label>
          <input
            type="checkbox"
            name="payant"
            checked={payantFilter === "Non"}
            onChange={handlePayantChange}
          />
          Non
        </label>
      </div>
    </div>
  );
}

export default Filters;
