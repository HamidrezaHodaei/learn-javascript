const tasks = [
  {id:1, title:"home work", completed: false}, 
  {id:2 , title:"go gym", completed: true}   
] 

const tasksTitle = tasks.map((task) => task.title)

console.log(tasksTitle)
