import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import 'bootstrap/dist/css/bootstrap.css';
import { ShimmerSectionHeader } from 'react-shimmer-effects';
import Card from 'react-bootstrap/Card';

const Effect = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // To get data using a RESTful API, we are going to use the Axios library.
  //Axios is a promise-based http client for the browser and Node.js.
  //We use it to make ajax calls to the server.
  // Axios provides the get() method for getting a resource, post() for creating it,
  //patch() for updating it, delete() for delete and head() for getting metadata regarding a resource.

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((response) => {
        setData(response.data.items);
        console.log('API WAS CALLED');
        setIsLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getData();
  };

  const listUsers = data.map((user) => (
    <Card key={user.id}>
      <a href={user.html_url}>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={user.avatar_url}
          alt="Generic placeholder"
        />{' '}
      </a>
      <Card.Body>
        <h5>Login: {user.login}</h5> <p>Id: {user.id}</p>
      </Card.Body>{' '}
    </Card>
  ));

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          {' '}
          <input
            type="text"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit">Search</button>{' '}
        </form>

        <h3>GitHub Users Results</h3>
        {isLoading && (
          <div>
            <ShimmerSectionHeader />
            <ShimmerSectionHeader center />
          </div>
        )}
        {listUsers}
      </div>
    </div>
  );
};

export default Effect;
