import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DetectionRuleInputForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Operator Id</Form.Label>
        <Form.Control type="text" placeholder="Enter operator id" />
        {/* <Form.Text className="text-muted">
        Bla Bla Bla
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Period of time</Form.Label>
        <Form.Control type="text" placeholder="Enter country name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number of events</Form.Label>
        <Form.Control type="text" placeholder="Enter country prefix" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number of distinct destinations</Form.Label>
        <Form.Control type="text" placeholder="Enter operator prefix" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Dispersion</Form.Label>
        <Form.Control type="text" placeholder="Enter operator prefix" />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Add Operator
      </Button>
    </Form>
  );
}

export default DetectionRuleInputForm;