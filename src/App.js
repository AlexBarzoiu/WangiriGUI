import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from './Components/Sidebar';
import { SidebarData } from "./Components/SidebarData"

export default function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />

        <div className='MainApp'>
          <Routes>
            {
              SidebarData.map((val, key) => {
                return (
                  <Route key={key} path={val.link} element={val.element} />
                )
              })
            }
          </Routes>
        </div>
      </Router>
    </div>
  );
}