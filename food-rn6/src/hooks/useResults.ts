import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default (): [(searchTerm: string) => Promise<void>, any[], string] => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm: string) => {
    try {
      const { data: { businesses }} = await yelp.get('/search', {
        params: {
          sort_by: 'best_match',
          limit: 50,
          searchTerm,
          location: 'san jose'
        }
      });

      console.log(businesses)
  
      setResults(businesses)
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // Initial search on page render
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
