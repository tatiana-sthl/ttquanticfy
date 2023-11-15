import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filters';
import ResultsTable from './components/ResultsTable';


function App() {

  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  const handleEspacesVertsFilterChange = (filters) => {
    // Mettez à jour les filtres ou effectuez une action appropriée ici
    console.log('Filtres pour espaces verts :', filters);
  };

  const handleEquipementsFilterChange = (filters) => {
    // Mettez à jour les filtres ou effectuez une action appropriée ici
    console.log('Filtres pour équipements et activités :', filters);
  };

  const handleFontainesFilterChange = (filters) => {
    // Mettez à jour les filtres ou effectuez une action appropriée ici
    console.log('Filtres pour fontaines à boire :', filters);
  };

 useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-equipements-activites/records?limit=20');
        setData1(response.data);
      } catch (error) {
        console.error('Erreur API 1 :', error);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await axios.get('https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-espaces-verts-frais/records?limit=20');
        setData2(response.data);
      } catch (error) {
        console.error('Erreur API 2 :', error);
      }
    };

    const fetchData3 = async () => {
      try {
        const response = await axios.get('https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=20');
        setData3(response.data);
      } catch (error) {
        console.error('Erreur API 3 :', error);
      }
    };

    fetchData1();
    fetchData2();
    fetchData3();
  }, []);

  return (
    <div className="App">
      <Header />
      <Filters
      onEspacesVertsFilterChange={handleEspacesVertsFilterChange}
      onEquipementsFilterChange={handleEquipementsFilterChange}
      onFontainesFilterChange={handleFontainesFilterChange}
    />
    <ResultsTable data1={data1} data2={data2} data3={data3} />
      <Footer />
    </div>
  );
}

export default App;