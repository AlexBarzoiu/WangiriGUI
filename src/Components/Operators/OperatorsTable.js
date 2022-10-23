import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { useState, useEffect } from 'react';
import axios from 'axios';

function OperatorsTable() {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => {
        setOperators(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var renderOperators = operators.map(item =>
    <tr>
      <td>{item.id}</td>
      <td>{item.userId}</td>
      <td>{item.title}</td>
      <td>{item.body}</td>
      <td>74</td>
      <td>
        <Button variant="secondary">
          Modify
        </Button>
        {" "}
        <Button variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  )

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Operator Name</th>
          <th>Country Name</th>
          <th>Country Prefix</th>
          <th>Operator Prefix</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody> 
        {renderOperators}
      </tbody>
    </Table>
  );
}

export default OperatorsTable;