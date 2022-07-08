import "./userForm.css";
import {roles} from "../util/formSelections"

const UserForm = () => {
  
  return (
    <div id="user-form-box">
      <form>
        <div className="row mb-3">
          <label for="name">Name:</label>
          <div className="col-sm-10">
            <input id="name" name="name" type="text" className="form-control" value="" required/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="email">Email:</label>
          <div className="col-sm-10">
            <input id="email" name="email" type="text" className="form-control" value="" required/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="role">Role:</label>
          <div className="col-sm-10">
            <select id="role" name="role" className="form-select" required>
              <option selected>----------</option>
              {roles.map(role => (
                <option value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="btn">Add User</button>
      </form>
    </div>
  );
}

export default UserForm;
// name
// email
// role - super user only
// projects - super user only
// submit button