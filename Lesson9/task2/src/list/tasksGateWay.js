const baseUrl = 'https://614086504a700c0017b0cd68.mockapi.io/api/v1/tasks';

export const getTasksList = () => fetch(baseUrl).then((response) => response.json());

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updateTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updateTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
