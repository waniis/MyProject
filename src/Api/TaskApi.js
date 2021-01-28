import axios from 'axios';

const url = ""
export async function getTasks() {
  const response = await axios.get("https://600e7b0e3bb1d100179df4d5.mockapi.io/Tasks");
  return response;
}

export async function getOneTask(id) {
  const response = await axios.get("http://127.0.0.1:8080/tasks/"+id);
  return response;
}

export async function deleteOneTask(id) {
  const response = await axios.delete("http://127.0.0.1:8080/tasks/"+id);
  return response;
}

export async function updateTask(id, values) {
  const response = await axios.put("http://127.0.0.1:8080/tasks/update/"+id, values);
  return response;
}

export async function addTask(values) {
  const response = await axios.post("http://localhost:8080/tasks/add", values);
  return response;}