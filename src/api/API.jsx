// import mock data
import cases from '../mock/cases.json';
import users from '../mock/users.json';
import histories from '../mock/histories.json';
import projects from '../mock/projects.json';

// replace functions with async fetches to database
export const getCases = () => {
  // request 
  // response
  const json = cases.cases // response.json()
  return json;
}
export const updateCase = (caseId, formObj) => {
  const currCase = cases.cases.filter(item => item.id == caseId)[0];
  cases.cases.map(item => item !== currCase);
  const updatedCase = JSON.stringify(formObj);
  cases.cases.push(updatedCase);
  console.log(`Updated - ${updatedCase}`);
  return;
}
export const getUsers = () => {
  // request 
  // response
  const json = users.users // response.json()
  return json;
}
export const getHistory = (caseId) => {
  // request 
  // response
  const json = histories.histories // response.json()
  return json.filter(history => history.case_id == caseId);
}
export const getProjects = () => {
  // request 
  // response
  const json = projects.projects // response.json()
  return json;
}

export const getPk = (dataName) => {
  let data;
  if (dataName == "cases") {
    data = cases.cases;
  } else if (dataName == "histories") {
    data = histories.histories;
  } else if (dataName == "projects") {
    data = projects.projects;
  } else if (dataName == "users") {
    data = users.users;
  } else {
    data = {};
  }
  return data.length + 1;
}