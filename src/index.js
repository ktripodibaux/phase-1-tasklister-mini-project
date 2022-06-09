document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.elements['new-task-description'].value;
    createToDo(input);
  })
})

function createToDo(todo) {
  const task = todo;
  const li= document.createElement('li');
  const button = document.createElement('button');
  const ul = document.getElementById('tasks');
  li.textContent = task;
  button.classList.add('delete');
  button.textContent = 'X'
  button.onclick = function () {this.parentNode.remove()};
  li.append(button);
  ul.append(li);
}
