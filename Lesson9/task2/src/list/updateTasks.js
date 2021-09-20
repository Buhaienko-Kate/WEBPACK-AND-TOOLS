import { renderTasks } from './renderer';
import { setItem, getItem } from './storage';
import { updateTask, getTasksList } from './tasksGateWay';

export const updatedTasks = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }
  const checkedElem = event.target;

  const tasksList = getItem('tasksList');
  const taskId = checkedElem.dataset.id;
  const { text } = tasksList.find((task) => task.id === taskId);

  const updatedTask = {
    text,
    done: checkedElem.checked,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem(
        'tasksList',
        newTasksList,
      ); /** полученные данные с сервера записываем в LocalStorage */
      renderTasks();
    });
};

// 1.Prepare data
// 2. update data to db
// 3.Read new data from server
// 4. Save new data to front-end storage
// 5. Update
