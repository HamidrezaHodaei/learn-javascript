let tasks = [
  {id: 1, title: "read book", completed: false},
  {id: 2, title: "write code", completed: true},
]

const addTask = (title) => {
  tasks.push({id: tasks.length + 1, title, completed: false})
}

const toggleComplete = (id) => {
  for (const task of tasks) {
    if (task.id === id) {
      task.completed = !task.completed
    }
  }
}

const deleteTask = (id) => {
  tasks = tasks.filter(task => task.id !== id)
}
addTask('cooking')
deleteTask(1)
console.log(tasks)
