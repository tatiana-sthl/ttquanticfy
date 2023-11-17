import React, { useState, useEffect, useRef } from 'react';

const Filters = ({ onFilterChange, data }) => {
  const filterValuesRef = useRef({
    nom: '',
    type: '',
    payant: false,
    arrondissement: '',
  });

  const [typeOptions, setTypeOptions] = useState([]);
  const [filterValues, setFilterValues] = useState(filterValuesRef.current);

  useEffect(() => {
    // Définir les options de type dans les filtres une fois que le jeu de données est chargé
    setTypeOptions([...new Set(data.map(item => item.type))]);
  }, [data]);

  useEffect(() => {
    // Mettre à jour les filtres uniquement si les valeurs ont changé
    if (filterValuesRef.current !== filterValues) {
      onFilterChange(filterValues);
      filterValuesRef.current = filterValues;
    }
  }, [onFilterChange, filterValues]);

  // Générer la liste des arrondissements de 75001 à 75020
  const arrondissementOptions = Array.from({ length: 20 }, (_, index) => `750${index + 1 > 9 ? index + 1 : '0' + (index + 1)}`);

  const handleInputChange = (field, value) => {
    setFilterValues(prevValues => ({ ...prevValues, [field]: value }));
  };


  return (
    <div>
      <label>
        Nom:
        <input
          type="text"
          value={filterValues.nom}
          onChange={e => handleInputChange('nom', e.target.value)}
        />
      </label>

      <label>
        Type:
        <select
          value={filterValues.type}
          onChange={e => handleInputChange('type', e.target.value)}
        >
          <option value="">Tous les types</option>
          {typeOptions.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>


      <label>
        Payant:
        <div>
            <input
                type="radio"
                id="payantTous"
                name="payant"
                value={null}
                checked={filterValues.payant === null}
                onChange={() => handleInputChange('payant', null)}
            />
            <label htmlFor="payantTous">Tous</label>
        </div>

        <div>
            <input
            type="radio"
            id="payantOui"
            name="payant"
            value="Oui"
            checked={filterValues.payant === 'Oui'}
            onChange={() => handleInputChange('payant', 'Oui')}
            />
            <label htmlFor="payantOui">Oui</label>
        </div>
        <div>
            <input
            type="radio"
            id="payantNon"
            name="payant"
            value="Non"
            checked={filterValues.payant === 'Non'}
            onChange={() => handleInputChange('payant', 'Non')}
            />
            <label htmlFor="payantNon">Non</label>
        </div>
        </label>


      <label>
        Arrondissement:
        <select
          value={filterValues.arrondissement}
          onChange={e => handleInputChange('arrondissement', e.target.value)}
        >
          <option value="">Tous les arrondissements</option>
          {arrondissementOptions.map(arr => (
            <option key={arr} value={arr}>
              {arr}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Filters;
