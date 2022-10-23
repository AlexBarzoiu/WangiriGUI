import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function OperatorsTable() {
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
        <tr>
          <td>1</td>
          <td>Orange</td>
          <td>Romania</td>
          <td>+40</td>
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
        <tr>
          <td>2</td>
          <td>Orange</td>
          <td>Romania</td>
          <td>+40</td>
          <td>75</td>
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
      </tbody>
    </Table>
  );
}

export default OperatorsTable;