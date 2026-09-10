let tasks = [
    {id:1,title:"read book",completed:false}, 
    {id:2,title:"buy some thing",completed:true}

]


const completedTasks = tasks.filter((task) => task.completed);
console.log(completedTasks);
const pendingTasks = tasks.filter((task)=> !task.completed); // or const pendingTasks = tasks.filter((task)=> task.completed === false)
console.log(pendingTasks) 
