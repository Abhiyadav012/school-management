import API from "../api/axios";

// Create Issue
export const createIssue = async (issueData) => {
  const response = await API.post("/issues", issueData);
  return response.data;
};

// Get All Issues
export const getAllIssues = async () => {
  const response = await API.get("/issues");
  return response.data;
};
export const updateIssueStatus = async (id, status) => {
  const response = await API.put(`/issues/${id}/status`, { status });
  return response.data;
};