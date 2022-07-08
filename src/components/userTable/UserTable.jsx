import { carets, sort } from '../util/sort';
import "./userTable.css";
import { Link } from 'react-router-dom';

const UserTable = (props) => {

  return (
    <div className="table-box">
      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick={() => sort(0)}>Name {carets.down_active}</th>
            <th onClick={() => sort(1)}>Email {carets.down}</th>
            <th onClick={() => sort(2)}>Role {carets.down}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {props.users ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td><Link to='#'>delete</Link></td>
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

export default UserTable;
// table headers
// name
// email
// role