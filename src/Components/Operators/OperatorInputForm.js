import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'


function OperatorInputForm() {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate('/operators');
  };

  return (
    <div className="MainApp">
      <>
        <Button variant="primary" type="submit" onClick={navigateBack}>
          Go Back
        </Button>
        <br />
        <br />

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Operator Name</Form.Label>
            <Form.Control type="text" placeholder="Enter operator name" />
            {/* <Form.Text className="text-muted">
        Bla Bla Bla
        </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Country Name</Form.Label>
            <Form.Control type="text" placeholder="Enter country name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Country Prefix</Form.Label>
            <Form.Control type="text" placeholder="Enter country prefix" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Operator Prefix</Form.Label>
            <Form.Control type="text" placeholder="Enter operator prefix" />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

          <Button variant="primary" type="submit">
            Add Operator
          </Button>
        </Form>
      </>
    </div>
  );
}

export default OperatorInputForm;