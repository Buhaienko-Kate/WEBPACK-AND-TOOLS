import { renderTasks } from './renderer';
import { getTasksList, deleteTask } from './tasksGateWay';
import { setItem } from './storage';

export function onDeleteTask(event) {
  const isDeleteBtn = event.target.classList.contains('list__item-delete-btn');

  if (!isDeleteBtn) {
    return;
  }
  //   console.log(isDeleteBtn);
  const nearestInputId = event.target.parentNode.firstElementChild.dataset.id;
  //   console.log(nearestInputId);
  deleteTask(nearestInputId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem(
        'tasksList',
        newTasksList,
      ); /** полученные данные с сервера записываем в LocalStorage */
      renderTasks();
    });
  // .then(() => {
  //   renderTasks();
  // });
}
