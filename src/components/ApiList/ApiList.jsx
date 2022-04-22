import { useState, useEffect, useParams } from "react";
import { Link } from 'react-router-dom';

const ApiList = () => {

    const [data, setData] = useState([0]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.json())
      .then((actualData) => {

        setData(actualData.results);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="ApiList">
    
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {
          data.map((item,i) => {
            return <Link to={`/select_pokemon/${i}/${item.name}`}>{item.name}<br /></Link>
          })
        }

        
      </ul>
    </div>
  );
}




export default ApiList;