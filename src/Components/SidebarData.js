import React from "react";
import "../App.css";
  
import OperatorsPage from './Operators/OperatorsPage';
import OperatorInputForm from "./Operators/OperatorInputForm.js";
import DetectionRulesPage from './DetectionRules/DetectionRulesPage';

export const SidebarData = [
    {
        title: "Home",
        link: "/",
        element: <Home />,
        visible: true,
    },
    {
        title: "Operator Prefixes",
        link: "/operators",
        element: <OperatorsPage />,
        visible: true,
    },
    {
        title: "Operator Prefixes Add",
        link: "/operators/add",
        element: <OperatorInputForm />,
        visible: false,
    },
    {
        title: "Detection Rules",
        link: "/detection-rules",
        element: <DetectionRulesPage />,
        visible: true,
    },
];

function Home() {
    return <h2>Home</h2>;
  }
