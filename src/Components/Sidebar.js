import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData.js"

import {
    Link
} from "react-router-dom";

const Sidebar = props => {
    return (
        <div className="Sidebar">
            <div className="SidebarTitle">
                <p>Wanghiri GUI</p>
            </div>
            <ul className="SidebarList">
                {
                    SidebarData.map((val, key) => {
                        return (
                            <div key={key}>
                                {
                                    val.visible === true &&
                                    <li className="row">
                                        <Link to={val.link} className="linkTo">
                                            <div className="title">
                                                {val.title}
                                            </div>
                                        </Link>
                                    </li>
                                }
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Sidebar