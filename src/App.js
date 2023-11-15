import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);


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
      <div>
        <h2>Données de la première API</h2>
        {data1 ? (
          <pre>{JSON.stringify(data1, null, 2)}</pre>
        ) : (
          <p>Chargement en cours...</p>
        )}
      </div>

      <div>
        <h2>Données de la deuxième API</h2>
        {data2 ? (
          <pre>{JSON.stringify(data2, null, 2)}</pre>
        ) : (
          <p>Chargement en cours...</p>
        )}
      </div>

      <div>
        <h2>Données de la troisième API</h2>
        {data3 ? (
          <pre>{JSON.stringify(data3, null, 2)}</pre>
        ) : (
          <p>Chargement en cours...</p>
        )}
      </div>
    </div>
  );
}

export default App;
