import "core-js/modules/es.promise.js";
const baseUrl = 'https://614086504a700c0017b0cd68.mockapi.io/api/v1/tasks';
export const getTasksList = () => {
  return fetch(baseUrl).then(response => response.json());
};
export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};
export const updateTask = (taskId, updateTaskData) => {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updateTaskData)
  });
};
export const deleteTask = taskId => {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  });
};