// api.js
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-equipements-activites/records?limit=20');
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des données :', error);
  }
};

export default fetchData;
