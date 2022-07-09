import {getHistory} from '../../api/API' 
import React, { useEffect, useState } from 'react';
import './historyTable.css'
import { sort } from '../util/sort';

const HistoryTable = (props) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getHistory(props.id));
  },[])

  return (
    <div className="table-box history">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Time</th>
            <th>Status</th>
            <th>Updated By</th>
          </tr>
        </thead>
        <tbody>
        {history[0] ? (
          history.map(update => (
            <tr key={update.id}>
              <td>{update.time}</td>
              <td>{update.status}</td>
              <td>{props.users.filter(user => user.id === update.user_id)[0].name}</td>
            </tr>
          ))) : (
            <tr>
              <td>loading</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;
// table headers
// time
// status
// user