import "./caseForm.css";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsers, getProjects, getCases } from '../../api/API';
import { priorities, departments, categories } from "../util/formSelections";


const CaseFormEdit = () => {
  const {id} = useParams();
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [caseData, setCaseData] = useState(null);
  
  useEffect(() => {
    setCaseData(getCases().filter(item => item.id == id)[0]);
  })

  useEffect(() => {
    setUsers(getUsers());
    setProjects(getProjects());
  },[])

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
          <h1 className="h2" >Edit Case</h1>
      </div>
      <div id="case-form-box">
        <form className="row g-3">
          {/* Title field */}
          <div className="col-md-8">
            <label for="title" className="form-label">Title:</label>
              <input id="title" name="title" type="text" className="form-control" value={caseData ? caseData.title : ""} required/>
          </div>
          {/* Priority field */}
          <div className="col-md-4">
            <label for="priority" className="form-label">Priority:</label>
              <select id="priority" name="priority" className="form-select" required>
                {/* display selected option */}
                {priorities.map(priority => (
                  caseData && (priority == caseData.priority) ? <option selected>{priority}</option> : <option value={priority}>{priority}</option>
                ))}
              </select>
          </div>
          {/* Description field */}
          <div className="col-12">
            <label for="description" className="form-label">Description:</label>
            <textarea id="description" name="description" className="form-control" value={caseData ? caseData.description : ""} rows="2" required/>
          </div>
          {/* Assign to field */}
          <fieldset className="col-md-6">
            <label for="assignTo" className="form-label">Assign To:</label>
              <select id="assignTo" name="assigned_to_id" className="form-select">
                {/* display selected option if on edit */}
                {users.map(user => (
                  caseData && (user.id == caseData.assigned_to_id) ? <option selected value={user.name}>{user.name}</option> : <option value={user.name}>{user.name}</option>
                ))}
              </select>
            </fieldset>
            {/* Department field */}
            <div className="col-md-6">
              <label for="department" className="form-label">Department:</label>
                <select id="department" name="department" className="form-select" required>
                  {/* display selected option if on edit */}
                  {departments.map(department => (
                    caseData && (department == caseData.department) ? <option selected value={department}>{department}</option> : <option value={department}>{department}</option>
                  ))}
                </select>
            </div>
            {/* Catgeory field */}
            <div className="col-md-6">
              <label for="category" className="form-label">Category:</label>
                <select id="category" name="category" className="form-select" required>
                  {/* display selected option if on edit */}
                  {categories.map(category => (
                    caseData && (category == caseData.category) ? <option selected value={category}>{category}</option> : <option value={category}>{category}</option>
                  ))}
                </select>
            </div>
            {/* Project field */}
            <div className="col-md-6">
              <label for="project" className="form-label">Project:</label>
                <select id="project" name="project" className="form-select" required>
                  {/* display selected option if on edit */}
                  {projects.map(project => (
                    caseData && (project.id == caseData.project_id) ? <option selected value={project.title}>{project.title}</option> : <option value={project.title}>{project.title}</option>
                  ))}
                </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn">Submit</button>
              
            </div>
        </form>
      </div>
    </>
  );
}

export default CaseFormEdit;