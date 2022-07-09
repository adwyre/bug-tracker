import "./caseForm.css";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsers, getProjects, getCases, getPk } from '../../api/API';
import { priorities, departments, categories } from "../util/formSelections";


const CaseForm = () => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const {id} = useParams();
  const [newCase, setNewCase] = useState({
    id: getPk("cases"),
    priority: "",
    category: "",
    department: "",
    assigned_to_id: "",
    status: "active",
    project_id: "",
    title: "",
    description: "",
    submitted_by_id: ""
  });

  useEffect(() => {
    setUsers(getUsers());
    setProjects(getProjects());
  },[id])

  const handleChange = (e) =>{
    newCase[e.target.name] = e.target.value;
    console.log(newCase)
  }

  const handleSubmit = (e) => {

  }


  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
          <h1 className="h2">New Case</h1>
      </div>
      <div id="case-form-box">
        <form className="row g-3">
          {/* Title field */}
          <div className="col-md-8">
            <label for="title" className="form-label">Title:</label>
              <input onChange={handleChange} id="title" name="title" type="text" className="form-control" required/>
          </div>
          {/* Priority field */}
          <div className="col-md-4">
            <label for="priority" className="form-label">Priority:</label>
              <select onChange={handleChange} id="priority" name="priority" className="form-select" required>
                <option selected>----------</option>
                {priorities.map(priority => (
                  <option value={priority}>{priority}</option>
                ))}
              </select>
          </div>
          {/* Description field */}
          <div className="col-12">
            <label for="description" className="form-label">Description:</label>
            <textarea onChange={handleChange} id="description" name="description" className="form-control" rows="2" required/>
          </div>
          {/* Assign to field */}
          <fieldset className="col-md-6" disabled>
            <label for="assignTo" className="form-label">Assign To:</label>
              <select onChange={handleChange} id="assignTo" name="assigned_to_id" className="form-select">
                <option selected>----------</option>
                {users.map(user => (
                  <option value={user.name}>{user.name}</option>
                ))}
              </select>
            </fieldset>
            {/* Department field */}
            <div className="col-md-6">
              <label for="department" className="form-label">Department:</label>
                <select onChange={handleChange} id="department" name="department" className="form-select" required>
                  <option selected>----------</option>
                  {departments.map(department => (
                    <option value={department}>{department}</option>
                  ))}
                </select>
            </div>
            {/* Catgeory field */}
            <div className="col-md-6">
              <label for="category" className="form-label">Category:</label>
                <select onChange={handleChange} id="category" name="category" className="form-select" required>
                  <option selected>----------</option>
                  {categories.map(category => (
                    <option value={category}>{category}</option>
                  ))}
                </select>
            </div>
            {/* Project field */}
            <div className="col-md-6">
              <label for="project" className="form-label">Project:</label>
                <select onChange={handleChange} id="project" name="project" className="form-select" required>
                  <option selected>----------</option>
                  {projects.map(project => (
                    <option value={project.title}>{project.title}</option>
                  ))}
                </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn">Create Case</button>
            </div>
        </form>
      </div>
    </>
  );
}

export default CaseForm;
// id
// title
// priority
// status - (close) super user only
// description
// assigned to - super user only
// area
// category
// project
// history

// submit button
