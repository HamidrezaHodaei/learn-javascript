const tasks = [ 
    {id: 1, title: "read a book", completed: false},
    {id: 2, title: "write a blog post", completed: false}
]
const toggleComplete =(id) => {
    for (const task of tasks){ 
        if (task.id === id){
            task.completed = !task.completed;
        }
    }
}
toggleComplete(1)
console.log(tasks)
