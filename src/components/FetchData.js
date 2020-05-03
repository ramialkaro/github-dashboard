import { useState, useEffect } from 'react';

import axios from 'axios';

export default function FetchData (url){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
   /*  axios.get('https://api.github.com/users/ramialkaro/repos')
    .then( res =>setData(res.data)) */
    useEffect(() => {

        async function fetchData() {
          setLoading(true);
          setError();
          const data = await  axios.get(url)
            .then(res => res.data)
            .catch(err => {
              setError(err);
            });
          setData(data);
          setLoading(false);
        }
        fetchData();
      }, [url]);
      return {
        data,
        loading,
        error,
      };
    }
