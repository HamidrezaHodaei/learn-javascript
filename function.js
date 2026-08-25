const tasks = [ {
title: 'shopping', completed: true
}]
const addTask = (title) => {
    tasks.push({title, completed: false})
}
addTask('Reading')
console.log(tasks)
