import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import components
import NavBar from '../components/navBar/NavBar';
import SideBar from '../components/sideBar/SideBar';
// import containers
import Dashboard from './Dashboard';
import Cases from './Cases';
import Projects from './Projects';
import Users from './Users';
import Profile from './Profile';
// import modules
import CaseTable from "../components/caseTable/CaseTable";
import CaseForm from "../components/caseForm/CaseForm";
import CaseFormEdit from "../components/caseForm/CaseFormEdit";
import CaseDetails from "../components/caseDetails/CaseDetails";


function App() {
  return (
    <Router>
      <div>
        < NavBar />
        <div className="container-fluid">
          <div className="row">
            < SideBar />
              <Routes>
                <Route path="dashboard" element={<Dashboard />}/>
                <Route path="users" element={<Users />}/>
                <Route path="projects" element={<Projects />}/>
                <Route path="cases" element={<Cases />}>
                  <Route path="all" element={<CaseTable />}/>
                  <Route path="new" element={<CaseForm />}/>
                  <Route path=":id" element={<CaseDetails />}/>
                  <Route path=":id/edit" element={<CaseFormEdit />}/>
                </Route>
                <Route path="profile" element={<Profile />}/>
              </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
