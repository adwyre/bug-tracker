import "./caseDetails.css";
import React, { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { getCases, getUsers } from '../../api/API';
import { priorities, departments, categories } from "../util/formSelections";
import HistoryTable from "../historyTable/HistoryTable"


const CaseDetails = () => {
  const {id} = useParams();
  const [caseData, setCaseData] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    setCaseData(getCases().filter(item => item.id == id)[0]);
    setUsers(getUsers());
  },[id])

  const displayModal = (e) => {
    document.getElementsByName(`delete-${id}`)[0].style.display = "block"
  }

  const hideModal = (e) => {
    e.target.parentNode.parentNode.parentNode.parentNode.style.display = "none";
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
          <h1 className="h2">Case Details</h1>
          <div className="details-title-box">
            <div className="col-5">
              <Link to={`../${id}/edit`}><button className="btn block">Update</button></Link>
            </div>
            <div className="col-5">
              <Link to=""><button onClick={displayModal} className="btn block">Delete</button></Link>
            </div>
          </div>
      </div>
      <div className="case-details">
        <h2 className="col-6">{caseData.title}</h2>
        <div className="details-main">
          <p className="small"><strong>Priority: </strong>{caseData.priority}</p>
          <p className="small"><strong>Case #: </strong>{caseData.id}</p>
          <p ><strong>Status: </strong>{caseData.status}</p>
          <p><strong>Description: </strong>{caseData.description}</p>
          <p><strong>Assigned to: </strong>{caseData.assigned_to_id ? (users.filter(user => user.id === caseData.assigned_to_id)[0].name): "n/a"}</p>
          <p><strong>Department: </strong>{caseData.department}</p>
          <p><strong>Category: </strong>{caseData.category}</p>
          
        </div>
        <div className="resolve-box">
          <div className="col-4">
            <button className="btn block resolve">Resolve</button>
          </div>
          <div className="col-4">
            <button className="btn block resolve">Close</button>
          </div>
        </div>
        <h3>History: </h3>
        <HistoryTable id={id} users={users}/>
      </div>
      <div className="modal" name={`delete-${caseData.id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete</h5>
                <button onClick={hideModal} type="button" className="btn-close"></button>
              </div>
              <div className="modal-body">
                {`Are you sure you want to delete '${caseData.title}'?`}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CaseDetails
// title
// edit button
// delete button
// priority
// case #
// status
// description
// assigned to
// area
// category
// project
// history

// resolve button
// close button- super user only