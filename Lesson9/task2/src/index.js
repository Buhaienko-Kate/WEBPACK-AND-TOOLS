import { renderTasks } from './list/renderer';
import { onCreateTask, listElem } from './list/createTask';
import { updatedTasks } from './list/updateTasks';
import { getItem, setItem } from './list/storage';
import { tasks } from './list/tasks';
import { getTasksList } from './list/tasksGateWay';
import { onDeleteTask } from './list/deleteTasks';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
});

const crtBtnElem = document.querySelector('.create-task-btn');

crtBtnElem.addEventListener('click', onCreateTask);
listElem.addEventListener('click', updatedTasks);
listElem.addEventListener('click', onDeleteTask);

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
  setItem('tasksList', getItem('tasksList'));
};

window.addEventListener('storage', onStorageChange);

// 1.get data from server
// 2.save data to front-end storage
