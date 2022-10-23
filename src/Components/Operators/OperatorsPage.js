import React from "react";
import "../../App.css";

import Button from 'react-bootstrap/Button';
import OperatorsTable from "./OperatorsTable.js";
import { useNavigate } from 'react-router-dom'

const OperatorsPage = props => {
  const navigate = useNavigate();
  const navigateToAdd = () => {
    navigate('/operators/add');
  };

  return (
    <div className="MainApp">
      <>
        <Button variant="primary" type="submit" onClick={navigateToAdd}>
          Add Operator
        </Button>
        <br/>
        <br/>
        <OperatorsTable></OperatorsTable>
      </>
    </div>
  );
}

export default OperatorsPage;