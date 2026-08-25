let tasks  = [{title:'shopping', completed: true}
    ,{title:'cleaning', completed: false}
    ,{title:'cooking', completed: true}
]
for(let task of tasks){
    if (task.completed){
        console.log(`Task:${task.title} completed`)
    }else{
        console.log(`Task:${task.title} not completed`)
    }
}
