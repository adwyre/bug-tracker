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
  return json.filter(history => history.case_id == caseId)[0];
}
export const getProjects = () => {
  // request 
  // response
  const json = projects.projects // response.json()
  return json;
}