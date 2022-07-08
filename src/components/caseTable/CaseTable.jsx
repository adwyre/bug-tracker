import React, { useEffect, useState } from 'react';
import { getUsers, getCases } from '../../api/API';
import { carets, sort } from '../util/sort';
import { Link } from 'react-router-dom';
import './caseTable.css'

const CaseTable = () => {
  const [cases, setCases] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setCases(getCases());
    setUsers(getUsers());
  },[])

  const displayModal = (e) => {
    const target_id = e.target.parentNode.parentNode.getElementsByTagName("td")[0].innerHTML;
    document.getElementsByName(`delete-${target_id}`)[0].style.display = "block"
  }

  const hideModal = (e) => {
    e.target.parentNode.parentNode.parentNode.parentNode.style.display = "none";
  }

  
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
        <h1 className="h2">Cases</h1>
          <Link to="../new"><button className="btn">Create New</button></Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick={() => sort(0)}>Id {carets.down_active}</th>
            <th onClick={() => sort(1)}>Title {carets.down}</th>
            <th onClick={() => sort(2)}>Priority {carets.down}</th>
            <th onClick={() => sort(3)}>Assigned to {carets.down}</th>
            <th onClick={() => sort(4)}>Department {carets.down}</th>
            <th onClick={() => sort(5)}>Category {carets.down}</th>
            <th onClick={() => sort(6)}>Status {carets.down}</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {cases ? (
          cases.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><Link to={`../${item.id}`}>{item.title}</Link></td>
              <td>{item.priority}</td>
              <td>{item.assigned_to_id ? (users.filter(user => user.id === item.assigned_to_id)[0].name) : "----------"}</td>
              <td>{item.department}</td>
              <td>{item.category}</td>
              <td>{item.status}</td>
              <td><Link to={`../${item.id}/edit`}>edit</Link></td>
              <td onClick={displayModal}><Link to='#' >delete</Link></td>
            </tr>
          ))) : (
            <tr>
              <td>loading</td>
            </tr>
          )
        }
        </tbody>
      </table>
      {cases.map(item => (
        <div className="modal" name={`delete-${item.id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete</h5>
                <button onClick={hideModal} type="button" className="btn-close"></button>
              </div>
              <div className="modal-body">
                {`Are you sure you want to delete '${item.title}'?`}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CaseTable;
// table headers
// details - route to details
// id
// title
// priority
// assigned to - not visible on smaller screen
// department - not visible on smaller screen
// category - not visible on smaller screen
// status
// edit - route to update form
// delete - deletion alert re-route to table- super user only