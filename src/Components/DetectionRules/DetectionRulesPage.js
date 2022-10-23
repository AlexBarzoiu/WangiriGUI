import React from "react";
import "../../App.css";
import DetectionRuleInputForm from "./DetectionRuleInputForm.js";
import DetectionRulesTable from "./DetectionRulesTable.js";

const DetectionRulesPage = props => {
  return (
    <div className="MainApp">
        <>
          <DetectionRuleInputForm></DetectionRuleInputForm>
          <hr></hr>
          <DetectionRulesTable></DetectionRulesTable>
        </>
    </div>
  );
}

export default DetectionRulesPage;